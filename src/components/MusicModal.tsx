import { useState, useRef } from 'react';

export default function MusicModal() {
  const [showModal, setShowModal] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function handleAccept() {
    setShowModal(false);
    setAccepted(true);
    setPlaying(true);
    audioRef.current?.play();
  }

  function handleDecline() {
    setShowModal(false);
  }

  function togglePlay() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/images/cancion_granja.mp3" loop />

      {/* Modal de permiso */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="¿Quieres escuchar música?"
        >
          <div className="bg-ranch-cream-warm rounded-3xl p-6 mx-6 max-w-xs w-full text-center shadow-2xl">
            <img
              src="/images/art/pavo_musica.png"
              alt="Pavo musical"
              className="w-36 h-36 object-contain mx-auto -mt-2 mb-2"
              width="144"
              height="144"
            />
            <h2 className="font-heading font-bold text-2xl text-ranch-primary leading-tight mb-1">
              ¿Ponemos música?
            </h2>
            <p className="font-body text-sm text-ranch-dark/60 mb-5">
              Tenemos una canción especial para acompañar la invitación 🎵
            </p>
            <button
              onClick={handleAccept}
              className="w-full h-14 rounded-2xl bg-ranch-primary text-ranch-cream-light font-heading font-bold text-lg shadow-[0_6px_0_#093943] mb-3 active:translate-y-1 active:shadow-[0_2px_0_#093943] transition-transform"
            >
              ¡Sí, poner música!
            </button>
            <button
              onClick={handleDecline}
              className="font-body text-sm text-ranch-dark/45 py-2 w-full"
            >
              No, gracias
            </button>
          </div>
        </div>
      )}

      {/* Botón flotante de control de música */}
      {accepted && (
        <button
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-ranch-primary text-ranch-cream-light shadow-[0_6px_0_#093943] flex items-center justify-center text-2xl active:translate-y-1 active:shadow-[0_2px_0_#093943] transition-transform"
          aria-label={playing ? 'Pausar música' : 'Reanudar música'}
        >
          {playing ? '⏸' : '🎵'}
        </button>
      )}
    </>
  );
}
