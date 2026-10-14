import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/experiences")({
  head: () => meta("Experiences", "Feeding sessions, guided safaris, school trips, birthday parties and corporate team-building at Sihle Kula."),
  component: Exp,
});

const ITEMS = [
  ["Feeding sessions", "Watch keepers feed our crocodiles and big cats up close.", "🍖"],
  ["Guided safaris", "Expert-led drives across Antelope Plains and Big Cat Ridge.", "🚙"],
  ["School trips", "Curriculum-linked tours and hands-on conservation lessons.", "🎒"],
  ["Birthday parties", "Animal encounters, cake and a party host for little explorers.", "🎂"],
  ["Corporate team-building", "Safari challenges and conservation workshops for teams.", "🤝"],
];

function Exp() {
  return (
    <>
      <PageHeader title="Experiences" sub="Make your visit unforgettable." />
      <Section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(([t, d, e]) => (
          <div key={t} className="rounded-2xl bg-card p-6 shadow-soft">
            <p className="text-4xl" aria-hidden>{e}</p>
            <h2 className="mt-3 text-xl">{t}</h2>
            <p className="mt-2 text-muted-foreground">{d}</p>
            <Link to="/contact" className="mt-4 inline-block font-bold text-accent">Enquire →</Link>
          </div>
        ))}
      </Section>
    </>
  );
}
