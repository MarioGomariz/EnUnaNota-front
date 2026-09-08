import { useState } from "react";
import {
  Search,
  Folder,
  Plus,
  Trash2,
  Play,
  Pause,
  ArrowRight,
  Music,
  Check,
  Clock,
  ShieldAlert,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import type { Track } from "../types/game";
import { searchSongs, PRESET_PLAYLISTS } from "../services/itunesApi";
import { getAvatar } from "../utils/avatars";

interface PlaylistSetupViewProps {
  hostName: string;
  hostAvatar: string;
  initialPlaylist?: Track[];
  initialSettings?: { penaltyOnFail: boolean; responseTimeLimit: number };
  onConfirm: (playlist: Track[], settings: { penaltyOnFail: boolean; responseTimeLimit: number }) => void;
  onBack: () => void;
}

export const PlaylistSetupView: React.FC<PlaylistSetupViewProps> = ({
  hostName,
  hostAvatar,
  initialPlaylist,
  initialSettings,
  onConfirm,
  onBack,
}) => {
  const [playlist, setPlaylist] = useState<Track[]>(
    initialPlaylist && initialPlaylist.length > 0 ? initialPlaylist : PRESET_PLAYLISTS[0].tracks
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Track[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [playingPreviewId, setPlayingPreviewId] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  // Settings
  const [penaltyOnFail, setPenaltyOnFail] = useState(initialSettings?.penaltyOnFail ?? false);
  const [responseTimeLimit, setResponseTimeLimit] = useState(initialSettings?.responseTimeLimit ?? 15);
  const [showPresetsModal, setShowPresetsModal] = useState(false);

  const [sourceFilter, setSourceFilter] = useState<"all" | "itunes" | "deezer" | "audius">("all");

  // Reproducir preview de audio en la búsqueda
  const togglePreview = (track: Track) => {
    if (audioElement) {
      audioElement.pause();
    }

    if (playingPreviewId === track.id) {
      setPlayingPreviewId(null);
      setAudioElement(null);
      return;
    }

    const audio = new Audio(track.previewUrl);
    audio.play();
    audio.onended = () => setPlayingPreviewId(null);
    setAudioElement(audio);
    setPlayingPreviewId(track.id);
  };

  const executeSearch = async (query: string, filter: "all" | "itunes" | "deezer" | "audius") => {
    if (!query.trim()) return;
    setIsSearching(true);
    const results = await searchSongs(query, filter);
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    executeSearch(searchQuery, sourceFilter);
  };

  const handleFilterChange = (newFilter: "all" | "itunes" | "deezer" | "audius") => {
    setSourceFilter(newFilter);
    if (searchQuery.trim()) {
      executeSearch(searchQuery, newFilter);
    }
  };

  const addTrack = (track: Track) => {
    if (playlist.some((t) => t.id === track.id)) return;
    setPlaylist([...playlist, track]);
  };

  const removeTrack = (id: string) => {
    setPlaylist(playlist.filter((t) => t.id !== id));
  };

  const selectPreset = (tracks: Track[]) => {
    setPlaylist(tracks);
    setShowPresetsModal(false);
  };

  const handleNext = () => {
    if (audioElement) audioElement.pause();
    onConfirm(playlist, { penaltyOnFail, responseTimeLimit });
  };

  return (
    <div className="min-h-[100dvh] bg-[#0c0b10] text-[#f1f2f6] p-3 sm:p-6 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {/* Left Column: Playlist Editor */}
        <div className="lg:col-span-2 space-y-5 sm:space-y-6">
          <div className="glass-panel rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-xl space-y-5 sm:space-y-6">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-white">Playlist de la partida</h2>
              <button
                type="button"
                onClick={() => setShowPresetsModal(true)}
                className="btn-secondary px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 text-fuchsia-300 w-full xs:w-auto"
              >
                <Folder className="w-4 h-4 text-fuchsia-400" />
                <span>Usar Playlist Guardada</span>
              </button>
            </div>

            {/* Search Input Bar */}
            <div className="space-y-2">
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="flex-1 flex items-center bg-[#181622] rounded-2xl border border-white/10 px-3 sm:px-4 py-2 focus-within:border-fuchsia-500 transition min-w-0">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar canción, artista o remix (Audius, iTunes, Deezer)..."
                    className="w-full bg-transparent text-sm text-white placeholder-gray-500 pl-1 sm:pl-2 focus:outline-none min-w-0"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching || !searchQuery.trim()}
                  className="btn-primary px-4 sm:px-6 py-2 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 cursor-pointer disabled:opacity-40 shrink-0"
                >
                  {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  <span>Buscar</span>
                </button>
              </form>

              {/* Multi-provider Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] no-scrollbar">
                <span className="text-gray-500 text-[10px] font-semibold pr-1 shrink-0">Catálogos:</span>
                <button
                  type="button"
                  onClick={() => handleFilterChange("all")}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition shrink-0 cursor-pointer ${
                    sourceFilter === "all"
                      ? "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40"
                      : "bg-white/5 text-gray-400 hover:text-white border border-transparent"
                  }`}
                >
                  ✨ Todos (Global)
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterChange("audius")}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition shrink-0 cursor-pointer ${
                    sourceFilter === "audius"
                      ? "bg-purple-500/25 text-purple-300 border border-purple-500/50"
                      : "bg-white/5 text-gray-400 hover:text-white border border-transparent"
                  }`}
                >
                  ⚡ Audius (Indie & Remixes)
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterChange("deezer")}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition shrink-0 cursor-pointer ${
                    sourceFilter === "deezer"
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      : "bg-white/5 text-gray-400 hover:text-white border border-transparent"
                  }`}
                >
                  🟠 Deezer
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterChange("itunes")}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition shrink-0 cursor-pointer ${
                    sourceFilter === "itunes"
                      ? "bg-pink-500/20 text-pink-300 border border-pink-500/40"
                      : "bg-white/5 text-gray-400 hover:text-white border border-transparent"
                  }`}
                >
                  🍎 Apple / iTunes
                </button>
              </div>
            </div>

            {/* Search Results Dropdown/Box if open */}
            {searchResults.length > 0 && (
              <div className="bg-[#181622] rounded-2xl border border-white/10 p-3 max-h-64 overflow-y-auto space-y-2">
                <div className="flex items-center justify-between px-2 pb-1 border-b border-white/5">
                  <span className="text-xs text-gray-400 font-medium">
                    {searchResults.length} resultados encontrados
                  </span>
                  <button
                    onClick={() => setSearchResults([])}
                    className="text-xs text-gray-500 hover:text-white"
                  >
                    Cerrar
                  </button>
                </div>
                {searchResults.map((track) => {
                  const isAdded = playlist.some((t) => t.id === track.id);
                  return (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition text-xs gap-2"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        {track.artworkUrl ? (
                          <img
                            src={track.artworkUrl}
                            alt=""
                            className="w-9 h-9 rounded-lg object-cover shrink-0"
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-lg bg-purple-900/40 flex items-center justify-center text-purple-300 shrink-0">
                            <Music className="w-4 h-4" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-white truncate">{track.title}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <p className="text-gray-400 truncate text-[11px]">{track.artist}</p>
                            {track.source === "audius" && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                                Audius
                              </span>
                            )}
                            {track.source === "deezer" && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                                Deezer
                              </span>
                            )}
                            {track.source === "itunes" && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30 shrink-0">
                                Apple
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => togglePreview(track)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 cursor-pointer"
                          title="Escuchar preview"
                        >
                          {playingPreviewId === track.id ? (
                            <Pause className="w-3.5 h-3.5 text-fuchsia-400" />
                          ) : (
                            <Play className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          type="button"
                          disabled={isAdded}
                          onClick={() => addTrack(track)}
                          className={`p-2 rounded-lg flex items-center gap-1 font-semibold ${
                            isAdded
                              ? "bg-green-500/20 text-green-400 cursor-default"
                              : "btn-primary cursor-pointer"
                          }`}
                        >
                          {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Current Playlist Container (Matches Screenshot 2) */}
            <div className="bg-[#14121d] rounded-2xl border border-white/5 p-4 md:p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-white">
                  Playlist ({playlist.length} {playlist.length === 1 ? "canción" : "canciones"})
                </span>
                {playlist.length > 0 && (
                  <button
                    onClick={() => setPlaylist([])}
                    className="text-xs text-red-400 hover:text-red-300"
                  >
                    Vaciar lista
                  </button>
                )}
              </div>

              {playlist.length === 0 ? (
                <div className="py-12 text-center text-gray-500 text-sm">
                  <Music className="w-8 h-8 mx-auto mb-2 opacity-40 text-fuchsia-400" />
                  No hay canciones en la playlist. Buscá arriba o usá una lista guardada.
                </div>
              ) : (
                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {playlist.map((track, index) => (
                    <div
                      key={track.id + index}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#191724] border border-white/5 hover:border-white/10 transition gap-2"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className="text-xs font-mono font-bold text-gray-500 w-5 text-center shrink-0">
                          {index + 1}
                        </span>
                        {track.artworkUrl ? (
                          <img
                            src={track.artworkUrl}
                            alt=""
                            className="w-10 h-10 rounded-lg object-cover shrink-0"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-300 shrink-0">
                            <Music className="w-4 h-4" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-white leading-tight truncate">{track.title}</p>
                          <p className="text-[11px] text-gray-400 truncate">{track.artist}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => togglePreview(track)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300"
                          title="Preescuchar"
                        >
                          {playingPreviewId === track.id ? (
                            <Pause className="w-3.5 h-3.5 text-fuchsia-400" />
                          ) : (
                            <Play className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => removeTrack(track.id)}
                          className="p-2 rounded-lg hover:bg-red-500/20 text-gray-500 hover:text-red-400 transition"
                          title="Eliminar de la lista"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Summary & Host Profile (Matches Screenshot 2) */}
        <div className="space-y-6">
          <div className="glass-panel rounded-3xl p-6 md:p-7 border border-white/10 shadow-xl flex flex-col justify-between h-full">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Resumen</h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-gray-400 text-xs">Modo</span>
                  <span className="font-bold text-fuchsia-400 text-xs">En una Nota</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-gray-400 text-xs">Playlist</span>
                  <span className="font-semibold text-white text-xs">
                    {playlist.length > 0 ? `${playlist.length} canciones` : "Sin definir"}
                  </span>
                </div>
                <div className="space-y-2 pb-2 border-b border-white/5">
                  <span className="text-gray-400 text-xs block">Ajustes de sala</span>
                  
                  {/* Toggle Penalty */}
                  <label className="flex items-center justify-between p-2 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs text-gray-200">Penalización (-1 pt)</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={penaltyOnFail}
                      onChange={(e) => setPenaltyOnFail(e.target.checked)}
                      className="rounded accent-fuchsia-500 w-4 h-4 cursor-pointer"
                    />
                  </label>

                  {/* Response Timer Select */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-fuchsia-400" />
                      <span className="text-xs text-gray-200">Timer de respuesta</span>
                    </div>
                    <select
                      value={responseTimeLimit}
                      onChange={(e) => setResponseTimeLimit(Number(e.target.value))}
                      className="bg-[#191724] text-xs text-fuchsia-300 font-bold px-2 py-1 rounded-lg border border-white/10 focus:outline-none cursor-pointer"
                    >
                      <option value={15}>15 seg</option>
                      <option value={20}>20 seg</option>
                      <option value={25}>25 seg</option>
                      <option value={30}>30 seg</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Host Profile Box */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Tu nombre de Host
                </p>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#181622] border border-white/10">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getAvatar(hostAvatar).bg} flex items-center justify-center text-lg shadow-md shrink-0`}>
                    {getAvatar(hostAvatar).emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate">
                      {hostName || "Host"}
                    </p>
                    <span className="text-[10px] text-fuchsia-400 font-medium block">Director de Sala</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button and Cancel */}
            <div className="pt-6 space-y-2">
              <button
                type="button"
                onClick={handleNext}
                disabled={playlist.length === 0}
                className="btn-primary w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-fuchsia-500/20"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={onBack}
                className="w-full py-2 text-xs font-semibold text-gray-500 hover:text-gray-300 flex items-center justify-center gap-1 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Cancelar y volver</span>
              </button>
              {playlist.length === 0 && (
                <p className="text-center text-xs text-gray-500">Agregá al menos una canción</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preset Playlists Modal */}
      {showPresetsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-lg rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl space-y-4 max-h-[85dvh] flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Folder className="w-5 h-5 text-fuchsia-400" />
                <span>Playlists Prediseñadas</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Elegí una lista con canciones conocidas y previews oficiales para jugar ya mismo.
              </p>
            </div>

            <div className="space-y-3 pt-2 overflow-y-auto flex-1 pr-1">
              {PRESET_PLAYLISTS.map((preset, index) => (
                <div
                  key={index}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#181622] border border-white/5 hover:border-fuchsia-500/40 transition flex items-center justify-between gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm text-white truncate">{preset.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{preset.description}</p>
                    <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-md bg-fuchsia-500/10 text-fuchsia-400 font-mono">
                      {preset.tracks.length} canciones
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => selectPreset(preset.tracks)}
                    className="btn-primary px-4 py-2 rounded-xl text-xs font-bold shrink-0 cursor-pointer"
                  >
                    Cargar
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end border-t border-white/5">
              <button
                type="button"
                onClick={() => setShowPresetsModal(false)}
                className="btn-secondary px-5 py-2 rounded-xl text-xs font-medium cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
