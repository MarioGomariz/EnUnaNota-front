export interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
  isHost: boolean;
  isLockedOut: boolean;
  connected: boolean;
  buzzedAt?: number;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  previewUrl: string;
  artworkUrl: string;
  duration: number;
  source?: 'itunes' | 'deezer' | 'audius' | string;
}

export interface PlaybackState {
  isPlaying: boolean;
  currentTime: number;
  timestamp: number;
  mode: string; // 'normal' | 'repeat_1s'
}

export interface BuzzerState {
  activePlayerId: string;
  activePlayerName: string;
  timerExpiresAt: number;
  status: string; // 'idle' | 'answering'
}

export interface RoomSettings {
  penaltyOnFail: boolean;
  responseTimeLimit: number;
}

export interface GameState {
  roomCode: string;
  hostSessionId: string;
  phase: 'lobby' | 'playing' | 'podium';
  players: Map<string, Player> | Record<string, Player>;
  playlist: Track[];
  currentTrackIndex: number;
  playback: PlaybackState;
  buzzer: BuzzerState;
  settings: RoomSettings;
}
