import React, { useEffect, useState } from "react";
import { Loader2, Sparkles, CloudRain, Server, X } from "lucide-react";

interface ConnectingModalProps {
  isOpen: boolean;
  type: "create" | "join";
  onCancel?: () => void;
}

export const ConnectingModal: React.FC<ConnectingModalProps> = ({
  isOpen,
  type,
  onCancel,
}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setSeconds(0);
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  // Mensaje dinámico según el tiempo transcurrido
  let statusText = type === "create" ? "Creando sala de juego..." : "Conectando a la sala...";
  let detailText = "Estableciendo conexión en tiempo real con el servidor...";

  if (seconds >= 4 && seconds < 15) {
    statusText = "Despertando servidor en la nube...";
    detailText = "El servidor estaba en reposo (Render Free Tier) y se está reactivando.";
  } else if (seconds >= 15 && seconds < 35) {
    statusText = "Iniciando servicio de juego...";
    detailText = "Cargando catálogo musical y preparando la sala multijugador.";
  } else if (seconds >= 35) {
    statusText = "¡Casi listo!";
    detailText = "Afinando los últimos detalles para iniciar la partida.";
  }

  // Progreso simulado para la barra de carga visual
  const progressPercent = Math.min(95, Math.round((seconds / 45) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none translate-x-20" />

      <div className="glass-panel w-full max-w-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative z-10 flex flex-col items-center text-center space-y-5">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
            title="Cancelar"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Animated Icon Orb */}
        <div className="relative flex items-center justify-center mt-2">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-fuchsia-600/30 to-purple-600/30 border border-fuchsia-500/40 flex items-center justify-center shadow-lg shadow-fuchsia-500/20 animate-pulse">
            <Server className="w-9 h-9 text-fuchsia-400" />
          </div>
          <div className="absolute -inset-2 rounded-3xl border border-fuchsia-500/20 animate-ping pointer-events-none" />
          <div className="absolute -bottom-1 -right-1 bg-[#181622] p-1.5 rounded-xl border border-white/10 shadow-md">
            <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
          </div>
        </div>

        {/* Main Status Text */}
        <div className="space-y-2">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center justify-center gap-2">
            <span>{statusText}</span>
            <Sparkles className="w-4 h-4 text-fuchsia-400 animate-spin" />
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
            {detailText}
          </p>
        </div>

        {/* Progress Bar & Timer */}
        <div className="w-full space-y-2 pt-1">
          <div className="w-full h-2 bg-[#181622] rounded-full overflow-hidden border border-white/5 relative">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-1000 ease-out rounded-full relative"
              style={{ width: `${Math.max(8, progressPercent)}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono px-1">
            <span>Tiempo transcurrido:</span>
            <span className="text-fuchsia-400 font-bold">{seconds}s</span>
          </div>
        </div>

        {/* Render Free Tier Info Box */}
        <div className="w-full p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-left space-y-1">
          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-300">
            <CloudRain className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
            <span>¿Por qué demora unos segundos?</span>
          </div>
          <p className="text-[11px] text-gray-400 leading-normal">
            En el plan gratuito de Render, el servidor duerme tras 15 min de inactividad y tarda ~30s en reactivarse por primera vez. Las próximas partidas conectan de inmediato.
          </p>
        </div>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-xs text-gray-400 hover:text-white font-medium py-1.5 transition"
          >
            Cancelar espera
          </button>
        )}
      </div>
    </div>
  );
};
