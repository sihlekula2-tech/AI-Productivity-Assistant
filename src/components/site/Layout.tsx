import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";
import { ChatWidget } from "./Chat";

const NAV = [
  { to: "/animals", label: "Animals" },
  { to: "/visit", label: "Plan Your Visit" },
  { to: "/experiences", label: "Experiences" },
  { to: "/conservation", label: "Conservation" },
  { to: "/assistant", label: "AI Hub" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ size = 44 }: { size?: number }) {
  return <img src={logo} alt={`${SITE.name} leopard logo`} width={size} height={size} className="rounded-full" />;
}

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <Logo /> <span>{SITE.short}</span>
          </Link>
          <nav className="hidden gap-1 lg:flex" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-secondary" activeProps={{ className: "bg-secondary text-primary" }}>{n.label}</Link>
            ))}
          </nav>
          <Link to="/visit" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-soft hover:opacity-90 lg:inline-flex">Book Your Visit</Link>
          <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col border-t px-4 py-2 lg:hidden" aria-label="Mobile">
            {NAV.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-semibold">{n.label}</Link>)}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-bark text-bark-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3"><Logo size={56} /><span className="font-display text-xl font-extrabold">{SITE.name}</span></div>
            <p className="mt-3 font-display text-primary">{SITE.slogan}</p>
            <p className="mt-2 text-sm opacity-80">{SITE.city} · {SITE.hours}</p>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            {NAV.map((n) => <Link key={n.to} to={n.to} className="opacity-80 hover:opacity-100">{n.label}</Link>)}
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <Link to="/prompts" className="opacity-80 hover:opacity-100">Prompt Library</Link>
            <Link to="/responsible-ai" className="opacity-80 hover:opacity-100">Responsible AI & Privacy</Link>
            <Link to="/about-project" className="opacity-80 hover:opacity-100">About This Project</Link>
            <div className="mt-3 flex gap-3" aria-label="Social links">
              <a href="https://facebook.com" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://instagram.com" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://youtube.com" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}

export function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-bark text-bark-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 fade-up">
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        {sub && <p className="mt-3 max-w-2xl opacity-85">{sub}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 py-14 ${className}`}>{children}</section>;
}
