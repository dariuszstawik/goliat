import { EmailTemplate } from "@/app/[locale]/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { userName, email, phone, message } = body;
    const data = await resend.emails.send({
      from: "Goliat <goliat@goliat.pl>",
      to: ["goliat@goliat.pl"],
      subject: "Wiadomość z formularza",
      react: EmailTemplate({
        userName,
        email,
        phone,
        message,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
