import { Section } from "./Layout";

const ROWS = [
  { task: "Email", before: 10, after: 1 },
  { task: "Itinerary", before: 30, after: 2 },
  { task: "Report summary", before: 25, after: 2 },
  { task: "Visitor question", before: 5, after: 0.5 },
];

export function Impact() {
  return (
    <Section>
      <h2 className="text-3xl">Productivity impact</h2>
      <p className="mt-2 text-muted-foreground">Estimated minutes saved per task with our AI tools.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ROWS.map((r) => (
          <div key={r.task} className="rounded-2xl bg-card p-6 shadow-soft">
            <p className="font-semibold">{r.task}</p>
            <p className="mt-2 font-display text-2xl font-extrabold"><span className="text-muted-foreground line-through">{r.before} min</span> → <span className="text-primary">{r.after} min</span></p>
            <div className="mt-3 h-2 rounded-full bg-secondary"><div className="h-2 rounded-full bg-accent" style={{ width: `${Math.round((1 - r.after / r.before) * 100)}%` }} /></div>
            <p className="mt-1 text-xs text-muted-foreground">{Math.round((1 - r.after / r.before) * 100)}% faster</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
