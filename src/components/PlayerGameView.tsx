import { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Radio,
  Clock,
  Lock,
  Sparkles,
  Keyboard,
} from "lucide-react";
import type { Player, Track, PlaybackState, BuzzerState } from "../types/game";
import { getAvatar } from "../utils/avatars";

interface PlayerGameViewProps {
  roomCode: string;
  currentTrackIndex: number;
  totalTracks: number;
  currentTrack?: Track;
  playback: PlaybackState;
  buzzer: BuzzerState;
  players: Player[];
  mySessionId: string;
  onPressBuzzer: () => void;
}

export const PlayerGameView: React.FC<PlayerGameViewProps> = ({
  roomCode,
  currentTrackIndex,
  totalTracks,
  currentTrack,
  playback,
  buzzer,
  players,
  mySessionId,
  onPressBuzzer,
}) => {
  const [isLocalMuted, setIsLocalMuted] = useState(() => {
    return localStorage.getItem("enuna_is_muted") === "true";
  });
  const [timeLeft, setTimeLeft] = useState(0);

  const me = players.find((p) => p.id === mySessionId);
  const queueEntries = buzzer.queue || [];
  const myQueueIndex = queueEntries.findIndex((e) => e.playerId === mySessionId);
  const isLockedOut = me?.isLockedOut || false;

  const isMyTurn = myQueueIndex === 0 && buzzer.status === "answering";
  const isInQueueWaiting = myQueueIndex > 0;
  const isSomeoneElseTurn = buzzer.status === "answering" && !isMyTurn && !isInQueueWaiting;
  const canPressBuzzer = !isLockedOut && myQueueIndex === -1;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sincronizar audio en el navegador del jugador y auto-play
  useEffect(() => {
    if (!currentTrack?.previewUrl) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.previewUrl);
    } else if (audioRef.current.src !== currentTrack.previewUrl) {
      audioRef.current.src = currentTrack.previewUrl;
      audioRef.current.currentTime = 0;
    }

    const audio = audioRef.current;
    audio.volume = isLocalMuted ? 0 : 1;

    const handleTimeUpdate = () => {
      if (playback.mode === "repeat_1s" && audio.currentTime >= 1.5) {
        audio.pause();
        audio.currentTime = 0;
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    if (playback.isPlaying) {
      if (playback.mode === "repeat_1s") {
        audio.currentTime = 0;
      } else if (Math.abs(audio.currentTime - playback.currentTime) > 1) {
        audio.currentTime = playback.currentTime;
      }
      audio.play().catch((e) => console.log("Player audio play blocked:", e));
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [playback.isPlaying, playback.mode, playback.timestamp, currentTrack?.previewUrl, isLocalMuted]);

  // Actualizar volumen local y persistencia
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isLocalMuted ? 0 : 1;
    }
  }, [isLocalMuted]);

  const toggleLocalMute = () => {
    setIsLocalMuted((prev) => {
      const next = !prev;
      localStorage.setItem("enuna_is_muted", String(next));
      return next;
    });
  };

  // Escuchar tecla Espacio para presionar el buzzer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && canPressBuzzer) {
        e.preventDefault();
        onPressBuzzer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [canPressBuzzer, onPressBuzzer]);

  // Countdown timer
  useEffect(() => {
    if (buzzer.status === "answering" && buzzer.timerExpiresAt > 0) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, Math.ceil((buzzer.timerExpiresAt - Date.now()) / 1000));
        setTimeLeft(remaining);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setTimeLeft(0);
    }
  }, [buzzer.status, buzzer.timerExpiresAt]);

  const activePlayer = players.find((p) => p.id === buzzer.activePlayerId);
  const activeAvatar = activePlayer ? getAvatar(activePlayer.avatar) : null;

  return (
    <div className="min-h-[100dvh] bg-[#0c0b10] text-[#f1f2f6] flex flex-col justify-between p-3 sm:p-5 md:p-6 select-none relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-fuchsia-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Top Header */}
      <div className="glass-panel rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 border border-white/10 flex items-center justify-between mb-3 sm:mb-4 z-10">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="text-xs font-bold text-gray-300">
            Canción {currentTrackIndex + 1} de {totalTracks}
          </span>
          <span className="text-xs font-mono font-bold text-fuchsia-400 bg-fuchsia-500/10 px-2 py-0.5 rounded-md border border-fuchsia-500/20">
            {roomCode}
          </span>
        </div>

        {/* Local Mute Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocalMute}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
              isLocalMuted
                ? "bg-red-500/20 border-red-500/40 text-red-400"
                : "bg-white/5 border-white/10 text-gray-300 hover:text-white"
            }`}
            title="Silenciá tu navegador si están jugando en la misma habitación"
          >
            {isLocalMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden xs:inline">
              {isLocalMuted ? "Silenciado" : "Audio Activo"}
            </span>
          </button>
        </div>
      </div>

      {/* Center Action Area: BIG INTERACTIVE BUZZER */}
      <div className="flex-1 flex flex-col items-center justify-center my-auto py-4 sm:py-6 z-10 text-center">
        {/* Status Header */}
        <div className="mb-6 sm:mb-8 max-w-md px-2">
          {isMyTurn ? (
            <div className="space-y-2 animate-in zoom-in duration-200">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs sm:text-sm font-black uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> ¡TENÉS EL TURNO (1°)!
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                {timeLeft > 0 ? "¡Cantá o decí el nombre!" : "¡Tiempo cumplido!"}
              </h2>
              <div className="flex items-center justify-center gap-2 font-mono text-base sm:text-lg font-bold">
                <Clock className={`w-5 h-5 ${timeLeft === 0 ? "text-amber-400" : "text-fuchsia-400 animate-spin"}`} />
                <span className={timeLeft === 0 ? "text-amber-400 text-xs sm:text-sm" : "text-fuchsia-400"}>
                  {timeLeft > 0 ? `Tiempo: ${timeLeft}s` : "Esperando decisión del Host..."}
                </span>
              </div>
            </div>
          ) : isInQueueWaiting ? (
            <div className="space-y-2 sm:space-y-3 animate-in zoom-in duration-200">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs sm:text-sm font-black uppercase tracking-wider">
                ⏳ ¡Anotado en la fila!
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                Estás <span className="text-fuchsia-400">{myQueueIndex + 1}°</span> en la fila
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                {activePlayer ? (
                  <>
                    <strong className="text-white">{activePlayer.name}</strong> está respondiendo ahora. Si falla, ¡el turno pasará a vos!
                  </>
                ) : (
                  "Aguardando que termine el turno actual..."
                )}
              </p>
            </div>
          ) : isSomeoneElseTurn ? (
            <div className="space-y-2 sm:space-y-3 animate-in fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold">
                <Radio className="w-3.5 h-3.5 animate-pulse text-fuchsia-400" />
                {timeLeft > 0 ? `${activePlayer?.name} respondiendo... (${timeLeft}s)` : "Tiempo cumplido"}
              </div>
              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${activeAvatar?.bg} flex items-center justify-center text-base sm:text-lg`}
                >
                  {activeAvatar?.emoji}
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate max-w-[200px]">
                  {activePlayer?.name} (1°)
                </h2>
              </div>
              <p className="text-xs text-fuchsia-300 font-semibold">
                ¿Te la sabés? ¡Tocá "¡YO!" para anotarte {queueEntries.length + 1}° en la fila!
              </p>
            </div>
          ) : isLockedOut ? (
            <div className="space-y-2 p-3.5 sm:p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto" />
              <h3 className="text-base sm:text-lg font-bold text-red-400">Bloqueado para esta canción</h3>
              <p className="text-xs text-gray-400">
                Tu respuesta fue no válida o se agotó el tiempo. Esperá al próximo tema.
              </p>
            </div>
          ) : (
            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                {playback.isPlaying ? "🎵 Escuchá atentamente..." : "Esperando que suene la música"}
              </h2>
              <p className="text-xs text-gray-400">
                Tocá el botón gigante apenas reconozcas el tema.
              </p>
            </div>
          )}
        </div>

        {/* Big Buzzer Button */}
        <button
          type="button"
          disabled={!canPressBuzzer}
          onClick={onPressBuzzer}
          className={`w-48 h-48 xs:w-56 xs:h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center transition transform select-none cursor-pointer border-4 touch-manipulation ${
            isMyTurn
              ? "bg-emerald-500 border-emerald-300 text-white shadow-2xl shadow-emerald-500/50 scale-105"
              : isInQueueWaiting
              ? "bg-[#251b3d] border-fuchsia-500/60 text-fuchsia-300 shadow-xl shadow-fuchsia-950/40 cursor-default"
              : isLockedOut
              ? "bg-[#181622] border-white/5 text-gray-600 opacity-50 cursor-not-allowed"
              : "btn-primary border-white/20 animate-buzzer hover:scale-105 active:scale-95"
          }`}
        >
          <span className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight drop-shadow-md">
            {isMyTurn
              ? "¡TUYO!"
              : isInQueueWaiting
              ? `¡EN FILA (${myQueueIndex + 1}°)!`
              : isLockedOut
              ? "✕"
              : "¡YO!"}
          </span>
          <div className="flex items-center gap-1 mt-2 text-[11px] font-semibold opacity-90">
            {canPressBuzzer ? (
              <>
                <Keyboard className="w-3.5 h-3.5" />
                <span>Tocar o Espacio</span>
              </>
            ) : isInQueueWaiting ? (
              <span>Posición #{myQueueIndex + 1}</span>
            ) : isMyTurn ? (
              <span>¡Decí tu respuesta!</span>
            ) : (
              <span>Esperando ronda</span>
            )}
          </div>
        </button>
      </div>

      {/* Bottom Scoreboard */}
      <div className="glass-panel rounded-2xl p-3.5 sm:p-4 border border-white/10 z-10">
        <div className="flex items-center justify-between mb-2.5 sm:mb-3 px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Marcador</span>
          <span className="text-xs font-bold text-fuchsia-400">Tu puntaje: {me?.score || 0} pts</span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-1">
          {players
            .filter((p) => !p.isHost)
            .sort((a, b) => b.score - a.score)
            .map((p, index) => {
              const av = getAvatar(p.avatar);
              const isMe = p.id === mySessionId;
              return (
                <div
                  key={p.id}
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border shrink-0 ${
                    isMe
                      ? "bg-fuchsia-950/40 border-fuchsia-500/40 shadow-md shadow-fuchsia-500/20"
                      : "bg-[#181622] border-white/5"
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-gray-400">{index + 1}°</span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-gradient-to-br ${av.bg} flex items-center justify-center text-xs`}
                  >
                    {av.emoji}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white truncate max-w-[80px]">
                      {p.name} {isMe && "(Tú)"}
                    </p>
                    <p className="text-[10px] text-fuchsia-400 font-mono font-semibold">
                      {p.score} pts
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
