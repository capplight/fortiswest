"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "General Inquiry").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Fortis West Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? "info@fortiswest.kz",
      replyTo: email,
      subject: `[Website] ${subject} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#333">
          <h2 style="color:#F5A623;border-bottom:2px solid #F5A623;padding-bottom:8px">
            New Inquiry — Fortis West Website
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#666;width:100px">Name</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#666">Phone</td><td style="padding:6px 0">${phone || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Subject</td><td style="padding:6px 0">${subject}</td></tr>
          </table>
          <div style="margin-top:20px;background:#f9f9f9;padding:16px;border-left:4px solid #F5A623">
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Contact form email error:", error);
      return { status: "error", message: "Failed to send your message. Please email us directly at info@fortiswest.kz." };
    }

    return { status: "success", message: "Your message has been sent. We will be in touch shortly." };
  } catch (err) {
    console.error("Contact form email error:", err);
    return { status: "error", message: "Failed to send your message. Please email us directly at info@fortiswest.kz." };
  }
}
