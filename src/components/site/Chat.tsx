import { useRef, useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { runAI } from "@/lib/ai.functions";
import { DISCLAIMER } from "./AIOutput";
import { Logo } from "./Layout";

type Msg = { role: "user" | "assistant"; content: string };
const CHIPS = ["Ticket prices", "Plan my day", "Tell me about leopards", "Opening hours"];

export function ChatPanel({ tall = false }: { tall?: boolean }) {
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "assistant", content: "Hi! I'm Kula 🐆 — ask me about tickets, hours, animals or events." }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => { end.current?.scrollIntoView({ block: "nearest" }); }, [msgs, loading]);

  async function send(text: string, base = msgs) {
    if (!text.trim() || loading) return;
    const next = [...base, { role: "user" as const, content: text }];
    setMsgs(next); setInput(""); setLoading(true);
    const history = next.filter((m, i) => !(i === 0 && m.role === "assistant"));
    const r = await runAI({ data: { tool: "chat", messages: history } }).catch(() => ({ ok: false as const, error: "Connection problem. Please try again." }));
    setMsgs([...next, { role: "assistant", content: r.ok ? r.text : `⚠️ ${r.error}` }]);
    setLoading(false);
  }
  function regenerate() {
    const lastUser = [...msgs].reverse().findIndex((m) => m.role === "user");
    if (lastUser < 0) return;
    const idx = msgs.length - 1 - lastUser;
    send(msgs[idx].content, msgs.slice(0, idx));
  }

  return (
    <div className={`flex flex-col ${tall ? "h-[70vh]" : "h-[480px]"}`}>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {msgs.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : "flex gap-2"}>
            {m.role === "assistant" && <Logo size={28} />}
            <div className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm ${m.role === "user" ? "bg-accent text-accent-foreground" : "bg-secondary"}`}>{m.content}</div>
          </div>
        ))}
        {loading && <div className="flex gap-2"><Logo size={28} /><div className="rounded-2xl bg-secondary px-4 py-3"><span className="inline-flex gap-1"><span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" /><span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" /><span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" /></span></div></div>}
        <div ref={end} />
      </div>
      <div className="border-t p-3">
        <div className="mb-2 flex flex-wrap gap-2">
          {CHIPS.map((c) => <button key={c} onClick={() => send(c)} className="rounded-full border border-primary px-3 py-1 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground">{c}</button>)}
          {msgs.length > 2 && <button onClick={regenerate} className="rounded-full border px-3 py-1 text-xs font-semibold">↻ Regenerate</button>}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
          <label htmlFor="chat-in" className="sr-only">Message</label>
          <input id="chat-in" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Kula anything…" className="flex-1 rounded-full border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <button aria-label="Send" disabled={loading} className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-50"><Send size={16} /></button>
        </form>
        <p className="mt-2 text-[11px] text-muted-foreground">{DISCLAIMER} For pricing, safety and animal welfare, please confirm with staff.</p>
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="no-print fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[min(92vw,380px)] overflow-hidden rounded-2xl border bg-card shadow-soft">
          <div className="flex items-center justify-between bg-bark px-4 py-3 text-bark-foreground"><span className="font-display font-bold">Chat with Kula</span><button aria-label="Close chat" onClick={() => setOpen(false)}><X size={18} /></button></div>
          <ChatPanel />
        </div>
      )}
      <button aria-label="Open chat assistant" onClick={() => setOpen(!open)} className="ml-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft hover:scale-105 transition"><MessageCircle /></button>
    </div>
  );
}
