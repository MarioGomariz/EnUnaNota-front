import { Client } from "@colyseus/sdk";
import type { Room } from "@colyseus/sdk";

// Determinar la URL del servidor backend
const getBackendUrl = () => {
  if (import.meta.env.VITE_BACKEND_URL) {
    return import.meta.env.VITE_BACKEND_URL;
  }
  const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
  const host = typeof window !== "undefined" ? window.location.hostname : "localhost";
  const protocol = isHttps ? "wss" : "ws";
  return `${protocol}://${host}:2567`;
};

export const colyseusClient = new Client(getBackendUrl());

export async function createGameRoom(options: {
  name: string;
  avatar: string;
}): Promise<Room<any>> {
  return await colyseusClient.create("game_room", {
    isHost: true,
    ...options,
  });
}

export async function joinGameRoom(
  roomCode: string,
  options: {
    name: string;
    avatar: string;
  }
): Promise<Room<any>> {
  return await colyseusClient.join("game_room", {
    roomCode: roomCode.toUpperCase().trim(),
    isHost: false,
    ...options,
  });
}

export async function reconnectGameRoom(reconnectionToken: string): Promise<Room<any>> {
  return await colyseusClient.reconnect(reconnectionToken);
}
