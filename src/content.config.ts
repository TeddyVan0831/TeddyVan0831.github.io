import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import { lazy } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
  }),
})

export const collections = { blog }
