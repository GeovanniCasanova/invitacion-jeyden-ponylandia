# Invitación Jeyden · Ponylandia 9 años

Invitación web premium construida con **Astro 5 + React + Tailwind CSS v4**. Tema vaquero / granja interactiva con pavo real como personaje central. Diseñada como base reutilizable para futuras invitaciones.

---

## Stack

| Tecnología | Versión | Por qué |
|---|---|---|
| **Astro** | 5.x | Framework estático con islas de React solo donde se necesita JS |
| **React** | 19.x | Solo para componentes interactivos (Countdown, ConfirmationScreen) |
| **Tailwind CSS** | 4.x | Estilos utility-first, sin CSS innecesario |
| **TypeScript** | strict | Tipado fuerte desde el config hasta los componentes |

---

## Instalación

```bash
cd invitacion-jeyden-ponylandia
npm install
```

---

## Ejecución en desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

---

## Build para producción

```bash
npm run build
```

La carpeta `dist/` contiene los archivos listos para desplegar. Para previsualizar:

```bash
npm run preview
```

---

## Estructura del proyecto

```
invitacion-jeyden-ponylandia/
├── config/
│   └── event.ts              ← Fuente única de verdad del evento
├── src/
│   ├── layouts/
│   │   └── Layout.astro      ← HTML base, SEO, scripts globales
│   ├── components/
│   │   ├── SEO.astro               ← Metadatos, Open Graph, Schema.org
│   │   ├── Countdown.tsx           ← Cuenta regresiva en tiempo real (React)
│   │   ├── WelcomeScreen.astro     ← Pantalla 01: Bienvenida
│   │   ├── HeroScreen.astro        ← Pantalla 02: Hero principal
│   │   ├── InfoScreen.astro        ← Pantalla 03: Información + Countdown
│   │   ├── DressCodeScreen.astro   ← Pantalla 04: Vestimenta
│   │   ├── ConfirmationScreen.tsx  ← Pantalla 05: Formulario WhatsApp (React)
│   │   └── FarewellScreen.astro    ← Pantalla 06: Despedida
│   ├── pages/
│   │   └── index.astro       ← Página principal
│   └── styles/
│       └── global.css        ← Tokens de diseño, texturas, keyframes
├── public/
│   ├── images/
│   │   └── art/              ← Ilustraciones PNG con fondo transparente
│   └── favicon.svg
├── astro.config.mjs
└── tsconfig.json
```

---

## Cómo modificar la información del evento

Todo está en `config/event.ts`. Modifica ese archivo y los cambios se propagan automáticamente.

```ts
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
  // ...
};
```

---

## Cómo reemplazar imágenes

Las ilustraciones viven en `public/images/art/`. Para reemplazar, coloca el nuevo PNG con el mismo nombre.

| Archivo | Pantalla |
|---|---|
| `pavo_saludando.png` | 01 · Bienvenida |
| `pavo_senialando_derecha.png` | 02 · Hero |
| `caballo.png` | 03 · Info + 06 · Despedida |
| `sombrero.png` / `botas.png` / `chaleco.png` | 04 · Vestimenta |
| `pavo_cabeza_solo.png` | 04 · Vestimenta (cita) |
| `pavo_sentado_cerca_madera.png` | 05 · Confirmación |
| `pavo_pastel.png` | 06 · Despedida |
| `cerdito.png` / `gallo_rooster.png` | 06 · Despedida |
| `pavo_pluma.png` | 04 · Decorativa de fondo |

---

## Cómo crear una nueva invitación

1. Copia el proyecto.
2. Actualiza `config/event.ts` con los datos del nuevo evento.
3. Reemplaza las imágenes en `public/images/art/`.
4. Ajusta los colores en `src/styles/global.css` dentro del bloque `@theme`.
5. Ejecuta `npm run build` para verificar.

Con estos cambios se reutiliza el 90% del código.

---

## Funcionalidades

- **Cuenta regresiva en tiempo real** — actualiza cada segundo.
- **Botón "Cómo llegar"** — abre Google Maps con la ubicación exacta.
- **Formulario de confirmación** — nombre y número de asistentes.
- **Botón WhatsApp** — construye el mensaje automáticamente:
  ```
  Hola, confirmo la asistencia de [Nombre].
  Asistiremos [N] personas.

  Nos vemos en Ponylandia.
  ```
- **Animaciones suaves** — CSS puro + Intersection Observer, sin librerías pesadas.
- **`prefers-reduced-motion`** — respeta la preferencia del sistema operativo.
- **Responsive** — mobile-first, funciona en 375px, 390px, 768px y 1280px.

---

## Despliegue en Vercel

Conecta el repositorio en [vercel.com](https://vercel.com) para despliegues automáticos, o usa la CLI:

```bash
npm i -g vercel
vercel
```
