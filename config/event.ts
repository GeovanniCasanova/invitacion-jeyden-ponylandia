export const event = {
  name: 'Jeyden',
  age: 9,
  dateIso: '2026-08-16T14:30:00',
  dateDisplay: 'Domingo 16 de agosto',
  timeDisplay: '2:30 p. m.',
  venue: 'Ponylandia',
  address: 'Carretera Mérida – Motul km 15, Mocochá, Yucatán',
  mapsUrl: 'https://maps.google.com/?q=Ponylandia+Mococha+Yucatan',
  phone: '529997371285',
  confirmationDeadline: '10 de agosto',
  dressCode: 'Vaquera (opcional)',
  activities: ['Ven a alimentar los animales', 'Paseo en pony', 'Habrá piscina'] as const,
  tagline: '¡Hay una celebración en Ponylandia!',
  heroDescription:
    'Acompáñanos a vivir una aventura en la granja, con animales en miniatura que nunca habías visto',
  farewell: '¡Nos vemos en Ponylandia!',
  year: 2026,
  showSecondaryAnimals: true,
  siteUrl: 'https://invitacion-jeyden-ponylandia.vercel.app',
} as const;

export function buildWhatsAppUrl(name: string): string {
  const msg =
    `Hola, confirmo mi asistencia.\n` +
    `Mi nombre es ${name}.\n\n` +
    `Nos vemos en ${event.venue}.`;
  return `https://wa.me/${event.phone}?text=${encodeURIComponent(msg)}`;
}
