export interface LyricsResult {
  trackName: string;
  artistName: string;
  plainLyrics: string;
  syncedLyrics?: string;
  instrumental: boolean;
}

export async function fetchLyrics(artist: string, title: string): Promise<LyricsResult | null> {
  if (!artist || !title) return null;

  // Limpiar título de sufijos comunes como (feat. ...), [Remastered], etc.
  const cleanTitle = title
    .replace(/\(.*?\)/g, "")
    .replace(/\[.*?\]/g, "")
    .replace(/- .*$/g, "")
    .trim();

  const cleanArtist = artist.split(",")[0].split("&")[0].trim();

  try {
    const url = `https://lrclib.net/api/get?artist_name=${encodeURIComponent(
      cleanArtist
    )}&track_name=${encodeURIComponent(cleanTitle)}`;

    const response = await fetch(url);
    if (!response.ok) {
      // Intentar sin limpiar por si acaso
      const fallbackUrl = `https://lrclib.net/api/get?artist_name=${encodeURIComponent(
        artist
      )}&track_name=${encodeURIComponent(title)}`;
      const fbRes = await fetch(fallbackUrl);
      if (!fbRes.ok) return null;
      const fbData = await fbRes.json();
      return {
        trackName: fbData.trackName || title,
        artistName: fbData.artistName || artist,
        plainLyrics: fbData.plainLyrics || fbData.syncedLyrics || "",
        syncedLyrics: fbData.syncedLyrics,
        instrumental: Boolean(fbData.instrumental),
      };
    }

    const data = await response.json();
    return {
      trackName: data.trackName || title,
      artistName: data.artistName || artist,
      plainLyrics: data.plainLyrics || data.syncedLyrics || "",
      syncedLyrics: data.syncedLyrics,
      instrumental: Boolean(data.instrumental),
    };
  } catch (error) {
    console.error("Error al obtener letras de LRCLIB:", error);
    return null;
  }
}
