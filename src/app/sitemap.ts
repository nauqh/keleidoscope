import { MetadataRoute } from 'next'
import postsData from '@/data/posts.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://keleidoscope.vercel.app/'
  
  // Get all posts URLs
  const postsUrls = postsData.posts.map((post) => ({
    url: `${baseUrl}/posts/${post.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/collection`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  return [...staticRoutes, ...postsUrls]
}
