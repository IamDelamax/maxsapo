import { site } from '../data/site';
import type { Content } from './en';

export const ru: Content = {
  code: 'en' as const,
  htmlLang: 'ru',
  alt: { code: 'en', label: 'EN', title: 'Read in English' },
  prefix: '/ru',

  nav: [
    { label: 'Жизнь', href: '/ru/#life' },
    { label: 'Работа', href: '/ru/work' },
    { label: 'Видео', href: '/ru/watch' },
    { label: 'Сейчас', href: '/ru/now' },
  ],

  meta: {
    title: 'Макс Сапо — Google Cloud TPU, фаундер, CFA, рэпер',
    description:
      'Макс Сапо (Delamax): Senior PM в Google Cloud TPU, основатель Happyverse.AI, ex-Etched, CFA, рэпер с 2003 года. Любовь, здоровье, работа, деньги — все четыре, без купюр.',
    ogAlt: 'Макс Сапо',
  },

  hero: {
    eyebrow: 'Сибирь → Москва → Стэнфорд → Сан-Франциско',
    title: 'Четыре года я продавал миру гугловские TPU.',
    titleAccent: 'Потом ушёл строить лицо поверх этого кремния — а в мае 2026 вернулся к кремнию.',
    lede:
      'Senior Product Manager в Google Cloud TPU. Основатель Happyverse.AI — real-time видео-агенты, pre-seed от Village Global и Джеффа Дина. Между делом: трансформерный чип в Etched, IPO на $355 млн в Системе, чартер CFA и три десятка треков под именем Delamax. Я не держу эти жизни в разных папках.',
    ctas: [
      { label: 'Смотреть видео', href: '/ru/watch', primary: true },
      { label: 'Пруфы', href: '/ru/work', primary: false },
      { label: 'Питчни мне идею', href: `mailto:${site.email}`, primary: false },
    ],
    portraitAlt: 'Макс Сапо и Сергей Брин',
    portraitCaption: 'С Сергеем Брином · Сан-Франциско',
  },

  stats: [
    { value: '4', label: 'поколения Google TPU, выведенные на рынок' },
    { value: '$355М', label: 'IPO Детского мира в Системе, 2017' },
    { value: '30+', label: 'треков записано как Delamax с 2003 года' },
    { value: '4', label: 'основано: Happyverse, Power Couple Club, finetuned.me, MLHappy' },
  ],

  pillars: {
    eyebrow: 'Целиком',
    title: 'Четыре тумблера, а не один.',
    lede:
      'В Happyverse я собрал HIPERFLOW — девять тумблеров, от которых зависит, как жизнь ощущается на самом деле: здоровье, интеллект, продуктивность, эмоции, отношения, свобода, любовь, работа, деньги. Четыре из них тянут почти всё. Я живу по ним — поэтому и сайт устроен так же.',
    items: [
      {
        key: 'love',
        label: 'Любовь',
        title: 'Амбиции легче нести вдвоём.',
        body:
          'Я веду Power Couple Club — закрытый клуб в Сан-Франциско и Лос-Анджелесе для тех, кто отказывается выбирать между карьерой и жизнью. Кураторские ужины, настоящие знакомства и ноль энергетики нетворкинг-ивента. Тезис простой: человек рядом с тобой растёт в цене быстрее любого портфеля.',
        proof: ['Power Couple Club — SF и LA', 'Ужины по отбору, закрытое членство'],
        link: { label: 'powercoupleclub.com', href: site.ventures.powercouple },
      },
      {
        key: 'health',
        label: 'Здоровье',
        title: 'Головой не переиграешь тело, которое ты гробишь.',
        body:
          'finetuned.me — четыре дня перезагрузки на частном поместье в 40 акров в калифорнийской пустыне. Шестнадцать человек, 1–5 октября 2026. Двигаться, есть, разговаривать, спать — и уехать другим. Всё это выросло из MLHappy.org, некоммерческого проекта, который я запустил, чтобы AI работал на самочувствие, а не на метрики вовлечения.',
        proof: ['finetuned.me — 1–5 октября 2026', '16 человек, 40 акров, телефон не в программе'],
        link: { label: 'finetuned.me', href: site.ventures.finetuned },
      },
      {
        key: 'work',
        label: 'Работа',
        title: 'Кремний, лицо поверх него — и снова кремний.',
        body:
          'Google Cloud TPU: v4 Pods, v5e, v5p, Trillium — я отвечал за рост и стратегию машин, на которых обучали модели, о которых теперь все спорят. И сегодня я снова на них. Etched: месячный спринт с 30+ инженерами, чтобы вывести Sohu, чип только под трансформеры, на tapeout. Happyverse: слой сверху — AI, который ведёт живой разговор твоим лицом и твоими суждениями. Мало кто стоял на всех трёх этажах.',
        proof: ['Google Cloud TPU — Senior PM', 'Основатель Happyverse.AI · ex-Etched'],
        link: { label: 'Весь список', href: '/ru/work' },
      },
      {
        key: 'wealth',
        label: 'Деньги',
        title: 'Я сначала как следует сделал финансы, потом технологии.',
        body:
          'Чартер CFA. Шесть лет в Системе инвестиционным директором: IPO Детского мира на $355 млн и разворот убыточного актива в прибыльного лидера рынка — примерно пятикратный рост стоимости капитала. До этого инвестбанкинг в VTB Capital и ING. Сейчас пишу ангельские чеки: Alma, Electric Fish, CloudThread (YC ’22), BitRiver, GSB 2020 Fund.',
        proof: ['CFA charterholder', 'Ангельский инвестор с 2017 года'],
        link: { label: 'Весь список', href: '/ru/work' },
      },
    ],
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
  },

  watch: {
    eyebrow: 'В кадре',
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
      'aizada-marat':
        'Длинный разговор с Айзадой Марат про MBA в Стэнфорде и дорогу, которая к нему привела.',
      'agi-summit':
        'Саммит, который я собрал и провёл в Сан-Франциско в ноябре 2025 года. Весь день — один вопрос: если интеллект станет дешёвым, как выглядит интерфейс к нему?',
      'ai-coaching':
        'Долгий разговор о том, что AI может и чего не может внутри отношений «коуч — человек».',
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
