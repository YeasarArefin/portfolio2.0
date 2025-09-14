import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/favicon.ico',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
        '/apple-touch-icon.png',
        '/yeasar-profile.png',
      ],
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: 'https://yeasararefin.vercel.app/sitemap.xml',
    host: 'https://yeasararefin.vercel.app',
  };
}
