import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const storyCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/stories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    official: z.boolean(),
    slug: z.string(),
    author: z.string(),
    draft: z.boolean(),
    contributor: z.array(z.string()).optional(),
    pubDate: z.string().or(z.date()),
    tags: z.array(z.string()).optional(),
    img: z.string().optional(),
    layout: z.string().optional(),
  }),
})
const memberCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/members' }),
  schema: z.object({
    userid: z.string(),
    title: z.string(),
    description: z.string().optional(),
    img: z.string().optional(),
    homepage: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    facebook: z.string().optional(),
    linkedin: z.string().optional(),
  }),
})

export const collections = {
  'stories': storyCollection,
  'members': memberCollection,
};