import { useState } from 'react';
import { event, buildWhatsAppUrl } from '../../config/event';

export default function ConfirmationScreen() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(4);
  const [confirmed, setConfirmed] = useState(false);

  function handleConfirm() {
    if (!name.trim()) return;
    const url = buildWhatsAppUrl(name.trim(), guests);
    window.open(url, '_blank', 'noopener,noreferrer');
    setConfirmed(true);
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden confirmation-bg flex flex-col"
      aria-label="Confirmación de asistencia"
    >
      {/* Contenido */}
      <div className="relative flex flex-col w-full max-w-sm mx-auto px-6 pt-10 pb-8 flex-1">

        {/* Label */}
        <span className="font-body font-bold text-[10.5px] tracking-[0.26em] text-ranch-teal">
          CONFIRMA TU LUGAR
        </span>

        {/* Título */}
        <h2 className="mt-3 font-heading font-extrabold text-[34px] leading-[1.06] text-ranch-cream-light text-pretty">
          ¿Nos acompañas a {event.venue}?
        </h2>

        {/* Formulario card */}
        <div className="mt-6 bg-ranch-cream-warm rounded-[22px] px-5 py-5 flex flex-col gap-4 shadow-[0_10px_24px_rgba(0,0,0,0.22)]">

          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="guest-name"
              className="font-body font-bold text-[10.5px] tracking-[0.16em] text-ranch-dark/50"
            >
              NOMBRE DEL INVITADO
            </label>
            <input
              id="guest-name"
              type="text"
              placeholder="Escribe tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-[52px] rounded-2xl border-2 border-ranch-brown/30 bg-ranch-cream px-4 font-body font-semibold text-base text-ranch-dark outline-none focus:border-ranch-primary transition-colors"
              autoComplete="given-name"
            />
          </div>

          {/* Número de asistentes */}
          <div className="flex flex-col gap-2.5">
            <label className="font-body font-bold text-[10.5px] tracking-[0.16em] text-ranch-dark/50">
              NÚMERO DE ASISTENTES
            </label>
            <div className="flex items-center gap-3.5">
              <button
                type="button"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="w-[52px] h-[52px] rounded-2xl border-2 border-ranch-brown/30 bg-ranch-cream font-heading font-bold text-2xl text-ranch-brown cursor-pointer"
                aria-label="Reducir número de asistentes"
              >
                –
              </button>
              <div
                className="flex-1 h-[52px] rounded-2xl bg-ranch-primary flex items-center justify-center font-heading font-extrabold text-2xl text-ranch-cream-light"
                aria-live="polite"
                aria-label={`${guests} asistentes`}
              >
                {guests}
              </div>
              <button
                type="button"
                onClick={() => setGuests((g) => Math.min(12, g + 1))}
                className="w-[52px] h-[52px] rounded-2xl border-2 border-ranch-brown/30 bg-ranch-cream font-heading font-bold text-2xl text-ranch-brown cursor-pointer"
                aria-label="Aumentar número de asistentes"
              >
                +
              </button>
            </div>
          </div>

          {/* Botón WhatsApp */}
          <button
            type="button"
            onClick={handleConfirm}
            disabled={!name.trim()}
            className="h-[60px] rounded-2xl bg-ranch-green text-ranch-cream-light font-heading font-bold text-[17.5px] shadow-[0_6px_0_#145A42] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:translate-y-1 active:shadow-[0_2px_0_#145A42]"
            aria-label="Confirmar asistencia por WhatsApp"
          >
            Confirmar por WhatsApp
          </button>

          {/* Mensaje de confirmación */}
          {confirmed && (
            <p
              className="text-center font-body font-bold text-[12.5px] text-ranch-green"
              role="status"
              aria-live="polite"
            >
              ¡Listo! Se abrirá WhatsApp con tu confirmación.
            </p>
          )}
        </div>

        {/* Fecha límite */}
        <p className="mt-4 text-center font-body text-[12.5px] leading-relaxed text-ranch-cream-light/55">
          Confirma antes del {event.confirmationDeadline}
        </p>

        {/* Pavo sentado en la cerca */}
        <div className="mt-auto h-[186px] flex justify-center">
          <div className="w-[236px] h-[186px]">
            <img
              src="/images/art/pavo_sentado_cerca_madera.png"
              alt="Pavo real sentado en la cerca de madera"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
              width="236"
              height="186"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
