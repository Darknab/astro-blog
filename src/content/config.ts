// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a 'type' and 'schema' for each collection
const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});
// Export a signe 'collections' object to register you collection
export const collections = {
  posts: postCollection,
};