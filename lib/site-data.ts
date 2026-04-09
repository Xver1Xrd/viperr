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
  appleUrl: string;
};

export type PreviewTrack = {
  id: string;
  title: string;
  artistLabel: string;
  artistKey: ArtistSlug | "duo";
  note: string;
  previewLabel: string;
  previewUrl: string;
  appleUrl: string;
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
    label: "официальных аудио-превью",
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
      "Kai Angel держит баланс между мелодией, холодной подачей и очень выверенным образом. На этой странице собраны его сольные релизы, официальные превью и визуальные материалы, которые помогают увидеть масштаб проекта целиком.",
    heroCopy:
      "Страница Kai Angel построена вокруг сольной траектории артиста: от ранних релизов к более крупным и собранным работам. Здесь нет фанатской мишуры и выдуманных историй, только релизы, визуалы и быстрые переходы на официальные площадки.",
    heroQuote:
      "Сильная сторона Kai Angel не только в треках, но и в умении собирать вокруг музыки цельный образ.",
    image: "/media/artists/kai-angel.png",
    imageAlt: "Kai Angel, официальное изображение из Apple Music",
    stats: [
      { label: "Сольных релизов в проекте", value: "3" },
      { label: "Ключевые страницы", value: "релизы / галерея / ссылки" },
      { label: "Официальные превью", value: "4 трека" },
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
    previewTrackIds: ["jump", "god-system", "welcome-to-forever", "lipstick"],
    galleryIds: ["kai-artist", "kai-still", "damage-cover", "god-system-cover", "angel-cover"],
    links: [
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/artist/kai-angel/1617297110",
        description: "Официальная страница Kai Angel на Apple Music.",
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
      "Страница 9mice отличается по настроению от Kai Angel: здесь больше клубного импульса, холодного света и прямого хука. Внутри собраны сольные релизы, рабочие аудио-превью и визуальные материалы без перегруза и декоративной пустоты.",
    heroCopy:
      "На этой странице акцент сделан на сольной линии 9mice и на том, как его подача соединяет клубную скорость, холодную мелодию и очень уверенный поп-хук. Материал собран так, чтобы было удобно и слушать, и переходить на официальные платформы.",
    heroQuote:
      "9mice лучше всего работает там, где энергия остаётся жёсткой, а мелодия всё равно цепляет с первого включения.",
    image: "/media/artists/9mice.png",
    imageAlt: "9mice, официальное изображение из Apple Music",
    stats: [
      { label: "Сольных релизов в проекте", value: "3" },
      { label: "Официальные превью", value: "4 трека" },
      { label: "Основной акцент", value: "hook / tempo / image" },
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
    previewTrackIds: ["your-love", "phoenix", "new-york", "sugar"],
    galleryIds: ["9mice-artist", "duo-portrait", "9mm-cover", "orpheus-cover", "soloist-cover"],
    links: [
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/artist/9mice/1593955534",
        description: "Официальная страница 9mice на Apple Music.",
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
    id: "lipstick",
    title: "LIPSTICK",
    artistLabel: "Kai Angel & 9mice",
    artistKey: "duo",
    note: "Официальное 30-секундное превью из Apple Music. Хорошая точка входа в ранний общий период.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/17/2d/f8172d1d-a721-4805-a96b-2af1862955b6/mzaf_4105021938128095817.plus.aac.p.m4a",
    appleUrl: "https://music.apple.com/us/album/heavy-metal-ep/1671139616",
    cover: "/media/covers/heavy-metal.jpg",
    coverAlt: "Обложка HEAVY METAL",
  },
  {
    id: "jump",
    title: "JUMP!",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Сольное превью, которое хорошо показывает драматичную и собранную подачу Kai Angel.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/57/29/f157296a-153d-0031-4f89-944a942369ad/mzaf_12106263820482462520.plus.aac.p.m4a",
    appleUrl: "https://music.apple.com/us/album/angel-may-cry/1696056090",
    cover: "/media/covers/angel-may-cry.jpg",
    coverAlt: "Обложка ANGEL MAY CRY",
  },
  {
    id: "god-system",
    title: "GOD SYSTEM",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Превью из крупного сольного альбома, где хорошо слышен более собранный масштаб.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/90/d1/6690d146-7dce-ea5d-2931-f5c28c4dd37b/mzaf_8471135285195264430.plus.aac.p.m4a",
    appleUrl: "https://music.apple.com/us/album/god-system/1736962256",
    cover: "/media/covers/god-system.jpg",
    coverAlt: "Обложка GOD SYSTEM",
  },
  {
    id: "welcome-to-forever",
    title: "welcome to forever",
    artistLabel: "Kai Angel",
    artistKey: "kai-angel",
    note: "Ещё одно реальное превью, которое даёт более мягкий вход в поздний материал Kai Angel.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/93/75/77/93757752-409e-1e9e-02da-af6f69515c54/mzaf_4440295897619256944.plus.aac.p.m4a",
    appleUrl: "https://music.apple.com/us/album/damage/1836427637",
    cover: "/media/covers/damage.jpg",
    coverAlt: "Обложка damage",
  },
  {
    id: "your-love",
    title: "Your Love",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Понятное и рабочее превью сольного материала 9mice с более мелодичным уклоном.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e1/06/10/e106101f-2b5e-048e-c469-b7e2c03b6b82/mzaf_2497123240899110376.plus.aac.p.m4a",
    appleUrl: "https://music.apple.com/us/album/your-love/1746458431?i=1746458437",
    cover: "/media/covers/your-love.jpg",
    coverAlt: "Обложка Your Love",
  },
  {
    id: "phoenix",
    title: "Phoenix",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Трек из Heavy Metal 2, который хорошо передаёт клубный нерв и скорость.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/44/0f/8a/440f8a27-4ee3-f709-2c48-89e3fa16bb38/mzaf_10139663016666059776.plus.aac.p.m4a",
    appleUrl: "https://music.apple.com/us/album/heavy-metal-2/1767963478",
    cover: "/media/covers/heavy-metal-2.jpg",
    coverAlt: "Обложка Heavy Metal 2",
  },
  {
    id: "new-york",
    title: "New-York",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Короткое официальное превью, удобное для быстрого знакомства с более ранним сольным материалом.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/85/4f/23/854f23b9-d0b3-b0f0-201d-4dd973d879d3/mzaf_13039916023168646923.plus.aac.p.m4a",
    appleUrl: "https://music.apple.com/us/album/soloist/1694212695",
    cover: "/media/covers/soloist.jpg",
    coverAlt: "Обложка SOLOIST",
  },
  {
    id: "sugar",
    title: "sugar",
    artistLabel: "9mice",
    artistKey: "9mice",
    note: "Превью более позднего сольного релиза 9mice с плотной, собранной подачей.",
    previewLabel: "Apple Music preview · 00:30",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f3/90/b3/f390b3ee-283b-d8df-0a0f-6681af54a8b7/mzaf_17751664694102821656.plus.aac.p.m4a",
    appleUrl: "https://music.apple.com/us/album/9mm/1846155523",
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
    src: "/media/artists/kai-angel.png",
    alt: "Kai Angel",
    category: "artists",
    tone: "Artist profile",
    size: "portrait",
  },
  {
    id: "9mice-artist",
    title: "9mice",
    caption: "Официальное изображение артиста из Apple Music.",
    src: "/media/artists/9mice.png",
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
export const homePreviewTrackIds = ["lipstick", "jump", "your-love", "phoenix"];
export const homeGalleryIds = ["duo-portrait", "kai-artist", "9mice-artist", "kai-still"];

export const linkGroups: LinkGroup[] = [
  {
    title: "Слушать",
    description: "Подтверждённые музыкальные площадки, на которые этот сайт ведёт напрямую.",
    items: [
      {
        label: "Kai Angel · Apple Music",
        href: "https://music.apple.com/us/artist/kai-angel/1617297110",
        description: "Официальная страница Kai Angel на Apple Music.",
        category: "listen",
      },
      {
        label: "9mice · Apple Music",
        href: "https://music.apple.com/us/artist/9mice/1593955534",
        description: "Официальная страница 9mice на Apple Music.",
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
