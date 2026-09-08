import { useState } from "react";
import { ArrowRight, Plus, Music2, User } from "lucide-react";
import { AVATARS } from "../utils/avatars";
import type { AvatarOption } from "../utils/avatars";

interface HomeViewProps {
  onJoin: (roomCode: string, name: string, avatar: string) => void;
  onCreateRoom: (name: string, avatar: string) => void;
  loading: boolean;
  error?: string;
}

export const HomeView: React.FC<HomeViewProps> = ({ onJoin, onCreateRoom, loading, error }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState(localStorage.getItem("enuna_player_name") || "");
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarOption>(() => {
    const savedId = localStorage.getItem("enuna_player_avatar");
    return AVATARS.find((a) => a.id === savedId) || AVATARS[0];
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<"join" | "create" | null>(null);

  const handleJoinClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setPendingAction("join");
    setShowProfileModal(true);
  };

  const handleCreateClick = () => {
    setPendingAction("create");
    setShowProfileModal(true);
  };

  const handleProfileConfirm = () => {
    if (!name.trim()) return;
    localStorage.setItem("enuna_player_name", name.trim());
    localStorage.setItem("enuna_player_avatar", selectedAvatar.id);
    setShowProfileModal(false);

    if (pendingAction === "join" && code.trim()) {
      onJoin(code.trim().toUpperCase(), name.trim(), selectedAvatar.id);
    } else if (pendingAction === "create") {
      onCreateRoom(name.trim(), selectedAvatar.id);
    }
  };


  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden bg-[#0c0b10]">
      {/* Background neon ambient lights */}
      <div className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-fuchsia-600/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      {/* Main Brand Header */}
      <div className="text-center mb-6 sm:mb-8 z-10 px-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white flex items-center justify-center gap-2.5 sm:gap-3">
          <span>En una Nota</span>
          <Music2 className="w-8 h-8 sm:w-10 sm:h-10 text-fuchsia-500 animate-pulse" />
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-md mx-auto">
          Adiviná la canción antes que nadie.
        </p>
      </div>

      {/* Main Card */}
      <div className="glass-panel w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10 border border-white/10">
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium text-center">
            {error}
          </div>
        )}

        {/* Entrá con un código Header */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-white">Entrá con un código</h2>
        </div>

        {/* Code Input Form */}
        <form onSubmit={handleJoinClick} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="ABC 123"
              className="w-full bg-[#181622] text-white placeholder-gray-600 text-2xl font-mono font-bold tracking-[0.3em] text-center py-4 rounded-2xl border border-white/10 focus:border-fuchsia-500 focus:bg-[#1f1d2c] focus:outline-none transition shadow-inner"
            />
          </div>

          <button
            type="submit"
            disabled={loading || code.trim().length < 4}
            className="btn-primary w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <span>{loading ? "Entrando..." : "Unirse"}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-xs text-gray-500 font-mono">o</span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        {/* Create Room Button */}
        <button
          onClick={handleCreateClick}
          disabled={loading}
          className="w-full py-4 rounded-2xl font-bold text-base text-fuchsia-400 hover:text-white bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <span>Crear Sala</span>
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Profile Setup Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1">
              {pendingAction === "create" ? "Perfil del Host" : "Tu perfil de juego"}
            </h3>
            <p className="text-xs text-gray-400 mb-5">
              {pendingAction === "create"
                ? "Elegí el nombre y avatar que verán los jugadores en la sala."
                : "Elegí tu nombre y avatar para que te reconozcan en la sala."}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleProfileConfirm();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">Nombre o Apodo</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    maxLength={15}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Mario, Agus, Nacho..."
                    className="w-full bg-[#181622] text-white placeholder-gray-500 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-fuchsia-500 focus:outline-none"
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2 font-medium">Elegí tu Avatar</label>
                <div className="grid grid-cols-4 gap-2.5">
                  {AVATARS.slice(0, 8).map((av) => (
                    <button
                      key={av.id}
                      type="button"
                      onClick={() => setSelectedAvatar(av)}
                      className={`h-12 rounded-xl bg-gradient-to-br ${av.bg} flex items-center justify-center text-xl transition transform hover:scale-105 cursor-pointer ${
                        selectedAvatar.id === av.id
                          ? "ring-2 ring-white scale-105 shadow-lg shadow-fuchsia-500/30"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      {av.emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowProfileModal(false)}
                  className="btn-secondary flex-1 py-2.5 rounded-xl text-sm font-medium cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="btn-primary flex-1 py-2.5 rounded-xl text-sm font-bold disabled:opacity-40 cursor-pointer"
                >
                  {pendingAction === "create" ? "Continuar" : "Entrar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
