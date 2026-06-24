"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#prenota", label: "Prenota" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-xl font-extrabold tracking-tight text-charcoal">
            {site.name}
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-tomato sm:inline">
            Pizzeria
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-tomato"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#prenota"
            className="rounded-full bg-tomato px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-tomato-dark"
          >
            Prenota un tavolo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-charcoal md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-sand/70 bg-cream md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-charcoal hover:bg-sand/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#prenota"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-tomato px-5 py-3 text-center text-base font-semibold text-white"
            >
              Prenota un tavolo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
