import { site } from '../data/site';

export const en = {
  code: 'en' as const,
  htmlLang: 'en',
  alt: { code: 'ru', label: 'RU', title: 'Читать по-русски' },
  prefix: '',

  nav: [
    { label: 'Life', href: '/#life' },
    { label: 'Watch', href: '/#watch' },
    { label: 'Writing', href: '/#writing' },
    { label: 'Now', href: '/#now' },
    { label: 'Work', href: '/work' },
  ],

  meta: {
    title: 'Max Sapo — Google Cloud TPU, founder, CFA, rapper',
    description:
      'Max Sapo (Delamax): Senior PM on Google Cloud TPU, founder of Happyverse.AI, ex-Etched, CFA charterholder, and a rapper since 2003. Love, health, work, wealth — all four, on the record.',
    ogAlt: 'Max Sapo',
  },

  hero: {
    eyebrow: 'Siberia → Moscow → Stanford → San Francisco',
    title: 'Hi, I’m Max. I sell supercomputers by day.',
    titleAccent: 'By night I rap, chase California sunsets, and build things that make people happier.',
    lede:
      'Senior PM on Google Cloud TPU, founder of Happyverse.AI — and the guy who answered Harvard Business School’s video essay with a rap. I ended up at Stanford. Draw your own conclusions.',
    ctas: [
      { label: 'Watch me talk', href: '/watch', primary: true },
      { label: 'Proof I actually work', href: '/work', primary: false },
      { label: 'Pitch me an idea', href: `mailto:${site.email}`, primary: false },
    ],
    portraitAlt: 'Max laughing on the rocky California coast',
    portraitCaption: 'Pacific coast · default level of seriousness',
  },

  stats: [
    { value: '4', label: 'generations of Google TPU taken to market' },
    { value: '$355M', label: 'IPO led at Sistema — Detsky Mir, 2017' },
    { value: '30+', label: 'tracks as Delamax — on SoundCloud. Grammy pending.', href: site.social.soundcloud },
    { value: '4', label: 'things founded: Happyverse, Power Couple Club, finetuned.me, MLHappy' },
  ],

  pillars: {
    eyebrow: 'The whole picture',
    title: 'Four dials, not one.',
    lede:
      'Love, health, work, wealth — the four dials I actually run my life on. Click one and poke around.',
    items: [
      {
        key: 'love',
        label: 'Love',
        title: 'Ambition is easier in pairs.',
        tagline: 'Romance, family, friends, and Power Couple Club.',
        href: '/love',
      },
      {
        key: 'health',
        label: 'Health',
        title: 'You cannot out-think a body you are wrecking.',
        tagline: 'Body, emotions, energy — and finetuned.me.',
        href: '/health',
      },
      {
        key: 'work',
        label: 'Work',
        title: 'The silicon, the face on top, and back to the silicon.',
        tagline: 'Google TPU, Etched, Happyverse. The full record.',
        href: '/work',
      },
      {
        key: 'wealth',
        label: 'Wealth',
        title: 'I did finance properly before I did tech.',
        tagline: 'Earnings, freedom, legacy — and a $355M IPO.',
        href: '/wealth',
      },
    ],
    enter: 'Enter',
  },

  quadrants: {
    love: {
      label: 'Love',
      eyebrow: 'Dial 01 · Love',
      title: 'Ambition is easier in pairs.',
      lede:
        'Relationships sit at the center of the whole system — we are social animals, and no career compounds faster than the person next to you.',
      dialsTitle: 'The dials I watch',
      dials: [
        { name: 'Romance', desc: 'Mutual love and real quality time with your partner — not just logistics.' },
        { name: 'Family', desc: 'Presence with kids, parents, siblings. Being in the room, not just near it.' },
        { name: 'Friends & communities', desc: 'The people who knew you before the job title, and the rooms where you belong.' },
        { name: 'Passions', desc: 'Things you do purely because you love them — for joy, not for the feed.' },
      ],
      doingTitle: 'What I actually do about it',
      doing: [
        {
          title: 'Power Couple Club',
          body:
            'A private club in San Francisco and Los Angeles for people who refuse to choose between a career and a life. Curated dinners, real introductions, none of the networking-event energy.',
          href: site.ventures.powercouple,
          linkLabel: 'powercoupleclub.com',
        },
        {
          title: 'The passions I do not outsource',
          body:
            'Guitar, writing, and thirty-odd rap tracks as Delamax since 2003. The family rule is simpler and harder: quality time, phone elsewhere.',
          href: '/watch#music',
          linkLabel: 'Hear the music',
        },
      ],
      back: { label: '← All four dials', href: '/#life' },
    },
    health: {
      label: 'Health',
      eyebrow: 'Dial 02 · Health',
      title: 'You cannot out-think a body you are wrecking.',
      lede:
        'Health is the platform everything else runs on — the body that carries you and the emotions that color every day on the calendar.',
      dialsTitle: 'The dials I watch',
      dials: [
        { name: 'Fitness', desc: 'A routine that actually repeats. Consistency beats intensity.' },
        { name: 'Nutrition', desc: 'Food quality and balance — the unglamorous compounding.' },
        { name: 'Recharging', desc: 'Sleep and rest: the only performance enhancer that is free, legal, and still ignored.' },
        { name: 'Emotions', desc: 'Enthusiasm, empathy, and managing the SUFFER list: stress, uncertainty, fears, failures, evil, regrets.' },
      ],
      doingTitle: 'What I actually do about it',
      doing: [
        {
          title: 'finetuned.me',
          body:
            'A four-day reset on a private 40-acre desert estate in California — sixteen people, October 1–5, 2026. Move, eat, talk, sleep, leave different.',
          href: site.ventures.finetuned,
          linkLabel: 'finetuned.me',
        },
        {
          title: 'Coaching, if you want backup',
          body:
            'A dial stuck below 3 for months is rarely an information problem — it is a system problem. Mapping the system is exactly what my free first call is for.',
          href: '/#coaching',
          linkLabel: 'Book a free call',
        },
      ],
      back: { label: '← All four dials', href: '/#life' },
    },
    wealth: {
      label: 'Wealth',
      eyebrow: 'Dial 04 · Wealth',
      title: 'I did finance properly before I did tech.',
      lede:
        'Money matters, but wealth is bigger — earnings, what they buy, the freedom they unlock, and the legacy that outlives the accounts.',
      dialsTitle: 'The dials I watch',
      dials: [
        { name: 'Earnings', desc: 'Income from work, side projects, and investments — several engines, not one.' },
        { name: 'Spending', desc: 'What the money buys. Mostly it should buy time.' },
        { name: 'Freedom', desc: 'Agency over your money, your time, your attention. Freedom is what wealth is for — and addictions are its quiet tax.' },
        { name: 'Character & legacy', desc: 'What remains when the accounts settle — something to be proud of and remembered by.' },
      ],
      doingTitle: 'What I actually do about it',
      doing: [
        {
          title: 'The finance years',
          body:
            'CFA charterholder. Six years at Sistema as Investment Director: the $355M IPO of Detsky Mir and a turnaround that grew equity value about fivefold. VTB Capital and ING before that.',
          href: '/work',
          linkLabel: 'The full record',
        },
        {
          title: 'Angel cheques',
          body:
            'Investing since 2017: Alma, Electric Fish, CloudThread (YC ’22), BitRiver, and the GSB 2020 Fund.',
          href: '/work',
          linkLabel: 'The portfolio',
        },
      ],
      back: { label: '← All four dials', href: '/#life' },
    },
  },

  delamax: {
    eyebrow: 'The other name',
    title: 'Delamax',
    lede:
      'I have been writing and recording since 2003. Self-taught guitar, self-taught production, self-shot videos. Winner of my college Rap Music Award in 2007. When Harvard Business School asked for a video essay, I sent them a rap — the one below. It is not a hobby I keep quiet about; it is the reason I am any good at pitching.',
    facts: [
      { value: '2003', label: 'first track' },
      { value: '30+', label: 'recorded' },
      { value: '2007', label: 'college Rap Music Award' },
    ],
    cta: { label: 'Watch the videos', href: '/watch#music' },
    cta2: { label: 'Delamax on SoundCloud', href: site.social.soundcloud },
  },

  check: {
    eyebrow: 'Honest mirror',
    title: 'The 60-second life check.',
    lede: 'Four sliders, zero judgment. The wheel just shows where the life is leaking.',
    verdicts: { pain: 'Pain point', growth: 'Growth area', great: 'Great' },
    loudestPrefix: 'Loudest dial right now:',
    balanced: 'All four at five. Either you are lying, or I should be booking a call with you.',
    cta: 'Fix the loudest one with me — free call',
    openTemplate: 'Open {label} →',
    mailPrefix: 'Coaching — life check',
  },

  dialCheck: {
    eyebrow: '60-second check',
    title: 'Now rate yours.',
    intro: 'Tap a score for each dial: 1–2 is a pain point, 3–4 a growth area, 5 is great. Scores stay in your browser.',
    scoreLabel: 'Quadrant score',
    verdicts: { pain: 'Pain point', growth: 'Growth area', great: 'Great' },
    cta: 'Talk it through — first call is free',
    note: 'The email arrives pre-filled with your scores, so we skip straight to the real conversation.',
    mailPrefix: 'Coaching',
  },

  coaching: {
    eyebrow: 'Work with me',
    title: 'I coach the four dials.',
    lede:
      'Everything on this site — the frameworks, the career, the music — feeds one practice: helping ambitious people build a life that actually feels good. The first conversation is free.',
    points: [
      'A free 45-minute call: we map your love, health, work, and wealth dials and find the loudest one.',
      'Built on HIPERFLOW, the nine-element system I designed at Happyverse — not vibes, a framework.',
      'No slide decks, no upsell script. If I can help, I say how. If I can’t, I say who can.',
    ],
    cta: {
      label: 'Book a free consultation',
      href: `mailto:${site.email}?subject=Free%20coaching%20consultation`,
    },
    note: 'Too formal? Just DM me —',
    noteLink: { label: '@delamax', href: site.social.instagram },
  },

  california: {
    eyebrow: 'Off duty',
    title: 'Mostly outside.',
    photos: [
      { src: '/img/california/ca1.jpg', alt: 'Max at Treasure Island with the Bay Bridge and San Francisco skyline behind' },
      { src: '/img/california/ca2.jpg', alt: 'Max on the beach in Carmel with a coffee' },
      { src: '/img/california/ca3.jpg', alt: 'Max laughing on the rocky Pacific coast' },
      { src: '/img/california/ca4.jpg', alt: 'Max at the ocean at sunset' },
      { src: '/img/california/ca5.jpg', alt: 'Max on a foggy Northern California beach' },
      { src: '/img/california/ca6.jpg', alt: 'Max under a pink evening sky and palm trees' },
    ],
  },

  writing: {
    eyebrow: 'Writing',
    title: 'Things I wrote that shipped.',
    lede: 'Official Google posts I authored or co-authored, and the blog where I think out loud.',
    items: [
      {
        title: 'Google unveils world’s largest publicly available ML cluster',
        source: 'Google Cloud Blog',
        note: 'The Cloud TPU v4 Pods launch — up to 9 exaflops of aggregate compute, and the machines I ran go-to-market for.',
        href: 'https://cloud.google.com/blog/products/compute/google-unveils-worlds-largest-publicly-available-ml-cluster',
      },
      {
        title: 'Cloud TPU VMs are generally available',
        source: 'Google Cloud Blog',
        note: 'The architecture launch that let researchers run their own code on the TPU host machines.',
        href: 'https://cloud.google.com/blog/products/compute/cloud-tpu-vms-are-generally-available',
      },
      {
        title: 'Systems engineering playbook: optimizing Qwen 3.5-397B MoE on Ironwood (TPU7x)',
        source: 'Google Developers Blog',
        note: 'How we squeeze a 397B-parameter mixture-of-experts model onto seventh-generation TPUs.',
        href: 'https://developers.googleblog.com/systems-engineering-playbook-optimizing-qwen-35-397b-moe-on-ironwood-tpu7x/',
      },
    ],
    substack: {
      title: 'Delamax on Substack',
      body: 'Essays between the launches — life systems, AI, and everything the four dials touch.',
      cta: 'Read on Substack',
      href: site.social.substack,
    },
  },

  follow: {
    eyebrow: 'Live feeds',
    title: 'Where the unpolished version lives.',
    lede: 'Reels, experiments, and hot takes — straight from the source.',
    tiles: [
      {
        platform: 'Instagram · Reel',
        caption: 'Starting my influencer career. Haters gonna hate, potatoes gonna potate.',
        cta: 'Watch the reel',
        href: 'https://www.instagram.com/reel/Db_EGFFxXPy/',
        img: '/img/social/ig-reel1.jpg',
        alt: 'Max on a motorcycle in the California sun',
      },
      {
        platform: 'Instagram · Reel',
        caption: 'Karaoke nights, dance experiments, and other things a CFA charter does not prepare you for.',
        cta: 'Watch the reel',
        href: 'https://www.instagram.com/reel/DcaXLhVxStx/',
        img: '/img/social/ig-reel2.jpg',
        alt: 'Max in front of the Universal globe',
      },
      {
        platform: 'X',
        caption: 'Hot takes on TPUs, happiness, and everything in between.',
        cta: 'Follow @maxhappyverse',
        href: site.social.x,
        img: '',
        alt: '',
      },
    ],
  },

  watch: {
    eyebrow: 'On camera',
    seeAll: 'All videos →',
    title: 'Talks, interviews, demos, and one MBA application that rhymes.',
    lede:
      'Everything here is public and verified — pulled straight from my channel and the Happyverse channel. If you have hosted me somewhere that is missing, send the link.',
    sections: {
      talks: { title: 'Talks & conversations', lede: 'Where I get asked the hard questions.' },
      product: { title: 'What we are building', lede: 'Happyverse, on the record.' },
      music: { title: 'Delamax', lede: 'The one I do not put on the CV. Except I do.' },
    },
    notes: {
      'bay-signal':
        'The Bay Signal, episode one: Happyverse, Stanford, and what it actually takes to build AI avatars in San Francisco.',
      'argam-talks':
        'Argam Talks: a technical and philosophical dive into voice agents, digital avatars, authentic connection, prompting, experimentation, and the future of human-computer interaction.',
      'aizada-marat':
        'A long-form conversation (in Russian) with Aizada Marat about the Stanford MBA and the road that led there.',
      'agi-summit':
        'The summit I built and hosted in San Francisco, November 2025 — one question all day: if intelligence gets cheap, what does the interface look like?',
      chakroff:
        'Sitting down with Alek Chakroff on the coach we built and what a machine understands about a person.',
      'uncanny-valley':
        'A hard technical review of the open-source stack for real-time AI clones, with Vladimir Shakirov.',
      'digital-human':
        'The product itself: a real-time digital human you can interrupt.',
      duttweiler:
        'We rebuilt Migros founder Gottlieb Duttweiler as a digital twin for the company’s 100th anniversary.',
      'website-avatars': 'Putting a face on a website that answers back.',
      'hbs-essay':
        'Harvard Business School asked for a video essay in 2016. I rapped it.',
      'den-goroda': 'Delamax and Naomi, live, 2013.',
      'lion-promo': 'Concert promo, 2013.',
      'happyverse-rap': 'Yes, I wrote a rap about my own company. No, I do not regret it.',
    },
    watchOn: 'Watch on YouTube',
  },

  work: {
    eyebrow: 'Work',
    title: 'Twelve years of receipts.',
    lede:
      'Six years building AI products across ML infrastructure and GenAI. Eight years before that investing other people’s money and answering for it. The order matters: I learned to read a P&L before I learned to read a kernel.',
    experienceTitle: 'Experience',
    experience: [
      {
        org: 'Google',
        role: 'Senior Product Manager — Cloud TPU',
        period: 'May 2026 — now',
        href: 'https://cloud.google.com/tpu',
        body:
          'Back on AI infrastructure: the compute layer that decides what every model above it is allowed to be. Same machines, a very different industry around them.',
        bullets: [],
      },
      {
        org: 'Happyverse.AI',
        role: 'Founder',
        period: '2025 — now',
        href: site.ventures.happyverse,
        body:
          'I started the product and research lab behind Happyverse Confidants — real-time video agents that represent a person when that person cannot be in the room. Pre-seed funded by Village Global and Jeff Dean. I founded it and still own the vision; I am no longer running it day to day.',
        bullets: [
          'Built and hosted the AGI Interface Summit in San Francisco, November 2025.',
          'Shipped a real-time digital-human product used for brand, sales, and commemorative digital twins.',
          'Designed HIPERFLOW, the nine-dial life-design framework behind the product.',
        ],
      },
      {
        org: 'Etched',
        role: 'AI Product Manager, Member of Technical Staff',
        period: '2024 — 2025',
        href: 'https://etched.com',
        body:
          'A Series A company building transformer-only inference silicon aimed at 10x+ over Nvidia GPUs.',
        bullets: [
          'Ran a one-month sprint with 30+ engineers to find and clear hardware and software bugs ahead of the Sohu tapeout.',
          'Ran the market study and benchmarking that shaped requirements for the next-generation chip.',
          'Orchestrated an eight-figure deal with a leading European cloud provider.',
        ],
      },
      {
        org: 'Google',
        role: 'Senior Product Manager — Head of Growth & Strategy, Cloud TPU',
        period: '2019; 2020 — 2024',
        href: 'https://cloud.google.com/tpu',
        body:
          'Growth, strategy, and go-to-market for the supercomputers Google uses to train and serve large models.',
        bullets: [
          'Led the commercial launches of Cloud TPU v4 Pods (2022), v5e (2023), v5p (2023) and Trillium (2024).',
          'Co-authored Google’s ML infrastructure investment strategy and the financial model behind billions in capex.',
          'Co-led the Cloud TPU VM architecture launch that made the machines usable by ordinary researchers.',
          'Built the go-to-market motion behind billions in customer commitments.',
          'Ran GenAI projects for Beyond 12, Opportunity@Work and IDinsight through the Google.org accelerator, and headlined the Google.org Impact Summit.',
          'Two promotions and 70+ peer bonuses, including from Chief AI Scientist Jeff Dean.',
        ],
      },
      {
        org: 'Pomegranate VC',
        role: 'Summer Vice President, Consumer Tech',
        period: '2020',
        href: 'https://www.crunchbase.com/organization/pomegranate-ventures',
        body: 'Late-stage fund. Structured secondary deals in consumer internet, including Calm and Notion.',
        bullets: [],
      },
      {
        org: 'Sistema',
        role: 'Investment Director, Consumer Goods & Retail',
        period: '2012 — 2018',
        href: 'https://sistema.com/',
        body:
          'The largest investment fund in Eastern Europe by AUM. I owned Detsky Mir, its children’s-goods retailer, end to end.',
        bullets: [
          'Led the $355M IPO and a $150M fundraising round, running the deal across C-level executives, global banks and law firms.',
          'Supervised the turnaround from a loss-making asset to a profitable, IPO-ready market leader — roughly fivefold equity value growth from 2012 to 2018.',
        ],
      },
      {
        org: 'ING · VTB Capital',
        role: 'Investment Banking Analyst',
        period: '2010 — 2012',
        href: '',
        body: 'M&A and IPO work across retail, industrial engineering, healthcare and TMT.',
        bullets: [],
      },
    ],
    educationTitle: 'Education & credentials',
    education: [
      {
        org: 'Georgia Tech',
        role: 'MSc, Computer Science — Machine Learning & Human-Computer Interaction',
        period: '2024 — present',
      },
      {
        org: 'Stanford GSB · Doerr School of Sustainability',
        role: 'MBA / MS',
        period: '2018 — 2020',
      },
      {
        org: 'CFA Institute',
        role: 'Chartered Financial Analyst',
        period: '2016 — 2018',
      },
      {
        org: 'MGIMO University, Moscow',
        role: 'BA, Economics & International Relations — top of class, gold medal',
        period: '2007 — 2011',
      },
    ],
    angelTitle: 'Angel investments',
    angel: [
      { name: 'Alma', href: 'https://www.tryalma.ai/' },
      { name: 'Electric Fish', href: 'https://electricfish.co/' },
      { name: 'CloudThread (YC ’22)', href: 'https://www.ycombinator.com/companies/cloudthread' },
      { name: 'BitRiver', href: '' },
      { name: 'GSB 2020 Fund', href: 'https://gsbuilds.co/class-funds' },
    ],
  },

  now: {
    eyebrow: 'Now',
    title: 'What I am actually doing this season.',
    lede:
      'A now page, in the Derek Sivers sense: what has my attention right now, not a highlight reel. Last reviewed August 2026.',
    items: [
      {
        title: 'Back on Cloud TPU at Google',
        body:
          'I rejoined in May 2026. Two years away from the inside of AI infrastructure turned out to be the best possible preparation for coming back to it — I have now been a customer, a competitor, and a builder of the layer on top.',
      },
      {
        title: 'Happyverse, from the founder seat',
        body:
          'Real-time video agents that hold a conversation as you. I am not running it day to day any more, but the thesis has not changed: the hard part was never the model — it is trust, latency, and knowing when the agent should shut up and hand back to the human.',
      },
      {
        title: 'Filling finetuned.me',
        body:
          'Sixteen seats, October 1–5, 2026, forty acres of California desert. Four days built to reset people who cannot sit still.',
      },
      {
        title: 'Growing Power Couple Club',
        body: 'San Francisco and Los Angeles. Dinners, introductions, and a membership bar that stays high.',
      },
      {
        title: 'Finishing the Georgia Tech MSc',
        body: 'Machine learning and human-computer interaction, part-time, online, at night.',
      },
      {
        title: 'Recording again',
        body: 'New Delamax material. Slower than I would like.',
      },
    ],
  },

  contact: {
    eyebrow: 'Say hello',
    title: 'I answer email.',
    lede:
      'Building something at the interface of AI and people? Want to speak at the next summit, take a finetuned.me seat, or argue with me about whether TPUs win? Write.',
    emailLabel: 'Email',
    links: [
      { label: 'LinkedIn', href: site.social.linkedin },
      { label: 'Instagram — @delamax', href: site.social.instagram },
      { label: 'YouTube', href: site.social.youtube },
      { label: 'X', href: site.social.x },
      { label: 'GitHub', href: site.social.github },
    ],
    venturesTitle: 'Ventures',
    ventures: [
      { label: 'Happyverse.AI', href: site.ventures.happyverse },
      { label: 'AGI Interface Summit', href: site.ventures.summit },
      { label: 'finetuned.me', href: site.ventures.finetuned },
      { label: 'Power Couple Club', href: site.ventures.powercouple },
    ],
  },

  footer: {
    tagline: 'Founder · ex-Google TPU · CFA · Delamax',
    rights: 'All rights reserved.',
  },

  notFound: {
    title: 'This page does not exist.',
    lede: 'It happens. Try the front door.',
    cta: 'Back home',
  },
};

export type Content = typeof en;
