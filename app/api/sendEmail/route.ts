import EmailTemplate from '@/emails/email-template';
import { render } from '@react-email/components';
import nodemailer from 'nodemailer';

const transporter = await nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    console.log(name, email, message);

    await transporter.sendMail({
      from: `"Apex Nerd Labs" <${process.env.EMAIL_USER}>`,
      to: [process.env.EMAIL_USER || ""],
      subject: "Form from Apex Nerd Labs",
      html: await render(EmailTemplate({ name, email, problem: message }))
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}
