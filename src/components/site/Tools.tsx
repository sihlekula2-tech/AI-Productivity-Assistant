import { useState } from "react";
import { runAI } from "@/lib/ai.functions";
import type { Tool } from "@/lib/prompts";
import { AIOutput } from "./AIOutput";

function useAI(tool: Tool) {
  const [text, setText] = useState(""); const [loading, setLoading] = useState(false); const [error, setError] = useState("");
  const [last, setLast] = useState("");
  async function run(prompt: string) {
    setLast(prompt); setLoading(true); setError(""); setText("");
    const r = await runAI({ data: { tool, messages: [{ role: "user", content: prompt }] } }).catch(() => ({ ok: false as const, error: "Connection problem. Please try again." }));
    if (r.ok) setText(r.text); else setError(r.error);
    setLoading(false);
  }
  return { text, loading, error, run, regen: () => last && run(last) };
}

const field = "w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring";
const btn = "rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-soft disabled:opacity-50";

export function EmailTool() {
  const ai = useAI("email");
  const [purpose, setPurpose] = useState("Booking enquiry"); const [tone, setTone] = useState("Formal"); const [aud, setAud] = useState("Client"); const [details, setDetails] = useState("");
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); ai.run(`purpose=${purpose}, tone=${tone}, audience=${aud}. Extra details: ${details || "none"}`); }} className="grid gap-3 md:grid-cols-3">
        <label className="text-sm font-semibold">Purpose<select className={field} value={purpose} onChange={(e) => setPurpose(e.target.value)}>{["Booking enquiry", "School trip request", "Sponsorship request", "Complaint reply"].map((o) => <option key={o}>{o}</option>)}</select></label>
        <label className="text-sm font-semibold">Tone<select className={field} value={tone} onChange={(e) => setTone(e.target.value)}>{["Formal", "Informal", "Persuasive"].map((o) => <option key={o}>{o}</option>)}</select></label>
        <label className="text-sm font-semibold">Audience<select className={field} value={aud} onChange={(e) => setAud(e.target.value)}>{["Client", "Manager", "Team"].map((o) => <option key={o}>{o}</option>)}</select></label>
        <label className="text-sm font-semibold md:col-span-3">Details (optional)<textarea className={field} rows={3} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="e.g. 40 Grade 5 learners, 12 March" /></label>
        <div><button className={btn} disabled={ai.loading}>Generate email</button></div>
      </form>
      <AIOutput title="Email" {...ai} onRegenerate={ai.regen} />
      {ai.text && (
        <div className="mt-4 rounded-2xl bg-secondary p-4 text-sm">
          <p className="font-bold">Validate before you send</p>
          <ul className="mt-2 space-y-1">{["Names, dates and numbers are correct", "Prices match the official price list", "Placeholders [like this] are replaced", "Tone suits the recipient", "No personal data shared unnecessarily"].map((c) => <li key={c}><label className="flex gap-2"><input type="checkbox" /> {c}</label></li>)}</ul>
        </div>
      )}
    </div>
  );
}

export function PlannerTool() {
  const ai = useAI("planner");
  const [mode, setMode] = useState("Visitor – Plan My Zoo Day"); const [range, setRange] = useState("Daily"); const [tasks, setTasks] = useState("");
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); ai.run(`Mode: ${mode}. Plan: ${range}. Tasks/wishes:\n${tasks}`); }} className="grid gap-3 md:grid-cols-2">
        <label className="text-sm font-semibold">Mode<select className={field} value={mode} onChange={(e) => setMode(e.target.value)}><option>Visitor – Plan My Zoo Day</option><option>Staff – Keeper & operations plan</option></select></label>
        <label className="text-sm font-semibold">Range<select className={field} value={range} onChange={(e) => setRange(e.target.value)}><option>Daily</option><option>Weekly</option></select></label>
        <label className="text-sm font-semibold md:col-span-2">Tasks or wishes<textarea required className={field} rows={4} value={tasks} onChange={(e) => setTasks(e.target.value)} placeholder="e.g. Two kids, want to see leopards and crocodile feeding, lunch around 12" /></label>
        <div><button className={btn} disabled={ai.loading}>Build plan</button></div>
      </form>
      <AIOutput title="Plan" {...ai} onRegenerate={ai.regen} />
    </div>
  );
}

export function ResearchTool() {
  const ai = useAI("research");
  const [txt, setTxt] = useState("");
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); ai.run(txt); }} className="grid gap-3">
        <label className="text-sm font-semibold">Paste an article, report or topic<textarea required className={field} rows={6} value={txt} onChange={(e) => setTxt(e.target.value)} placeholder="e.g. Summarise the conservation status of leopards in the Western Cape" /></label>
        <div><button className={btn} disabled={ai.loading}>Analyse</button></div>
      </form>
      <AIOutput title="Research summary" {...ai} onRegenerate={ai.regen} />
      {ai.text && <p className="mt-3 rounded-xl bg-accent/10 p-3 text-sm"><strong>Verify with official sources</strong> (e.g. SANParks, IUCN Red List, CapeNature) before citing these findings.</p>}
    </div>
  );
}
