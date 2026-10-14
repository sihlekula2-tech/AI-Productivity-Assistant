import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/responsible-ai")({
  head: () => meta("Responsible AI & Privacy", "How Sihle Kula uses AI responsibly: limitations, bias, data privacy and human oversight."),
  component: R,
});

const S = [
  ["Limitations", "AI can produce incorrect, outdated or incomplete answers. It does not know live availability or real-time events."],
  ["Possible bias", "Models learn from internet text and may reflect cultural or language biases. We review prompts and outputs to reduce this."],
  ["Data privacy", "We do not store personal data from AI tools. Conversations are not saved after you leave the page. Avoid entering ID numbers or sensitive details."],
  ["Human-in-the-loop", "Staff review AI-drafted emails, plans and reports before they are sent or acted on. Pricing, safety and animal welfare questions are always handled by people."],
  ["Transparency", "Every AI output is labelled with a disclaimer, and our prompts are public in the Prompt Library."],
];

function R() {
  return (
    <>
      <PageHeader title="Responsible AI & Privacy" />
      <Section className="grid gap-6 md:grid-cols-2">
        {S.map(([t, d]) => <div key={t} className="rounded-2xl bg-card p-6 shadow-soft"><h2 className="text-xl">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>)}
      </Section>
    </>
  );
}
