import { useEffect, useState } from 'react';

interface Props {
  eventIso: string;
}

interface TimeLeft {
  d: string;
  h: string;
  m: string;
  s: string;
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function getTimeLeft(iso: string): TimeLeft {
  const target = new Date(iso).getTime();
  let ms = Math.max(0, target - Date.now());
  const d = Math.floor(ms / 86_400_000); ms -= d * 86_400_000;
  const h = Math.floor(ms / 3_600_000);  ms -= h * 3_600_000;
  const m = Math.floor(ms / 60_000);     ms -= m * 60_000;
  const s = Math.floor(ms / 1_000);
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
}

const UNITS = ['DÍAS', 'HRS', 'MIN', 'SEG'] as const;

export default function Countdown({ eventIso }: Props) {
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(eventIso));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(eventIso)), 1000);
    return () => clearInterval(id);
  }, [eventIso]);

  const values = [time.d, time.h, time.m, time.s];

  return (
    <div className="grid grid-cols-4 gap-3.5 mt-6">
      {UNITS.map((unit, i) => (
        <div
          key={unit}
          className="bg-ranch-cream-warm border-2 border-ranch-brown/25 rounded-2xl py-3.5 px-1 text-center shadow-[0_4px_0_rgba(139,90,43,0.2)] reveal"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <div
            className={`font-heading text-[28px] leading-none font-extrabold ${
              unit === 'SEG' ? 'text-ranch-gold-dark' : 'text-ranch-primary'
            }`}
          >
            {values[i]}
          </div>
          <div className="font-body text-[9.5px] tracking-[0.14em] text-ranch-dark/50 mt-1 font-bold">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}
