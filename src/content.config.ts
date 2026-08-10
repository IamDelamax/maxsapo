import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    period: z.string(),
    draft: z.boolean().default(false),
  }),
});

const speaking = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/speaking' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    event: z.string(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, projects, speaking };
