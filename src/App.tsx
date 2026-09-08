import { useState, useEffect } from "react";
import type { Room } from "@colyseus/sdk";
import {
  createGameRoom,
  joinGameRoom,
  reconnectGameRoom,
  wakeUpBackend,
} from "./services/colyseus";
import type { Player, Track, PlaybackState, BuzzerState, BuzzerEntry, RoundTransitionState } from "./types/game";
import { HomeView } from "./components/HomeView";
import { PlaylistSetupView } from "./components/PlaylistSetupView";
import { LobbyView } from "./components/LobbyView";
import { HostGameView } from "./components/HostGameView";
import { PlayerGameView } from "./components/PlayerGameView";
import { PodiumView } from "./components/PodiumView";
import { ConnectingModal } from "./components/ConnectingModal";
import { TransitionOverlay } from "./components/TransitionOverlay";

export function App() {
  const [room, setRoom] = useState<Room<any> | null>(null);
  const [currentView, setCurrentView] = useState<"home" | "setup" | "lobby" | "game" | "podium">("home");
  const [loading, setLoading] = useState(false);
  const [connectingAction, setConnectingAction] = useState<"create" | "join" | null>(null);
  const [error, setError] = useState("");

  // Host setup info
  const [hostName, setHostName] = useState("");
  const [hostAvatar, setHostAvatar] = useState("");

  // Game state mirroring
  const [roomCode, setRoomCode] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [mySessionId, setMySessionId] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playback, setPlayback] = useState<PlaybackState>({
    isPlaying: false,
    currentTime: 0,
    timestamp: 0,
    mode: "normal",
  });
  const [buzzer, setBuzzer] = useState<BuzzerState>({
    activePlayerId: "",
    activePlayerName: "",
    timerExpiresAt: 0,
    status: "idle",
    queue: [],
  });
  const [transition, setTransition] = useState<RoundTransitionState>({
    isActive: false,
    type: "none",
    timerExpiresAt: 0,
    revealedTitle: "",
    revealedArtist: "",
    revealedArtwork: "",
  });
  const [settings, setSettings] = useState<{ penaltyOnFail: boolean; responseTimeLimit: number }>({
    penaltyOnFail: false,
    responseTimeLimit: 15,
  });

  // Despertar el servidor de Render proactivamente apenas se abre la web
  useEffect(() => {
    wakeUpBackend();
  }, []);

  // Intentar reconectar si hay token guardado
  useEffect(() => {
    const savedToken = sessionStorage.getItem("enuna_reconnection_token");
    if (savedToken) {
      setLoading(true);
      reconnectGameRoom(savedToken)
        .then((reconnectedRoom) => {
          bindRoom(reconnectedRoom);
        })
        .catch(() => {
          sessionStorage.removeItem("enuna_reconnection_token");
        })
        .finally(() => setLoading(false));
    }
  }, []);

  // Enlazar listeners de la sala Colyseus
  const bindRoom = (newRoom: Room<any>) => {
    setRoom(newRoom);
    setMySessionId(newRoom.sessionId);
    sessionStorage.setItem("enuna_reconnection_token", newRoom.reconnectionToken);

    newRoom.onStateChange((state: any) => {
      if (!state) return;

      setRoomCode(state.roomCode || "");
      setCurrentTrackIndex(state.currentTrackIndex || 0);

      // Convertir MapSchema de jugadores a array
      const playersList: Player[] = [];
      if (state.players) {
        state.players.forEach((p: any, key: string) => {
          playersList.push({
            id: p.id || key,
            name: p.name || "Jugador",
            avatar: p.avatar || "avatar-1",
            score: p.score || 0,
            isHost: Boolean(p.isHost),
            isLockedOut: Boolean(p.isLockedOut),
            connected: Boolean(p.connected),
            buzzedAt: p.buzzedAt,
          });
        });
      }
      setPlayers(playersList);

      // Determinar si soy el host
      const me = playersList.find((p) => p.id === newRoom.sessionId);
      const isHostUser = me ? me.isHost : state.hostSessionId === newRoom.sessionId;
      setIsHost(isHostUser);

      const hostPlayer = playersList.find((p) => p.isHost);
      if (hostPlayer) {
        setHostName((prev) => prev || hostPlayer.name);
        setHostAvatar((prev) => prev || hostPlayer.avatar);
      }

      // Convertir ArraySchema de playlist
      const tracksList: Track[] = [];
      if (state.playlist) {
        state.playlist.forEach((t: any) => {
          tracksList.push({
            id: t.id,
            title: t.title,
            artist: t.artist,
            previewUrl: t.previewUrl,
            artworkUrl: t.artworkUrl,
            duration: t.duration || 30,
          });
        });
      }
      setPlaylist(tracksList);

      // Playback
      if (state.playback) {
        setPlayback({
          isPlaying: Boolean(state.playback.isPlaying),
          currentTime: Number(state.playback.currentTime || 0),
          timestamp: Number(state.playback.timestamp || 0),
          mode: state.playback.mode || "normal",
        });
      }

      // Buzzer con cola ordenada
      if (state.buzzer) {
        const queueList: BuzzerEntry[] = [];
        if (state.buzzer.queue) {
          state.buzzer.queue.forEach((entry: any) => {
            queueList.push({
              playerId: entry.playerId || "",
              playerName: entry.playerName || "",
              playerAvatar: entry.playerAvatar || "avatar-1",
              buzzedAt: Number(entry.buzzedAt || 0),
            });
          });
        }

        setBuzzer({
          activePlayerId: state.buzzer.activePlayerId || "",
          activePlayerName: state.buzzer.activePlayerName || "",
          timerExpiresAt: Number(state.buzzer.timerExpiresAt || 0),
          status: state.buzzer.status || "idle",
          queue: queueList,
        });
      }

      // Transition (cuenta regresiva 5s inicio y revelación de canciones)
      if (state.transition) {
        setTransition({
          isActive: Boolean(state.transition.isActive),
          type: state.transition.type || "none",
          timerExpiresAt: Number(state.transition.timerExpiresAt || 0),
          revealedTitle: state.transition.revealedTitle || "",
          revealedArtist: state.transition.revealedArtist || "",
          revealedArtwork: state.transition.revealedArtwork || "",
        });
      }

      // Settings
      if (state.settings) {
        setSettings({
          penaltyOnFail: Boolean(state.settings.penaltyOnFail),
          responseTimeLimit: Number(state.settings.responseTimeLimit || 15),
        });
      }

      // Actualizar vista según la fase
      if (state.phase === "playing") {
        setCurrentView("game");
      } else if (state.phase === "podium") {
        setCurrentView("podium");
      } else if (state.phase === "lobby") {
        setCurrentView((prev) => (prev === "setup" ? "setup" : "lobby"));
      }
    });

    newRoom.onLeave((code) => {
      sessionStorage.removeItem("enuna_reconnection_token");
      setRoom(null);
      setCurrentView("home");
      if (code === 4001) {
        setError("Fuiste expulsado de la sala por el Host.");
      }
    });

    newRoom.onError((code, message) => {
      console.error("Colyseus room error:", code, message);
      setError(`Error de sala (${code}): ${message || "Conexión perdida"}`);
    });
  };

  // Crear sala
  const handleCreateRoom = async (name: string, avatar: string) => {
    setConnectingAction("create");
    setLoading(true);
    setError("");
    try {
      setHostName(name);
      setHostAvatar(avatar);
      const newRoom = await createGameRoom({ name, avatar });
      bindRoom(newRoom);
      setCurrentView("setup");
    } catch (err: any) {
      console.error(err);
      setError(
        err.message ||
          "No se pudo crear la sala. Si el servidor estaba inactivo, aguardá unos segundos y reintentá."
      );
    } finally {
      setLoading(false);
      setConnectingAction(null);
    }
  };

  // Unirse a sala existente
  const handleJoinRoom = async (code: string, name: string, avatar: string) => {
    setConnectingAction("join");
    setLoading(true);
    setError("");
    try {
      const joinedRoom = await joinGameRoom(code, { name, avatar });
      bindRoom(joinedRoom);
    } catch (err: any) {
      console.error(err);
      setError("No se encontró la sala o el código es inválido.");
    } finally {
      setLoading(false);
      setConnectingAction(null);
    }
  };

  // Confirmar playlist y pasar a lobby
  const handleConfirmPlaylist = (
    selectedTracks: Track[],
    newSettings: { penaltyOnFail: boolean; responseTimeLimit: number }
  ) => {
    if (!room) return;
    room.send("game:set-playlist", { tracks: selectedTracks });
    room.send("game:set-settings", newSettings);
    setCurrentView("lobby");
  };

  // Controladores de juego (Host)
  const handleStartGame = () => {
    if (!room) return;
    room.send("game:start");
  };

  const handlePlay = () => {
    if (!room) return;
    room.send("game:play");
  };

  const handlePause = (currentTime?: number) => {
    if (!room) return;
    room.send("game:pause", { currentTime });
  };

  const handleRepeat1s = () => {
    if (!room) return;
    room.send("game:repeat-1s");
  };

  const handleSeek = (currentTime: number) => {
    if (!room) return;
    room.send("game:seek", { currentTime });
  };

  const handleSkip = () => {
    if (!room) return;
    room.send("game:skip");
  };

  const handleValidate = (isValid: boolean) => {
    if (!room) return;
    room.send("host:validate", { isValid });
  };

  const handleAdjustScore = (playerId: string, delta: number) => {
    if (!room) return;
    room.send("host:adjust-score", { playerId, delta });
  };

  const handleKickPlayer = (playerId: string) => {
    if (!room) return;
    room.send("host:kick-player", { playerId });
  };

  const handleRestart = () => {
    if (!room) return;
    room.send("game:restart");
  };

  const handleLeaveRoom = () => {
    if (room) {
      room.leave(true);
    }
    sessionStorage.removeItem("enuna_reconnection_token");
    setRoom(null);
    setCurrentView("home");
  };

  // Controlador de Buzzer (Jugador)
  const handlePressBuzzer = () => {
    if (!room) return;
    room.send("buzzer:press");
  };

  return (
    <main className="min-h-screen bg-[#0c0b10]">
      {/* Modal de conexión / despertar Render */}
      <ConnectingModal
        isOpen={connectingAction !== null}
        type={connectingAction || "create"}
        onCancel={() => {
          setConnectingAction(null);
          setLoading(false);
        }}
      />

      {/* Cuenta regresiva de inicio (5s) y revelación de canción entre pistas (5s) */}
      <TransitionOverlay transition={transition} />


      {currentView === "home" && (
        <HomeView
          onJoin={handleJoinRoom}
          onCreateRoom={handleCreateRoom}
          loading={loading}
          error={error}
        />
      )}

      {currentView === "setup" && (
        <PlaylistSetupView
          hostName={hostName || players.find((p) => p.isHost)?.name || "Host"}
          hostAvatar={hostAvatar || players.find((p) => p.isHost)?.avatar || "avatar-1"}
          initialPlaylist={playlist}
          initialSettings={settings}
          onConfirm={handleConfirmPlaylist}
          onBack={() => {
            if (room) {
              setCurrentView("lobby");
            } else {
              setCurrentView("home");
            }
          }}
        />
      )}

      {currentView === "lobby" && (
        <LobbyView
          roomCode={roomCode}
          players={players}
          playlist={playlist}
          isHost={isHost}
          mySessionId={mySessionId}
          onStartGame={handleStartGame}
          onEditPlaylist={() => setCurrentView("setup")}
          onLeaveRoom={handleLeaveRoom}
        />
      )}

      {currentView === "game" && isHost && (
        <HostGameView
          roomCode={roomCode}
          currentTrackIndex={currentTrackIndex}
          playlist={playlist}
          playback={playback}
          buzzer={buzzer}
          players={players}
          mySessionId={mySessionId}
          onPlay={handlePlay}
          onPause={handlePause}
          onRepeat1s={handleRepeat1s}
          onSeek={handleSeek}
          onSkip={handleSkip}
          onValidate={handleValidate}
          onAdjustScore={handleAdjustScore}
          onKickPlayer={handleKickPlayer}
        />
      )}

      {currentView === "game" && !isHost && (
        <PlayerGameView
          roomCode={roomCode}
          currentTrackIndex={currentTrackIndex}
          totalTracks={playlist.length}
          currentTrack={playlist[currentTrackIndex]}
          playback={playback}
          buzzer={buzzer}
          players={players}
          mySessionId={mySessionId}
          onPressBuzzer={handlePressBuzzer}
        />
      )}

      {currentView === "podium" && (
        <PodiumView
          players={players}
          isHost={isHost}
          onRestart={handleRestart}
          onLeave={handleLeaveRoom}
        />
      )}
    </main>
  );
}

export default App;
