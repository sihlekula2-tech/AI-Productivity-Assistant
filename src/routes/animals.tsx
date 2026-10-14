import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ANIMALS, type Category } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/animals")({
  head: () => meta("Our Animals", "Meet the leopards, birds, reptiles, primates and antelope of Sihle Kula National Park."),
  component: Animals,
});

const CATS: ("All" | Category)[] = ["All", "Big Cats", "Birds", "Reptiles", "Primates", "Antelope"];

function Animals() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const list = ANIMALS.filter((a) => cat === "All" || a.cat === cat);
  return (
    <>
      <PageHeader title="Our Animals" sub="From our star leopard to the voice of Africa — meet the residents." />
      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter animals">
          {CATS.map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${cat === c ? "bg-primary text-primary-foreground border-primary" : "hover:bg-secondary"}`}>{c}</button>)}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <article key={a.name} className={`overflow-hidden rounded-2xl bg-card shadow-soft fade-up ${a.featured ? "lg:col-span-2 ring-2 ring-primary" : ""}`}>
              <img src={a.img} alt={a.name} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="p-5">
                {a.featured && <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Featured animal</span>}
                <h2 className="mt-2 text-2xl">{a.name}</h2>
                <p className="text-sm font-bold text-accent">{a.cat}</p>
                <p className="mt-3"><strong>Fun fact:</strong> {a.fact}</p>
                <p className="mt-1"><strong>Diet:</strong> {a.diet}</p>
                <p className="mt-1"><strong>Conservation status:</strong> {a.status}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
