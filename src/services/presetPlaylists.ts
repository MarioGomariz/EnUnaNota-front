// Playlist presets con canciones completas, previews de 30s verificados y carátulas
import type { Track } from "../types/game";

export interface PresetPlaylist {
  name: string;
  description: string;
  tracks: Track[];
}

export const PRESET_PLAYLISTS: PresetPlaylist[] = [
  {
    "name": "🔥 Cumbia & Cuarteto (Fiesta Argentina)",
    "description": "Los himnos infaltables de cumbia, cuarteto y fiesta nacional (Rodrigo, Damas Gratis, Palmeras, La K'onga, Luck Ra)",
    "tracks": [
      {
        "id": "dz-7804414",
        "title": "Ocho cuarenta",
        "artist": "Rodrigo",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/2/a/0/12a586fc561740641ec8a5313876962a.mp3?hdnea=exp=1788832827~acl=/api/1/1/1/2/a/0/12a586fc561740641ec8a5313876962a.mp3*~data=user_id=0,application_id=42~hmac=a5da285f9cc4a28b4fcbd2825264999d5705ab7a01cfc367e9f2a93dc53480c1",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/63f41c50a48fc6e07d266ff36cdcb58e/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-13507380",
        "title": "Soy Cordobes",
        "artist": "Rodrigo",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/9/3/0/393e0c429a59444e8a1b76d9a3503dec.mp3?hdnea=exp=1788832827~acl=/api/1/1/3/9/3/0/393e0c429a59444e8a1b76d9a3503dec.mp3*~data=user_id=0,application_id=42~hmac=a0bba051c65010ae320212025640f5560559eb31ae659ae53631c5072adb5d4d",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/778b8a6fbde2f425cf8273a7439c5c13/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-7802564",
        "title": "Lo mejor del amor",
        "artist": "Rodrigo",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/4/e/0/64e2d8eaefbef522291b301741a6343b.mp3?hdnea=exp=1788832828~acl=/api/1/1/6/4/e/0/64e2d8eaefbef522291b301741a6343b.mp3*~data=user_id=0,application_id=42~hmac=b2c2244d9ca10cf79ef718501e1a5c2c28522c98ee3c118bf9be85d2586bda05",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/41479a16cd35047a1aaebbdf0032290e/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-475150492",
        "title": "No Te Creas Tan Importante (En Vivo)",
        "artist": "Damas Gratis",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/6/b/0/06bfadf725c7e9905aca21a7b78e4882.mp3?hdnea=exp=1788832828~acl=/api/1/1/0/6/b/0/06bfadf725c7e9905aca21a7b78e4882.mp3*~data=user_id=0,application_id=42~hmac=ad1a41f2f794b4976f83391f415e4c9f904ba95005795a528f8987a6ad35cc84",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/24283f678cfc5bf4e1b8331e9bc998bf/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-549790772",
        "title": "Me Vas a Extrañar (En Vivo)",
        "artist": "Damas Gratis",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/0/a/0/e0a9593eb55793c0820e81cb2da48ddb.mp3?hdnea=exp=1788832829~acl=/api/1/1/e/0/a/0/e0a9593eb55793c0820e81cb2da48ddb.mp3*~data=user_id=0,application_id=42~hmac=3992ced99bc15a2ef686acea61e44d932bc6791cd441edc8e5c42ae2491c1e84",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/decb8a2eef7ce64f15059b5ea0f6a561/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-141466275",
        "title": "Se Te Ve la Tanga",
        "artist": "Damas Gratis",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/c/6/0/4c61fb8d9f45e37b1c3744379350e0af.mp3?hdnea=exp=1788832829~acl=/api/1/1/4/c/6/0/4c61fb8d9f45e37b1c3744379350e0af.mp3*~data=user_id=0,application_id=42~hmac=72a474267462882cddb2fb175698154b3088f4655796247b376daf92feb01d2e",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6a5558c56340efb79d6b572a1761e530/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-127928125",
        "title": "El Bombón",
        "artist": "Los Palmeras",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/7/5/0/c75bebdd967e8576e8234ec4c4cae7ed.mp3?hdnea=exp=1788832830~acl=/api/1/1/c/7/5/0/c75bebdd967e8576e8234ec4c4cae7ed.mp3*~data=user_id=0,application_id=42~hmac=f40f68365b6897e75530423993f7546733270fc6c3716ac3b4d3b9e3d6b5d6e1",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4b4e9ef6a8b1b110ecd0dbbbca644e29/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1689608527",
        "title": "Olvídala",
        "artist": "Los Palmeras",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/f/7/0/5f7396e591fe97bade7695304411d6fa.mp3?hdnea=exp=1788832831~acl=/api/1/1/5/f/7/0/5f7396e591fe97bade7695304411d6fa.mp3*~data=user_id=0,application_id=42~hmac=1f6265ca9edca18ae74566cf5ce22cfbb749ae678f7515129b10021d889b7257",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b36d4bc3ed6316840e12a81fd09078bc/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2350099025",
        "title": "La Morocha",
        "artist": "Luck Ra",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/e/4/0/9e48bd037718f9790c68d08d559edf35.mp3?hdnea=exp=1788832831~acl=/api/1/1/9/e/4/0/9e48bd037718f9790c68d08d559edf35.mp3*~data=user_id=0,application_id=42~hmac=ba162279c0bc1c0a98fac39b8061cf99ea1e8cb407240fb03ca3db7febf71175",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e1972ce0eb70f9f051770e9156ff04f4/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2574817472",
        "title": "HOLA PERDIDA",
        "artist": "Luck Ra",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/e/1/0/ce1f5e67529526688a699a2d139b9282.mp3?hdnea=exp=1788832832~acl=/api/1/1/c/e/1/0/ce1f5e67529526688a699a2d139b9282.mp3*~data=user_id=0,application_id=42~hmac=1d0c201c088d4f4e394bd7f4247e93b727abaccb39e1f2df517a9daf30813226",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/444c3a03f576af88e9a44b86e18cd0fc/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2507584601",
        "title": "QUE ME FALTE TODO",
        "artist": "Luck Ra",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/e/d/0/1ed5fc38a132a1334b6b9de1f19f4040.mp3?hdnea=exp=1788832832~acl=/api/1/1/1/e/d/0/1ed5fc38a132a1334b6b9de1f19f4040.mp3*~data=user_id=0,application_id=42~hmac=94279e82dcda7bad63d6f57373885ac47262de4a2ba64a5acbad0a1b7fe005d3",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4aaff3b791e8f1da252efb8c3cbfcc74/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2213429117",
        "title": "Un Finde | CROSSOVER #2",
        "artist": "Big One",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/4/0/504afc6f94ce8fae14be823e4ab45d82.mp3?hdnea=exp=1788832833~acl=/api/1/1/5/0/4/0/504afc6f94ce8fae14be823e4ab45d82.mp3*~data=user_id=0,application_id=42~hmac=19ab49ccf7b452b37e4243512a7b4ae767155aabc80c407eb35741bba15f1348",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3e6d525e47a60e9c64364f170df90c1d/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3778515612",
        "title": "Adiós Amor / Oye Mujer",
        "artist": "Ke personajes",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/8/7/0/a871bcc8b17598f7ff16f4dfd3a8c513.mp3?hdnea=exp=1788832833~acl=/api/1/1/a/8/7/0/a871bcc8b17598f7ff16f4dfd3a8c513.mp3*~data=user_id=0,application_id=42~hmac=b084564b67f6fed9976a3af3e513f34df38b105017671dea77b8085010b6b95a",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/67ba48ec92d97e7e8060c248d64166aa/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2245186217",
        "title": "Pobre Corazón (En Vivo)",
        "artist": "Ke personajes",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/3/2/0/5324753fa931302b88bc184bfd8eb17c.mp3?hdnea=exp=1788832834~acl=/api/1/1/5/3/2/0/5324753fa931302b88bc184bfd8eb17c.mp3*~data=user_id=0,application_id=42~hmac=e9ce33a5bb6ddfe0c7e7206fe501238f93237a0a531b644b5b35d30b4f92d025",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b3d83205d86f89a1b2efdf3b1df9a9e6/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1488647502",
        "title": "Universo Paralelo",
        "artist": "La K'onga",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/5/f/0/a5fa7bc4b7526ae899f48bc4db00ebf3.mp3?hdnea=exp=1788832834~acl=/api/1/1/a/5/f/0/a5fa7bc4b7526ae899f48bc4db00ebf3.mp3*~data=user_id=0,application_id=42~hmac=cee7b297c160d00bd85ab132b7096477fd85f11a4773f247315a2b7f3f2dda28",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4c3633e9ced2f8506a7c19c1281016f4/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1977646877",
        "title": "Ya No Más",
        "artist": "La K'onga",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/5/2/0/e52c603b84656430af4fe7100e7ae60c.mp3?hdnea=exp=1788832835~acl=/api/1/1/e/5/2/0/e52c603b84656430af4fe7100e7ae60c.mp3*~data=user_id=0,application_id=42~hmac=2a269b746f1e70b5430104f862d68d520ac4918e9bce41466b2df17fcc67129f",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/46b3d5fdf21612cd08ef7372abf37213/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-89816827",
        "title": "La Cabaña",
        "artist": "La K'onga",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/f/4/0/ef4254fb3ffa98766535549a8c8ce4b0.mp3?hdnea=exp=1788832835~acl=/api/1/1/e/f/4/0/ef4254fb3ffa98766535549a8c8ce4b0.mp3*~data=user_id=0,application_id=42~hmac=78bbccddd1e12ef1ff835640320536b364d476bfd08edf5705e292ae82bc5466",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/08f4944add335b060be999ecf3e02a2b/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2326127115",
        "title": "Intento",
        "artist": "Ulises Bueno",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/a/7/0/ca7f47fff479504a70793e2250600cca.mp3?hdnea=exp=1788832836~acl=/api/1/1/c/a/7/0/ca7f47fff479504a70793e2250600cca.mp3*~data=user_id=0,application_id=42~hmac=83334cc4c421583f34272e8dd596747261fd8762744a295f2f5cf082994c484d",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/598854b686c3212c79d569072513624d/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2338853665",
        "title": "Dale vieja dale",
        "artist": "Ulises Bueno",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/a/c/0/0acbbc63162280130048c651e3bbbc46.mp3?hdnea=exp=1788832837~acl=/api/1/1/0/a/c/0/0acbbc63162280130048c651e3bbbc46.mp3*~data=user_id=0,application_id=42~hmac=9a1408330726f15ac541705e359344f450d794087f4826134d9a0fe113c03338",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8bd145f6aff673a518e69b8bc2051d30/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-78105471",
        "title": "Yo Tomo Licor",
        "artist": "Amar Azul",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/3/e/0/f3ea7f8a4db8d197a4fc9fba7af924ba.mp3?hdnea=exp=1788832837~acl=/api/1/1/f/3/e/0/f3ea7f8a4db8d197a4fc9fba7af924ba.mp3*~data=user_id=0,application_id=42~hmac=e7e5e95c3228d292782fa1e2eb8f9a1f9a2378a3b93d4b31c7a07d00e507a68c",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/59ac3ed0f512caf999adcba7202c73e7/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-77851134",
        "title": "Yo Me Enamore",
        "artist": "Amar Azul",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/5/9/0/c59997f1722f59eb922fc676f0527f63.mp3?hdnea=exp=1788832838~acl=/api/1/1/c/5/9/0/c59997f1722f59eb922fc676f0527f63.mp3*~data=user_id=0,application_id=42~hmac=fdd549408a19be89b4204bc245f1d9df5dc6c27836fa36ce55f54dc452e47055",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/660e84275c2f658662481deafc5f24fe/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-117741386",
        "title": "Una Cerveza",
        "artist": "Ráfaga",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/e/a/0/4eafe40caccfd2a0162e51d5d85550e3.mp3?hdnea=exp=1788832838~acl=/api/1/1/4/e/a/0/4eafe40caccfd2a0162e51d5d85550e3.mp3*~data=user_id=0,application_id=42~hmac=67b06b0b3e6ee5ac8ee1e9ccf92fdbef6a9624c825ae48d3a0e293a8f454dd64",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cf0b8bf362ad1e3735d90c9760a97007/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-65413832",
        "title": "No Me Arrepiento de Este Amor",
        "artist": "Gilda",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/1/b/0/81b4828b8ba78fa12314ca75dee32251.mp3?hdnea=exp=1788832839~acl=/api/1/1/8/1/b/0/81b4828b8ba78fa12314ca75dee32251.mp3*~data=user_id=0,application_id=42~hmac=85263d752481cfb4f20e64cd598cc4ba2a88598975d467d2e67fe53e19317b0b",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/be911453cef895a218773a1ef03721b8/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-65413894",
        "title": "Llorarás Más De Diez Veces",
        "artist": "Leo Mattioli",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/f/7/0/cf77b5e0eb0bc9ef1644d288798d04ae.mp3?hdnea=exp=1788832839~acl=/api/1/1/c/f/7/0/cf77b5e0eb0bc9ef1644d288798d04ae.mp3*~data=user_id=0,application_id=42~hmac=720f6fab393917f2ef798f0dec4f379cc6ea3e4b06e13082d2b36809e8abf4da",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/52c83eea610ff76ba5346f0036e9eb76/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-7537431",
        "title": "Por lo que yo te quiero",
        "artist": "Walter Olmos",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/3/0/0/830e8d47ca241005491e3c8bb49d3556.mp3?hdnea=exp=1788832840~acl=/api/1/1/8/3/0/0/830e8d47ca241005491e3c8bb49d3556.mp3*~data=user_id=0,application_id=42~hmac=2766dfc644c1201df4cf2ba43459ea4a8a2094e08c5752aec6191ffbfe86fc35",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ff359bc071f29f7d8321d9fad146cca5/250x250-000000-80-0-0.jpg",
        "duration": 30
      }
    ]
  },
  {
    "name": "🎸 Rock Nacional Argentino",
    "description": "Los mayores himnos del rock argentino (Soda, Charly, Fito, Redondos, Calamaro, Los Piojos)",
    "tracks": [
      {
        "id": "dz-13247459",
        "title": "De Música Ligera Remasterizado 2007",
        "artist": "Soda Stereo",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/6/7/0/76725dbe1169773e35c3209825d10fad.mp3?hdnea=exp=1788832841~acl=/api/1/1/7/6/7/0/76725dbe1169773e35c3209825d10fad.mp3*~data=user_id=0,application_id=42~hmac=423af81c70b9041efe5cb1afb5999c311fe23bce224a9b19199c23a131f74115",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c8740ff412c45180d98441c84159f232/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-13247454",
        "title": "Persiana Americana Remasterizado 2007",
        "artist": "Soda Stereo",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/4/b/0/84b645012efc873d4ebcfd568ab9fb98.mp3?hdnea=exp=1788832841~acl=/api/1/1/8/4/b/0/84b645012efc873d4ebcfd568ab9fb98.mp3*~data=user_id=0,application_id=42~hmac=f49ad5b6035a2a39809ef33ee8507b2836ed830e7c192462b0571e326d9d73d1",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c8740ff412c45180d98441c84159f232/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-13247455",
        "title": "Prófugos Remasterizado 2007",
        "artist": "Soda Stereo",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/1/5/0/21570cb4a84e1d98684da6f3b7bc605b.mp3?hdnea=exp=1788832842~acl=/api/1/1/2/1/5/0/21570cb4a84e1d98684da6f3b7bc605b.mp3*~data=user_id=0,application_id=42~hmac=9491229b4555e0e89a12b3eb30c727ea4c46c2151a554fa57490a3a771640176",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c8740ff412c45180d98441c84159f232/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-537033822",
        "title": "Demoliendo Hoteles",
        "artist": "Charly García",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/f/a/0/afa6f0a6742a69d5a58d229b2630b57a.mp3?hdnea=exp=1788832842~acl=/api/1/1/a/f/a/0/afa6f0a6742a69d5a58d229b2630b57a.mp3*~data=user_id=0,application_id=42~hmac=a7fd2a5a1cc019281277e657565da929def78bee6dc39ee2c0a5e65cd97cd5a6",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6932458c3c7c49e91d2673d38685671e/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-13268279",
        "title": "Hablando a Tu Corazón",
        "artist": "Charly García",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/9/b/0/a9b3768f674c2290e90f75edbd0b0085.mp3?hdnea=exp=1788832843~acl=/api/1/1/a/9/b/0/a9b3768f674c2290e90f75edbd0b0085.mp3*~data=user_id=0,application_id=42~hmac=5b51e5ce5ffae5acb93b924e100524468ba2c8c0f09b9bee3f4c27673a2c0ef6",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7e598ead090d6375cb492c87f3579df1/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2674963",
        "title": "Nos Siguen Pegando Abajo",
        "artist": "Charly García",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/4/0/0/d40fd7deca8b829b13eb3a54aa3409fb.mp3?hdnea=exp=1788832844~acl=/api/1/1/d/4/0/0/d40fd7deca8b829b13eb3a54aa3409fb.mp3*~data=user_id=0,application_id=42~hmac=0b9fedf1af3008e703744412b84d8aac7f9bec70355bf29092e1135d192d3cc7",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/37ad6b28e5958ed75655a7f021b84423/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3460998",
        "title": "11 Y 6",
        "artist": "Fito Páez",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/c/f/0/acff11e7dc58a5cd435e3f4434276096.mp3?hdnea=exp=1788832844~acl=/api/1/1/a/c/f/0/acff11e7dc58a5cd435e3f4434276096.mp3*~data=user_id=0,application_id=42~hmac=8f392ebf00a95a392bbad20e2adf451a8943cac94aa9cffba5fa6eb76b10136c",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d7c91f4d8b74b40d15d053ba8cc20661/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3871625",
        "title": "El amor después del amor",
        "artist": "Fito Páez",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/d/b/0/ddbf3fb7fa7c0e1811d93a74919228cf.mp3?hdnea=exp=1788832845~acl=/api/1/1/d/d/b/0/ddbf3fb7fa7c0e1811d93a74919228cf.mp3*~data=user_id=0,application_id=42~hmac=0f3d547160dd02e535ecc0039f4456d785886291c676b297d2ca60f5d5545701",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6911b56cf12470d0efff9b25868cc730/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-694602",
        "title": "Mariposa tecknicolor",
        "artist": "Fito Páez",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/0/4/0/f043928f06f6e15d337b611edfadbdb3.mp3?hdnea=exp=1788832845~acl=/api/1/1/f/0/4/0/f043928f06f6e15d337b611edfadbdb3.mp3*~data=user_id=0,application_id=42~hmac=fcb0caf13468cfb5789a4d3c8aca3003ea9c895f68942def38bf3dec4ad244ef",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f807b561075eb4abae386947b873595c/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2593826552",
        "title": "Ji Ji Ji",
        "artist": "Patricio Rey y sus Redonditos de Ricota",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/a/2/0/ba269ccda98474f5a14428bc1e23a295.mp3?hdnea=exp=1788832846~acl=/api/1/1/b/a/2/0/ba269ccda98474f5a14428bc1e23a295.mp3*~data=user_id=0,application_id=42~hmac=860c8f3a6fb1c79ba9ef0431b072fb36e54c2a9bf863765823cbdf67da0abd48",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/86fa6b3e018ee5eb00aa162076aa8aef/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2593932702",
        "title": "Un Poco de Amor Francés",
        "artist": "Patricio Rey y sus Redonditos de Ricota",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/a/b/0/aab021fb58b9f45e2c601ed9c942e7ba.mp3?hdnea=exp=1788832847~acl=/api/1/1/a/a/b/0/aab021fb58b9f45e2c601ed9c942e7ba.mp3*~data=user_id=0,application_id=42~hmac=875685016b99ae5cbebdfa97c757fab3a7313c6c387326de7ac57a19497d83bc",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a5548380c4fc1636891ecf48e746ed5a/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3085538",
        "title": "Flaca",
        "artist": "Andrés Calamaro",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/e/8/0/1e87e5fb74a3f06926ea8086dd49518f.mp3?hdnea=exp=1788832847~acl=/api/1/1/1/e/8/0/1e87e5fb74a3f06926ea8086dd49518f.mp3*~data=user_id=0,application_id=42~hmac=23a7f83e8cc1c609b3d01db8a8e87761feb5d288c6603379b24a7b3f2d47eced",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/79c8c7008354aac7eac697bc35d6fb7d/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-918598",
        "title": "Mil Horas",
        "artist": "Los Abuelos de la Nada",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/2/c/0/42c111a2891c18848a6ad16cd2e8d37d.mp3?hdnea=exp=1788832848~acl=/api/1/1/4/2/c/0/42c111a2891c18848a6ad16cd2e8d37d.mp3*~data=user_id=0,application_id=42~hmac=50df9df0269f7987465f007e26208adf3daf47c3f410ab83d8936cd6f94b1a4f",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b16e4f7c20815a1bb0298b9ad4f71dfa/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-37212481",
        "title": "El salmón",
        "artist": "Andrés Calamaro",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/2/2/0/d22091e8b4b4f757f907b0ef0e85b17a.mp3?hdnea=exp=1788832848~acl=/api/1/1/d/2/2/0/d22091e8b4b4f757f907b0ef0e85b17a.mp3*~data=user_id=0,application_id=42~hmac=0c9a00833cffc52b5f6f21bbf1ad692b54355327674bc38d0d922bcd23adfb2c",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/95632b8ec8c474fbaa7733d3fb20fc2c/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-4116621881",
        "title": "Tan Solo (En Vivo)",
        "artist": "Los Piojos",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/8/3/0/583e1cfcc0f1283a0011f50d692bff3f.mp3?hdnea=exp=1788832849~acl=/api/1/1/5/8/3/0/583e1cfcc0f1283a0011f50d692bff3f.mp3*~data=user_id=0,application_id=42~hmac=9deaf98647fe023ad122274f78fd456c0a5d5a0ccbef87b35a8737da92988874",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6d78ef59bd53159636e61e04a9aaaab9/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-4116622431",
        "title": "Ruleta",
        "artist": "Los Piojos",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/9/e/0/f9e9ccf8d90de039f74f9a9cb13b9544.mp3?hdnea=exp=1788832849~acl=/api/1/1/f/9/e/0/f9e9ccf8d90de039f74f9a9cb13b9544.mp3*~data=user_id=0,application_id=42~hmac=962fafd317273eff345ce786d32a389be6861f2df8b3cc3aa798733d6f1b087a",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/35264c4361189e7966d5b5994ce037d6/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3250716811",
        "title": "¿Qué es Dios?",
        "artist": "Las Pastillas Del Abuelo",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/4/2/0/f4214a1d57dc0b13c6f9fcf732a9e6ef.mp3?hdnea=exp=1788832850~acl=/api/1/1/f/4/2/0/f4214a1d57dc0b13c6f9fcf732a9e6ef.mp3*~data=user_id=0,application_id=42~hmac=ee1bccb28d59edc0e382023148d2f574f1b4ca245b7e8983636c3e4faa4a45b4",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d0c83b29824a3f918527223d3a267f2d/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3337442441",
        "title": "Loco Por Volverla a Ver",
        "artist": "Las Pastillas Del Abuelo",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/c/0/0/3c054746ac40ddb18bfe77d0b2747ab0.mp3?hdnea=exp=1788832850~acl=/api/1/1/3/c/0/0/3c054746ac40ddb18bfe77d0b2747ab0.mp3*~data=user_id=0,application_id=42~hmac=9e3abf75dde3f70be0700002b01c5fc7a392bf31a60730c133f5c08dd19e48c6",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2615ea43b4210e404cd9c4c3ba44fd05/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-7720910",
        "title": "Irresponsables",
        "artist": "Babasónicos",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/f/9/0/ef9cd541417f80de0fd0afa5398ffbeb.mp3?hdnea=exp=1788832851~acl=/api/1/1/e/f/9/0/ef9cd541417f80de0fd0afa5398ffbeb.mp3*~data=user_id=0,application_id=42~hmac=627f5daf55c25acc206541668d9f81c6c237b0daee67e9e3f77791ddedeaa62d",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6e92f911c0e0a2ff8bdb39913f455633/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-7720914",
        "title": "Putita",
        "artist": "Babasónicos",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/3/5/0/735ed89e769d86f81c491f00f9a7653b.mp3?hdnea=exp=1788832852~acl=/api/1/1/7/3/5/0/735ed89e769d86f81c491f00f9a7653b.mp3*~data=user_id=0,application_id=42~hmac=55a609b5bd9f95ea25a2fd2231350fadd7d3ca37374dc9eab4af67177990bcee",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6e92f911c0e0a2ff8bdb39913f455633/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3538068",
        "title": "Lamento Boliviano",
        "artist": "Los Enanitos Verdes",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/a/e/0/2ae01cd3c8e7e51366ea5d82993436c0.mp3?hdnea=exp=1788832852~acl=/api/1/1/2/a/e/0/2ae01cd3c8e7e51366ea5d82993436c0.mp3*~data=user_id=0,application_id=42~hmac=4d5bcec3cbd808dea0e4db71148e7012715c642c669ab5fc597cef704abe3c2f",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ead1c2c48568faad177c85e59a511780/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-984082",
        "title": "El Revelde",
        "artist": "La Renga",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/0/e/0/e0e1a6299d1ccd03f5729739451ea731.mp3?hdnea=exp=1788832853~acl=/api/1/1/e/0/e/0/e0e1a6299d1ccd03f5729739451ea731.mp3*~data=user_id=0,application_id=42~hmac=57c73456037f148e3dca2e7175920a3e8d16998b782091d3654a738b648c71fd",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2158eb1a25fc5868a10370792d74c8f5/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-7722432",
        "title": "Fuego",
        "artist": "Intoxicados",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/0/7/0/a07d282bc3939b1d52269953bbb76618.mp3?hdnea=exp=1788832853~acl=/api/1/1/a/0/7/0/a07d282bc3939b1d52269953bbb76618.mp3*~data=user_id=0,application_id=42~hmac=685eca2b5b2eabf370cbf5be9e4453c897e3433551b440d2d2384032a7fce5bf",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f6a613a54db6fe066218dd2e4abec710/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-7722427",
        "title": "Nunca quise",
        "artist": "Intoxicados",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/7/d/0/c7da87ac8193a559f2d934fbff79cafe.mp3?hdnea=exp=1788832854~acl=/api/1/1/c/7/d/0/c7da87ac8193a559f2d934fbff79cafe.mp3*~data=user_id=0,application_id=42~hmac=b0333b452e52224c3f1880a2fd2047a95a84793f7606b1c27d06518097582f47",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f6a613a54db6fe066218dd2e4abec710/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2256071",
        "title": "Mi Caramelo (Live In Buenos Aires / 2001)",
        "artist": "Bersuit Vergarabat",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/f/1/0/8f1dd97011f60af6eb897ea57df98258.mp3?hdnea=exp=1788832854~acl=/api/1/1/8/f/1/0/8f1dd97011f60af6eb897ea57df98258.mp3*~data=user_id=0,application_id=42~hmac=79af5f74771376a37e5bf4bdd3df90f5086f71a5856aa4714f7dd92f70577d63",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f634c4c3e658206521fa248f73bc40e0/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-4114288831",
        "title": "Mírenla",
        "artist": "Ciro Y Los Persas",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/c/2/0/bc24a2398c51a16b9d911e79343501d4.mp3?hdnea=exp=1788832855~acl=/api/1/1/b/c/2/0/bc24a2398c51a16b9d911e79343501d4.mp3*~data=user_id=0,application_id=42~hmac=b228e19c8989e041f06a154361a94555995bc81905cef9f994979cec2d8e5711",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/dd50f412513c4ccb79cc0808512c18bf/250x250-000000-80-0-0.jpg",
        "duration": 30
      }
    ]
  },
  {
    "name": "🌴 Reggaetón & Urbano Latino",
    "description": "Perreo clásico y los hits globales urbanos (Daddy Yankee, Bad Bunny, Karol G, Feid, Don Omar)",
    "tracks": [
      {
        "id": "dz-3165861441",
        "title": "Gasolina",
        "artist": "Daddy Yankee",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/5/5/0/e55128c0f638a66732eca1fbd37038fc.mp3?hdnea=exp=1788832855~acl=/api/1/1/e/5/5/0/e55128c0f638a66732eca1fbd37038fc.mp3*~data=user_id=0,application_id=42~hmac=c1f5c355da72d5698011098c46352d3835adb8289a7320fe21583d6ab7ffd2fd",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d386e42d5c4dfb603e958371b79869f5/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-440252642",
        "title": "Rompe",
        "artist": "Daddy Yankee",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/6/8/0/96845dce2c27a91a2b0eb96260eb8bef.mp3?hdnea=exp=1788832856~acl=/api/1/1/9/6/8/0/96845dce2c27a91a2b0eb96260eb8bef.mp3*~data=user_id=0,application_id=42~hmac=c3f76402a9c96d12a8bb619bec2731127775e9d39e655ed4cb9bbc4d06d1977b",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4db783b9352e68b90c5c68fa7ba6af1b/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3165861861",
        "title": "Ella Me Levantó",
        "artist": "Daddy Yankee",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/8/a/0/38a839a97bd9266e96dda5da93a4062c.mp3?hdnea=exp=1788832856~acl=/api/1/1/3/8/a/0/38a839a97bd9266e96dda5da93a4062c.mp3*~data=user_id=0,application_id=42~hmac=52c3c0fff6d6f868dc376ce9915151e9eb5d876eb5fc0a76bd162ea24e708e15",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/53d8402a7999beec558ed2b0bbee2b3b/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-600973222",
        "title": "Don Omar - Danza Kuduro (Remix)",
        "artist": "PABLO BENDR",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/8/1/d/0/81d25def282a55723a4a382d25e66be0.mp3?hdnea=exp=1788832857~acl=/api/1/1/8/1/d/0/81d25def282a55723a4a382d25e66be0.mp3*~data=user_id=0,application_id=42~hmac=dacf8d90d7dcefa282520f350610bc79f3e7a2470ef5c4f24db5ba34096a6ecb",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/2b19f36294c104f64cb611f0085b9d0a/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-15515256",
        "title": "Dale Don Dale",
        "artist": "Don Omar",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/c/3/0/2c339f68d1502e5994d74eb8023da359.mp3?hdnea=exp=1788832858~acl=/api/1/1/2/c/3/0/2c339f68d1502e5994d74eb8023da359.mp3*~data=user_id=0,application_id=42~hmac=c467675265ef792f981d41a5504f847c54401753bbebacaf877d3f426d54732b",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c2671dbf906c83e7cf2b9597a5c0560c/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-15515244",
        "title": "Dile",
        "artist": "Don Omar",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/a/b/0/3abf5125ad2dc83d53ab273068bba7d7.mp3?hdnea=exp=1788832858~acl=/api/1/1/3/a/b/0/3abf5125ad2dc83d53ab273068bba7d7.mp3*~data=user_id=0,application_id=42~hmac=bdff4a562f747839f102b15a998cb07e306b4e945d3ccd1a640045f734ec01d7",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/c2671dbf906c83e7cf2b9597a5c0560c/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1741494317",
        "title": "Tití Me Preguntó",
        "artist": "Bad Bunny",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/4/d/0/c4d8eeec871548b83abe5458fff10fc3.mp3?hdnea=exp=1788832859~acl=/api/1/1/c/4/d/0/c4d8eeec871548b83abe5458fff10fc3.mp3*~data=user_id=0,application_id=42~hmac=6e6833463d3805feaf630eb9ce22817f1257310d60b576c3c35b7aaae7bb7762",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1122450992",
        "title": "DÁKITI",
        "artist": "Bad Bunny",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/e/2/0/3e2cd76ded3d57e923855a7e41a7a9ec.mp3?hdnea=exp=1788832859~acl=/api/1/1/3/e/2/0/3e2cd76ded3d57e923855a7e41a7a9ec.mp3*~data=user_id=0,application_id=42~hmac=7f5aecd1ddbd5a995ce224a54c9cede13c0afa4c59398490238f412899b4180f",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/aa6aa7ac356ad9d6c578cccd1a62c394/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1741494307",
        "title": "Me Porto Bonito",
        "artist": "Bad Bunny",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/e/e/0/eee1f040af0d93c63ef745d3dfe5aa0d.mp3?hdnea=exp=1788832860~acl=/api/1/1/e/e/e/0/eee1f040af0d93c63ef745d3dfe5aa0d.mp3*~data=user_id=0,application_id=42~hmac=81214d6dfb9147fa5285bac7d2085576d656303af3ec1e8c5436133422f03c27",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1721634237",
        "title": "PROVENZA",
        "artist": "KAROL G",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/f/e/0/7fe9845244c7cd381e233d5698aef03f.mp3?hdnea=exp=1788832860~acl=/api/1/1/7/f/e/0/7fe9845244c7cd381e233d5698aef03f.mp3*~data=user_id=0,application_id=42~hmac=fcf236badce56c18a84ad98687ef8225b21dd223e1e5867d9432e69d75c57973",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6468d5adca0eb6d157f42a309b6e6b2e/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-796342592",
        "title": "Tusa",
        "artist": "KAROL G",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/9/5/0/295fb558a4b893d959b8a985d12a38b7.mp3?hdnea=exp=1788832861~acl=/api/1/1/2/9/5/0/295fb558a4b893d959b8a985d12a38b7.mp3*~data=user_id=0,application_id=42~hmac=51a6af10099c52bc54d903a0925d39ac0595566273dc7cc644d028b5d0fe4295",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7f4412829dda081518fcad597601c778/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2846442802",
        "title": "Si Antes Te Hubiera Conocido",
        "artist": "KAROL G",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/4/9/0/449439df1ef7bf86774b8f8bf174a566.mp3?hdnea=exp=1788832861~acl=/api/1/1/4/4/9/0/449439df1ef7bf86774b8f8bf174a566.mp3*~data=user_id=0,application_id=42~hmac=2941a4b0aa3529cae13ca40c39afb6b8e5f5964b06d15f4db6c471c33d2fb931",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8d2d13e0170f7eccc31f6b1038a870d5/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1871407307",
        "title": "Feliz Cumpleaños Ferxxo",
        "artist": "Feid",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/1/9/0/a19e878d8cd6410e74e7075bbfc83aee.mp3?hdnea=exp=1788832862~acl=/api/1/1/a/1/9/0/a19e878d8cd6410e74e7075bbfc83aee.mp3*~data=user_id=0,application_id=42~hmac=8f8b1d5e36ed04ac4c3b165f88e03aaf059d54c67368f28d03372830b1367afb",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/ba0e0aeb6e584b790e577c0e09db2d60/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1809961297",
        "title": "Normal",
        "artist": "Feid",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/1/0/501d9ae81d1ae2bfbdc414f78952e067.mp3?hdnea=exp=1788832862~acl=/api/1/1/5/0/1/0/501d9ae81d1ae2bfbdc414f78952e067.mp3*~data=user_id=0,application_id=42~hmac=47d4eb801a09e5b8716824b5184dfda8443e4ebe3878bccba583d49ef237e927",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/66daee7acd7efdb8462bef0d0f14d0e5/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-667004452",
        "title": "Mi Gente Homecoming Live",
        "artist": "Beyoncé",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/7/c/0/97ccce588c877c4a73ae5565149be309.mp3?hdnea=exp=1788832863~acl=/api/1/1/9/7/c/0/97ccce588c877c4a73ae5565149be309.mp3*~data=user_id=0,application_id=42~hmac=3b8682e99f2e39a1c9cab46de55e12fc6029e800b7ddc8025fbf0239a78dec65",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d65174ae1c9bd60b5dd7b377c08c0755/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-127245209",
        "title": "Ginza",
        "artist": "J Balvin",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/9/0/2d93edf81b59abacf524878c16de0029.mp3?hdnea=exp=1788832863~acl=/api/1/1/2/d/9/0/2d93edf81b59abacf524878c16de0029.mp3*~data=user_id=0,application_id=42~hmac=d4c6525fc40749c2cd333351cfd624dee93370c2f541933314cac9c93f721742",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fbd2bc7d9384674fb682e0df4c24d6ac/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-493108632",
        "title": "Felices los 4",
        "artist": "Maluma",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/9/9/0/d998bebd057894d717953b9199997c7d.mp3?hdnea=exp=1788832864~acl=/api/1/1/d/9/9/0/d998bebd057894d717953b9199997c7d.mp3*~data=user_id=0,application_id=42~hmac=63dd3fbade675b334ee143087a330669f7e7081703d18f7a87ca3d96602cd331",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8f7f531b2bcebeffef064d973dedb24a/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1032957942",
        "title": "Hawái",
        "artist": "Maluma",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/a/2/0/4a279db1b065129bace7c95941dbcacc.mp3?hdnea=exp=1788832864~acl=/api/1/1/4/a/2/0/4a279db1b065129bace7c95941dbcacc.mp3*~data=user_id=0,application_id=42~hmac=1b9803bb6edad032b37961704ac2fc756e5390200fc124a7e2d0864923f8ec11",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0714b3776b2bc051fb55d161b79296e9/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1370066842",
        "title": "Todo De Ti",
        "artist": "Rauw Alejandro",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/b/a/0/3ba5a4ddf058e58c87bb193fe73761a5.mp3?hdnea=exp=1788832865~acl=/api/1/1/3/b/a/0/3ba5a4ddf058e58c87bb193fe73761a5.mp3*~data=user_id=0,application_id=42~hmac=742eb0712fbac2bd3ff029834cf442971ea2a1ff0167b6a18f52fa2b8b164bb2",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7167a61f54a62c453f4d99ee59c151a4/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2960711",
        "title": "Rakata",
        "artist": "Wisin & Yandel",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/c/4/0/2c46403fc637debfa08865f0b10d6c26.mp3?hdnea=exp=1788832865~acl=/api/1/1/2/c/4/0/2c46403fc637debfa08865f0b10d6c26.mp3*~data=user_id=0,application_id=42~hmac=0931f9835864952961ba829998470c49286ff2c944df7f9510deff48ef9b5743",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/245c037f4d9dfde89ad8fbf9e6c0e40b/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-38776871",
        "title": "Algo Me Gusta De Ti",
        "artist": "Wisin & Yandel",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/f/a/0/7fa3d53da4b764f2ee474348d7d7fa58.mp3?hdnea=exp=1788832866~acl=/api/1/1/7/f/a/0/7fa3d53da4b764f2ee474348d7d7fa58.mp3*~data=user_id=0,application_id=42~hmac=cbfbd04e6c9f30b302f7021b289a13d86d4f43d526272e2c17632876751684ee",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/df8d7784578aedef1ff654313eab1a85/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-112987370",
        "title": "El Perdon",
        "artist": "Nicky Jam",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/e/3/0/3e30197f79811397244741abc6854ecc.mp3?hdnea=exp=1788832866~acl=/api/1/1/3/e/3/0/3e30197f79811397244741abc6854ecc.mp3*~data=user_id=0,application_id=42~hmac=6dde49cc74be6283eb3f21d4aa9d35791b33a1778c7a83775380f4dd03a53c13",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9fe42fee53040826635365451d4233ba/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-140421811",
        "title": "Hasta el Amanecer",
        "artist": "Nicky Jam",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/d/1/0/ed1359fc67000bb0d0a779a6339be31a.mp3?hdnea=exp=1788832867~acl=/api/1/1/e/d/1/0/ed1359fc67000bb0d0a779a6339be31a.mp3*~data=user_id=0,application_id=42~hmac=10132bcdc57c1e9e8b4f9abd463476c58ec37189b85c3d75ad3c55d50d5887ed",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/68b6ebdd0514f16c57a87552a33d26d3/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1411181832",
        "title": "Pepas",
        "artist": "Farruko",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/a/0/2dae9a42ff4cf95f5fe860e3cc3d319e.mp3?hdnea=exp=1788832868~acl=/api/1/1/2/d/a/0/2dae9a42ff4cf95f5fe860e3cc3d319e.mp3*~data=user_id=0,application_id=42~hmac=4f91b87118f98ae4011798be89a2fb71d612e723615bb6c37ff38b824d8f1f15",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/1b88acc901e3beff139b5b4eea025802/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1841999507",
        "title": "DESPECHÁ",
        "artist": "ROSALÍA",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/2/3/0/b234d28fb77426a7e59c38f0ad7d7956.mp3?hdnea=exp=1788832868~acl=/api/1/1/b/2/3/0/b234d28fb77426a7e59c38f0ad7d7956.mp3*~data=user_id=0,application_id=42~hmac=0cb93b3b44c0c1f175a07305876da72d19a523a4fb1f0a5f63773414664178ef",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b805ed7967bdc65386883cc3790459e7/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1811481707",
        "title": "Quevedo: Bzrp Music Sessions, Vol. 52/66",
        "artist": "Bizarrap",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/9/d/0/a9d6db28922af449e14352083b09e42a.mp3?hdnea=exp=1788832869~acl=/api/1/1/a/9/d/0/a9d6db28922af449e14352083b09e42a.mp3*~data=user_id=0,application_id=42~hmac=89d310990948ad62ce10ec3bc654c71dd8c8ba1e7a330f053df7e765c80a9d5e",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a0655ddf0892c06b30ff9c0ceedc8db8/250x250-000000-80-0-0.jpg",
        "duration": 30
      }
    ]
  },
  {
    "name": "✨ Pop & Clásicos Internacionales",
    "description": "Los himnos pop y clásicos en inglés más cantados (Michael Jackson, Queen, Dua Lipa, Bruno Mars)",
    "tracks": [
      {
        "id": "dz-4603408",
        "title": "Billie Jean",
        "artist": "Michael Jackson",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/6/e/0/e6e0f8717b1e6353e2abf797c6849889.mp3?hdnea=exp=1788832869~acl=/api/1/1/e/6/e/0/e6e0f8717b1e6353e2abf797c6849889.mp3*~data=user_id=0,application_id=42~hmac=1c8e422764801c949305b716ac1b6517a7b88217d773dd161dc9f0bf9ab00402",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a0ad67d1beb761f2cb9f8b60e5bcf07a/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-4763165",
        "title": "Beat It",
        "artist": "Michael Jackson",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/2/0/1726d9ef2d75c2d3adfb4f82a06ab589.mp3?hdnea=exp=1788832870~acl=/api/1/1/1/7/2/0/1726d9ef2d75c2d3adfb4f82a06ab589.mp3*~data=user_id=0,application_id=42~hmac=d982e64c617af58638b68ed14805074f1d81b138c570143a76f0feda99e70eaa",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a0ad67d1beb761f2cb9f8b60e5bcf07a/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-555639",
        "title": "Thriller",
        "artist": "Michael Jackson",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/8/3/0/3832b349ee4d8b66f6022bc99dcca300.mp3?hdnea=exp=1788832871~acl=/api/1/1/3/8/3/0/3832b349ee4d8b66f6022bc99dcca300.mp3*~data=user_id=0,application_id=42~hmac=5c98decc2e47e579cefd97c12ca599ec41529716da25ca509f3c455f364f22ac",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/92a024220a9532489c75c9d994835697/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-4091937401",
        "title": "Bohemian Rhapsody",
        "artist": "Queen",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/f/9/0/5f9a6a2ea1876e6d07c4b7feefa99951.mp3?hdnea=exp=1788832871~acl=/api/1/1/5/f/9/0/5f9a6a2ea1876e6d07c4b7feefa99951.mp3*~data=user_id=0,application_id=42~hmac=76afa0bde2c78fc47614822897d4e371ef5a94ac937ffbc58674757c5d23deb1",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0b56f4eee05fa1ea753c5654b2cdb70c/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-4092329741",
        "title": "Don't Stop Me Now",
        "artist": "Queen",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/b/3/0/0b3d23def8a9fe0b0a861a17fd7dda61.mp3?hdnea=exp=1788832872~acl=/api/1/1/0/b/3/0/0b3d23def8a9fe0b0a861a17fd7dda61.mp3*~data=user_id=0,application_id=42~hmac=e5c7470694ebd8e56d1239b7b0e8c18f18dd43f3a5b7f9691f0dccf19a6aa505",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/4b8ab9c1f112b63c07e3983b98e98006/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-4092324041",
        "title": "Another One Bites The Dust",
        "artist": "Queen",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/0/d/0/70dfc1ad79bdd6e1d69d16e1a37c06eb.mp3?hdnea=exp=1788832872~acl=/api/1/1/7/0/d/0/70dfc1ad79bdd6e1d69d16e1a37c06eb.mp3*~data=user_id=0,application_id=42~hmac=55134682ce6c61155a949b8af35e98c48050080d1a230ecf27013762e04c4307",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/156c197582a4d4b40e17d72b79d3df62/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-884025",
        "title": "Dancing Queen",
        "artist": "ABBA",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/1/6/0/916f7137187790e999bc66e6460c07b2.mp3?hdnea=exp=1788832873~acl=/api/1/1/9/1/6/0/916f7137187790e999bc66e6460c07b2.mp3*~data=user_id=0,application_id=42~hmac=3411df4570f39bb5ef25057b0bd7ca051d4d1a46150dbbaa282f22439f9aff67",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/b8b70d474b7a8f27799e0d665e9b737e/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1124841682",
        "title": "Levitating",
        "artist": "Dua Lipa",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/c/5/0/9c570bc806fc277bb73ba024e956d057.mp3?hdnea=exp=1788832874~acl=/api/1/1/9/c/5/0/9c570bc806fc277bb73ba024e956d057.mp3*~data=user_id=0,application_id=42~hmac=b401574780ec071283c726dfc923b33a720cf94e91a4ef1f374be311ad7ee009",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f8364f090ba04f1b19b381ec0390f3e4/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1124841652",
        "title": "Don't Start Now",
        "artist": "Dua Lipa",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/a/d/c/0/adc712094a21dfa97e763b4db0d43402.mp3?hdnea=exp=1788832874~acl=/api/1/1/a/d/c/0/adc712094a21dfa97e763b4db0d43402.mp3*~data=user_id=0,application_id=42~hmac=7b889d19ef05e842721a18ce567380ad548da03f4180a3ad3e10ddd59e3132a9",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f8364f090ba04f1b19b381ec0390f3e4/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-92734438",
        "title": "Uptown Funk (feat. Bruno Mars)",
        "artist": "Mark Ronson",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/0/a/0/b0a30d99fddf73c172e0d3f308899dd5.mp3?hdnea=exp=1788832875~acl=/api/1/1/b/0/a/0/b0a30d99fddf73c172e0d3f308899dd5.mp3*~data=user_id=0,application_id=42~hmac=686db1de6ec7e4cae47ff32718aa0fed816c4acebc770fa5e7b811bbd3e0445c",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3734366a73152d0367a83a4b09fd163f/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-136336110",
        "title": "24K Magic",
        "artist": "Bruno Mars",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/6/d/0/f6d7752ec2f4897dcbb120ea220f07ea.mp3?hdnea=exp=1788832875~acl=/api/1/1/f/6/d/0/f6d7752ec2f4897dcbb120ea220f07ea.mp3*~data=user_id=0,application_id=42~hmac=8f47f143c1e9285e347b6493ce3faf04d962d55c67b8f04b686229b4d55841f5",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/012b27906b430a37ec1d8f793d5c4fa6/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-908604612",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/b/2/0/1b27825bf63c36edcdc7fac9f920214e.mp3?hdnea=exp=1788832876~acl=/api/1/1/1/b/2/0/1b27825bf63c36edcdc7fac9f920214e.mp3*~data=user_id=0,application_id=42~hmac=08bd8764b1ec450457af71f253b610a3e0ab9fb1c35eab471ca0033a694c0fb1",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fd00ebd6d30d7253f813dba3bb1c66a9/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-925106",
        "title": "Umbrella",
        "artist": "Rihanna",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/6/2/0/c62231a4abced1c3e3ba03b5effb9aa9.mp3?hdnea=exp=1788832877~acl=/api/1/1/c/6/2/0/c62231a4abced1c3e3ba03b5effb9aa9.mp3*~data=user_id=0,application_id=42~hmac=710c933caabbc4364d72b2fd063649bae12614e1ac556930bfd98b98df269626",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/91276466fbc876d96be9e6926060af60/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-60978718",
        "title": "Diamonds",
        "artist": "Rihanna",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/9/a/0/d9a6e59bc4f67c830ab1df243e976e55.mp3?hdnea=exp=1788832877~acl=/api/1/1/d/9/a/0/d9a6e59bc4f67c830ab1df243e976e55.mp3*~data=user_id=0,application_id=42~hmac=7b0ba811e1a4c8855917e338b497fbe05398c6c02a4aa687118b170dea273e46",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/a1b2457fcd12bb9ed5488e4bbd01ec25/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-64549810",
        "title": "Katy Perry - Firework (Instrumental Version)",
        "artist": "Party Machine",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/4/6/0/f46f30924cfd888f268769eea9439af9.mp3?hdnea=exp=1788832878~acl=/api/1/1/f/4/6/0/f46f30924cfd888f268769eea9439af9.mp3*~data=user_id=0,application_id=42~hmac=fe8d54dc08b49c97c927157e74861efabdb96d0566ab2f13627253bafa7295de",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/53e4937e369f87b92d23d588632f81f9/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-4601933",
        "title": "Bad Romance",
        "artist": "Lady Gaga",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/3/b/0/33b5dc7d2b62c0c1fc8a0402adf0c719.mp3?hdnea=exp=1788832878~acl=/api/1/1/3/3/b/0/33b5dc7d2b62c0c1fc8a0402adf0c719.mp3*~data=user_id=0,application_id=42~hmac=6825d57ea722667f3184106be7f6619325f51ca79d91b39891e7e08f7d29e276",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/113b8636fb6571bd9d6a50a5fe9b37ff/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2603558",
        "title": "Poker Face",
        "artist": "Lady Gaga",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/3/3/0/233fe3a96cf1654b2cf30be68cb94624.mp3?hdnea=exp=1788832879~acl=/api/1/1/2/3/3/0/233fe3a96cf1654b2cf30be68cb94624.mp3*~data=user_id=0,application_id=42~hmac=fc3b59322fde0320f17fef5113346bc7c9d1358db20d817707b1ec317770721b",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/cc24d60a998e1a296f0c22efa8ddffd2/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-15391618",
        "title": "Toxic",
        "artist": "Britney Spears",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/d/3/0/9d34e72ceb70f4d8e347d3e21e245531.mp3?hdnea=exp=1788832879~acl=/api/1/1/9/d/3/0/9d34e72ceb70f4d8e347d3e21e245531.mp3*~data=user_id=0,application_id=42~hmac=542b0ca1b73504eab2fd951362859bca61e9ab27b822f9b4b1d4562067742926",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3157972",
        "title": "Viva La Vida",
        "artist": "Coldplay",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/2/5/0/e25fade11767fd539ad651da72103237.mp3?hdnea=exp=1788832880~acl=/api/1/1/e/2/5/0/e25fade11767fd539ad651da72103237.mp3*~data=user_id=0,application_id=42~hmac=ccab1f5ba9ec7c6ad0063d7a96c9a4c9ff95b2ca7ee42a1b1c7b21c062b9e120",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/eede3cd0dc3a5a87c7a5b1085b022e2d/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3128096",
        "title": "Yellow",
        "artist": "Coldplay",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/4/f/0/64f36083ad5a11e6803ef7ddbcdaf898.mp3?hdnea=exp=1788832880~acl=/api/1/1/6/4/f/0/64f36083ad5a11e6803ef7ddbcdaf898.mp3*~data=user_id=0,application_id=42~hmac=5723804446ee9a695d7aa15f38fcc56d10606afb1291745124833c27e63b1c7c",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/970dce98eeea6729244c0ae71707a83d/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-89077555",
        "title": "Shake It Off",
        "artist": "Taylor Swift",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/d/9/0/2d9810a9179e50e255861f3980d310df.mp3?hdnea=exp=1788832881~acl=/api/1/1/2/d/9/0/2d9810a9179e50e255861f3980d310df.mp3*~data=user_id=0,application_id=42~hmac=b74855226b78200ca966fa5d6bd2d8d639ffe6bc4108338b84e6af7ccb03b542",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-737967292",
        "title": "Cruel Summer",
        "artist": "Taylor Swift",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/c/d/2/0/cd2322270b4d6a7f34448c642123b257.mp3?hdnea=exp=1788832882~acl=/api/1/1/c/d/2/0/cd2322270b4d6a7f34448c642123b257.mp3*~data=user_id=0,application_id=42~hmac=1a0d5624b7359be24094331267253aeb384be93eb85f918450fad6c00b71b012",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/6111c5ab9729c8eac47883e4e50e9cf8/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-13141170",
        "title": "I Want It That Way",
        "artist": "Backstreet Boys",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/1/9/0/71997935a6df8ac013ac4f76fbe7d72e.mp3?hdnea=exp=1788832882~acl=/api/1/1/7/1/9/0/71997935a6df8ac013ac4f76fbe7d72e.mp3*~data=user_id=0,application_id=42~hmac=4284f231e3b2c71a46625ba0f40fd47b9885dc4e005010e5a8079af0e809be3c",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/d61eaad8f321ea876a5f5c7219aae892/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-5606967",
        "title": "Baby",
        "artist": "Justin Bieber",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/3/7/0/1377b0443b2c324b239425d106ee569c.mp3?hdnea=exp=1788832883~acl=/api/1/1/1/3/7/0/1377b0443b2c324b239425d106ee569c.mp3*~data=user_id=0,application_id=42~hmac=7381f3b9697eaa1aeaba373bdcf379ae31061346187f8af2e1f506bf025c48b6",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/39aa26b45fa69cd89b8ef1a46f106c43/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-139470659",
        "title": "Shape of You",
        "artist": "Ed Sheeran",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/1/b/0/f1becf66c6264a6a0306fc47d47690b0.mp3?hdnea=exp=1788832883~acl=/api/1/1/f/1/b/0/f1becf66c6264a6a0306fc47d47690b0.mp3*~data=user_id=0,application_id=42~hmac=47a95392bfc3f4148060942f5d5e52f6531ccc7d0b79e289e153b57077752608",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/107c2b43f10c249077c1f7618563bb63/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-100052800",
        "title": "Sugar",
        "artist": "Maroon 5",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/0/1/7/0/017732ba41e27c7b8b85f985ad511a76.mp3?hdnea=exp=1788832884~acl=/api/1/1/0/1/7/0/017732ba41e27c7b8b85f985ad511a76.mp3*~data=user_id=0,application_id=42~hmac=483ff3d6666c7616048f0705d33a8e950d94ec55d1529b986fee234deedde419",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/f0a1d4442389bcd7919a7054f8c0b785/250x250-000000-80-0-0.jpg",
        "duration": 30
      }
    ]
  },
  {
    "name": "🇦🇷 Pop & Hits Argentinos (Hoy y Siempre)",
    "description": "Miranda!, Tan Biónica, Lali, Emilia, Duki, TINI, WOS y éxitos de la escena argentina",
    "tracks": [
      {
        "id": "dz-109085614",
        "title": "Don",
        "artist": "Miranda!",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/6/6/0/76684bc25a206b09355d77a4822e2eee.mp3?hdnea=exp=1788832884~acl=/api/1/1/7/6/6/0/76684bc25a206b09355d77a4822e2eee.mp3*~data=user_id=0,application_id=42~hmac=c112ff69796f91950ad8bd0f018db1c19e2cf38208651a6fe555f3cfecb30cdd",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/88d629d14280f83189dc5d48a640ea84/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-109085608",
        "title": "Perfecta",
        "artist": "Miranda!",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/6/2/0/d62899db72d889e072585747b74d9b5c.mp3?hdnea=exp=1788832885~acl=/api/1/1/d/6/2/0/d62899db72d889e072585747b74d9b5c.mp3*~data=user_id=0,application_id=42~hmac=b939a84e8b8e6e58e1709eb1cea78f35f97029718bccdd4bf6a7077dace28f51",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/88d629d14280f83189dc5d48a640ea84/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-109085616",
        "title": "Yo Te Diré",
        "artist": "Miranda!",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/8/c/0/58c116c2c6d909ce31c37e0b333e12c7.mp3?hdnea=exp=1788832886~acl=/api/1/1/5/8/c/0/58c116c2c6d909ce31c37e0b333e12c7.mp3*~data=user_id=0,application_id=42~hmac=63403a274175b2c91c76da51bb8bdbb3cfef8f70286408752763ccc1d585c996",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/88d629d14280f83189dc5d48a640ea84/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3835213181",
        "title": "La Melodía de Dios",
        "artist": "Tan Bionica",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/a/3/0/9a33a6f0f1a690f7af62c4aae7a7a356.mp3?hdnea=exp=1788832886~acl=/api/1/1/9/a/3/0/9a33a6f0f1a690f7af62c4aae7a7a356.mp3*~data=user_id=0,application_id=42~hmac=d159f995fb43aa727aedad6788b642e4d45b2604f86393f6e1419bd669fe2be2",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9dd2f6dd099a3707a843d5699add7a82/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3835208481",
        "title": "Ciudad Mágica",
        "artist": "Tan Bionica",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/f/f/0/1ffbd4f3619035582db52dabb7a2f0ef.mp3?hdnea=exp=1788832887~acl=/api/1/1/1/f/f/0/1ffbd4f3619035582db52dabb7a2f0ef.mp3*~data=user_id=0,application_id=42~hmac=00eeb081413c1025e6e56c111c41536092ec7416dc9a37c054fb5bdc8d55fe22",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/5e7ed6cf23b5c0e7e8f40c7772d5b76c/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-3835610951",
        "title": "Ella",
        "artist": "Tan Bionica",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/3/b/0/d3b1724f8c15cbaa1a7ec0c344747340.mp3?hdnea=exp=1788832887~acl=/api/1/1/d/3/b/0/d3b1724f8c15cbaa1a7ec0c344747340.mp3*~data=user_id=0,application_id=42~hmac=fa3cba2a8b927c6a3de15b90f357cd0d444120d54618840656846e4e511cf496",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0848e305e049a83c7de46d097f4cf6a3/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1593697161",
        "title": "Disciplina",
        "artist": "Lali",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/2/6/0/d262bef83653c2a2549a74c9cdb04917.mp3?hdnea=exp=1788832888~acl=/api/1/1/d/2/6/0/d262bef83653c2a2549a74c9cdb04917.mp3*~data=user_id=0,application_id=42~hmac=408325862c5b30f87dc7ab7448305b07ac171e362be91b3c327f2548ce465323",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/e249b6c9db378b6582889c6edbaf0fd3/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1789915087",
        "title": "N5",
        "artist": "Lali",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/8/6/0/b86f6ba85e3615f99675667f76e0c006.mp3?hdnea=exp=1788832888~acl=/api/1/1/b/8/6/0/b86f6ba85e3615f99675667f76e0c006.mp3*~data=user_id=0,application_id=42~hmac=8e50be6761509f436fd7da751a2ead99e6a65cc82471890109e68cf2a5c9c65c",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/562f9cc55e2ff99bbc03f7600907fe10/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1869735187",
        "title": "2 Son 3",
        "artist": "Lali",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/f/8/0/bf89a19ab50a7e7ccd37b2d3b0c0630f.mp3?hdnea=exp=1788832889~acl=/api/1/1/b/f/8/0/bf89a19ab50a7e7ccd37b2d3b0c0630f.mp3*~data=user_id=0,application_id=42~hmac=e54d3f97cdb85ecb4c2df84889026d1293f978336e112f01be8e523f93fa741b",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/797cc0b8793c6925cc6a48a95ed3b92d/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1690025137",
        "title": "cuatro veinte",
        "artist": "Emilia",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/6/8/0/e68b231a57103200c3db460ff880d4fd.mp3?hdnea=exp=1788832889~acl=/api/1/1/e/6/8/0/e68b231a57103200c3db460ff880d4fd.mp3*~data=user_id=0,application_id=42~hmac=ebaa5574bc4af00e57b40c5ca8f6520bef6879a6db4ca930828b3d0ab9f96afc",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9861e63a84e165cb7cbac09dd0452aae/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2370371095",
        "title": "Los Del Espacio (8-Bit LIT killah, Tiago PZK, Maria Becerra, Duki, Emilia, Rusherking, Big One & FMK Emulation)",
        "artist": "8-Bit Arcade",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/9/e/0/99e8915ef70d032198bd08c8a0633987.mp3?hdnea=exp=1788832890~acl=/api/1/1/9/9/e/0/99e8915ef70d032198bd08c8a0633987.mp3*~data=user_id=0,application_id=42~hmac=8183c75b9eb661e9f3c5a4927e1e29f69d0eaa4be2b876d77960fcdca38cb9c2",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/0b41551018cf4d6502503b3793dd21a8/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2498034051",
        "title": "Exclusive.mp3",
        "artist": "Emilia",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/4/4/0/b44d14e9934514c2d58f0003de528d65.mp3?hdnea=exp=1788832890~acl=/api/1/1/b/4/4/0/b44d14e9934514c2d58f0003de528d65.mp3*~data=user_id=0,application_id=42~hmac=e0425a051424f8da349c30371911dd4f2f4b8bf0249ada97d7dede58ce8bb4ef",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/fb4855deb874e2b325c0b129edbf4bed/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1738689977",
        "title": "La Triple T",
        "artist": "TINI",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/2/5/0/b25fa6e292f4029d3aa03af74c07f8bf.mp3?hdnea=exp=1788832891~acl=/api/1/1/b/2/5/0/b25fa6e292f4029d3aa03af74c07f8bf.mp3*~data=user_id=0,application_id=42~hmac=7f9fd697928364088942251eb2e031342ffd067d713f7fe5cb32470cc675cbae",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/53c9ecf1ceb76456793bd4c894a429a6/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1349596782",
        "title": "Miénteme",
        "artist": "TINI",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/b/7/0/0/b7043937515638675a3ac002a49f9641.mp3?hdnea=exp=1788832891~acl=/api/1/1/b/7/0/0/b7043937515638675a3ac002a49f9641.mp3*~data=user_id=0,application_id=42~hmac=fe503ad48777c5030efec3c8962983f04100ba98098995daabb4eea38d258d03",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/3e6361aae5a06412f6029a371ddb464f/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2118092797",
        "title": "Cupido",
        "artist": "TINI",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/9/9/4/0/994ce023d197cae6656c0b0568080370.mp3?hdnea=exp=1788832892~acl=/api/1/1/9/9/4/0/994ce023d197cae6656c0b0568080370.mp3*~data=user_id=0,application_id=42~hmac=88d09f2df731233866936ba5911723948d8718d02c6c67a77ec40220072af48b",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/31a3acef6bb8a162959368468a2200d2/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1896169597",
        "title": "AUTOMÁTICO",
        "artist": "Maria Becerra",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/3/5/0/0/3503f3f3d3176ffda1bc9169ebf06b9f.mp3?hdnea=exp=1788832893~acl=/api/1/1/3/5/0/0/3503f3f3d3176ffda1bc9169ebf06b9f.mp3*~data=user_id=0,application_id=42~hmac=5cf667ad3416c0591ef7a2f3d2c3da91dd037a870fd2fea24aaf7286ec367255",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/af529e4f25611521e6d9cb941f83b3ae/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2319511545",
        "title": "CORAZÓN VACÍO",
        "artist": "Maria Becerra",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/f/3/f/0/f3f740e5edcb666c18b2bb3413cd1d9b.mp3?hdnea=exp=1788832893~acl=/api/1/1/f/3/f/0/f3f740e5edcb666c18b2bb3413cd1d9b.mp3*~data=user_id=0,application_id=42~hmac=efce088b1358bd18eedd6578d86edaaf3b0ce51e0d063457e076074845ff8383",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/81f90f43cd66e3e465c634ea3c4b5987/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-671769792",
        "title": "She Don't Give a Fo",
        "artist": "DUKI",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/2/9/2/0/292d0dea1b8eba7148fd433009a2f14c.mp3?hdnea=exp=1788832894~acl=/api/1/1/2/9/2/0/292d0dea1b8eba7148fd433009a2f14c.mp3*~data=user_id=0,application_id=42~hmac=1eef5ef88d706b2e32f39cc976e73f787988feec9a1b2a02cd701338dc06e710",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/42723051da011e21ddbb4b1c4a59ff5b/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-724785222",
        "title": "Goteo",
        "artist": "DUKI",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/5/7/e/0/57e24faccb72fcf19306372fdc021487.mp3?hdnea=exp=1788832894~acl=/api/1/1/5/7/e/0/57e24faccb72fcf19306372fdc021487.mp3*~data=user_id=0,application_id=42~hmac=a6cece9f10deecf1311d600b2e673b3327fd683b382e954f4b6a8df2ab00e014",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/7dd111ea4fc82fdfe6ab97267f281eb3/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2133509497",
        "title": "Rara Vez",
        "artist": "Milo j",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/4/f/b/0/4fbd4e8ec32253fbd06ec63904b91155.mp3?hdnea=exp=1788832895~acl=/api/1/1/4/f/b/0/4fbd4e8ec32253fbd06ec63904b91155.mp3*~data=user_id=0,application_id=42~hmac=008afd766eacfc4b832d38b45db56682a45dc2c37ed4c8a280bde465b95b16ea",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/30856007a5ff4b5175c61c3e4f9e8560/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-683998942",
        "title": "Wapo Traketero",
        "artist": "Nicki Nicole",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/a/9/0/1a9bdf8f65befd8a7cd5dfac833f48f0.mp3?hdnea=exp=1788832895~acl=/api/1/1/1/a/9/0/1a9bdf8f65befd8a7cd5dfac833f48f0.mp3*~data=user_id=0,application_id=42~hmac=7e8b37412f0550bacc8a5902956883052c6639b096ebeb54d584c1106d9fe435",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/47fe872a872da37cdc6c94394056f11b/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-727724632",
        "title": "CANGURO",
        "artist": "Wos",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/3/b/0/73ba0c0ea6a1a76b60cea67c0260b52d.mp3?hdnea=exp=1788832896~acl=/api/1/1/7/3/b/0/73ba0c0ea6a1a76b60cea67c0260b52d.mp3*~data=user_id=0,application_id=42~hmac=859a5b99c585d7b5322019272839ffaaf43e91771913fc165c7bc1a51ce9ead1",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/78eb6302346150d1c12ace5078dd3a60/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1689683147",
        "title": "ARRANCÁRMELO",
        "artist": "Wos",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/e/0/6/0/e064366e9a594913e16e4406b79de90f.mp3?hdnea=exp=1788832896~acl=/api/1/1/e/0/6/0/e064366e9a594913e16e4406b79de90f.mp3*~data=user_id=0,application_id=42~hmac=edf0f92dc9d68f9d605706cea845ade21e9129ef464cf8b54e7f92b0e6563dbf",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/81e0fabe5037c4810a6a42c97e56824d/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-1421208922",
        "title": "Entre Nosotros",
        "artist": "Tiago PZK",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/7/4/4/0/7445e3f338049b650848f5ad32b1b9ad.mp3?hdnea=exp=1788832897~acl=/api/1/1/7/4/4/0/7445e3f338049b650848f5ad32b1b9ad.mp3*~data=user_id=0,application_id=42~hmac=9b673f9d44acdf8848969e309ee051e5db4864608534c003d6c87e430a554593",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/817920d106430219a2267ec8d20845a3/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-758334752",
        "title": "Cabildo y Juramento",
        "artist": "Conociendo Rusia",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/1/7/d/0/17d11c7258e14717c9e5474880796b1e.mp3?hdnea=exp=1788832898~acl=/api/1/1/1/7/d/0/17d11c7258e14717c9e5474880796b1e.mp3*~data=user_id=0,application_id=42~hmac=3d1a1c96bc772c0ffec66de037495aa5529c40b1c42874e516cde41f63dae94f",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/28d09ccb3505a4b9fa7ec58d964c6706/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-2874969242",
        "title": "Por Mil Noches",
        "artist": "Airbag",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/b/a/0/dbaf02d86fa379413877c09157c8a8bc.mp3?hdnea=exp=1788832898~acl=/api/1/1/d/b/a/0/dbaf02d86fa379413877c09157c8a8bc.mp3*~data=user_id=0,application_id=42~hmac=c54b1dbb1958e15a084cc975796f8c3bbb6c7e36ce9058857d2b52e4726474fb",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/daf3e18bfe8415d421db86309a0af04f/250x250-000000-80-0-0.jpg",
        "duration": 30
      },
      {
        "id": "dz-555293672",
        "title": "Loco (Tu Forma de Ser) [Ft. Rubén Albarrán] (MTV Unplugged)",
        "artist": "Los Auténticos Decadentes",
        "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/6/2/2/0/62270d13c1e2ea69d33a8f09ef6ede52.mp3?hdnea=exp=1788832899~acl=/api/1/1/6/2/2/0/62270d13c1e2ea69d33a8f09ef6ede52.mp3*~data=user_id=0,application_id=42~hmac=bbc345f7f90e8783a8fd0754c6329442a064748e5925ce1921047034dc5fb139",
        "artworkUrl": "https://cdn-images.dzcdn.net/images/cover/9ef22acfa6345ebbb1df31def63ef432/250x250-000000-80-0-0.jpg",
        "duration": 30
      }
    ]
  }
];
