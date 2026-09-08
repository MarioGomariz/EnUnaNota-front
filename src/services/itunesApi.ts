import type { Track } from "../types/game";

// Helper con timeout para evitar que un proveedor lento congele la búsqueda
async function fetchWithTimeout(url: string, timeoutMs: number = 3000): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return res;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

// 1. Proveedor: iTunes / Apple Music
async function searchITunes(query: string): Promise<(Track & { popularity?: number })[]> {
  try {
    const cleanTerm = query.replace(/\b(de|del|por|by)\b/gi, " ").trim();
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
      cleanTerm
    )}&media=music&entity=song&explicit=Yes&limit=35`;
    const res = await fetchWithTimeout(url, 2500);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.results || !Array.isArray(data.results)) return [];

    return data.results
      .filter((item: any) => item.trackId && item.previewUrl && item.trackName)
      .map((item: any) => ({
        id: `itunes-${item.trackId}`,
        title: item.trackName,
        artist: item.artistName || "Artista",
        previewUrl: item.previewUrl,
        artworkUrl: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "300x300bb") : "",
        duration: 30,
        source: "itunes" as const,
        popularity: 450000,
      }));
  } catch {
    return [];
  }
}


// 3. Proveedor: Audius (Remixes, Indie, Electronic, Underground)
async function searchAudius(query: string): Promise<(Track & { popularity?: number })[]> {
  try {
    const url = `https://discoveryprovider.audius.co/v1/tracks/search?query=${encodeURIComponent(
      query
    )}&app_name=EnUnaNota&limit=25`;
    const res = await fetchWithTimeout(url, 3000);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.data || !Array.isArray(data.data)) return [];

    return data.data
      .filter((item: any) => item.id && item.title && !item.is_unlisted && !item.is_delete)
      .map((item: any) => ({
        id: `audius-${item.id}`,
        title: item.title,
        artist: item.user?.name || "Audius Artist",
        previewUrl: `https://discoveryprovider.audius.co/v1/tracks/${item.id}/stream?app_name=EnUnaNota`,
        artworkUrl: item.artwork ? (item.artwork["480x480"] || item.artwork["150x150"] || "") : "",
        duration: item.duration || 30,
        source: "audius" as const,
        popularity: Math.min(600000, (item.play_count || 0) * 1000),
      }));
  } catch {
    return [];
  }
}

// Búsqueda multi-proveedor unificada conectando con el backend proxy y fallback
export async function searchSongs(
  query: string,
  sourceFilter: "all" | "itunes" | "deezer" | "audius" = "all"
): Promise<Track[]> {
  if (!query.trim()) return [];
  const rawQuery = query.trim();

  // 1. Intentar a través del backend proxy (sin problemas de CORS)
  try {
    const res = await fetchWithTimeout(
      `/api/music/search?q=${encodeURIComponent(rawQuery)}&source=${encodeURIComponent(sourceFilter)}`,
      3500
    );
    if (res.ok) {
      const data = await res.json();
      if (data.results && Array.isArray(data.results) && data.results.length > 0) {
        return data.results;
      }
    }
  } catch (err) {
    console.warn("Backend music search proxy error, trying direct fallback:", err);
  }

  // 2. Fallback directo en el cliente si el backend estuviera offline
  const promises: Promise<(Track & { popularity?: number })[]>[] = [];
  if (sourceFilter === "all" || sourceFilter === "itunes") promises.push(searchITunes(rawQuery));
  if (sourceFilter === "all" || sourceFilter === "audius") promises.push(searchAudius(rawQuery));

  const settled = await Promise.allSettled(promises);
  const allTracks: (Track & { popularity?: number })[] = [];

  for (const result of settled) {
    if (result.status === "fulfilled") {
      allTracks.push(...result.value);
    }
  }

  const uniqueMap = new Map<string, Track & { popularity?: number }>();
  for (const track of allTracks) {
    const key = `${track.title.toLowerCase().trim()}|${track.artist.toLowerCase().trim()}`;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, track);
    }
  }

  return Array.from(uniqueMap.values()).map((s) => ({
    id: s.id,
    title: s.title,
    artist: s.artist,
    previewUrl: s.previewUrl,
    artworkUrl: s.artworkUrl,
    duration: s.duration,
    source: s.source,
  }));
}

// Re-export playlists precargadas
export { PRESET_PLAYLISTS } from "./presetPlaylists";


