import { site } from '../data/site';
import type { Content } from './en';

export const ru: Content = {
  code: 'en' as const,
  htmlLang: 'ru',
  alt: { code: 'en', label: 'EN', title: 'Read in English' },
  prefix: '/ru',

  nav: [
    { label: 'Жизнь', href: '/ru/#life' },
    { label: 'Видео', href: '/ru/#watch' },
    { label: 'Тексты', href: '/ru/#writing' },
    { label: 'Сейчас', href: '/ru/#now' },
    { label: 'Работа', href: '/ru/work' },
  ],

  meta: {
    title: 'Макс Сапо — Google Cloud TPU, фаундер, CFA, рэпер',
    description:
      'Макс Сапо (Delamax): Senior PM в Google Cloud TPU, основатель Happyverse.AI, ex-Etched, CFA, рэпер с 2003 года. Любовь, здоровье, работа, деньги — все четыре, без купюр.',
    ogAlt: 'Макс Сапо',
  },

  hero: {
    eyebrow: 'Сибирь → Москва → Стэнфорд → Сан-Франциско',
    title: 'Привет, я Макс. Днём я продаю суперкомпьютеры.',
    titleAccent: 'По вечерам — читаю рэп, гоняюсь за калифорнийскими закатами и строю штуки, которые делают людей счастливее.',
    lede: {
      pre: 'Senior PM в Google Cloud TPU, основатель Happyverse.AI — и тот самый парень, который ',
      linkLabel: 'ответил на видео-эссе Harvard Business School рэпом',
      linkHref: '/ru/#delamax',
      post: '. В итоге поступил в Стэнфорд. Выводы делайте сами.',
    },
    credibility: ['Google', 'Stanford GSB', 'Чартер CFA', 'Etched', 'Georgia Tech MSc', 'Happyverse — pre-seed от Village Global и Джеффа Дина'],
    ctas: [
      { label: 'Смотреть видео', href: '/ru/#watch', primary: true },
      { label: 'Пруф, что я работаю', href: '/ru/work', primary: false },
      { label: 'Питчни мне идею', href: `mailto:${site.email}`, primary: false },
    ],
    portraitAlt: 'Макс смеётся на скалистом калифорнийском берегу',
    portraitCaption: 'Тихоокеанский берег · обычный уровень серьёзности',
  },

  stats: [
    { value: '4', label: 'поколения Google TPU, выведенные на рынок' },
    { value: '$355М', label: 'IPO Детского мира в Системе, 2017' },
    { value: '30+', label: 'треков как Delamax — в SoundCloud. Грэмми на подходе.', href: site.social.soundcloud },
    { value: '4', label: 'основано: Happyverse, Power Couple Club, finetuned.me, MLHappy' },
  ],

  pillars: {
    eyebrow: 'Целиком',
    title: 'Четыре тумблера, а не один.',
    lede:
      'Любовь, здоровье, работа, деньги — четыре тумблера, по которым я реально живу. Нажми и посмотри.',
    items: [
      {
        key: 'love',
        label: 'Любовь',
        title: 'Амбиции легче нести вдвоём.',
        tagline: 'Романтика, семья, друзья и Power Couple Club.',
        href: '/ru/love',
      },
      {
        key: 'health',
        label: 'Здоровье',
        title: 'Головой не переиграешь тело, которое ты гробишь.',
        tagline: 'Тело, эмоции, энергия — и finetuned.me.',
        href: '/ru/health',
      },
      {
        key: 'work',
        label: 'Работа',
        title: 'Кремний, лицо поверх него — и снова кремний.',
        tagline: 'Google TPU, Etched, Happyverse. Весь список.',
        href: '/ru/work',
      },
      {
        key: 'wealth',
        label: 'Деньги',
        title: 'Я сначала как следует сделал финансы, потом технологии.',
        tagline: 'Доходы, свобода, наследие — и IPO на $355 млн.',
        href: '/ru/wealth',
      },
    ],
    enter: 'Войти',
  },

  quadrants: {
    love: {
      label: 'Любовь',
      eyebrow: 'Тумблер 01 · Любовь',
      title: 'Амбиции легче нести вдвоём.',
      lede:
        'Отношения — центр всей системы: мы социальные животные, и никакой портфель не растёт быстрее, чем человек рядом с тобой.',
      dialsTitle: 'За чем я слежу',
      dials: [
        { name: 'Романтика', desc: 'Взаимная любовь и настоящее время вдвоём — а не только логистика.' },
        { name: 'Семья', desc: 'Присутствие с детьми, родителями, братьями и сёстрами. Быть в комнате, а не рядом с ней.' },
        { name: 'Друзья и сообщества', desc: 'Люди, которые знали тебя до должности, и места, где ты свой.' },
        { name: 'Увлечения', desc: 'То, что делаешь из чистой любви — для радости, а не для ленты.' },
      ],
      doingTitle: 'Что я с этим делаю',
      doing: [
        {
          title: 'Power Couple Club',
          body:
            'Закрытый клуб в Сан-Франциско и Лос-Анджелесе для тех, кто отказывается выбирать между карьерой и жизнью. Кураторские ужины, настоящие знакомства и ноль энергетики нетворкинг-ивента.',
          href: site.ventures.powercouple,
          linkLabel: 'powercoupleclub.com',
        },
        {
          title: 'Увлечения, которые я не делегирую',
          body:
            'Гитара, тексты и три десятка треков под именем Delamax с 2003 года. Семейное правило проще и труднее: время вместе, телефон в другой комнате.',
          href: '/ru/watch#music',
          linkLabel: 'Послушать музыку',
        },
      ],
      back: { label: '← Все четыре тумблера', href: '/ru/#life' },
    },
    health: {
      label: 'Здоровье',
      eyebrow: 'Тумблер 02 · Здоровье',
      title: 'Головой не переиграешь тело, которое ты гробишь.',
      lede:
        'Здоровье — платформа, на которой работает всё остальное: тело, которое тебя несёт, и эмоции, которые красят каждый день в календаре.',
      dialsTitle: 'За чем я слежу',
      dials: [
        { name: 'Форма', desc: 'Режим, который реально повторяется. Постоянство сильнее интенсивности.' },
        { name: 'Питание', desc: 'Качество и баланс еды — негламурные сложные проценты.' },
        { name: 'Восстановление', desc: 'Сон и отдых: единственный допинг, который бесплатен, легален и всё равно всеми игнорируется.' },
        { name: 'Эмоции', desc: 'Энтузиазм, эмпатия и работа со списком SUFFER: стресс, неопределённость, страхи, неудачи, зло, сожаления.' },
      ],
      doingTitle: 'Что я с этим делаю',
      doing: [
        {
          title: 'finetuned.me',
          body:
            'Четыре дня перезагрузки на частном поместье в 40 акров в калифорнийской пустыне — шестнадцать человек, 1–5 октября 2026. Двигаться, есть, разговаривать, спать — и уехать другим.',
          href: site.ventures.finetuned,
          linkLabel: 'finetuned.me',
        },
        {
          title: 'Коучинг, если нужна подстраховка',
          body:
            'Тумблер, застрявший ниже тройки на месяцы, — это редко проблема знаний. Это проблема системы. Разобрать систему — ровно то, для чего мой бесплатный первый созвон.',
          href: '/ru/#coaching',
          linkLabel: 'Записаться на бесплатный созвон',
        },
      ],
      back: { label: '← Все четыре тумблера', href: '/ru/#life' },
    },
    wealth: {
      label: 'Деньги',
      eyebrow: 'Тумблер 04 · Деньги',
      title: 'Я сначала как следует сделал финансы, потом технологии.',
      lede:
        'Деньги важны, но богатство больше: доходы, то, что они покупают, свобода, которую они открывают, и наследие, которое переживёт счета.',
      dialsTitle: 'За чем я слежу',
      dials: [
        { name: 'Доходы', desc: 'Работа, сайд-проекты и инвестиции — несколько моторов, а не один.' },
        { name: 'Расходы', desc: 'Что покупают деньги. В основном они должны покупать время.' },
        { name: 'Свобода', desc: 'Власть над своими деньгами, временем и вниманием. Свобода — то, ради чего богатство и существует; зависимости — его тихий налог.' },
        { name: 'Характер и наследие', desc: 'Что останется, когда счета сойдутся: то, чем гордишься и по чему запомнят.' },
      ],
      doingTitle: 'Что я с этим делаю',
      doing: [
        {
          title: 'Финансовые годы',
          body:
            'Чартер CFA. Шесть лет в Системе инвестиционным директором: IPO Детского мира на $355 млн и разворот с примерно пятикратным ростом стоимости капитала. До этого — VTB Capital и ING.',
          href: '/ru/work',
          linkLabel: 'Весь список',
        },
        {
          title: 'Ангельские чеки',
          body:
            'Инвестирую с 2017 года: Alma, Electric Fish, CloudThread (YC ’22), BitRiver и GSB 2020 Fund.',
          href: '/ru/work',
          linkLabel: 'Портфель',
        },
      ],
      back: { label: '← Все четыре тумблера', href: '/ru/#life' },
    },
  },

  delamax: {
    eyebrow: 'Второе имя',
    title: 'Delamax',
    lede:
      'Пишу и записываю с 2003 года. Гитара — сам, продакшн — сам, видео — сам. Победитель университетской Rap Music Award 2007. Когда Harvard Business School попросил видео-эссе, я прислал им рэп — тот самый, ниже. Это не хобби, о котором молчат: это причина, по которой я вообще умею питчить.',
    facts: [
      { value: '2003', label: 'первый трек' },
      { value: '30+', label: 'записано' },
      { value: '2007', label: 'Rap Music Award университета' },
    ],
    cta: { label: 'Смотреть видео', href: '/ru/watch#music' },
    cta2: { label: 'Delamax в SoundCloud', href: site.social.soundcloud },
  },

  check: {
    eyebrow: 'Честное зеркало',
    title: 'Лайф-чек за 60 секунд.',
    lede: 'Четыре ползунка, ноль осуждения. Колесо просто показывает, где жизнь подтекает.',
    verdicts: { pain: 'Болевая точка', growth: 'Зона роста', great: 'Отлично' },
    loudestPrefix: 'Самый громкий тумблер сейчас:',
    balanced: 'Все четыре на пятёрку. Либо ты привираешь, либо это мне пора к тебе на консультацию.',
    cta: 'Починить самый громкий вместе — бесплатный созвон',
    openTemplate: 'Открыть «{label}» →',
    mailPrefix: 'Коучинг — лайф-чек',
  },

  dialCheck: {
    eyebrow: 'Чек за 60 секунд',
    title: 'Теперь оцени свои.',
    intro: 'Поставь оценку каждому элементу: 1–2 — болевая точка, 3–4 — зона роста, 5 — отлично. Оценки остаются в твоём браузере.',
    scoreLabel: 'Счёт тумблера',
    verdicts: { pain: 'Болевая точка', growth: 'Зона роста', great: 'Отлично' },
    cta: 'Обсудить — первый созвон бесплатно',
    note: 'Письмо придёт с твоими оценками в теме — сразу к делу, без разминки.',
    mailPrefix: 'Коучинг',
  },

  coaching: {
    eyebrow: 'Поработаем вместе',
    title: 'Я коучу четыре тумблера.',
    lede:
      'Всё на этом сайте — фреймворки, карьера, музыка — питает одну практику: помогать амбициозным людям строить жизнь, которая реально ощущается хорошо. Первый разговор — бесплатно.',
    points: [
      'Бесплатный 45-минутный созвон: разложим твои любовь, здоровье, работу и деньги и найдём самый громкий тумблер.',
      'В основе — HIPERFLOW, система из девяти элементов, которую я собрал в Happyverse. Не вайбы, а фреймворк.',
      'Без презентаций и скриптов допродаж. Если могу помочь — скажу как. Если нет — скажу, кто может.',
    ],
    cta: {
      label: 'Записаться на бесплатную консультацию',
      href: `mailto:${site.email}?subject=%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F`,
    },
    note: 'Слишком официально? Просто напиши в директ —',
    noteLink: { label: '@delamax', href: site.social.instagram },
    whyTitle: 'Почему я — пруфы, а не вайбы',
    why: [
      'Два повышения и 70+ peer-бонусов в Google, включая бонус от Chief AI Scientist Джеффа Дина.',
      'HIPERFLOW — фреймворк, на котором построены Happyverse Confidants: компания, которую я основал, с pre-seed от Village Global и Джеффа Дина.',
      'Чартер CFA. К жизни отношусь как к портфелю: диверсификация, ребалансировка, регулярный пересмотр.',
    ],
    faqTitle: 'Вопросы, которые задаёт скептик',
    faq: [
      {
        q: 'Ты сертифицированный коуч или терапевт?',
        a: 'Нет, и притворяться не буду. Я оператор с фреймворком. Если тебе на самом деле нужна терапия — скажу об этом на первом же созвоне и посоветую специалиста.',
      },
      {
        q: 'Сколько это стоит после бесплатного созвона?',
        a: 'Нисколько — если только мы оба не захотим продолжить. Тогда формат и цену придумываем вместе, вслух, на том же созвоне. Без пакетов, без воронок, без внезапных допродаж.',
      },
      {
        q: 'Зачем PM из Google вообще коучит людей?',
        a: 'Потому что я построил HIPERFLOW для продукта — и понял, что сам пользуюсь им чаще, чем продукт. Коучинг — это место, где фреймворк встречается с настоящей жизнью. С моей в том числе.',
      },
    ],
  },

  california: {
    eyebrow: 'Вне работы',
    title: 'В основном на улице.',
    photos: [
      { src: '/img/california/ca1.jpg', alt: 'Макс на Трежер-Айленде на фоне Бэй-бриджа и Сан-Франциско' },
      { src: '/img/california/ca2.jpg', alt: 'Макс на пляже в Кармеле с кофе' },
      { src: '/img/california/ca3.jpg', alt: 'Макс смеётся на скалистом тихоокеанском берегу' },
      { src: '/img/california/ca4.jpg', alt: 'Макс у океана на закате' },
      { src: '/img/california/ca5.jpg', alt: 'Макс на туманном пляже Северной Калифорнии' },
      { src: '/img/california/ca6.jpg', alt: 'Макс под розовым вечерним небом и пальмами' },
    ],
  },

  writing: {
    eyebrow: 'Тексты',
    title: 'Написанное — и запущенное.',
    lede: 'Официальные посты Google, которые я писал или соавторствовал, и блог, где я думаю вслух.',
    items: [
      {
        title: 'Google unveils world’s largest publicly available ML cluster',
        source: 'Google Cloud Blog',
        note: 'Запуск Cloud TPU v4 Pods — до 9 эксафлопс суммарного компьюта; машины, чей go-to-market я вёл.',
        href: 'https://cloud.google.com/blog/products/compute/google-unveils-worlds-largest-publicly-available-ml-cluster',
      },
      {
        title: 'Cloud TPU VMs are generally available',
        source: 'Google Cloud Blog',
        note: 'Запуск архитектуры, которая позволила исследователям запускать свой код прямо на хост-машинах TPU.',
        href: 'https://cloud.google.com/blog/products/compute/cloud-tpu-vms-are-generally-available',
      },
      {
        title: 'Systems engineering playbook: optimizing Qwen 3.5-397B MoE on Ironwood (TPU7x)',
        source: 'Google Developers Blog',
        note: 'Как мы укладываем mixture-of-experts модель на 397 млрд параметров в TPU седьмого поколения.',
        href: 'https://developers.googleblog.com/systems-engineering-playbook-optimizing-qwen-35-397b-moe-on-ironwood-tpu7x/',
      },
    ],
    substack: {
      title: 'Delamax в Substack',
      body: 'Эссе между запусками — системы жизни, AI и всё, чего касаются четыре тумблера.',
      cta: 'Читать в Substack',
      href: site.social.substack,
    },
  },

  follow: {
    eyebrow: 'Живые ленты',
    title: 'Где живёт неотполированная версия.',
    lede: 'Рилсы, эксперименты и горячие мнения — из первых рук.',
    tiles: [
      {
        platform: 'Instagram · Reel',
        caption: 'Начинаю карьеру инфлюенсера. Haters gonna hate, potatoes gonna potate.',
        cta: 'Смотреть рилс',
        href: 'https://www.instagram.com/reel/Db_EGFFxXPy/',
        img: '/img/social/ig-reel1.jpg',
        alt: 'Макс на мотоцикле под калифорнийским солнцем',
      },
      {
        platform: 'Instagram · Reel',
        caption: 'Караоке, танцевальные эксперименты и другие вещи, к которым чартер CFA не готовит.',
        cta: 'Смотреть рилс',
        href: 'https://www.instagram.com/reel/DcaXLhVxStx/',
        img: '/img/social/ig-reel2.jpg',
        alt: 'Макс перед глобусом Universal',
      },
      {
        platform: 'X',
        caption: 'Горячие мнения о TPU, счастье и всём, что между ними.',
        cta: 'Подписаться на @maxhappyverse',
        href: site.social.x,
        img: '',
        alt: '',
      },
    ],
  },

  watch: {
    eyebrow: 'В кадре',
    seeAll: 'Все видео →',
    title: 'Выступления, интервью, демо и одна заявка на MBA в рифму.',
    lede:
      'Всё здесь публичное и проверенное — собрано прямо с моего канала и канала Happyverse. Если ты меня где-то записывал и этого тут нет — пришли ссылку.',
    sections: {
      talks: { title: 'Выступления и разговоры', lede: 'Там, где задают неудобные вопросы.' },
      product: { title: 'Что мы строим', lede: 'Happyverse, как есть.' },
      music: { title: 'Delamax', lede: 'То, что не пишут в резюме. Кроме моего.' },
    },
    notes: {
      'bay-signal':
        'Первый выпуск The Bay Signal: Happyverse, Стэнфорд и что на самом деле нужно, чтобы строить AI-аватары в Сан-Франциско.',
      'argam-talks':
        'Argam Talks: технический и философский разговор про voice agents, цифровых аватаров, живой контакт, промптинг, эксперименты и будущее human-computer interaction.',
      'aizada-marat':
        'Длинный разговор с Айзадой Марат про MBA в Стэнфорде и дорогу, которая к нему привела.',
      'agi-summit':
        'Саммит, который я собрал и провёл в Сан-Франциско в ноябре 2025 года. Весь день — один вопрос: если интеллект станет дешёвым, как выглядит интерфейс к нему?',
      chakroff:
        'Сажусь с Алеком Чакроффом обсудить коуча, которого мы построили, и то, что машина вообще понимает про человека.',
      'uncanny-valley':
        'Жёсткий технический разбор опенсорсного стека для real-time AI-клонов вместе с Владимиром Шакировым.',
      'digital-human':
        'Сам продукт: живой цифровой человек, которого можно перебить.',
      duttweiler:
        'Мы пересобрали основателя Migros Готлиба Дуттвайлера как цифрового двойника к 100-летию компании.',
      'website-avatars': 'Лицо на сайте, которое отвечает.',
      'hbs-essay':
        'Harvard Business School попросил видео-эссе в 2016-м. Я его зачитал.',
      'den-goroda': 'Delamax и Naomi, живьём, 2013.',
      'lion-promo': 'Промо концерта, 2013.',
      'happyverse-rap': 'Да, я написал рэп про собственную компанию. Нет, не жалею.',
    },
    watchOn: 'Смотреть на YouTube',
  },

  work: {
    eyebrow: 'Работа',
    title: 'Двенадцать лет пруфов.',
    lede:
      'Шесть лет строю AI-продукты на стыке ML-инфраструктуры и GenAI. До этого восемь лет инвестировал чужие деньги и отвечал за результат. Порядок важен: я научился читать P&L раньше, чем научился читать кернел.',
    experienceTitle: 'Опыт',
    experience: [
      {
        org: 'Google',
        role: 'Senior Product Manager — Cloud TPU',
        period: 'май 2026 — сейчас',
        href: 'https://cloud.google.com/tpu',
        body:
          'Снова AI-инфраструктура: слой вычислений, который решает, чем вообще имеет право быть каждая модель этажом выше. Те же машины — совсем другая индустрия вокруг них.',
        bullets: [],
      },
      {
        org: 'Happyverse.AI',
        role: 'Основатель',
        period: '2025 — сейчас',
        href: site.ventures.happyverse,
        body:
          'Я запустил продуктово-исследовательскую лабораторию, из которой выросли Happyverse Confidants — real-time видео-агенты, представляющие человека, когда самого человека в комнате нет. Pre-seed от Village Global и Джеффа Дина. Основал и держу видение; операционкой больше не занимаюсь.',
        bullets: [
          'Собрал и провёл AGI Interface Summit в Сан-Франциско, ноябрь 2025.',
          'Выпустил продукт real-time цифрового человека — для брендов, продаж и мемориальных цифровых двойников.',
          'Спроектировал HIPERFLOW — фреймворк из девяти тумблеров, лежащий в основе продукта.',
        ],
      },
      {
        org: 'Etched',
        role: 'AI Product Manager, Member of Technical Staff',
        period: '2024 — 2025',
        href: 'https://etched.com',
        body:
          'Компания уровня Series A, строящая кремний только под трансформеры с прицелом на 10x+ к GPU Nvidia.',
        bullets: [
          'Провёл месячный спринт с 30+ инженерами: найти и закрыть баги в железе и софте перед tapeout чипа Sohu.',
          'Сделал рыночное исследование и бенчмарки, из которых выросли требования к чипу следующего поколения.',
          'Собрал восьмизначную сделку с ведущим европейским облачным провайдером.',
        ],
      },
      {
        org: 'Google',
        role: 'Senior Product Manager — Head of Growth & Strategy, Cloud TPU',
        period: '2019; 2020 — 2024',
        href: 'https://cloud.google.com/tpu',
        body:
          'Рост, стратегия и вывод на рынок суперкомпьютеров, на которых Google обучает и обслуживает большие модели.',
        bullets: [
          'Коммерческие запуски Cloud TPU v4 Pods (2022), v5e (2023), v5p (2023) и Trillium (2024).',
          'Соавтор инвестиционной стратегии Google по ML-инфраструктуре и финансовой модели под миллиарды капзатрат.',
          'Со-руководил запуском архитектуры Cloud TPU VM, которая сделала эти машины пригодными для обычных исследователей.',
          'Построил go-to-market, принёсший миллиарды долларов клиентских обязательств.',
          'Вёл GenAI-проекты для Beyond 12, Opportunity@Work и IDinsight в акселераторе Google.org, открывал Google.org Impact Summit.',
          'Два повышения и 70+ пиринговых бонусов, в том числе от главного AI-учёного Google Джеффа Дина.',
        ],
      },
      {
        org: 'Pomegranate VC',
        role: 'Summer Vice President, Consumer Tech',
        period: '2020',
        href: 'https://www.crunchbase.com/organization/pomegranate-ventures',
        body: 'Фонд поздних стадий. Структурировал вторичные сделки в consumer internet, включая Calm и Notion.',
        bullets: [],
      },
      {
        org: 'Система',
        role: 'Инвестиционный директор, потребительские товары и ритейл',
        period: '2012 — 2018',
        href: 'https://sistema.com/',
        body:
          'Крупнейший инвестиционный фонд Восточной Европы по AUM. Детский мир был на мне от и до.',
        bullets: [
          'Провёл IPO на $355 млн и раунд на $150 млн, ведя сделку через C-level, глобальные банки и юрфирмы.',
          'Курировал разворот из убыточного актива в прибыльного лидера рынка, готового к IPO, — примерно пятикратный рост стоимости капитала с 2012 по 2018.',
        ],
      },
      {
        org: 'ING · VTB Capital',
        role: 'Аналитик инвестиционного банкинга',
        period: '2010 — 2012',
        href: '',
        body: 'Сделки M&A и IPO в ритейле, промышленном машиностроении, здравоохранении и TMT.',
        bullets: [],
      },
    ],
    educationTitle: 'Образование и квалификации',
    education: [
      {
        org: 'Georgia Tech',
        role: 'MSc, Computer Science — машинное обучение и человеко-компьютерное взаимодействие',
        period: '2024 — сейчас',
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
        org: 'МГИМО, Москва',
        role: 'Бакалавр, экономика и международные отношения — лучший на курсе, золотая медаль',
        period: '2007 — 2011',
      },
    ],
    angelTitle: 'Ангельские инвестиции',
    angel: [
      { name: 'Alma', href: 'https://www.tryalma.ai/' },
      { name: 'Electric Fish', href: 'https://electricfish.co/' },
      { name: 'CloudThread (YC ’22)', href: 'https://www.ycombinator.com/companies/cloudthread' },
      { name: 'BitRiver', href: '' },
      { name: 'GSB 2020 Fund', href: 'https://gsbuilds.co/class-funds' },
    ],
  },

  now: {
    eyebrow: 'Сейчас',
    title: 'Чем я реально занят в этом сезоне.',
    lede:
      'Страница «сейчас» в смысле Дерека Сиверса: что занимает голову прямо сейчас, а не витрина достижений. Последняя ревизия — август 2026.',
    items: [
      {
        title: 'Снова Cloud TPU в Google',
        body:
          'Вернулся в мае 2026. Два года вне AI-инфраструктуры оказались лучшей возможной подготовкой к возвращению в неё: теперь я побывал и клиентом, и конкурентом, и строителем слоя сверху.',
      },
      {
        title: 'Happyverse — из кресла фаундера',
        body:
          'Real-time видео-агенты, которые ведут разговор за тебя. Операционкой я больше не занимаюсь, но тезис не изменился: сложность никогда не была в модели — она в доверии, задержке и в том, чтобы агент вовремя замолчал и вернул слово человеку.',
      },
      {
        title: 'Набираю finetuned.me',
        body:
          'Шестнадцать мест, 1–5 октября 2026, сорок акров калифорнийской пустыни. Четыре дня, собранных для тех, кто не умеет сидеть на месте.',
      },
      {
        title: 'Растим Power Couple Club',
        body: 'Сан-Франциско и Лос-Анджелес. Ужины, знакомства и планка членства, которая не опускается.',
      },
      {
        title: 'Дописываю MSc в Georgia Tech',
        body: 'Машинное обучение и HCI, part-time, онлайн, по ночам.',
      },
      {
        title: 'Снова записываюсь',
        body: 'Новый материал Delamax. Медленнее, чем хотелось бы.',
      },
    ],
  },

  contact: {
    eyebrow: 'Написать',
    title: 'Я отвечаю на почту.',
    lede:
      'Строишь что-то на стыке AI и людей? Хочешь выступить на следующем саммите, занять место на finetuned.me или поспорить со мной о том, выигрывают ли TPU? Пиши.',
    emailLabel: 'Почта',
    links: [
      { label: 'LinkedIn', href: site.social.linkedin },
      { label: 'Instagram — @delamax', href: site.social.instagram },
      { label: 'YouTube', href: site.social.youtube },
      { label: 'X', href: site.social.x },
      { label: 'GitHub', href: site.social.github },
    ],
    venturesTitle: 'Проекты',
    ventures: [
      { label: 'Happyverse.AI', href: site.ventures.happyverse },
      { label: 'AGI Interface Summit', href: site.ventures.summit },
      { label: 'finetuned.me', href: site.ventures.finetuned },
      { label: 'Power Couple Club', href: site.ventures.powercouple },
    ],
  },

  footer: {
    tagline: 'Фаундер · Google TPU · CFA · Delamax',
    rights: 'Все права защищены.',
  },

  notFound: {
    title: 'Такой страницы нет.',
    lede: 'Бывает. Попробуй через парадный вход.',
    cta: 'На главную',
  },
};
