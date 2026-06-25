// Foto a tema pizza da Unsplash (CDN stabile, gratuite per uso commerciale).
// Sostituire con foto reali del locale quando disponibili.

const UNSPLASH = "https://images.unsplash.com";

/** Costruisce un URL Unsplash ottimizzato per la dimensione richiesta. */
function unsplash(photoId: string, size: number): string {
  return `${UNSPLASH}/${photoId}?auto=format&fit=crop&w=${size}&h=${size}&q=80`;
}

// Foto di pizza selezionate (ognuna è davvero una pizza, non cibo generico).
const PIZZA_PHOTOS = [
  "photo-1513104890138-7c749659a591", // margherita classica
  "photo-1574071318508-1cdbab80d002", // marinara / pomodoro
  "photo-1628840042765-356cda07504e", // diavola / salame
  "photo-1565299624946-b28f40a0ae38", // capricciosa
  "photo-1571407970349-bc81e7e96d47", // bufala & crudo
  "photo-1593560708920-61dd98c46a4e", // pizza con verdure
  "photo-1590947132387-155cc02f3212", // ortolana
  "photo-1604382354936-07c5d9983bd3", // nduja / piccante
  "photo-1595854341625-f33ee10dbf94", // forno a legna
  "photo-1601924582970-9238bcb495d9", // pizza tagliata
];

// Foto principale per la hero (pizza appena sfornata).
const HERO_PHOTO = "photo-1604068549290-dea0e4a305ca";

/**
 * Immagine pizza per le card del menu. "lock" sceglie una foto stabile
 * dalla lista così non cambia a ogni ricarica.
 */
export function pizzaImage(lock: number, size = 600): string {
  const photo = PIZZA_PHOTOS[(lock - 1 + PIZZA_PHOTOS.length) % PIZZA_PHOTOS.length];
  return unsplash(photo, size);
}

/** Immagine grande per la sezione hero. */
export function heroImage(size = 800): string {
  return unsplash(HERO_PHOTO, size);
}
