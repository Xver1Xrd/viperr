export type NavItem = {
  label: string;
  href: string;
};

export type ArtistProfile = {
  name: string;
  signal: string;
  description: string;
  highlights: string[];
  accent: string;
};

export type ReleaseItem = {
  title: string;
  date: string;
  year: string;
  type: string;
  artist: string;
  details: string;
  description: string;
  href: string;
  accent: string;
  layout: string;
};

export type TrackItem = {
  title: string;
  artist: string;
  phase: string;
  tempo: string;
  durationLabel: string;
  durationSeconds: number;
  description: string;
  waveform: number[];
  accent: string;
  step: number;
};

export type GalleryItem = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: string;
  layout: string;
};

export type TimelineItem = {
  year: string;
  phase: string;
  title: string;
  description: string;
  notes: string[];
};

export type SocialLink = {
  label: string;
  kind: "bandlink" | "soundcloud" | "apple" | "stream";
  href: string;
  handle: string;
  description: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Identity", href: "#identity" },
  { label: "Releases", href: "#releases" },
  { label: "Tracks", href: "#tracks" },
  { label: "Gallery", href: "#gallery" },
  { label: "Era", href: "#timeline" },
  { label: "Connect", href: "#connect" },
];

export const artists: ArtistProfile[] = [
  {
    name: "Kai Angel",
    signal: "cinematic glamour / high-drama pressure",
    description:
      "Kai Angel подаёт музыку как постановку: трек, силуэт, свет и fashion-код существуют одновременно. В его орбите мелодика всегда звучит как часть более крупного визуального кадра.",
    highlights: ["ANGEL MAY CRY", "GOD SYSTEM", "damage"],
    accent: "from-[#f7f8ff] via-[#8ca8ff] to-[#ff758c]",
  },
  {
    name: "9mice",
    signal: "club voltage / cold romance / runway nerve",
    description:
      "9mice работает на стыке клубного импульса и ледяной поп-чувствительности. Его вайб держится на контрасте: дерзость, флирт, тревога и идеально контролируемая подача.",
    highlights: ["ORPHEUS", "Heavy Metal 2", "9mm"],
    accent: "from-[#f8f0ff] via-[#8e7bff] to-[#7dd8ff]",
  },
];

export const releases: ReleaseItem[] = [
  {
    title: "HEAVY METAL",
    date: "17 FEB 2023",
    year: "2023",
    type: "EP",
    artist: "Kai Angel x 9mice",
    details: "6 tracks / 13 min",
    description:
      "Первая сильная фиксация общего кода: cold hooks, chrome glare и ощущение, что музыка уже несёт в себе визуальный монтаж.",
    href: "https://music.apple.com/us/album/heavy-metal-ep/1671139616",
    accent: "from-[#7c6bff] via-[#6ca3ff] to-[#f3f6ff]",
    layout: "lg:col-span-7",
  },
  {
    title: "ANGEL MAY CRY",
    date: "07 JUL 2023",
    year: "2023",
    type: "Album",
    artist: "Kai Angel",
    details: "7 tracks / 15 min",
    description:
      "Ранняя персональная драма Kai Angel: резкий романтизм, нервный свет и музыка, которая будто просится в экранный close-up.",
    href: "https://music.apple.com/us/album/angel-may-cry/1696056090",
    accent: "from-[#ffd0db] via-[#ff607f] to-[#7f8dff]",
    layout: "lg:col-span-5",
  },
  {
    title: "ORPHEUS",
    date: "08 DEC 2023",
    year: "2023",
    type: "Album",
    artist: "9mice",
    details: "15 tracks / 33 min",
    description:
      "Точка, где 9mice складывает холодную мелодичность, клубную динамику и цифровую романтику в цельный личный миф.",
    href: "https://music.apple.com/us/album/orpheus/1719945440",
    accent: "from-[#7ed7ff] via-[#8c7cff] to-[#f1f5ff]",
    layout: "lg:col-span-5",
  },
  {
    title: "GOD SYSTEM",
    date: "22 MAR 2024",
    year: "2024",
    type: "Album",
    artist: "Kai Angel",
    details: "17 tracks / 40 min",
    description:
      "Расширение масштаба: больше архитектуры, больше театральности и ещё более чётко выстроенная авторская вселенная.",
    href: "https://music.apple.com/us/album/god-system/1736962256",
    accent: "from-[#f5f8ff] via-[#7fa1ff] to-[#8e7bff]",
    layout: "lg:col-span-7",
  },
  {
    title: "Heavy Metal 2",
    date: "13 SEP 2024",
    year: "2024",
    type: "Album",
    artist: "9mice x Kai Angel",
    details: "21 tracks / 38 min",
    description:
      "Вторая волна звучит масштабнее и злее: клубная тяга, холодный блеск, hook-driven энергия и уже совсем взрослая постановка образа.",
    href: "https://music.apple.com/us/album/heavy-metal-2/1767963478",
    accent: "from-[#f1f5ff] via-[#6fa4ff] to-[#72e1ff]",
    layout: "lg:col-span-7",
  },
  {
    title: "9mm",
    date: "17 OCT 2025",
    year: "2025",
    type: "Album",
    artist: "9mice",
    details: "14 tracks / 28 min",
    description:
      "Свежий 9mice-режим: ещё плотнее, ещё точнее и с ощущением, что каждый трек уже знает свой свет, цвет и скорость.",
    href: "https://music.apple.com/us/album/9mm/1846155523",
    accent: "from-[#d8deff] via-[#8c7cff] to-[#ff8ca1]",
    layout: "lg:col-span-5",
  },
];

export const tracks: TrackItem[] = [
  {
    title: "LIPSTICK",
    artist: "Kai Angel x 9mice",
    phase: "chrome heartbreak",
    tempo: "128 bpm",
    durationLabel: "02:14",
    durationSeconds: 134,
    description:
      "Неоновый крючок, в котором романтика и дерзость звучат как один и тот же световой импульс.",
    waveform: [18, 26, 24, 42, 30, 68, 54, 44, 60, 26, 48, 72, 58, 34, 66, 38, 30, 56],
    accent: "rgba(255, 92, 114, 0.8)",
    step: 1.1,
  },
  {
    title: "STAY WITH ME",
    artist: "9mice x Kai Angel",
    phase: "digital romance",
    tempo: "114 bpm",
    durationLabel: "02:03",
    durationSeconds: 123,
    description:
      "Более мягкая, но не менее холодная точка входа: мелодия будто написана для ночной дороги и отражений в стекле.",
    waveform: [14, 18, 24, 32, 40, 56, 62, 54, 44, 28, 22, 34, 50, 66, 58, 38, 26, 18],
    accent: "rgba(114, 168, 255, 0.8)",
    step: 0.96,
  },
  {
    title: "2017",
    artist: "9mice x Kai Angel",
    phase: "runway pressure",
    tempo: "136 bpm",
    durationLabel: "02:31",
    durationSeconds: 151,
    description:
      "Трек с ощущением afterparty-подъёма: резкая подача, высокое напряжение и безошибочный fashion-attitude.",
    waveform: [20, 34, 48, 62, 72, 56, 38, 42, 68, 74, 60, 36, 28, 48, 64, 78, 58, 40],
    accent: "rgba(142, 123, 255, 0.82)",
    step: 1.24,
  },
  {
    title: "JUMP!",
    artist: "Kai Angel",
    phase: "high-drama signal",
    tempo: "122 bpm",
    durationLabel: "02:18",
    durationSeconds: 138,
    description:
      "Kai Angel в максимально режиссёрском состоянии: ставка на атмосферу, запоминающийся жест и подчёркнуто кинематографичный ритм.",
    waveform: [12, 26, 42, 58, 46, 30, 44, 62, 70, 50, 38, 30, 48, 66, 52, 36, 24, 16],
    accent: "rgba(255, 150, 177, 0.84)",
    step: 1.04,
  },
  {
    title: "Your Love",
    artist: "9mice",
    phase: "cold devotion",
    tempo: "116 bpm",
    durationLabel: "02:09",
    durationSeconds: 129,
    description:
      "Лёд и эмоция работают вместе: минималистичная подача, яркий hook и нужная доля digital melancholy.",
    waveform: [10, 18, 26, 36, 52, 62, 56, 40, 28, 20, 30, 46, 60, 68, 54, 34, 24, 16],
    accent: "rgba(126, 216, 255, 0.86)",
    step: 0.98,
  },
  {
    title: "Phoenix",
    artist: "9mice",
    phase: "club-lit ascent",
    tempo: "132 bpm",
    durationLabel: "02:27",
    durationSeconds: 147,
    description:
      "Финальный подъём с правильной дозой эйфории: всё светится, но не теряет жёсткости и контроля.",
    waveform: [16, 24, 32, 48, 62, 78, 66, 44, 30, 38, 54, 70, 76, 62, 46, 30, 20, 12],
    accent: "rgba(255, 211, 112, 0.86)",
    step: 1.16,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Chrome Entrance",
    subtitle: "imagined campaign still",
    description:
      "Сцена, где свет выглядит почти как металл: стекло, дым и резкий белый акцент вокруг силуэта.",
    tags: ["chrome haze", "editorial frame"],
    accent: "from-[#ffffff] via-[#7aa4ff] to-[#8e7bff]",
    layout: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Backstage Blur",
    subtitle: "digital afterparty",
    description:
      "Размытый зал, красный импульс в глубине и ощущение, что кадр пойман между выступлением и runway-проходом.",
    tags: ["afterlight", "grain wash"],
    accent: "from-[#ff758c] via-[#8e7bff] to-[#121726]",
    layout: "md:col-span-4",
  },
  {
    title: "Cold Spotlight",
    subtitle: "stage pressure study",
    description:
      "Минимальный свет, жёсткая геометрия и почти музейная подача тёмного концертного образа.",
    tags: ["black gloss", "hard light"],
    accent: "from-[#dfe6ff] via-[#6fa4ff] to-[#04060c]",
    layout: "md:col-span-4",
  },
  {
    title: "Midnight Poster",
    subtitle: "tour-fiction artwork",
    description:
      "Постер как объект: типографика не просто подписывает артистов, а становится самостоятельной частью ритма.",
    tags: ["poster mode", "oversized type"],
    accent: "from-[#7c6bff] via-[#ff5c72] to-[#0b0f1e]",
    layout: "md:col-span-5",
  },
  {
    title: "Neon Crowd",
    subtitle: "audience energy map",
    description:
      "Толпа читается как световой массив, а не как фон; картинка держит баланс между хаосом и контролем.",
    tags: ["motion dust", "club pulse"],
    accent: "from-[#6fd3ff] via-[#8e7bff] to-[#ff8ca1]",
    layout: "md:col-span-3",
  },
  {
    title: "Editorial Freeze",
    subtitle: "fashion-coded silence",
    description:
      "Кадр, где тишина тоже работает на образ: много воздуха, много тьмы и один точный акцент света.",
    tags: ["quiet menace", "glass cut"],
    accent: "from-[#f8f9ff] via-[#8e7bff] to-[#070913]",
    layout: "md:col-span-4 md:row-span-2",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    year: "2021",
    phase: "solo ignition",
    title: "Первый самостоятельный контур 9mice",
    description:
      "Эра раннего силуэта: 9mice начинает собирать собственный визуальный язык, который позже станет частью более крупной орбиты.",
    notes: ["SOLOIST", "raw identity", "future pressure"],
  },
  {
    year: "2023",
    phase: "shared signal",
    title: "HEAVY METAL фиксирует общее притяжение",
    description:
      "Синглы и релизы 2023 года превращают дуэтный код в узнаваемую сцену: щ, STAY WITH ME, HEAVY METAL, ANGEL MAY CRY и ORPHEUS работают как серия связанных жестов.",
    notes: ["HEAVY METAL", "щ", "STAY WITH ME", "ANGEL MAY CRY", "ORPHEUS"],
  },
  {
    year: "2024",
    phase: "world-building",
    title: "Масштаб становится кинематографичнее",
    description:
      "GOD SYSTEM, Heavy Metal 2 и Your Love расширяют пространство проекта: больше деталей, выше контраст и заметно взрослее постановка образа.",
    notes: ["GOD SYSTEM", "Heavy Metal 2", "Your Love"],
  },
  {
    year: "2025",
    phase: "afterglow pressure",
    title: "Личный вектор каждого становится ещё сильнее",
    description:
      "Kai Angel находит ещё более резкий драматизм в ANGEL MAY CRY 2 и damage, а 9mice собирает новый заряд в 9mm и серии синглов.",
    notes: ["ANGEL MAY CRY 2", "damage", "9mm", "lovesong"],
  },
  {
    year: "2026",
    phase: "next transmission",
    title: "Орбита остаётся открытой и подвижной",
    description:
      "На весну 2026 года траектория не останавливается: свежие релизы удерживают ощущение непрерывного движения и обновления визуального кода.",
    notes: ["Do Vesni", "ongoing rollout", "VIPERR motion"],
  },
];

export const manifestPhrases = [
  "dark luxury",
  "chrome heartbreak",
  "fashion-coded rap",
  "club-lit cinema",
  "viperr universe",
  "controlled chaos",
];

export const socialLinks: SocialLink[] = [
  {
    label: "BandLink",
    kind: "bandlink",
    href: "https://band.link/KAIANGEL9MICE",
    handle: "Kai Angel x 9mice",
    description:
      "Одна точка входа в стриминги и релизы, если нужен быстрый переход в официальный duo feed.",
  },
  {
    label: "SoundCloud",
    kind: "soundcloud",
    href: "https://soundcloud.com/viperrviperr",
    handle: "viperrviperr",
    description:
      "Сырая энергия и прямой доступ к звуку в форме, которая ощущается ближе к underground-пульсу.",
  },
  {
    label: "Apple Music",
    kind: "apple",
    href: "https://music.apple.com/us/artist/kai-angel/1617297110",
    handle: "Kai Angel",
    description:
      "Персональная дуга Kai Angel: от ANGEL MAY CRY и GOD SYSTEM до более позднего material.",
  },
  {
    label: "Apple Music",
    kind: "stream",
    href: "https://music.apple.com/us/artist/9mice/1593955534",
    handle: "9mice",
    description:
      "Треклист и альбомы 9mice: ORPHEUS, Heavy Metal 2, 9mm и дальнейшее развитие линии.",
  },
];
