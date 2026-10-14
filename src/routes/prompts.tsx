import { createFileRoute } from "@tanstack/react-router";
import { PROMPTS } from "@/lib/prompts";
import { PageHeader, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/prompts")({
  head: () => meta("Prompt Library", "The system prompts behind each Sihle Kula AI tool, with v1 and v2 compared side by side."),
  component: Lib,
});

function Lib() {
  return (
    <>
      <PageHeader title="Prompt Library" sub="Each AI tool's system prompt: v1 (first draft) vs v2 (improved), with notes." />
      <Section className="space-y-10">
        {Object.entries(PROMPTS).map(([k, p]) => (
          <article key={k}>
            <h2 className="text-2xl">{p.title}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-muted p-4"><p className="text-xs font-bold uppercase">v1</p><pre className="mt-2 whitespace-pre-wrap text-sm">{p.v1}</pre></div>
              <div className="rounded-2xl border-2 border-primary bg-card p-4"><p className="text-xs font-bold uppercase text-primary">v2 (in use)</p><pre className="mt-2 max-h-80 overflow-auto whitespace-pre-wrap text-sm">{p.v2}</pre></div>
            </div>
            <p className="mt-3 rounded-xl bg-secondary p-3 text-sm"><strong>What improved & why:</strong> {p.notes}</p>
          </article>
        ))}
      </Section>
    </>
  );
}
