import { en } from './en';
import { ru } from './ru';
import type { Content } from './en';

export type Lang = 'en' | 'ru';

const dictionaries: Record<Lang, Content> = { en, ru };

export const getContent = (lang: Lang): Content => dictionaries[lang];

/** Same page, other language. Used by the language switch. */
export const altHref = (lang: Lang, pathname: string): string => {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (lang === 'en') {
    return clean === '/' ? '/ru/' : `/ru${clean}`;
  }
  const stripped = clean.replace(/^\/ru/, '');
  return stripped === '' ? '/' : stripped;
};

export { en, ru };
export type { Content };
