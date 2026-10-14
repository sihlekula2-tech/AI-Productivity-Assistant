import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PRICES, SITE } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/visit")({
  head: () => meta("Plan Your Visit", "Tickets, booking, directions, FAQs and accessibility for Sihle Kula National Park, Stellenbosch."),
  component: Visit,
});

const f = "w-full rounded-xl border bg-background px-3 py-2";

function Visit() {
  return (
    <>
      <PageHeader title="Plan Your Visit" sub={`${SITE.hours} · ${SITE.city}`} />
      <Section className="grid gap-6 sm:grid-cols-3">
        {PRICES.map((p) => <div key={p.name} className="rounded-2xl bg-card p-6 shadow-soft"><p className="font-semibold">{p.name}</p><p className="font-display text-3xl font-extrabold text-primary">{p.price}</p><p className="text-sm text-muted-foreground">{p.note}</p></div>)}
      </Section>
      <Section className="grid gap-10 lg:grid-cols-2">
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Booking request received! We'll confirm by email."); (e.target as HTMLFormElement).reset(); }} className="grid gap-3 rounded-2xl bg-card p-6 shadow-soft">
          <h2 className="text-2xl">Book your visit</h2>
          <label className="text-sm font-semibold">Full name<input required className={f} /></label>
          <label className="text-sm font-semibold">Email<input type="email" required className={f} /></label>
          <div className="grid grid-cols-2 gap-3">
            <label className="text-sm font-semibold">Date<input type="date" required className={f} /></label>
            <label className="text-sm font-semibold">Visitors<input type="number" min={1} defaultValue={2} className={f} /></label>
          </div>
          <label className="text-sm font-semibold">Ticket<select className={f}><option>Weekly Pass – R250</option><option>Member weekend (discounted)</option><option>School / group</option></select></label>
          <button className="mt-2 rounded-full bg-primary py-3 font-bold text-primary-foreground">Request booking</button>
        </form>
        <div>
          <h2 className="text-2xl">Find us</h2>
          <iframe title="Map to Stellenbosch" className="mt-4 h-72 w-full rounded-2xl border" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=18.80%2C-33.98%2C18.95%2C-33.90&layer=mapnik" />
          <p className="mt-4"><strong>Directions:</strong> 50 min from Cape Town via the N2 and R310. Free parking on site.</p>
          <p className="mt-2"><strong>Accessibility:</strong> Paved wheelchair-friendly paths, accessible toilets, wheelchair hire at the gate, quiet zones and assistance animals welcome.</p>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl">FAQs</h2>
        <Accordion type="single" collapsible className="mt-4">
          {[["What are the opening hours?", "Every day from 08:00 to 17:00."], ["How much is a ticket?", "The Weekly Pass is R250. Members receive a special weekend discount."], ["Can I bring food?", "Yes, picnic areas are available. Please don't feed the animals."], ["Is the park pram-friendly?", "Yes, all main routes are paved."]].map(([q, a]) => (
            <AccordionItem key={q} value={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
