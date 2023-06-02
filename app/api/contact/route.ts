import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

import { contactSchema } from "@/lib/schema";

/**
 * POST "/contact"
 *
 * @param {Object} request - The request object.
 * @param {Object} req.body - The JSON payload.
 * @param {String} request.body.Name - The contact name.
 * @param {String} request.body.Email - The contact email.
 * @param {String} request.body.Message - The contact message.
 * @returns {NextResponse} The response to the request.
 */
export async function POST(request: Request) {
  const bodyData = await request.json();

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
      console.log("[AWS-SES Error] " + err);
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
