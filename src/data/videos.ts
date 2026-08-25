export type VideoCategory = 'talks' | 'product' | 'music';

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  date: string;
  category: VideoCategory;
  featured?: boolean;
}

// Every entry verified against the RSS feeds of @MaxSapozhnikov and @Happyverse-AI.
export const videos: Video[] = [
  {
    id: 'bay-signal',
    youtubeId: 'zJ-ngbUHCUg',
    title: 'Happyverse, Stanford & Building AI Avatars in SF — The Bay Signal #1',
    date: '2025-06-01',
    category: 'talks',
    featured: true,
  },
  {
    id: 'argam-talks',
    youtubeId: 's8eEINcvLC0',
    title: 'The Future of Voice AI & Digital Avatars — Argam Talks',
    date: '2025-10-24',
    category: 'talks',
    featured: true,
  },
  {
    id: 'aizada-marat',
    youtubeId: 'LabkqsPPO5U',
    title: 'Макс Сапожников об MBA Стэнфорда и своём бэкграунде — Aizada Marat',
    date: '2021-01-01',
    category: 'talks',
    featured: true,
  },
  {
    id: 'agi-summit',
    youtubeId: 'yb4wQK4nLAQ',
    title: 'AGI Interface Summit',
    date: '2025-11-18',
    category: 'talks',
    featured: true,
  },
  {
    id: 'ai-coaching',
    youtubeId: 'vi0dSCc6DO0',
    title: 'AI and Coaching: A Discussion',
    date: '2025-08-04',
    category: 'talks',
    featured: true,
  },
  {
    id: 'chakroff',
    youtubeId: '6xBn1Nr3OsI',
    title: 'VIPERFLOW Coach — Conversation with Alek Chakroff',
    date: '2025-05-01',
    category: 'talks',
    featured: true,
  },
  {
    id: 'uncanny-valley',
    youtubeId: 'nSLOzTGKW8o',
    title: 'Entering Uncanny Valley: Open Source Tech for Real-Time AI Clones',
    date: '2025-07-25',
    category: 'talks',
  },
  {
    id: 'digital-human',
    youtubeId: 'Wa7YIc4YLXQ',
    title: 'Happyverse — Digital Human Demo',
    date: '2026-06-13',
    category: 'product',
    featured: true,
  },
  {
    id: 'duttweiler',
    youtubeId: 'ntZU-nLn5io',
    title: 'Digital Twin of Gottlieb Duttweiler — 100 Years of Migros',
    date: '2025-09-11',
    category: 'product',
  },
  {
    id: 'website-avatars',
    youtubeId: 'ya57p3JYD1w',
    title: 'Put a Face on Your Website with Happyverse Avatars',
    date: '2025-10-20',
    category: 'product',
  },
  {
    id: 'hbs-essay',
    youtubeId: 'u5sDGTLLBpg',
    title: 'HBS MBA Video Essay — delivered as a rap',
    date: '2016-01-01',
    category: 'music',
    featured: true,
  },
  {
    id: 'den-goroda',
    youtubeId: 'BQQARya8IMg',
    title: 'Delamax & Naomi — День Города',
    date: '2013-09-01',
    category: 'music',
  },
  {
    id: 'lion-promo',
    youtubeId: 'uNICq1-gzks',
    title: 'Delamax — Lion Concert Promo',
    date: '2013-08-27',
    category: 'music',
  },
  {
    id: 'happyverse-rap',
    youtubeId: 'Ziz-TzfLKcY',
    title: 'Happy-Happy-Happyverse Rap',
    date: '2026-04-22',
    category: 'music',
  },
];

export const featuredVideos = videos.filter((v) => v.featured);
export const videosByCategory = (category: VideoCategory) =>
  videos.filter((v) => v.category === category);
