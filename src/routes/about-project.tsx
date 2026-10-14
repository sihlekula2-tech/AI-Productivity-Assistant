import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/about-project")({
  head: () => meta("About This Project", "Documentation for the Sihle Kula AI-powered zoo website: problem, solution, tools, prompts, challenges and impact."),
  component: About,
});

const B = [
  ["Problem statement", "Zoo staff spend hours on repetitive emails, schedules and research, while visitors struggle to plan their day and find quick answers."],
  ["Solution overview", "A premium, mobile-first zoo website with an AI Workplace Productivity Assistant: email generator, Eisenhower task planner / day itinerary builder, research summariser and a 24/7 chatbot."],
  ["Tools used", "TanStack Start (React), Tailwind CSS, Lovable AI Gateway (OpenAI GPT model), server functions for secure AI calls, AI-generated imagery."],
  ["Sample prompts", "\"Write a formal school trip request email for 40 Grade 5 learners\" · \"Plan my zoo day with two kids, leopards and crocodile feeding\" · \"Summarise this leopard conservation report\" · \"Ticket prices\""],
  ["Challenges & solutions", "Hallucinated prices → grounded prompts with zoo facts and escalation to staff. Inconsistent formats → strict output formats + few-shot examples. Trust → disclaimers, checklists and a human-in-the-loop policy."],
  ["Features & impact", "4 AI tools, prompt library with v1/v2, responsible AI page, copy/PDF export. Estimated savings: email 10→1 min, itinerary 30→2 min, report summary 25→2 min."],
];

function About() {
  return (
    <>
      <PageHeader title="About This Project" sub="Project documentation — Sihle Kula National Park AI website." />
      <Section className="space-y-6">
        {B.map(([t, d]) => <div key={t} className="rounded-2xl bg-card p-6 shadow-soft"><h2 className="text-xl">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>)}
        <button onClick={() => window.print()} className="no-print rounded-full bg-primary px-5 py-2 font-bold text-primary-foreground">Print / save as PDF</button>
      </Section>
    </>
  );
}
