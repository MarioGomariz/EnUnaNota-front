import { useState, useEffect } from "react";
import { X, Search, Music, AlertCircle, Loader2 } from "lucide-react";
import { fetchLyrics } from "../services/lyricsApi";
import type { LyricsResult } from "../services/lyricsApi";

interface LyricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  artist: string;
}

export const LyricsModal: React.FC<LyricsModalProps> = ({ isOpen, onClose, title, artist }) => {
  const [lyricsData, setLyricsData] = useState<LyricsResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isOpen && title && artist) {
      setLoading(true);
      setSearchQuery("");
      fetchLyrics(artist, title).then((data) => {
        setLyricsData(data);
        setLoading(false);
      });
    }
  }, [isOpen, title, artist]);

  if (!isOpen) return null;

  // Resaltar coincidencias de búsqueda en la letra
  const renderHighlightedLyrics = (text: string, query: string) => {
    if (!query.trim()) {
      return text;
    }

    // Escapar caracteres especiales para regex
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark
          key={index}
          className="bg-fuchsia-500/50 text-white font-bold px-1 py-0.5 rounded shadow-sm"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-2xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl flex flex-col max-h-[90dvh] sm:max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-white/10 bg-[#161421]">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 mr-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 text-fuchsia-400 border border-fuchsia-500/30 shrink-0">
              <Music className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-base sm:text-lg text-white leading-tight truncate">{title}</h3>
              <p className="text-xs text-gray-400 truncate">{artist}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar for Host */}
        <div className="p-3 sm:p-4 bg-[#1a1828] border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscá lo que cantó el jugador..."
              className="w-full bg-[#110f1b] text-white placeholder-gray-500 text-xs sm:text-sm pl-9 sm:pl-10 pr-16 py-2 sm:py-2.5 rounded-xl border border-white/10 focus:border-fuchsia-500 focus:outline-none transition"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white cursor-pointer px-1 py-0.5"
              >
                Limpiar
              </button>
            )}
          </div>
          {searchQuery && lyricsData?.plainLyrics && (
            <p className="text-[11px] sm:text-xs text-fuchsia-400 mt-2 font-medium">
              {lyricsData.plainLyrics.toLowerCase().includes(searchQuery.toLowerCase())
                ? "✨ ¡Frase encontrada en la letra!"
                : "❌ Frase no encontrada en la letra oficial."}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed select-text font-mono bg-[#110f1a]/50 flex-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin text-fuchsia-500 mb-3" />
              <p className="text-xs sm:text-sm">Buscando letra de la canción...</p>
            </div>
          ) : lyricsData && lyricsData.plainLyrics ? (
            <div className="whitespace-pre-wrap text-gray-200">
              {renderHighlightedLyrics(lyricsData.plainLyrics, searchQuery)}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400">
              <AlertCircle className="w-10 h-10 text-amber-500/80 mb-3" />
              <p className="font-semibold text-gray-300 text-xs sm:text-sm">No hay letra disponible para este tema</p>
              <p className="text-[11px] sm:text-xs text-gray-500 mt-1 max-w-sm">
                Podés verificar la respuesta del jugador según el título ({title}) y artista ({artist}).
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-[#161421] flex justify-end">
          <button onClick={onClose} className="btn-secondary px-5 py-2 rounded-xl text-xs sm:text-sm font-medium cursor-pointer">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
