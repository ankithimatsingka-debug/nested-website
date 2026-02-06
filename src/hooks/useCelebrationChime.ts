import { useEffect, useRef } from "react";

/**
 * Plays a short ascending C-E-G-C celebration chime using the Web Audio API.
 * Each note is a short sine-wave tone with a smooth envelope.
 */
export function useCelebrationChime(enabled: boolean = true) {
  const playedRef = useRef(false);

  useEffect(() => {
    if (!enabled || playedRef.current) return;
    playedRef.current = true;

    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    // C5, E5, G5, C6
    const frequencies = [523.25, 659.25, 783.99, 1046.5];
    const noteGap = 0.12; // seconds between note onsets
    const noteDuration = 0.18;

    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;

      const start = ctx.currentTime + i * noteGap;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.15, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + noteDuration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + noteDuration + 0.05);
    });

    // Close context after chime finishes
    const totalDuration = (frequencies.length - 1) * noteGap + noteDuration + 0.1;
    setTimeout(() => ctx.close(), totalDuration * 1000 + 200);
  }, [enabled]);
}
