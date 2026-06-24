// Helper per immagini fittizie a tema pizza (loremflickr).
// Il parametro "lock" fissa l'immagine così non cambia a ogni ricarica.
// Sostituire con foto reali quando disponibili.
export function pizzaImage(lock: number, size = 600): string {
  return `https://loremflickr.com/${size}/${size}/pizza,food?lock=${lock}`;
}
