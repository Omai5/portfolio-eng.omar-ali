import { Resend } from "resend";
import { config } from "@/data/config";

// Sends an email to the portfolio owner (config.email) through Resend.
//
// Setup: create a free account at https://resend.com using config.email,
// create an API key and put it in RESEND_API_KEY (.env.local locally, and in
// the hosting provider's environment variables in production). With the
// default "onboarding@resend.dev" sender, Resend only delivers to the email
// the account was created with, which is exactly what we need here.
export async function sendToOwner({
  subject,
  react,
  replyTo,
}: {
  subject: string;
  react: React.ReactNode;
  replyTo?: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, the email was not sent.");
    return { ok: false, error: "Email service is not configured." };
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>",
    to: [config.email],
    subject,
    react,
    replyTo,
  });

  if (error) {
    console.error("Resend error:", error);
    return { ok: false, error: "Could not send the email." };
  }
  return { ok: true };
}

// Very small in-memory rate limit per IP, enough to stop a script from
// flooding the inbox. Resets when the server restarts.
const hits = new Map<string, number[]>();
export function isRateLimited(req: Request, max = 5, windowMs = 10 * 60_000) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > max;
}
