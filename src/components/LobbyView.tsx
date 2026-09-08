import { useState } from "react";
import {
  Share2,
  Copy,
  Check,
  Eye,
  EyeOff,
  Play,
  LogOut,
  Music,
  Crown,
  Keyboard,
  Users,
  ListMusic,
} from "lucide-react";
import type { Player, Track } from "../types/game";
import { getAvatar } from "../utils/avatars";

interface LobbyViewProps {
  roomCode: string;
  players: Player[];
  playlist: Track[];
  isHost: boolean;
  mySessionId: string;
  onStartGame: () => void;
  onEditPlaylist?: () => void;
  onLeaveRoom: () => void;
}

export const LobbyView: React.FC<LobbyViewProps> = ({
  roomCode,
  players,
  playlist,
  isHost,
  mySessionId,
  onStartGame,
  onEditPlaylist,
  onLeaveRoom,
}) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "¡Sumate a En una Nota!",
          text: `Jugá a En una Nota con nosotros. Código de sala: ${roomCode}`,
          url: window.location.href,
        });
      } catch (e) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const maxSlots = 8;
  const emptySlotsCount = Math.max(0, maxSlots - players.length);

  return (
    <div className="min-h-[100dvh] bg-[#0c0b10] text-[#f1f2f6] p-3.5 sm:p-6 md:p-8 flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl space-y-5 sm:space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            ¡Tu sala está lista!
          </h1>
          <span className="text-xs text-fuchsia-400 font-medium px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
            {players.length} de {maxSlots} jugadores
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Left Column: Room Code & Summary (Matches Screenshot 3) */}
          <div className="space-y-4">
            {/* Room Code Card */}
            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 shadow-xl text-center space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Código de Sala
              </span>

              <div className="flex items-center justify-center py-2">
                {showCode ? (
                  <span className="text-2xl sm:text-3xl font-mono font-black tracking-[0.2em] sm:tracking-[0.25em] text-white bg-[#1a1828] px-5 sm:px-6 py-2.5 rounded-2xl border border-white/10 shadow-inner">
                    {roomCode}
                  </span>
                ) : (
                  <div className="flex gap-2.5 items-center justify-center py-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-white/70 animate-pulse" />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="btn-primary flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Compartir</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn-secondary flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "¡Copiado!" : "Copiar"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowCode(!showCode)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
                  title="Ocultar / Mostrar código"
                >
                  {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-[11px] text-gray-500">Comparte este código con tus amigos</p>
            </div>

            {/* Game Rules / Tips Card */}
            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                Cómo se va a jugar
              </span>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Modalidad:</span>
                  <span className="font-semibold text-fuchsia-400 flex items-center gap-1">
                    <Music className="w-3.5 h-3.5" /> Sincronizada en web
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="text-gray-400">Contenido:</span>
                  <span className={`font-semibold ${playlist.length === 0 ? "text-amber-400" : "text-white"}`}>
                    {playlist.length} canciones
                  </span>
                </div>
              </div>

              {isHost && onEditPlaylist && (
                <button
                  type="button"
                  onClick={onEditPlaylist}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 hover:from-fuchsia-600/30 hover:to-purple-600/30 text-fuchsia-300 border border-fuchsia-500/30 text-xs font-bold flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
                >
                  <ListMusic className="w-4 h-4" />
                  <span>{playlist.length === 0 ? "Elegir / Cargar canciones" : "Editar canciones y reglas"}</span>
                </button>
              )}

              <div className="p-3.5 rounded-2xl bg-[#191726] border border-white/5 flex gap-3 text-xs">
                <div className="p-2 rounded-xl bg-fuchsia-500/20 text-fuchsia-400 h-fit shrink-0">
                  <Keyboard className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white leading-tight">Cómo tocar el Buzzer</p>
                  <p className="text-gray-400 mt-0.5 text-[11px]">
                    En celu tocá el botón gigante <strong>¡YO!</strong> y en compu la <strong>barra espaciadora</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Players Grid & Start Game (Matches Screenshot 3) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 shadow-xl flex flex-col justify-between min-h-[420px] sm:min-h-[460px]">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-fuchsia-400" />
                    <span>Jugadores ({players.length}/{maxSlots})</span>
                  </h2>
                </div>

                {/* 8-Grid Slots */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
                  {/* Connected Players */}
                  {players.map((p) => {
                    const avatar = getAvatar(p.avatar);
                    const isMe = p.id === mySessionId;
                    return (
                      <div
                        key={p.id}
                        className={`p-3 sm:p-4 rounded-2xl border flex flex-col items-center justify-center text-center relative transition ${
                          p.isHost
                            ? "bg-purple-950/30 border-purple-500/40 shadow-lg shadow-purple-900/20"
                            : "bg-[#181622] border-white/10 hover:border-white/20"
                        }`}
                      >
                        {p.isHost && (
                          <div className="absolute top-2 right-2 p-1 rounded-full bg-amber-500/20 text-amber-400">
                            <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </div>
                        )}

                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${avatar.bg} flex items-center justify-center text-xl sm:text-2xl mb-1.5 sm:mb-2 shadow-md`}
                        >
                          {avatar.emoji}
                        </div>

                        <p className="font-bold text-xs text-white truncate max-w-[100px]">{p.name}</p>
                        <span className="text-[10px] text-gray-400 mt-0.5">
                          {p.isHost ? "Host" : isMe ? "(tú)" : "Jugador"}
                        </span>
                      </div>
                    );
                  })}

                  {/* Empty Slots */}
                  {[...Array(emptySlotsCount)].map((_, i) => (
                    <div
                      key={`empty-${i}`}
                      className="p-3 sm:p-4 rounded-2xl border border-dashed border-white/10 bg-[#13111b]/50 flex flex-col items-center justify-center text-center opacity-40 min-h-[100px] sm:min-h-[116px]"
                    >
                      <span className="text-xl sm:text-2xl text-gray-600 mb-1">+</span>
                      <span className="text-xs text-gray-500 font-medium">Libre</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Notice */}
              <div className="pt-6 border-t border-white/5 space-y-4">
                {isHost ? (
                  <button
                    type="button"
                    onClick={onStartGame}
                    disabled={playlist.length === 0}
                    className="btn-primary w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-fuchsia-500/25"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    <span>Iniciar Juego</span>
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-sm font-semibold text-fuchsia-300 animate-pulse">
                      Esperando que el Host inicie la partida...
                    </p>
                    <p className="text-xs text-gray-400 mt-1">¡Prepará el dedo en la barra espaciadora!</p>
                  </div>
                )}

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={onLeaveRoom}
                    className="text-xs font-semibold text-gray-400 hover:text-red-400 flex items-center gap-1.5 py-1 px-3 rounded-lg hover:bg-white/5 transition"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Salir de la sala</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
