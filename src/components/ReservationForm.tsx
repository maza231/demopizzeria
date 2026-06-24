"use client";

import { useState } from "react";

type Mode = "tavolo" | "asporto";

export default function ReservationForm() {
  const [mode, setMode] = useState<Mode>("tavolo");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTA: invio "finto" — per ora non viene inviato nulla a un server.
    // In seguito qui collegheremo email o database.
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-sand bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-tomato focus:outline-none focus:ring-2 focus:ring-tomato/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-charcoal/80";

  return (
    <section id="prenota" className="bg-charcoal py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-tomato">
            Prenota
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Prenota senza chiamare
          </h2>
          <p className="mt-4 max-w-md text-lg text-cream/70">
            Scegli giorno, ora e numero di persone. Riceverai conferma dal
            ristorante. Vuoi solo ordinare le pizze? Seleziona “Asporto”.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-cream/15 bg-cream/5 p-1">
            <button
              type="button"
              onClick={() => setMode("tavolo")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                mode === "tavolo" ? "bg-tomato text-white" : "text-cream/70"
              }`}
            >
              Tavolo
            </button>
            <button
              type="button"
              onClick={() => setMode("asporto")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                mode === "asporto" ? "bg-tomato text-white" : "text-cream/70"
              }`}
            >
              Asporto
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-cream p-6 text-charcoal sm:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-basil/15 text-2xl text-basil">
                ✓
              </div>
              <h3 className="mt-4 text-2xl font-bold">Richiesta inviata!</h3>
              <p className="mt-2 max-w-xs text-charcoal/65">
                Questa è una demo: la prenotazione non è stata realmente inviata.
                Collegheremo email o database in un secondo momento.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-charcoal/30"
              >
                Nuova richiesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Mario Rossi"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Telefono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="333 1234567"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="guests" className={labelClass}>
                    {mode === "tavolo" ? "Persone" : "N° pizze"}
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    defaultValue={2}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className={labelClass}>
                    Data
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="time" className={labelClass}>
                    Ora
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className={labelClass}>
                  Note (facoltativo)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  placeholder={
                    mode === "tavolo"
                      ? "Allergie, seggiolone, ecc."
                      : "Quali pizze vuoi ordinare?"
                  }
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-tomato px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-tomato-dark"
              >
                {mode === "tavolo" ? "Prenota il tavolo" : "Invia ordine"}
              </button>
              <p className="text-center text-xs text-charcoal/45">
                Demo — nessun dato viene realmente inviato.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
