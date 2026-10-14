import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import hero from "@/assets/hero-leopard.jpg";
import { ANIMALS, PRICES, SITE } from "@/lib/site";
import { Section } from "@/components/site/Layout";
import { Impact } from "@/components/site/Impact";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () => meta("Wild at Heart. Close to You.", "Visit Sihle Kula National Park in Stellenbosch — meet leopards, eagles and more, and plan your day with our AI assistant."),
  component: Home,
});

function Home() {
  const [email, setEmail] = useState("");
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img src={hero} alt="Leopard resting on a tree branch with Stellenbosch mountains behind" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-20 text-bark-foreground fade-up">
          <p className="font-semibold uppercase tracking-widest text-primary">{SITE.name} · {SITE.city}</p>
          <h1 className="mt-3 max-w-3xl text-5xl leading-tight md:text-7xl">{SITE.slogan}</h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/visit" className="rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground shadow-soft hover:opacity-90">Book Your Visit</Link>
            <Link to="/assistant" className="rounded-full border-2 border-bark-foreground px-7 py-3 font-bold hover:bg-bark-foreground hover:text-bark">Chat with Our Assistant</Link>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="text-3xl md:text-4xl">Featured animals</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ANIMALS.slice(0, 4).map((a) => (
            <Link to="/animals" key={a.name} className="group overflow-hidden rounded-2xl bg-card shadow-soft">
              <img src={a.img} alt={a.name} loading="lazy" width={944} height={704} className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
              <div className="p-4"><p className="text-xs font-bold uppercase text-accent">{a.cat}</p><h3 className="text-lg">{a.name}</h3></div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-secondary">
        <Section className="grid gap-8 md:grid-cols-3">
          <div><h2 className="text-3xl">Hours & tickets</h2><p className="mt-3 text-lg font-bold text-accent">{SITE.hours}</p></div>
          <div className="grid gap-4 md:col-span-2 sm:grid-cols-3">
            {PRICES.map((p) => <div key={p.name} className="rounded-2xl bg-card p-5 shadow-soft"><p className="font-semibold">{p.name}</p><p className="mt-1 font-display text-2xl font-extrabold text-primary">{p.price}</p><p className="mt-1 text-sm text-muted-foreground">{p.note}</p></div>)}
          </div>
        </Section>
      </section>

      <Section>
        <h2 className="text-3xl">What visitors say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[["The leopard talk was unforgettable — my kids are still talking about it.", "Thandi M., Cape Town"], ["Perfect school outing. Well organised and educational.", "Mr. Jacobs, Grade 6 teacher"], ["Our team-building safari was the best corporate day we've had.", "Lerato N., Stellenbosch"]].map(([q, w]) => (
            <figure key={w} className="rounded-2xl bg-card p-6 shadow-soft"><blockquote>“{q}”</blockquote><figcaption className="mt-3 text-sm font-bold text-accent">{w}</figcaption></figure>
          ))}
        </div>
      </Section>

      <section className="bg-bark text-bark-foreground">
        <Section>
          <h2 className="text-3xl">Our conservation impact</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[["120+", "Animals in our care"], ["38", "Species protected"], ["15k", "Learners educated yearly"], ["R2.4m", "Raised for conservation"]].map(([n, l]) => <div key={l}><p className="font-display text-4xl font-extrabold text-primary">{n}</p><p className="opacity-80">{l}</p></div>)}
          </div>
        </Section>
      </section>

      <Impact />

      <Section className="text-center">
        <h2 className="text-3xl">Join the pride</h2>
        <p className="mt-2 text-muted-foreground">Get news, events and member offers.</p>
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Thanks for subscribing!"); setEmail(""); }} className="mx-auto mt-6 flex max-w-md gap-2">
          <label htmlFor="nl" className="sr-only">Email</label>
          <input id="nl" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 rounded-full border bg-card px-4 py-2" />
          <button className="rounded-full bg-primary px-5 font-bold text-primary-foreground">Subscribe</button>
        </form>
      </Section>
    </>
  );
}
