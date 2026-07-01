import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json();
  const { from_name, reply_to, service, message } = body as {
    from_name?: string;
    reply_to?: string;
    service?: string;
    message?: string;
  };

  if (
    !from_name?.trim() ||
    !reply_to?.trim() ||
    !EMAIL_REGEX.test(reply_to.trim()) ||
    !message?.trim()
  ) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Firefly Creative Co. <contact@fireflycreativeco.com>",
    to: "sunnydatko@gmail.com",
    replyTo: reply_to.trim(),
    subject: `New inquiry from ${from_name.trim()}`,
    text: [
      `Name: ${from_name.trim()}`,
      `Email: ${reply_to.trim()}`,
      service?.trim() ? `Service: ${service.trim()}` : null,
      "",
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return NextResponse.json({ ok: true });
}
