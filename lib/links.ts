// Fuente única de los destinos externos de la landing.
// El número de WhatsApp real vive SOLO acá — no duplicarlo en componentes.

export const WA_NUMBER = "56981748168";

export const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://panel.miasistia.cl";

/** Link wa.me al número de Alkia, con mensaje precargado opcional (se URL-encodea acá). */
export function waLink(text?: string) {
  return text
    ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${WA_NUMBER}`;
}
