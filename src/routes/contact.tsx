import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SITE } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact", "Get in touch with Sihle Kula National Park in Stellenbosch by phone, email or our contact form."),
  component: Contact,
});

const f = "w-full rounded-xl border bg-background px-3 py-2";

function Contact() {
  return (
    <>
      <PageHeader title="Contact us" sub="We'd love to hear from you." />
      <Section className="grid gap-10 md:grid-cols-2">
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Message sent!"); (e.target as HTMLFormElement).reset(); }} className="grid gap-3 rounded-2xl bg-card p-6 shadow-soft">
          <label className="text-sm font-semibold">Name<input required className={f} /></label>
          <label className="text-sm font-semibold">Email<input type="email" required className={f} /></label>
          <label className="text-sm font-semibold">Message<textarea required rows={5} className={f} /></label>
          <button className="rounded-full bg-primary py-3 font-bold text-primary-foreground">Send</button>
        </form>
        <div className="space-y-3 text-lg">
          <p><strong>Phone:</strong> <a href={`tel:${SITE.phone}`} className="text-accent">{SITE.phone}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${SITE.email}`} className="text-accent">{SITE.email}</a></p>
          <p><strong>Location:</strong> {SITE.city}</p>
          <p><strong>Hours:</strong> {SITE.hours}</p>
        </div>
      </Section>
    </>
  );
}
