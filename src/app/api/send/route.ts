import { EmailTemplate } from "@/components/email-template";
import { isRateLimited, sendToOwner } from "@/lib/mail";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().trim().min(2, "Full name is invalid!").max(100),
  email: z.string().trim().email({ message: "Email is invalid!" }),
  message: z.string().trim().min(10, "Message is too short!").max(5000),
});

export async function POST(req: Request) {
  try {
    const parsed = Email.safeParse(await req.json());
    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    if (isRateLimited(req)) {
      return Response.json(
        { error: "Too many messages, please try again later." },
        { status: 429 }
      );
    }

    const { fullName, email, message } = parsed.data;
    const result = await sendToOwner({
      subject: `Portfolio contact: ${fullName}`,
      replyTo: email, // hitting "Reply" in Gmail answers the visitor directly
      react: EmailTemplate({ fullName, email, message, source: "Contact form" }),
    });

    if (!result.ok) return Response.json({ error: result.error }, { status: 500 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
