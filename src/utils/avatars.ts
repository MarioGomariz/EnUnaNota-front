export interface AvatarOption {
  id: string;
  name: string;
  bg: string;
  emoji: string;
}

export const AVATARS: AvatarOption[] = [
  { id: "avatar-1", name: "Gafas", bg: "from-purple-500 to-indigo-600", emoji: "😎" },
  { id: "avatar-2", name: "Rockstar", bg: "from-pink-500 to-rose-600", emoji: "🎸" },
  { id: "avatar-3", name: "Fuego", bg: "from-amber-500 to-orange-600", emoji: "🔥" },
  { id: "avatar-4", name: "Dj", bg: "from-emerald-500 to-teal-600", emoji: "🎧" },
  { id: "avatar-5", name: "Estrella", bg: "from-yellow-400 to-amber-500", emoji: "⭐" },
  { id: "avatar-6", name: "Alien", bg: "from-cyan-500 to-blue-600", emoji: "👽" },
  { id: "avatar-7", name: "Gato", bg: "from-violet-500 to-purple-700", emoji: "🐱" },
  { id: "avatar-8", name: "Corona", bg: "from-fuchsia-500 to-pink-600", emoji: "👑" },
  { id: "host-avatar", name: "Host", bg: "from-rose-500 to-purple-600", emoji: "🎙️" },
];

export function getAvatar(id: string): AvatarOption {
  return AVATARS.find((a) => a.id === id) || AVATARS[0];
}
