import React, { useState, useEffect } from "react";
import { Sparkles, Music, Disc3, Clock } from "lucide-react";
import type { RoundTransitionState } from "../types/game";

interface TransitionOverlayProps {
  transition: RoundTransitionState;
}

export const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ transition }) => {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (!transition.isActive || transition.timerExpiresAt <= 0) {
      return;
    }

    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((transition.timerExpiresAt - Date.now()) / 1000));
      setSecondsLeft(remaining);
    }, 100);

    return () => clearInterval(interval);
  }, [transition.isActive, transition.timerExpiresAt]);

  if (!transition.isActive) return null;

  // 1. Game Start Countdown (5 seconds)
  if (transition.type === "game_start") {
    return (
      <div className="fixed inset-0 z-50 bg-[#0c0b10]/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center select-none animate-in fade-in duration-300">
        {/* Glowing Background Radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-md w-full space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg shadow-fuchsia-500/20">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            ¡Abran bien las orejas!
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white drop-shadow-md">
            El juego arranca en
          </h1>

          {/* Big pulsating countdown number */}
          <div className="relative flex items-center justify-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-800 flex items-center justify-center shadow-2xl shadow-fuchsia-500/40 border-4 border-fuchsia-400/50 animate-pulse">
              <span
                key={secondsLeft}
                className="text-6xl sm:text-8xl font-black text-white font-mono animate-in zoom-in-50 duration-200"
              >
                {secondsLeft}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-400 max-w-xs">
            Apenas escuches la canción, ¡sé el primero en tocar el botón!
          </p>
        </div>
      </div>
    );
  }

  // 2. Inter-Track Reveal Countdown (5 seconds)
  if (transition.type === "next_track") {
    return (
      <div className="fixed inset-0 z-50 bg-[#0c0b10]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center select-none animate-in fade-in duration-300">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-lg w-full space-y-6 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs sm:text-sm font-bold tracking-wider">
            <Disc3 className="w-4 h-4 animate-spin text-fuchsia-400" />
            La canción era...
          </div>

          {/* Album Artwork & Track Details */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-5 w-full flex flex-col items-center">
            {transition.revealedArtwork ? (
              <img
                src={transition.revealedArtwork}
                alt="Album Cover"
                className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl object-cover shadow-2xl border-2 border-white/20 transform hover:scale-105 transition duration-300"
              />
            ) : (
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-xl">
                <Music className="w-16 h-16" />
              </div>
            )}

            <div className="space-y-1">
              <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
                {transition.revealedTitle || "Título desconocido"}
              </h2>
              <p className="text-sm sm:text-lg text-fuchsia-400 font-semibold">
                {transition.revealedArtist || "Artista desconocido"}
              </p>
            </div>

            {/* Countdown Progress */}
            <div className="w-full pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-fuchsia-400" />
                  Siguiente canción en:
                </span>
                <span className="text-fuchsia-400 font-mono text-base font-black">
                  {secondsLeft}s
                </span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (secondsLeft / 5) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
