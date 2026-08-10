# Max Sapo personal website

Personal website for Max Sapo, built with [Astro](https://astro.build/) and content-managed through Markdown/MDX files.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content model

- Writing: `src/content/writing/*.mdx`
- Projects: `src/content/projects/*.mdx`
- Speaking: `src/content/speaking/*.mdx`
- Site metadata and links: `src/data/site.ts`

The site is intentionally static and file-based so it can be updated with simple GitHub edits or assisted changes through OpenClaw/Claude Code.
