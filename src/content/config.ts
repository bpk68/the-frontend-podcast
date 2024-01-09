import { z, defineCollection } from 'astro:content';

const episodeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    episodeNumber: z.number(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  episodes: episodeCollection,
};
