'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  try {
    const { name, email, subject, message } = formData;

    const data = await resend.emails.send({
      from: 'NextCodeHub Contact Form <onboarding@resend.dev>',
      to: 'rehmanattock30@gmail.com',
      reply_to: email,
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h2>New Message from NextCodeHub Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}
