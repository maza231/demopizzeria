import Image from "next/image";
import { site } from "@/data/site";
import { pizzaImage } from "@/lib/images";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* sottile texture/decoro, niente gradiente casuale */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-tomato/10 blur-2xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-sand bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-tomato">
            <span className="h-1.5 w-1.5 rounded-full bg-tomato" />
            {site.tagline}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
            La vera pizza,
            <br />
            <span className="text-tomato">cotta nel forno a legna.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/70">
            Impasto a lunga lievitazione e ingredienti selezionati. Guarda il
            menu e prenota il tuo tavolo in pochi secondi, senza dover chiamare.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#prenota"
              className="rounded-full bg-tomato px-7 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-tomato-dark"
            >
              Prenota un tavolo
            </a>
            <a
              href="#menu"
              className="rounded-full border border-charcoal/15 bg-white px-7 py-3.5 text-center text-base font-semibold text-charcoal transition-colors hover:border-charcoal/30"
            >
              Guarda il menu
            </a>
          </div>

          <dl className="mt-10 flex gap-8">
            <div>
              <dt className="text-xs uppercase tracking-widest text-charcoal/50">
                Forno a legna
              </dt>
              <dd className="text-lg font-bold text-charcoal">450°C</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-charcoal/50">
                Lievitazione
              </dt>
              <dd className="text-lg font-bold text-charcoal">48 ore</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-charcoal/50">
                Dal
              </dt>
              <dd className="text-lg font-bold text-charcoal">1987</dd>
            </div>
          </dl>
        </div>

        {/* Immagine fittizia (sostituibile con una foto reale) */}
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-sand ring-1 ring-charcoal/5">
          <Image
            src={pizzaImage(20, 800)}
            alt="Pizza appena sfornata"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
