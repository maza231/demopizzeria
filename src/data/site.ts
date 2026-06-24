// Dati segnaposto della pizzeria.
// Sostituisci questi valori con quelli reali (nome, indirizzo, telefono, orari).
export const site = {
  name: "Forno Vivo",
  tagline: "Pizzeria · Forno a legna",
  phone: "+39 000 000 0000",
  address: "Via della Pizza 12, 00100 Roma",
  hours: [
    { days: "Mar — Ven", time: "18:30 — 23:30" },
    { days: "Sab — Dom", time: "12:30 — 15:00 · 18:30 — 24:00" },
    { days: "Lunedì", time: "Chiuso" },
  ],
  social: {
    instagram: "#",
    facebook: "#",
  },
} as const;
