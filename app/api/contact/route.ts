import { NextResponse } from "next/server";

/**
 * POST "/contact"
 *
 * @param {Object} request - The request object.
 * @param {Object} req.body - The JSON payload.
 * @param {String} request.body.Name - The contact name.
 * @param {String} request.body.Email - The contact email.
 * @param {String} request.body.Message - The contact message.
 * @returns {NextResponse} The response to the request.
 * @throws {error_type} DESCRIPTION
 */
export async function POST(request: Request) {
  return NextResponse.json({ error: "Not implemented." }, { status: 404 });
}
