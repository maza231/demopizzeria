import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contatti" className="border-t border-sand bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-3">
        <div>
          <div className="text-xl font-extrabold tracking-tight text-charcoal">
            {site.name}
          </div>
          <p className="mt-2 text-sm text-charcoal/65">{site.tagline}</p>
          <p className="mt-4 text-sm text-charcoal/65">{site.address}</p>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="mt-1 inline-block text-sm font-semibold text-tomato"
          >
            {site.phone}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal/50">
            Orari
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span className="font-medium text-charcoal">{h.days}</span>
                <span className="text-right">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal/50">
            Seguici
          </h3>
          <div className="mt-4 flex gap-3">
            <a
              href={site.social.instagram}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-charcoal/30"
            >
              Instagram
            </a>
            <a
              href={site.social.facebook}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-charcoal/30"
            >
              Facebook
            </a>
          </div>
          <a
            href="#prenota"
            className="mt-6 inline-block rounded-full bg-tomato px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-tomato-dark"
          >
            Prenota un tavolo
          </a>
        </div>
      </div>

      <div className="border-t border-sand">
        <div className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-charcoal/45">
          © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati ·
          Dati segnaposto (demo).
        </div>
      </div>
    </footer>
  );
}
