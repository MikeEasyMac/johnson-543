import { NextApiRequest, NextApiResponse } from "next";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ResponseBody = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body as ContactPayload;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (message.trim().length < 20) {
    return res.status(400).json({ message: "Message must be at least 20 characters" });
  }

  // In production: forward to an email service (e.g., Resend, SendGrid, Nodemailer)
  console.log("[Contact Form]", { name, email, subject, message });

  return res.status(200).json({ message: "Message received successfully" });
}
