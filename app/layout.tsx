import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yeasararefin.vercel.app"),
  title: {
    default: "Yeasar Arefin - Full Stack Developer | React.js & Node.js Expert",
    template: "%s | Yeasar Arefin",
  },
  description:
    "Passionate full-stack developer from Bangladesh with 3+ years of experience. NASA Space App Challenge Global Nominee and Moonshot Pirates Top 20 finalist.",
  keywords: [
    "Yeasar Arefin",
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Web Developer Bangladesh",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "MERN Stack Developer",
  ],
  authors: [{ name: "Yeasar Arefin", url: "https://yeasararefin.vercel.app" }],
  creator: "Yeasar Arefin",
  publisher: "Yeasar Arefin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yeasararefin.vercel.app",
    siteName: "Yeasar Arefin Portfolio",
    title: "Yeasar Arefin - Full Stack Developer | React.js & Node.js Expert",
    description:
      "Passionate full-stack developer from Bangladesh with 3+ years of experience. NASA Space App Challenge Global Nominee.",
    images: [
      {
        url: "/yeasar-profile.png",
        width: 1200,
        height: 630,
        alt: "Yeasar Arefin - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeasar Arefin - Full Stack Developer | React.js & Node.js Expert",
    description: "Passionate full-stack developer from Bangladesh with 3+ years of experience.",
    images: ["/yeasar-profile.png"],
    creator: "@yeasararefin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yeasararefin.vercel.app",
  },
  category: "technology",
  other: {
    "theme-color": "#0f172a",
    "msapplication-TileColor": "#1e293b",
    "google-site-verification": "Tn1neQL39CwIOeY5k_izCAP-apgG53JRx81IzU2K9HA",
    "application-name": "Yeasar Arefin Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Yeasar Arefin - Full Stack Developer | React.js & Node.js Expert</title>
        <meta name="application-name" content="Yeasar Arefin Portfolio" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
