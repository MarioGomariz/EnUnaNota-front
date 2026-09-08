import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Trophy, Crown, RotateCcw, Home } from "lucide-react";
import type { Player } from "../types/game";
import { getAvatar } from "../utils/avatars";

interface PodiumViewProps {
  players: Player[];
  isHost: boolean;
  onRestart: () => void;
  onLeave: () => void;
}

export const PodiumView: React.FC<PodiumViewProps> = ({
  players,
  isHost,
  onRestart,
  onLeave,
}) => {
  const rankedPlayers = [...players]
    .filter((p) => !p.isHost)
    .sort((a, b) => b.score - a.score);

  const first = rankedPlayers[0];
  const second = rankedPlayers[1];
  const third = rankedPlayers[2];

  useEffect(() => {
    // Disparar confeti al entrar
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ec4899", "#a855f7", "#eab308", "#22c55e"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ec4899", "#a855f7", "#eab308", "#22c55e"],
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#0c0b10] text-[#f1f2f6] p-3.5 sm:p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background neon lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-fuchsia-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="w-full max-w-4xl space-y-6 sm:space-y-8 z-10 text-center">
        {/* Header */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4" /> ¡Fin de la Partida!
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">Podio de Ganadores</h1>
          <p className="text-xs sm:text-sm text-gray-400">¡Felicitaciones al mejor oído musical!</p>
        </div>

        {/* Podium Columns (1st, 2nd, 3rd) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 items-end max-w-xl mx-auto pt-4 sm:pt-6">
          {/* 2nd Place */}
          {second ? (
            <div className="flex flex-col items-center space-y-1.5 sm:space-y-2 animate-in slide-in-from-bottom duration-500">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${
                  getAvatar(second.avatar).bg
                } flex items-center justify-center text-xl sm:text-2xl shadow-lg`}
              >
                {getAvatar(second.avatar).emoji}
              </div>
              <p className="font-bold text-xs sm:text-sm text-white truncate max-w-[80px] sm:max-w-[100px]">
                {second.name}
              </p>
              <span className="text-xs font-mono text-gray-300 font-bold">{second.score} pts</span>
              <div className="w-full h-20 sm:h-24 md:h-32 rounded-t-2xl bg-gradient-to-b from-slate-400/40 to-slate-600/20 border-t-2 border-slate-300 flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-300">2°</span>
              </div>
            </div>
          ) : (
            <div className="h-20 sm:h-24 md:h-32" />
          )}

          {/* 1st Place (Center & Highest) */}
          {first ? (
            <div className="flex flex-col items-center space-y-1.5 sm:space-y-2 animate-in zoom-in duration-500">
              <div className="p-1 rounded-full bg-amber-400/20 text-amber-400 mb-0.5 animate-bounce">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${
                  getAvatar(first.avatar).bg
                } flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-xl shadow-amber-500/20 ring-4 ring-amber-400`}
              >
                {getAvatar(first.avatar).emoji}
              </div>
              <p className="font-black text-xs sm:text-sm md:text-base text-white truncate max-w-[90px] sm:max-w-[120px]">
                {first.name}
              </p>
              <span className="text-xs sm:text-sm font-mono text-amber-400 font-black">{first.score} pts</span>
              <div className="w-full h-28 sm:h-36 md:h-44 rounded-t-2xl bg-gradient-to-b from-amber-500/40 to-amber-700/20 border-t-4 border-amber-400 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-400">1°</span>
              </div>
            </div>
          ) : (
            <div className="h-28 sm:h-36 md:h-44" />
          )}

          {/* 3rd Place */}
          {third ? (
            <div className="flex flex-col items-center space-y-1.5 sm:space-y-2 animate-in slide-in-from-bottom duration-700">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${
                  getAvatar(third.avatar).bg
                } flex items-center justify-center text-xl sm:text-2xl shadow-lg`}
              >
                {getAvatar(third.avatar).emoji}
              </div>
              <p className="font-bold text-xs sm:text-sm text-white truncate max-w-[80px] sm:max-w-[100px]">
                {third.name}
              </p>
              <span className="text-xs font-mono text-gray-300 font-bold">{third.score} pts</span>
              <div className="w-full h-14 sm:h-16 md:h-24 rounded-t-2xl bg-gradient-to-b from-amber-800/40 to-amber-950/20 border-t-2 border-amber-700 flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-amber-700">3°</span>
              </div>
            </div>
          ) : (
            <div className="h-14 sm:h-16 md:h-24" />
          )}
        </div>

        {/* Full Rankings Table */}
        <div className="glass-panel max-w-lg mx-auto rounded-3xl p-5 border border-white/10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
            Posiciones Finales
          </span>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {rankedPlayers.map((p, index) => {
              const av = getAvatar(p.avatar);
              return (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#181622] border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-gray-400 w-4">
                      {index + 1}°
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg bg-gradient-to-br ${av.bg} flex items-center justify-center text-xs`}
                    >
                      {av.emoji}
                    </div>
                    <span className="text-xs font-bold text-white">{p.name}</span>
                  </div>
                  <span className="text-xs font-mono font-black text-fuchsia-400">
                    {p.score} pts
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-md mx-auto">
          {isHost ? (
            <button
              type="button"
              onClick={onRestart}
              className="btn-primary flex-1 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-fuchsia-500/25"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Jugar de nuevo (Revancha)</span>
            </button>
          ) : (
            <p className="text-xs text-gray-400 my-auto">Esperando que el Host inicie una revancha...</p>
          )}

          <button
            type="button"
            onClick={onLeave}
            className="btn-secondary py-3.5 px-6 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Volver al inicio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
