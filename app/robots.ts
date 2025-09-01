import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: 'https://yeasararefin.vercel.app/sitemap.xml',
    host: 'https://yeasararefin.vercel.app',
  };
}
