import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  tool: z.enum(["email", "planner", "research", "chat"]),
  messages: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().max(20000) })).min(1).max(40),
});

export const runAI = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) return { ok: false as const, error: "AI is not configured." };
    const { PROMPTS } = await import("./prompts");
    const { createOpenAI } = await import("@ai-sdk/openai");
    const { streamText } = await import("ai");
    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey: key,
      headers: { "Lovable-API-Key": key, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    });
    try {
      let streamErr: unknown;
      const result = streamText({
        model: provider.responses("openai/gpt-6-astra"),
        instructions: PROMPTS[data.tool].v2,
        messages: data.messages,
        onError: ({ error }) => { streamErr = error; },
        providerOptions: {
          openai: { forceReasoning: true, reasoningEffort: "low", reasoningSummary: "auto", store: false, include: ["reasoning.encrypted_content"] },
        },
      } as Parameters<typeof streamText>[0]);
      const text = await result.text;
      if (!text) throw streamErr ?? new Error("Empty response");
      return { ok: true as const, text };
    } catch (e: any) {
      const status = e?.statusCode ?? e?.cause?.statusCode;
      const msg = status === 429 ? "Too many requests — please wait a moment and try again."
        : status === 402 ? "AI credits have run out. Please contact the site owner."
        : "The assistant couldn't respond right now. Please try again.";
      console.error("AI error", status, e?.message);
      return { ok: false as const, error: msg };
    }
  });
