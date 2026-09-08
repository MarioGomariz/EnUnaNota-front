import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  FileText,
  SkipForward,
  Check,
  X,
  Plus,
  Minus,
  UserX,
  Volume2,
  VolumeX,
  Clock,
  Music,
} from "lucide-react";
import type { Player, Track, PlaybackState, BuzzerState } from "../types/game";
import { getAvatar } from "../utils/avatars";
import { LyricsModal } from "./LyricsModal";

interface HostGameViewProps {
  roomCode: string;
  currentTrackIndex: number;
  playlist: Track[];
  playback: PlaybackState;
  buzzer: BuzzerState;
  players: Player[];
  mySessionId: string;
  onPlay: () => void;
  onPause: (currentTime?: number) => void;
  onRepeat1s: () => void;
  onSeek: (currentTime: number) => void;
  onSkip: () => void;
  onValidate: (isValid: boolean) => void;
  onAdjustScore: (playerId: string, delta: number) => void;
  onKickPlayer: (playerId: string) => void;
}

export const HostGameView: React.FC<HostGameViewProps> = ({
  roomCode,
  currentTrackIndex,
  playlist,
  playback,
  buzzer,
  players,
  onPlay,
  onPause,
  onRepeat1s,
  onSeek,
  onSkip,
  onValidate,
  onAdjustScore,
  onKickPlayer,
}) => {
  const currentTrack = playlist[currentTrackIndex] || playlist[0];
  const totalTracks = playlist.length;

  const [seekValue, setSeekValue] = useState(0);
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem("enuna_volume");
    return saved !== null ? Number(saved) : 1;
  });
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("enuna_is_muted") === "true";
  });
  const [showLyricsModal, setShowLyricsModal] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  // Timer countdown local display
  const [timeLeft, setTimeLeft] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sincronizar audio con el estado de Colyseus y auto-reproducir
  useEffect(() => {
    if (!currentTrack?.previewUrl) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.previewUrl);
    } else if (audioRef.current.src !== currentTrack.previewUrl) {
      audioRef.current.src = currentTrack.previewUrl;
      audioRef.current.currentTime = 0;
    }

    const audio = audioRef.current;
    audio.volume = isMuted ? 0 : volume;

    const handleTimeUpdate = () => {
      setTrackProgress(audio.currentTime);

      // Si es modo repeat 1s, pausar a los 1.5s
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
      audio.play().catch((e) => console.log("Audio play prevented:", e));
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [playback.isPlaying, playback.mode, playback.timestamp, currentTrack?.previewUrl, isMuted, volume]);

  // Actualizar volumen local y persistencia
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem("enuna_is_muted", String(next));
      return next;
    });
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    localStorage.setItem("enuna_volume", String(newVol));
    if (isMuted && newVol > 0) {
      setIsMuted(false);
      localStorage.setItem("enuna_is_muted", "false");
    }
  };

  // Countdown timer para el buzzer
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
  const queueEntries = buzzer.queue || [];


  return (
    <div className="min-h-[100dvh] bg-[#0c0b10] text-[#f1f2f6] flex flex-col justify-between p-3 sm:p-5 md:p-6 select-none">
      {/* Top Header Bar (Matches Screenshots 4 & 5) */}
      <div className="glass-panel rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 border border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 sm:gap-4 mb-4">
        {/* Progress & Track Count */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-[180px] max-w-xs">
          <span className="text-xs font-bold text-gray-300 whitespace-nowrap">
            Canción {currentTrackIndex + 1} de {totalTracks}
          </span>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-fuchsia-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentTrackIndex + 1) / totalTracks) * 100}%` }}
            />
          </div>
        </div>

        {/* Right Controls: Room Code & Volume */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs font-mono font-bold text-fuchsia-400 bg-fuchsia-500/10 px-2.5 py-1 rounded-lg border border-fuchsia-500/20">
            {roomCode}
          </span>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-white transition cursor-pointer"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
              className="w-16 sm:w-20 md:w-24 h-1 bg-white/10 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Main Game Grid (3 Columns / Layout matching Screenshots 4 & 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 flex-1 items-start">
        {/* Left Column: Host Track Player Card (3 cols on desktop, 2nd on mobile) */}
        <div className="order-2 lg:order-1 lg:col-span-4 glass-panel rounded-3xl p-4 sm:p-5 border border-white/10 shadow-xl space-y-4">
          {/* Album Artwork & Info */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {currentTrack?.artworkUrl ? (
                <img
                  src={currentTrack.artworkUrl}
                  alt=""
                  className="w-14 h-14 rounded-2xl object-cover shadow-lg border border-white/10"
                />
              ) : (
                <div className="w-14 h-14 rounded-2xl bg-purple-900/40 flex items-center justify-center text-purple-300">
                  <Music className="w-6 h-6" />
                </div>
              )}
              <div>
                <h3 className="font-bold text-base text-white leading-tight">
                  {currentTrack?.title || "Cargando tema..."}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{currentTrack?.artist || ""}</p>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
              ● Fácil
            </span>
          </div>

          {/* Progress Bar & Time */}
          <div className="space-y-1.5 pt-1">
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-fuchsia-500 h-full rounded-full transition-all"
                style={{ width: `${(trackProgress / 30) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-gray-400 font-mono">
              <span>{Math.floor(trackProgress)}s</span>
              <span>29s</span>
            </div>
          </div>

          {/* Big Play / Seguir Button */}
          <button
            type="button"
            onClick={playback.isPlaying ? () => onPause(trackProgress) : onPlay}
            className="btn-primary w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            {playback.isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Seguir</span>
              </>
            )}
          </button>

          {/* Action Buttons Row: Pausar, Repetir 1s, Letra */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => onPause(trackProgress)}
              className="btn-secondary py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Pause className="w-3.5 h-3.5 text-amber-400" />
              <span>Pausar</span>
            </button>
            <button
              type="button"
              onClick={onRepeat1s}
              className="btn-secondary py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Repetir 1s</span>
            </button>
            <button
              type="button"
              onClick={() => setShowLyricsModal(true)}
              className="btn-secondary py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 text-fuchsia-300"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Letra</span>
            </button>
          </div>

          {/* Seek Slider Card */}
          <div className="p-3.5 rounded-2xl bg-[#171524] border border-white/5 space-y-2">
            <span className="text-[11px] text-gray-400 block">Reproducir desde un punto de la canción</span>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={seekValue}
                onChange={(e) => setSeekValue(Number(e.target.value))}
                className="flex-1 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <span className="text-xs font-mono text-gray-300 w-6">{seekValue}s</span>
            </div>
            <button
              type="button"
              onClick={() => onSeek(seekValue)}
              className="w-full py-1.5 rounded-xl bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-bold transition"
            >
              Reproducir desde aquí
            </button>
          </div>

          {/* Skip Button */}
          <div className="pt-2 border-t border-white/5">
            <button
              type="button"
              onClick={onSkip}
              className="btn-secondary w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 text-gray-300 hover:text-white"
            >
              <SkipForward className="w-3.5 h-3.5" />
              <span>Pasarla</span>
            </button>
            <p className="text-[10px] text-gray-500 mt-1.5 text-center">
              * Pasá la canción si ningún jugador la adivinó
            </p>
          </div>
        </div>

        {/* Center Column: Control & Response Validation (5 cols on desktop, 1st on mobile) */}
        <div className="order-1 lg:order-2 lg:col-span-5 space-y-4">
          {buzzer.status === "answering" && activePlayer ? (
            /* State 2: Player has buzzed -> Validate answer (Matches Screenshot 5) */
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Top: Orden para responder con cola completa */}
              <div className="glass-panel rounded-3xl p-4 sm:p-5 border border-purple-500/30 shadow-xl text-center space-y-3">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider">
                    Orden para responder {queueEntries.length > 1 && `(${queueEntries.length} en cola)`}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 overflow-x-auto py-1">
                  {queueEntries.length > 0 ? (
                    queueEntries.map((entry, index) => {
                      const av = getAvatar(entry.playerAvatar);
                      const isFirst = index === 0;
                      return (
                        <div
                          key={`${entry.playerId}-${index}`}
                          className={`p-3 rounded-2xl border flex flex-col items-center justify-center min-w-[95px] transition ${
                            isFirst
                              ? "bg-[#1c192c] border-fuchsia-500/60 shadow-lg shadow-fuchsia-500/30 ring-2 ring-fuchsia-500/30"
                              : "bg-[#14121f] border-white/10 opacity-75"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${av.bg} flex items-center justify-center text-lg mb-1`}
                          >
                            {av.emoji}
                          </div>
                          <span className={`text-[10px] font-black ${isFirst ? "text-fuchsia-400" : "text-gray-400"}`}>
                            {index + 1}° {isFirst && "— Turno"}
                          </span>
                          <span className="text-xs font-bold text-white truncate max-w-[90px]">{entry.playerName}</span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-[#1c192c] border border-fuchsia-500/40 flex flex-col items-center justify-center min-w-[100px] shadow-lg shadow-fuchsia-500/20">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${activeAvatar?.bg} flex items-center justify-center text-xl mb-1`}
                      >
                        {activeAvatar?.emoji}
                      </div>
                      <span className="text-[10px] font-bold text-fuchsia-400">1° — Turno</span>
                      <span className="text-xs font-bold text-white truncate max-w-[110px]">{activePlayer.name}</span>
                    </div>
                  )}
                </div>
                {queueEntries.length > 1 && (
                  <p className="text-[11px] text-gray-400">
                    Si marcás "No válida", el turno pasará automáticamente a <strong className="text-white">{queueEntries[1].playerName} (2°)</strong>.
                  </p>
                )}
              </div>

              {/* Bottom: Turn action with Timer and Valid/Invalid Buttons */}
              <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl text-center space-y-4 sm:space-y-5">
                {/* Countdown Timer */}
                <div className="flex items-center justify-center gap-2">
                  <Clock className={`w-5 h-5 ${timeLeft === 0 ? "text-amber-400" : "text-fuchsia-400 animate-spin"}`} />
                  <span className="text-sm font-bold text-gray-300">
                    {timeLeft > 0 ? (
                      <>
                        Tiempo para responder:{" "}
                        <span
                          className={`text-base font-black font-mono ${
                            timeLeft <= 3 ? "text-red-400 animate-pulse" : "text-fuchsia-400"
                          }`}
                        >
                          {timeLeft}s
                        </span>
                      </>
                    ) : (
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                        ⏱️ Tiempo cumplido — ¿Le das el punto igual?
                      </span>
                    )}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {activePlayer.name} tiene el turno
                </h2>

                <div className="grid grid-cols-2 gap-3 sm:gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => onValidate(true)}
                    className="p-4 sm:p-5 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 flex flex-col items-center justify-center gap-1.5 transition transform hover:scale-[1.02] shadow-lg shadow-emerald-900/20 cursor-pointer"
                  >
                    <Check className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
                    <span className="font-bold text-xs sm:text-sm">Válida (+1 pt)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onValidate(false)}
                    className="p-4 sm:p-5 rounded-2xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/40 hover:border-rose-500 text-rose-400 flex flex-col items-center justify-center gap-1.5 transition transform hover:scale-[1.02] shadow-lg shadow-rose-900/20 cursor-pointer"
                  >
                    <X className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
                    <span className="font-bold text-xs sm:text-sm">No válida</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* State 1: Normal playback / Waiting for buzzer (Matches Screenshot 4) */
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl text-center space-y-4 sm:space-y-6 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[320px]">
              <h2 className="text-xl sm:text-2xl font-bold text-white max-w-sm">
                Controla la reproducción y valida las respuestas
              </h2>
              <p className="text-xs text-gray-400 max-w-xs">
                Dale a "Seguir" o "Repetir 1s" para que suene la música. Cuando un jugador toque el
                buzzer, la canción se pausará automáticamente para que valides su respuesta.
              </p>

              {/* Connected Players Status Grid */}
              <div className="w-full pt-4 border-t border-white/5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-3">
                  Jugadores en Sala
                </span>
                <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                  {players
                    .filter((p) => !p.isHost)
                    .map((p) => {
                      const av = getAvatar(p.avatar);
                      return (
                        <div
                          key={p.id}
                          className={`p-2.5 rounded-xl border flex flex-col items-center min-w-[75px] ${
                            p.isLockedOut
                              ? "bg-red-950/20 border-red-500/30 opacity-60"
                              : "bg-[#181622] border-white/10"
                          }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${av.bg} flex items-center justify-center text-base mb-1`}
                          >
                            {av.emoji}
                          </div>
                          <span className="text-xs font-bold text-white truncate max-w-[70px]">
                            {p.name}
                          </span>
                          <span className="text-[10px] text-fuchsia-400 font-mono font-semibold">
                            {p.score} pts
                          </span>
                          {p.isLockedOut && (
                            <span className="text-[9px] text-red-400 font-bold">Bloqueado</span>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Scoreboard & Host Moderation Controls (3 cols on desktop, 3rd on mobile) */}
        <div className="order-3 lg:col-span-3 glass-panel rounded-3xl p-4 sm:p-5 border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Marcador</span>
            <span className="text-xs text-gray-500 font-medium">
              {players.filter((p) => !p.isHost).length} adivinando
            </span>
          </div>

          <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1">
            {players
              .filter((p) => !p.isHost)
              .sort((a, b) => b.score - a.score)
              .map((p, index) => {
                const av = getAvatar(p.avatar);
                return (
                  <div
                    key={p.id}
                    className="p-3 rounded-2xl bg-[#181622] border border-white/5 hover:border-white/10 transition space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-amber-400 w-4">
                          {index + 1}°
                        </span>
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${av.bg} flex items-center justify-center text-sm`}
                        >
                          {av.emoji}
                        </div>
                        <span className="text-xs font-bold text-white truncate max-w-[90px]">
                          {p.name}
                        </span>
                      </div>
                      <span className="text-sm font-black font-mono text-fuchsia-400">
                        {p.score}
                      </span>
                    </div>

                    {/* Host Moderation Controls for Score Correction */}
                    <div className="flex items-center justify-end gap-1.5 pt-1 border-t border-white/5">
                      <button
                        type="button"
                        onClick={() => onAdjustScore(p.id, -1)}
                        className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs"
                        title="Restar 1 punto"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onAdjustScore(p.id, 1)}
                        className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs"
                        title="Sumar 1 punto"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onKickPlayer(p.id)}
                        className="p-1 rounded-md bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs ml-2"
                        title="Expulsar jugador"
                      >
                        <UserX className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Lyrics Modal with Phrase Search */}
      <LyricsModal
        isOpen={showLyricsModal}
        onClose={() => setShowLyricsModal(false)}
        title={currentTrack?.title || ""}
        artist={currentTrack?.artist || ""}
      />
    </div>
  );
};
