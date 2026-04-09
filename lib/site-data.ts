export const siteUrl = "https://viperr-five.vercel.app";

export type ArtistSlug = "kai-angel" | "9mice";

export type NavItem = {
  href: string;
  label: string;
};

export type ArtistStat = {
  label: string;
  value: string;
};

export type ArtistFeature = {
  title: string;
  text: string;
};

export type PlatformLink = {
  label: string;
  href: string;
  description: string;
  category: "listen" | "watch" | "social" | "official";
};

export type ArtistProfile = {
  slug: ArtistSlug;
  name: string;
  shortName: string;
  accent: "crimson" | "cyan";
  eyebrow: string;
  tagline: string;
  intro: string;
  heroCopy: string;
  heroQuote: string;
  image: string;
  imageAlt: string;
  heroImage?: string;
  heroImageAlt?: string;
  stats: ArtistStat[];
  features: ArtistFeature[];
  releaseIds: string[];
  previewTrackIds: string[];
  galleryIds: string[];
  links: PlatformLink[];
};

export type ReleaseItem = {
  id: string;
  title: string;
  artistLabel: string;
  artistKeys: Array<ArtistSlug | "duo">;
  format: string;
  releaseDate: string;
  dateLabel: string;
  year: string;
  trackCount: string;
  runtime: string;
  summary: string;
  detail: string;
  cover: string;
  coverAlt: string;
  spotifyUrl?: string;
  appleUrl: string;
};

export type PreviewTrack = {
  id: string;
  title: string;
  artistLabel: string;
  artistKey: ArtistSlug | "duo";
  note: string;
  previewLabel: string;
  previewUrl?: string;
  listenUrl: string;
  platformLabel: string;
  cover: string;
  coverAlt: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  category: "artists" | "covers" | "stills";
  tone: string;
  size: "square" | "portrait" | "wide";
};

export type LinkGroup = {
  title: string;
  description: string;
  items: PlatformLink[];
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Главная" },
  { href: "/kai-angel", label: "Kai Angel" },
  { href: "/9mice", label: "9mice" },
  { href: "/releases", label: "Релизы" },
  { href: "/gallery", label: "Галерея" },
  { href: "/links", label: "Ссылки" },
];

export const siteHighlights = [
  {
    value: "6",
    label: "полноценных страниц",
  },
  {
    value: "8",
    label: "треков в подборке",
  },
  {
    value: "9",
    label: "ключевых релизов в каталоге",
  },
  {
    value: "13",
    label: "изображений в галерее",
  },
];

export const artists: Record<ArtistSlug, ArtistProfile> = {
  "kai-angel": {
    slug: "kai-angel",
    name: "Kai Angel",
    shortName: "Kai",
    accent: "crimson",
    eyebrow: "Solo Focus",
    tagline: "Сольная линия Kai Angel: драматичный тон, собранный визуальный код и релизы, которые работают как законченные сцены.",
    intro:
      "Kai Angel держит баланс между мелодией, холодной подачей и очень выверенным образом. На этой странице собраны его сольные релизы, треки для прослушивания и визуальные материалы, которые помогают увидеть масштаб проекта целиком.",
    heroCopy:
      "Страница Kai Angel построена вокруг сольной траектории артиста: от ранних релизов к более крупным и собранным работам. Здесь нет фанатской мишуры и выдуманных историй, только релизы, визуалы и быстрые переходы на официальные площадки.",
    heroQuote:
      "Сильная сторона Kai Angel не только в треках, но и в умении собирать вокруг музыки цельный образ.",
    image: "/media/artists/kai-angel-portrait.jpg",
    imageAlt: "Kai Angel, официальное изображение из Apple Music",
    heroImage: "/media/gallery/kai-video-still.jpg",
    heroImageAlt: "Kai Angel, кадр из видео",
    stats: [
      { label: "Релизов в подборке", value: "5" },
      { label: "Ключевые страницы", value: "релизы / галерея / ссылки" },
      { label: "Треки и архивные ссылки", value: "4" },
    ],
    features: [
      {
        title: "Музыка как сцена",
        text: "В сольных работах Kai Angel важны не только хуки, но и ощущение постановки: трек будто сразу существует вместе со светом, силуэтом и кадром.",
      },
      {
        title: "Собранная драматургия",
        text: "Даже в более жёстком материале у него обычно есть чёткий эмоциональный нерв. Поэтому релизы звучат цельно, а не как набор случайных треков.",
      },
      {
        title: "Визуальная дисциплина",
        text: "Обложки, фото и общий стиль подачи читаются как часть одной системы, а не как разрозненные элементы промо.",
      },
    ],
    releaseIds: ["damage", "god-system", "angel-may-cry", "heavy-metal-2", "heavy-metal"],
    previewTrackIds: ["body-double", "whats-upppppp", "my-sweet-lullaby", "angryy"],
    galleryIds: ["kai-artist", "kai-still", "damage-cover", "god-system-cover", "angel-cover"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/artist/1pxLlPRiWRUBGdSOrVL4f0",
        description: "Официальная страница Kai Angel на Spotify.",
        category: "listen",
      },
      {
        label: "BandLink",
        href: "https://band.link/KAIANGEL9MICE",
        description: "Общий smart-link проекта VIPERR.",
        category: "official",
      },
      {
        label: "SoundCloud",
        href: "https://soundcloud.com/viperrviperr",
        description: "VIPERR на SoundCloud.",
        category: "listen",
      },
    ],
  },
  "9mice": {
    slug: "9mice",
    name: "9mice",
    shortName: "9mice",
    accent: "cyan",
    eyebrow: "Artist Page",
    tagline: "9mice: холодная мелодика, клубная динамика и подача, в которой много скорости, но нет лишнего шума.",
    intro:
      "Страница 9mice отличается по настроению от Kai Angel: здесь больше клубного импульса, холодного света и прямого хука. Внутри собраны сольные релизы, треки для прослушивания и визуальные материалы без перегруза и декоративной пустоты.",
    heroCopy:
      "На этой странице акцент сделан на сольной линии 9mice и на том, как его подача соединяет клубную скорость, холодную мелодию и очень уверенный поп-хук. Материал собран так, чтобы было удобно и слушать, и переходить на официальные платформы.",
    heroQuote:
      "9mice лучше всего работает там, где энергия остаётся жёсткой, а мелодия всё равно цепляет с первого включения.",
    image: "/media/artists/9mice-portrait.jpg",
    imageAlt: "9mice, официальное изображение из Apple Music",
    stats: [
      { label: "Релизов в подборке", value: "6" },
      { label: "Треки и платформы", value: "4" },
      { label: "Основной акцент", value: "club / hook / image" },
    ],
    features: [
      {
        title: "Клубный импульс",
        text: "Даже когда трек строится вокруг мелодии, у 9mice в нём обычно остаётся ощущение движения и давления, за счёт которого музыка не проседает.",
      },
      {
        title: "Холодный хук",
        text: "Сильная сторона 9mice в том, что цепляющий припев не делает музыку мягкой. Напряжение сохраняется даже в самых мелодичных вещах.",
      },
      {
        title: "Своя подача",
        text: "Страница сделана не копией Kai Angel: здесь больше воздуха, голубых акцентов и клубной графики, чтобы ощущение артиста было отдельным.",
      },
    ],
    releaseIds: ["9mm", "heavy-metal-2", "your-love", "orpheus", "soloist", "heavy-metal"],
    previewTrackIds: ["mmw", "avril-lavigne", "gosha-rubchinskiy", "kill-bill"],
    galleryIds: ["9mice-artist", "duo-portrait", "9mm-cover", "orpheus-cover", "soloist-cover"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/artist/3v0qTkZvuro4johOZyIhOm",
        description: "Официальная страница 9mice на Spotify.",
        category: "listen",
      },
      {
        label: "BandLink",
        href: "https://band.link/KAIANGEL9MICE",
        description: "Общий smart-link проекта VIPERR.",
        category: "official",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@viperrviperrviperr/",
        description: "YouTube-канал, на который ведёт BandLink.",
        category: "watch",
      },
    ],
  },
};

export const releases: ReleaseItem[] = [
  {
    id: "9mm",
    title: "9mm",
    artistLabel: "9mice",
    artistKeys: ["9mice"],
    format: "Album",
    releaseDate: "2025-10-17",
    dateLabel: "17 октября 2025",
    year: "2025",
    trackCount: "14 треков",
    runtime: "полный релиз",
    summary: "Сольный альбом 9mice с более плотной и собранной подачей.",
    detail:
      "В каталоге проекта этот релиз показывает более поздний этап: меньше хаоса, больше уверенного контроля над темпом, хуками и образом.",
    spotifyUrl: "https://open.spotify.com/album/2ZjaGkJU86y2WOd3t9rc9u",
    cover: "/media/covers/9mm.jpg",
    coverAlt: "Обложка альбома 9mm",
    appleUrl: "https://music.apple.com/us/album/9mm/1846155523",
  },
  {
    id: "damage",
    title: "damage",
    artistLabel: "Kai Angel",
    artistKeys: ["kai-angel"],
    format: "Album",
    releaseDate: "2025-09-05",
    dateLabel: "5 сентября 2025",
    year: "2025",
    trackCount: "17 треков",
    runtime: "полный релиз",
    summary: "Один из самых больших сольных релизов Kai Angel в этом проекте.",
    detail:
      "На странице Kai Angel этот альбом используется как точка для разговора о более зрелом и крупном масштабе подачи.",
    spotifyUrl: "https://open.spotify.com/album/2wDFDUxHnXAhCY682osJh6",
    cover: "/media/covers/damage.jpg",
    coverAlt: "Обложка альбома damage",
    appleUrl: "https://music.apple.com/us/album/damage/1836427637",
  },
  {
    id: "heavy-metal-2",
    title: "Heavy Metal 2",
    artistLabel: "9mice & Kai Angel",
    artistKeys: ["kai-angel", "9mice", "duo"],
    format: "Album",
    releaseDate: "2024-09-13",
    dateLabel: "13 сентября 2024",
    year: "2024",
    trackCount: "21 трек",
    runtime: "полный релиз",
    summary: "Большой совместный релиз, где общий звук и образ уже собраны максимально уверенно.",
    detail:
      "Это одна из главных точек входа в общий проект: масштабный релиз, который работает и как музыкальная работа, и как центр визуальной айдентики VIPERR.",
    spotifyUrl: "https://open.spotify.com/album/2apmGMKFppnLu7eccTQwM2",
    cover: "/media/covers/heavy-metal-2.jpg",
    coverAlt: "Обложка альбома Heavy Metal 2",
    appleUrl: "https://music.apple.com/us/album/heavy-metal-2/1767963478",
  },
  {
    id: "your-love",
    title: "Your Love",
    artistLabel: "9mice",
    artistKeys: ["9mice"],
    format: "Single",
    releaseDate: "2024-05-17",
    dateLabel: "17 мая 2024",
    year: "2024",
    trackCount: "1 трек",
    runtime: "single",
    summary: "Точный и более мягкий по форме сольный сингл 9mice.",
    detail:
      "Этот релиз хорошо показывает, как 9mice работает с мелодией без потери темпа и характерной холодной подачи.",
    cover: "/media/covers/your-love.jpg",
    coverAlt: "Обложка сингла Your Love",
    appleUrl: "https://music.apple.com/us/album/your-love/1746458431?i=1746458437",
  },
  {
    id: "god-system",
    title: "GOD SYSTEM",
    artistLabel: "Kai Angel",
    artistKeys: ["kai-angel"],
    format: "Album",
    releaseDate: "2024-03-22",
    dateLabel: "22 марта 2024",
    year: "2024",
    trackCount: "17 треков",
    runtime: "полный релиз",
    summary: "Крупный сольный релиз Kai Angel с уже очень собранным визуальным кодом.",
    detail:
      "Для этой страницы альбом важен как точка, где сольный почерк Kai Angel становится максимально цельным и масштабным.",
    spotifyUrl: "https://open.spotify.com/album/4mOYvmMHqKHT81fcWBOFuF",
    cover: "/media/covers/god-system.jpg",
    coverAlt: "Обложка альбома GOD SYSTEM",
    appleUrl: "https://music.apple.com/us/album/god-system/1736962256",
  },
  {
    id: "orpheus",
    title: "ORPHEUS",
    artistLabel: "9mice",
    artistKeys: ["9mice"],
    format: "Album",
    releaseDate: "2023-12-08",
    dateLabel: "8 декабря 2023",
    year: "2023",
    trackCount: "15 треков",
    runtime: "полный релиз",
    summary: "Один из ключевых сольных альбомов 9mice в каталоге проекта.",
    detail:
      "На фоне более поздних релизов ORPHEUS хорошо показывает, как формировался собственный голос артиста.",
    spotifyUrl: "https://open.spotify.com/album/3c7myEnQJ6P2HrquNNL4gn",
    cover: "/media/covers/orpheus.jpg",
    coverAlt: "Обложка альбома ORPHEUS",
    appleUrl: "https://music.apple.com/us/album/orpheus/1719945440",
  },
  {
    id: "angel-may-cry",
    title: "ANGEL MAY CRY",
    artistLabel: "Kai Angel",
    artistKeys: ["kai-angel"],
    format: "Album",
    releaseDate: "2023-07-07",
    dateLabel: "7 июля 2023",
    year: "2023",
    trackCount: "7 треков",
    runtime: "полный релиз",
    summary: "Ранний, но уже очень узнаваемый сольный релиз Kai Angel.",
    detail:
      "Здесь особенно хорошо слышно, как у Kai Angel складывается связка мелодии, напряжения и визуального самоконтроля.",
    spotifyUrl: "https://open.spotify.com/album/5P3Y4IXLwQzZF5v9fFRIFz",
    cover: "/media/covers/angel-may-cry.jpg",
    coverAlt: "Обложка альбома ANGEL MAY CRY",
    appleUrl: "https://music.apple.com/us/album/angel-may-cry/1696056090",
  },
  {
    id: "heavy-metal",
    title: "HEAVY METAL",
    artistLabel: "Kai Angel & 9mice",
    artistKeys: ["kai-angel", "9mice", "duo"],
    format: "EP",
    releaseDate: "2023-02-17",
    dateLabel: "17 февраля 2023",
    year: "2023",
    trackCount: "6 треков",
    runtime: "13 минут",
    summary: "Релиз, с которого удобно заходить в ранний общий период проекта.",
    detail:
      "На Apple Music эта EP отмечена как релиз от 17 февраля 2023 года. Для сайта она важна как отправная точка общего звучания и общего визуального языка.",
    cover: "/media/covers/heavy-metal.jpg",
    coverAlt: "Обложка релиза HEAVY METAL",
    appleUrl: "https://music.apple.com/us/album/heavy-metal-ep/1671139616",
  },
  {
    id: "soloist",
    title: "SOLOIST",
    artistLabel: "9mice",
    artistKeys: ["9mice"],
    format: "Album",
    releaseDate: "2021-12-28",
    dateLabel: "28 декабря 2021",
    year: "2021",
    trackCount: "7 треков",
    runtime: "ранний релиз",
    summary: "Более ранний альбом 9mice, который даёт контекст сольной траектории.",
    detail:
      "На releases-странице SOLOIST помогает показать, что у 9mice есть не только свежие релизы, но и база, на которой строился более поздний материал.",
    cover: "/media/covers/soloist.jpg",
    coverAlt: "Обложка альбома SOLOIST",
    appleUrl: "https://music.apple.com/us/album/soloist/1694212695",
  },
];

export const previewTracks: PreviewTrack[] = [
  {
    id: "body-double",
    title: "body double",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Официальное превью Apple Music из релиза damage. Хорошо передаёт поздний, уже очень собранный масштаб Kai Angel.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ac/2d/0b/ac2d0bdc-2b09-f7cd-9696-30b8fb5d37ae/mzaf_7960285255258480722.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/1jpG4muUehH5zr2W0daX7e",
    platformLabel: "Spotify",
    cover: "/media/covers/damage.jpg",
    coverAlt: "Обложка damage",
  },
  {
    id: "whats-upppppp",
    title: "what's uppppppxddDDD",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Для этого трека я оставил прямой переход на SoundCloud: встроенного фрагмента на сайте нет, поэтому карточка работает честно как внешняя ссылка.",
    previewLabel: "SoundCloud link · без встроенного аудио",
    listenUrl: "https://soundcloud.com/4ngelkai/whats-uppppppxddddd",
    platformLabel: "SoundCloud",
    cover: "/media/artists/kai-angel-portrait.jpg",
    coverAlt: "Kai Angel",
  },
  {
    id: "my-sweet-lullaby",
    title: "My Sweet Lullaby",
    artistLabel: "zavet / Kai Angel archive",
    artistKey: "kai-angel",
    note: "Ранний архивный трек эпохи zavet. На сайте для него оставлен прямой переход на SoundCloud без попытки имитировать встроенный плеер.",
    previewLabel: "Archive link · без встроенного аудио",
    listenUrl: "https://soundcloud.com/zavetvip_itskov/my-sweet-lullaby",
    platformLabel: "SoundCloud",
    cover: "/media/gallery/kai-video-still.jpg",
    coverAlt: "Кадр Kai Angel",
  },
  {
    id: "angryy",
    title: "ANGRYY",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Прямой переход на публичный SoundCloud-трек Kai Angel & 9mice. Карточка не обещает встроенный звук, если подтверждённого превью нет.",
    previewLabel: "SoundCloud link · без встроенного аудио",
    listenUrl: "https://soundcloud.com/9mice9/kai-angel-angryy",
    platformLabel: "SoundCloud",
    cover: "/media/covers/angel-may-cry.jpg",
    coverAlt: "Обложка ANGEL MAY CRY",
  },
  {
    id: "mmw",
    title: "MMW / Москва - Владивосток",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Официальное превью Apple Music для более позднего сольного периода 9mice. Хорошо работает как быстрый вход в текущую линию артиста.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5b/f5/0f/5bf50f44-21c8-af6d-75f6-c1baea32b99b/mzaf_8210116308552012983.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/3mvqKKyF6rgYd52bBSCTza",
    platformLabel: "Spotify",
    cover: "/media/artists/9mice-portrait.jpg",
    coverAlt: "9mice",
  },
  {
    id: "avril-lavigne",
    title: "AVRIL LAVIGNE",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Для этого трека подтверждён прямой внешний переход, поэтому карточка ведёт сразу на платформу и не рисует несуществующий play на странице.",
    previewLabel: "Spotify link · без встроенного аудио",
    listenUrl: "https://open.spotify.com/track/6wYaBjCIB4xrtiT83GVc1w",
    platformLabel: "Spotify",
    cover: "/media/artists/9mice-portrait.jpg",
    coverAlt: "9mice",
  },
  {
    id: "gosha-rubchinskiy",
    title: "ГОША РУБЧИНСКИЙ",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Официальное превью Apple Music из сольной линии 9mice с более резкой подачей и прямым клубным нервом.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/61/d6/11/61d61161-8277-9acb-5f38-731d0f86a857/mzaf_15218783780857868765.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/3gqQlyorpm7mZOK6cgrO2U",
    platformLabel: "Spotify",
    cover: "/media/artists/9mice-portrait.jpg",
    coverAlt: "9mice",
  },
  {
    id: "kill-bill",
    title: "kill bill / evian",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Официальный Apple Music-фрагмент из позднего периода 9mice. Хорошо показывает более плотную и уже совсем собранную подачу.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0c/29/0a/0c290a52-a0c0-a4e3-626f-2c568b051321/mzaf_12452515014329367968.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/7I1003ebr2hrnJmUN6YBAp",
    platformLabel: "Spotify",
    cover: "/media/covers/9mm.jpg",
    coverAlt: "Обложка 9mm",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "duo-portrait",
    title: "VIPERR duo portrait",
    caption: "Общая фотография проекта, использована как главный визуальный акцент на главной странице.",
    src: "/media/artists/duo-bandlink.jpeg",
    alt: "Kai Angel и 9mice, общее изображение проекта VIPERR",
    category: "artists",
    tone: "Главная сцена",
    size: "wide",
  },
  {
    id: "kai-artist",
    title: "Kai Angel",
    caption: "Официальное изображение артиста из Apple Music.",
    src: "/media/artists/kai-angel-portrait.jpg",
    alt: "Kai Angel",
    category: "artists",
    tone: "Artist profile",
    size: "portrait",
  },
  {
    id: "9mice-artist",
    title: "9mice",
    caption: "Официальное изображение артиста из Apple Music.",
    src: "/media/artists/9mice-portrait.jpg",
    alt: "9mice",
    category: "artists",
    tone: "Artist profile",
    size: "portrait",
  },
  {
    id: "kai-still",
    title: "Kai video still",
    caption: "Видео-кадр, который помогает разбавить галерею не только обложками, но и живым визуалом.",
    src: "/media/gallery/kai-video-still.jpg",
    alt: "Видео-кадр Kai Angel",
    category: "stills",
    tone: "Video still",
    size: "wide",
  },
  {
    id: "heavy-metal-cover",
    title: "HEAVY METAL",
    caption: "Ранняя общая точка входа в проект.",
    src: "/media/covers/heavy-metal.jpg",
    alt: "Обложка HEAVY METAL",
    category: "covers",
    tone: "EP cover",
    size: "square",
  },
  {
    id: "angel-cover",
    title: "ANGEL MAY CRY",
    caption: "Сольная глава Kai Angel.",
    src: "/media/covers/angel-may-cry.jpg",
    alt: "Обложка ANGEL MAY CRY",
    category: "covers",
    tone: "Album cover",
    size: "square",
  },
  {
    id: "orpheus-cover",
    title: "ORPHEUS",
    caption: "Ключевой сольный релиз 9mice.",
    src: "/media/covers/orpheus.jpg",
    alt: "Обложка ORPHEUS",
    category: "covers",
    tone: "Album cover",
    size: "square",
  },
  {
    id: "god-system-cover",
    title: "GOD SYSTEM",
    caption: "Крупный сольный релиз Kai Angel.",
    src: "/media/covers/god-system.jpg",
    alt: "Обложка GOD SYSTEM",
    category: "covers",
    tone: "Album cover",
    size: "square",
  },
  {
    id: "heavy-metal-2-cover",
    title: "Heavy Metal 2",
    caption: "Большой совместный релиз проекта.",
    src: "/media/covers/heavy-metal-2.jpg",
    alt: "Обложка Heavy Metal 2",
    category: "covers",
    tone: "Album cover",
    size: "square",
  },
  {
    id: "9mm-cover",
    title: "9mm",
    caption: "Поздний сольный релиз 9mice.",
    src: "/media/covers/9mm.jpg",
    alt: "Обложка 9mm",
    category: "covers",
    tone: "Album cover",
    size: "square",
  },
  {
    id: "damage-cover",
    title: "damage",
    caption: "Поздняя глава в сольной дискографии Kai Angel.",
    src: "/media/covers/damage.jpg",
    alt: "Обложка damage",
    category: "covers",
    tone: "Album cover",
    size: "square",
  },
  {
    id: "your-love-cover",
    title: "Your Love",
    caption: "Сингл 9mice с более прямой мелодической линией.",
    src: "/media/covers/your-love.jpg",
    alt: "Обложка Your Love",
    category: "covers",
    tone: "Single cover",
    size: "square",
  },
  {
    id: "soloist-cover",
    title: "SOLOIST",
    caption: "Ранний сольный контекст 9mice.",
    src: "/media/covers/soloist.jpg",
    alt: "Обложка SOLOIST",
    category: "covers",
    tone: "Archive cover",
    size: "square",
  },
];

export const homeFeaturedReleaseIds = ["heavy-metal-2", "damage", "9mm"];
export const homePreviewTrackIds = ["body-double", "whats-upppppp", "mmw", "gosha-rubchinskiy"];
export const homeGalleryIds = ["duo-portrait", "kai-artist", "9mice-artist", "kai-still"];

export const linkGroups: LinkGroup[] = [
  {
    title: "Слушать",
    description: "Подтверждённые музыкальные площадки, на которые этот сайт ведёт напрямую.",
    items: [
      {
        label: "Kai Angel · Spotify",
        href: "https://open.spotify.com/artist/1pxLlPRiWRUBGdSOrVL4f0",
        description: "Официальная страница Kai Angel на Spotify.",
        category: "listen",
      },
      {
        label: "9mice · Spotify",
        href: "https://open.spotify.com/artist/3v0qTkZvuro4johOZyIhOm",
        description: "Официальная страница 9mice на Spotify.",
        category: "listen",
      },
      {
        label: "VIPERR · SoundCloud",
        href: "https://soundcloud.com/viperrviperr",
        description: "Переход на SoundCloud-страницу VIPERR.",
        category: "listen",
      },
    ],
  },
  {
    title: "Смотреть",
    description: "Переходы на публичные страницы, где можно продолжить знакомство с визуальным материалом.",
    items: [
      {
        label: "VIPERR · YouTube",
        href: "https://www.youtube.com/@viperrviperrviperr/",
        description: "YouTube-канал, на который ведёт официальный BandLink.",
        category: "watch",
      },
      {
        label: "Галерея на сайте",
        href: "/gallery",
        description: "Внутренняя галерея проекта с фото, кадрами и обложками.",
        category: "official",
      },
    ],
  },
  {
    title: "Официальные переходы",
    description: "Здесь только публичные ссылки. Приватные контакты и неподтверждённые соцсети сайт не публикует.",
    items: [
      {
        label: "BandLink · Kai Angel & 9mice",
        href: "https://band.link/KAIANGEL9MICE",
        description: "Общий smart-link проекта VIPERR.",
        category: "official",
      },
      {
        label: "Релизы на сайте",
        href: "/releases",
        description: "Внутренняя страница-каталог с датами и описаниями релизов.",
        category: "official",
      },
      {
        label: "Страница Kai Angel",
        href: "/kai-angel",
        description: "Отдельная страница Kai Angel с релизами и превью.",
        category: "official",
      },
      {
        label: "Страница 9mice",
        href: "/9mice",
        description: "Отдельная страница 9mice с релизами и превью.",
        category: "official",
      },
    ],
  },
];

export function getArtist(slug: ArtistSlug) {
  return artists[slug];
}

export function getReleaseById(id: string) {
  return releases.find((release) => release.id === id);
}

export function getPreviewTrackById(id: string) {
  return previewTracks.find((track) => track.id === id);
}

export function getGalleryItemById(id: string) {
  return galleryItems.find((item) => item.id === id);
}

export function getReleasesByIds(ids: string[]) {
  return ids.flatMap((id) => {
    const release = getReleaseById(id);

    return release ? [release] : [];
  });
}

export function getPreviewTracksByIds(ids: string[]) {
  return ids.flatMap((id) => {
    const track = getPreviewTrackById(id);

    return track ? [track] : [];
  });
}

export function getGalleryItemsByIds(ids: string[]) {
  return ids.flatMap((id) => {
    const item = getGalleryItemById(id);

    return item ? [item] : [];
  });
}

export function getArtistReleases(slug: ArtistSlug) {
  return releases.filter((release) => release.artistKeys.includes(slug));
}

export function getArtistPreviewTracks(slug: ArtistSlug) {
  return previewTracks.filter((track) => track.artistKey === slug || track.artistKey === "duo");
}
