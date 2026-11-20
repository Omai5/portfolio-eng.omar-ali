import { EmailTemplate } from "@/components/email-template";
import { isRateLimited, sendToOwner } from "@/lib/mail";
import { z } from "zod";

// Messages typed into the #general chat widget are forwarded to the owner's email
const ChatMessage = z.object({
  name: z.string().trim().max(60).optional(),
  message: z.string().trim().min(1).max(2000),
});

export async function POST(req: Request) {
  try {
    const parsed = ChatMessage.safeParse(await req.json());
    if (!parsed.success) {
      return Response.json({ error: "Invalid message" }, { status: 400 });
    }

    if (isRateLimited(req, 10)) {
      return Response.json(
        { error: "Too many messages, please try again later." },
        { status: 429 }
      );
    }

    const name = parsed.data.name || "Anonymous visitor";
    const result = await sendToOwner({
      subject: `Portfolio chat: ${name}`,
      react: EmailTemplate({
        fullName: name,
        message: parsed.data.message,
        source: "Chat widget (#general)",
      }),
    });

    if (!result.ok) return Response.json({ error: result.error }, { status: 500 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
