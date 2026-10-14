import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageHeader, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/conservation")({
  head: () => meta("Conservation & Education", "Our mission, animal adoption programmes and volunteer opportunities at Sihle Kula National Park."),
  component: Cons,
});

function Cons() {
  return (
    <>
      <PageHeader title="Conservation & Education" sub="Protecting South African wildlife through care, research and learning." />
      <Section className="grid gap-8 md:grid-cols-2">
        <div><h2 className="text-2xl">Our mission</h2><p className="mt-3 text-muted-foreground">We rescue, rehabilitate and protect indigenous species, support Western Cape leopard research, and inspire the next generation of conservationists.</p></div>
        <div>
          <h2 className="text-2xl">Adopt an animal</h2>
          <ul className="mt-3 space-y-2">{[["Leopard", "R500/yr"], ["Fish Eagle", "R300/yr"], ["Kudu", "R250/yr"]].map(([a, p]) => <li key={a} className="flex justify-between rounded-xl bg-card p-3 shadow-soft"><span>{a}</span><strong className="text-primary">{p}</strong></li>)}</ul>
        </div>
      </Section>
      <Section>
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Thanks! Our volunteer team will contact you."); (e.target as HTMLFormElement).reset(); }} className="grid max-w-xl gap-3 rounded-2xl bg-card p-6 shadow-soft">
          <h2 className="text-2xl">Volunteer sign-up</h2>
          <label className="text-sm font-semibold">Name<input required className="w-full rounded-xl border px-3 py-2" /></label>
          <label className="text-sm font-semibold">Email<input type="email" required className="w-full rounded-xl border px-3 py-2" /></label>
          <label className="text-sm font-semibold">Area of interest<select className="w-full rounded-xl border px-3 py-2"><option>Animal care</option><option>Education</option><option>Events</option></select></label>
          <button className="rounded-full bg-primary py-3 font-bold text-primary-foreground">Sign up</button>
        </form>
      </Section>
    </>
  );
}
