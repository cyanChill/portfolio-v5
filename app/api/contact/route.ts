import { type NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import { contactSchema } from "@/lib/schema";
import { getErrMSG } from "@/lib/errors";

// Create a new ratelimiter, that allows 3 requests per day
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 d"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});

/**
 * POST "/contact"
 *
 * @param {NextRequest} request - The request object.
 * @param {Object} req.body - The JSON payload.
 * @param {String} request.body.Name - The contact name.
 * @param {String} request.body.Email - The contact email.
 * @param {String} request.body.Message - The contact message.
 * @returns {NextResponse} The response to the request.
 */
export async function POST(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";

  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json(
      { message: "You can only send 3 contact messages a day." },
      { status: 429 }
    );
  }

  const bodyData: { [x: string]: any } = await request.json();

  // Validate input data
  const schemaRes = contactSchema.safeParse(bodyData);
  if (!schemaRes.success) {
    const { errors } = schemaRes.error;
    return NextResponse.json(
      { message: "Invalid request body values.", errors },
      { status: 400 }
    );
  }

  const { Name, Email, Message } = schemaRes.data;

  if (process.env.NODE_ENV === "production") {
    try {
      // Prevent injection
      const message = `From: ${Name} (${Email})\n\n${Message}`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      const command = new SendEmailCommand({
        Source: "anthonyliang9@gmail.com",
        Destination: { ToAddresses: ["anthonyliang9@gmail.com"] },
        Message: {
          Subject: { Data: `Portfolio Contact Message : ${Email}` },
          Body: { Text: { Data: message } },
        },
      });
      await new SESClient({ region: "us-east-2" }).send(command);
    } catch (err) {
      console.log("[AWS-SES Error] " + getErrMSG(err));
      return NextResponse.json(
        { message: "Failed to send message." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { message: "Successfully sent message." },
    { status: 200 }
  );
}
