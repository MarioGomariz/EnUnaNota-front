import { Client } from "@colyseus/sdk";
import type { Room } from "@colyseus/sdk";

// Determinar la URL del servidor backend
const getBackendUrl = () => {
  if (import.meta.env.VITE_BACKEND_URL) {
    const raw = import.meta.env.VITE_BACKEND_URL;
    // Si viene con http/https, convertir a ws/wss para Colyseus SDK
    if (raw.startsWith("http://")) return raw.replace("http://", "ws://");
    if (raw.startsWith("https://")) return raw.replace("https://", "wss://");
    return raw;
  }
  const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
  const host = typeof window !== "undefined" ? window.location.hostname : "localhost";
  const protocol = isHttps ? "wss" : "ws";
  return `${protocol}://${host}:2567`;
};

export const getHttpBackendUrl = () => {
  if (import.meta.env.VITE_BACKEND_URL) {
    const raw = import.meta.env.VITE_BACKEND_URL;
    return raw.replace(/^ws:\/\//i, "http://").replace(/^wss:\/\//i, "https://");
  }
  const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
  const host = typeof window !== "undefined" ? window.location.hostname : "localhost";
  const protocol = isHttps ? "https" : "http";
  return `${protocol}://${host}:2567`;
};

export const colyseusClient = new Client(getBackendUrl());

// Pinging proactivo para despertar y mantener activa la instancia de Render
export function wakeUpBackend() {
  try {
    const httpUrl = getHttpBackendUrl();
    fetch(`${httpUrl}/health`, { mode: "no-cors", signal: AbortSignal.timeout(5000) }).catch(() => {});
  } catch {
    // Silencioso
  }
}

// Keep-alive cada 3 minutos para evitar que Render free tier se duerma en mitad de una partida
if (typeof window !== "undefined") {
  setInterval(wakeUpBackend, 3 * 60 * 1000);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function createGameRoom(
  options: {
    name: string;
    avatar: string;
  },
  maxRetries = 4
): Promise<Room<any>> {
  let lastError: any;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await colyseusClient.create("game_room", {
        isHost: true,
        ...options,
      });
    } catch (err: any) {
      lastError = err;
      console.warn(`[Colyseus] Intento ${attempt + 1} de crear sala falló, reintentando...`, err);
      if (attempt < maxRetries - 1) {
        await sleep(3000 * (attempt + 1));
      }
    }
  }
  throw lastError;
}

export async function joinGameRoom(
  roomCode: string,
  options: {
    name: string;
    avatar: string;
  },
  maxRetries = 3
): Promise<Room<any>> {
  let lastError: any;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await colyseusClient.join("game_room", {
        roomCode: roomCode.toUpperCase().trim(),
        isHost: false,
        ...options,
      });
    } catch (err: any) {
      lastError = err;
      if (err.message && err.message.toLowerCase().includes("not found")) {
        throw err;
      }
      console.warn(`[Colyseus] Intento ${attempt + 1} de unirse a sala falló, reintentando...`, err);
      if (attempt < maxRetries - 1) {
        await sleep(2500 * (attempt + 1));
      }
    }
  }
  throw lastError;
}

export async function reconnectGameRoom(reconnectionToken: string): Promise<Room<any>> {
  return await colyseusClient.reconnect(reconnectionToken);
}

