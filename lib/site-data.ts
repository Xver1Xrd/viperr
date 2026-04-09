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
    value: "2",
    label: "артиста в фокусе",
  },
  {
    value: "9",
    label: "релизов в архиве",
  },
  {
    value: "8",
    label: "треков с фрагментом",
  },
  {
    value: "13",
    label: "визуалов в галерее",
  },
];

export const artists: Record<ArtistSlug, ArtistProfile> = {
  "kai-angel": {
    slug: "kai-angel",
    name: "Kai Angel",
    shortName: "Kai",
    accent: "crimson",
    eyebrow: "Solo Focus",
    tagline: "Kai Angel держит линию на драматичной мелодии, холодной подаче и очень выверенном образе.",
    intro:
      "У Kai Angel музыка держится не только на хуках, но и на ощущении формы. Даже самые жёсткие треки у него собраны как цельный кадр: свет, напряжение, мелодия и контроль.",
    heroCopy:
      "Сольная траектория Kai Angel идёт от раннего напряжения к более крупным и собранным релизам. В его музыке почти всегда слышно одно и то же ядро: драматичная мелодия, резкий силуэт и точный контроль над настроением.",
    heroQuote:
      "У Kai Angel музыка и образ почти всегда работают как один кадр.",
    image: "/media/artists/kai-angel-user.jpg",
    imageAlt: "Kai Angel, выбранное пользовательское фото",
    heroImage: "/media/artists/kai-angel-user.jpg",
    heroImageAlt: "Kai Angel, выбранное пользовательское фото",
    stats: [
      { label: "Релизов в подборке", value: "5" },
      { label: "Главный тон", value: "мелодия / напряжение / образ" },
      { label: "Треков с фрагментом", value: "4" },
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
    previewTrackIds: ["body-double", "jump", "god-system-track", "welcome-to-forever"],
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
        description: "Smart-link с основными площадками VIPERR.",
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
    tagline: "9mice соединяет холодную мелодику, клубный темп и хук, который срабатывает сразу.",
    intro:
      "У 9mice сильнее ощущается клубное давление: темп, холодный свет и прямой хук. Даже когда трек уходит в мелодию, в нём всё равно остаётся движение и жёсткость.",
    heroCopy:
      "Сольная линия 9mice держится на скорости, холодной мелодике и очень уверенном припеве. В его лучших вещах поп-хук не смягчает удар, а только делает его заметнее.",
    heroQuote:
      "Лучший режим 9mice — когда мелодия цепляет сразу, а энергия остаётся жёсткой.",
    image: "/media/artists/9mice-user.jpg",
    imageAlt: "9mice, выбранное пользовательское фото",
    stats: [
      { label: "Релизов в подборке", value: "6" },
      { label: "Треков с фрагментом", value: "4" },
      { label: "Основной тон", value: "club / hook / cold" },
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
        text: "Даже в более мягких вещах 9mice держит свой холодный силуэт, поэтому его материал считывается отдельно и не теряется рядом с Kai Angel.",
      },
    ],
    releaseIds: ["9mm", "heavy-metal-2", "your-love", "orpheus", "soloist", "heavy-metal"],
    previewTrackIds: ["mmw", "your-love-track", "gosha-rubchinskiy", "kill-bill"],
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
        description: "Smart-link с основными площадками VIPERR.",
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
      "Этот релиз показывает более поздний этап: меньше хаоса, больше уверенного контроля над темпом, хуками и образом.",
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
    summary: "Один из самых больших сольных релизов Kai Angel.",
    detail:
      "Здесь особенно хорошо слышно, как Kai Angel держит уже более крупный и собранный масштаб подачи.",
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
      "Одна из главных точек входа в общий материал Kai Angel и 9mice: масштабный релиз, где звук и визуал уже работают как единое целое.",
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
      "Здесь сольный почерк Kai Angel звучит особенно цельно: масштабно, холодно и очень уверенно.",
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
    summary: "Один из ключевых сольных альбомов 9mice.",
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
    summary: "Релиз, с которого удобно заходить в ранний общий период.",
    detail:
      "Ранний общий релиз, в котором уже слышно, как у Kai Angel и 9mice складывается общий звук и визуальный тон.",
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
      "SOLOIST даёт ранний контекст для сольной линии 9mice и помогает увидеть, на чём вырос более поздний материал.",
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
    note: "Фрагмент из damage. Хорошо передаёт поздний, уже очень собранный масштаб Kai Angel.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ac/2d/0b/ac2d0bdc-2b09-f7cd-9696-30b8fb5d37ae/mzaf_7960285255258480722.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/1jpG4muUehH5zr2W0daX7e",
    platformLabel: "Spotify",
    cover: "/media/covers/damage.jpg",
    coverAlt: "Обложка damage",
  },
  {
    id: "jump",
    title: "JUMP!",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Фрагмент из ANGEL MAY CRY, в котором хорошо слышны раннее напряжение и мелодическая линия Kai Angel.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/57/29/f157296a-153d-0031-4f89-944a942369ad/mzaf_12106263820482462520.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/5uX7sUKp3kKgYGCkKLGlY4",
    platformLabel: "Spotify",
    cover: "/media/covers/angel-may-cry.jpg",
    coverAlt: "Обложка ANGEL MAY CRY",
  },
  {
    id: "god-system-track",
    title: "GOD SYSTEM",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Превью из крупного сольного альбома Kai Angel с более тяжёлой и масштабной подачей.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/90/d1/6690d146-7dce-ea5d-2931-f5c28c4dd37b/mzaf_8471135285195264430.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/album/4mOYvmMHqKHT81fcWBOFuF",
    platformLabel: "Spotify",
    cover: "/media/covers/god-system.jpg",
    coverAlt: "Обложка GOD SYSTEM",
  },
  {
    id: "welcome-to-forever",
    title: "welcome to forever",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Ещё один фрагмент из позднего периода Kai Angel: более крупный, спокойный и уверенный по тону.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/93/75/77/93757752-409e-1e9e-02da-af6f69515c54/mzaf_4440295897619256944.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/album/77gELhxARvEp3QeI9CHTPw",
    platformLabel: "Spotify",
    cover: "/media/covers/damage.jpg",
    coverAlt: "Обложка damage",
  },
  {
    id: "whats-upppppp",
    title: "what's uppppppxddDDD",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Для этого трека доступен прямой переход на SoundCloud.",
    previewLabel: "SoundCloud link · без встроенного аудио",
    listenUrl: "https://soundcloud.com/4ngelkai/whats-uppppppxddddd",
    platformLabel: "SoundCloud",
    cover: "/media/artists/kai-angel-user.jpg",
    coverAlt: "Kai Angel",
  },
  {
    id: "my-sweet-lullaby",
    title: "My Sweet Lullaby",
    artistLabel: "zavet / Kai Angel archive",
    artistKey: "kai-angel",
    note: "Ранний архивный трек эпохи zavet с прямым переходом на SoundCloud.",
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
    note: "Публичный SoundCloud-трек Kai Angel и 9mice с прямым переходом на платформу.",
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
    note: "Фрагмент из более позднего сольного периода 9mice: быстрый вход в его текущую линию.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5b/f5/0f/5bf50f44-21c8-af6d-75f6-c1baea32b99b/mzaf_8210116308552012983.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/3mvqKKyF6rgYd52bBSCTza",
    platformLabel: "Spotify",
    cover: "/media/artists/9mice-user.jpg",
    coverAlt: "9mice",
  },
  {
    id: "your-love-track",
    title: "your love",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Превью сольного трека 9mice с более мягкой мелодикой и цепким припевом.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e1/06/10/e106101f-2b5e-048e-c469-b7e2c03b6b82/mzaf_2497123240899110376.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/2H2ekprtLWD4djsHw7Aa2Q",
    platformLabel: "Spotify",
    cover: "/media/covers/your-love.jpg",
    coverAlt: "Обложка Your Love",
  },
  {
    id: "avril-lavigne",
    title: "AVRIL LAVIGNE",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Для этого трека доступен прямой переход на Spotify.",
    previewLabel: "Spotify link · без встроенного аудио",
    listenUrl: "https://open.spotify.com/track/6wYaBjCIB4xrtiT83GVc1w",
    platformLabel: "Spotify",
    cover: "/media/artists/9mice-user.jpg",
    coverAlt: "9mice",
  },
  {
    id: "gosha-rubchinskiy",
    title: "ГОША РУБЧИНСКИЙ",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Фрагмент из сольной линии 9mice с более резкой подачей и прямым клубным нервом.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/61/d6/11/61d61161-8277-9acb-5f38-731d0f86a857/mzaf_15218783780857868765.plus.aac.p.m4a",
    listenUrl: "https://open.spotify.com/track/3gqQlyorpm7mZOK6cgrO2U",
    platformLabel: "Spotify",
    cover: "/media/artists/9mice-user.jpg",
    coverAlt: "9mice",
  },
  {
    id: "kill-bill",
    title: "kill bill / evian",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Официальный фрагмент из позднего периода 9mice с более плотной и уже совсем собранной подачей.",
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
    caption: "Общий кадр Kai Angel и 9mice.",
    src: "/media/artists/duo-bandlink.jpeg",
    alt: "Kai Angel и 9mice",
    category: "artists",
    tone: "Главная сцена",
    size: "wide",
  },
  {
    id: "kai-artist",
    title: "Kai Angel",
    caption: "Основной портрет Kai Angel.",
    src: "/media/artists/kai-angel-user.jpg",
    alt: "Kai Angel",
    category: "artists",
    tone: "Artist profile",
    size: "portrait",
  },
  {
    id: "9mice-artist",
    title: "9mice",
    caption: "Основной портрет 9mice.",
    src: "/media/artists/9mice-user.jpg",
    alt: "9mice",
    category: "artists",
    tone: "Artist profile",
    size: "portrait",
  },
  {
    id: "kai-still",
    title: "Kai Angel portrait",
    caption: "Крупный портрет Kai Angel.",
    src: "/media/artists/kai-angel-user.jpg",
    alt: "Портрет Kai Angel",
    category: "stills",
    tone: "Portrait",
    size: "wide",
  },
  {
    id: "heavy-metal-cover",
    title: "HEAVY METAL",
    caption: "Ранняя общая точка входа.",
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
    caption: "Большой совместный релиз.",
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
export const homePreviewTrackIds = ["body-double", "jump", "mmw", "gosha-rubchinskiy"];
export const homeGalleryIds = ["duo-portrait", "kai-artist", "9mice-artist", "kai-still"];

export const linkGroups: LinkGroup[] = [
  {
    title: "Слушать",
    description: "Главные музыкальные площадки Kai Angel, 9mice и VIPERR.",
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
        description: "SoundCloud VIPERR.",
        category: "listen",
      },
    ],
  },
  {
    title: "Смотреть",
    description: "Видео и визуальный архив.",
    items: [
      {
        label: "VIPERR · YouTube",
        href: "https://www.youtube.com/@viperrviperrviperr/",
        description: "YouTube-канал, на который ведёт официальный BandLink.",
        category: "watch",
      },
      {
        label: "Галерея VIPERR",
        href: "/gallery",
        description: "Галерея с фото, кадрами и обложками.",
        category: "official",
      },
    ],
  },
  {
    title: "Официальные переходы",
    description: "Основные точки входа в архив и smart-link VIPERR.",
    items: [
      {
        label: "BandLink · Kai Angel & 9mice",
        href: "https://band.link/KAIANGEL9MICE",
        description: "Smart-link Kai Angel и 9mice.",
        category: "official",
      },
      {
        label: "Архив релизов",
        href: "/releases",
        description: "Каталог с датами, обложками и описаниями релизов.",
        category: "official",
      },
      {
        label: "Kai Angel",
        href: "/kai-angel",
        description: "Kai Angel: релизы, треки и визуалы.",
        category: "official",
      },
      {
        label: "9mice",
        href: "/9mice",
        description: "9mice: релизы, треки и визуалы.",
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
