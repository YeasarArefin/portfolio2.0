
import TransitionProvider from "@/components/transition-provider";
import PortfolioHomepage from "@/portfolio-homepage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yeasar Arefin - Full Stack Developer | React.js & Node.js Expert | Bangladesh",
  description:
    "Expert full-stack developer from Bangladesh with 3+ years of experience. NASA Space App Challenge Global Nominee and Moonshot Pirates Top 20 finalist. Specializing in React.js, Node.js, Next.js, and MERN stack development.",
  keywords: [
    "Yeasar Arefin",
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Web Developer Bangladesh",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "NASA Space App Challenge",
    "Moonshot Pirates",
    "Web Development",
    "Software Engineer",
    "Dhaka Developer",
    "Bangladesh Tech",
    "Freelance Developer",
    "React Developer Bangladesh",
    "Node.js Developer Bangladesh",
    "Full Stack Web Developer",
    "Modern Web Development",
    "Web Application Development",
    "API Development",
    "Database Design",
    "Cloud Deployment",
    "Performance Optimization",
    "SEO Optimization",
    "Responsive Web Design",
    "Progressive Web Apps",
    "E-commerce Development",
    "Portfolio Website",
    "Custom Web Solutions",
    "Startup Development",
    "Business Website Development"
  ],
  authors: [{ name: "Yeasar Arefin", url: "https://yeasararefin.vercel.app" }],
  creator: "Yeasar Arefin",
  publisher: "Yeasar Arefin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yeasararefin.vercel.app"),
  alternates: {
    canonical: "https://yeasararefin.vercel.app",
  },
  openGraph: {
    title: "Yeasar Arefin - Full Stack Developer | React.js & Node.js Expert | Bangladesh",
    description:
      "Expert full-stack developer from Bangladesh with 3+ years of experience. NASA Space App Challenge Global Nominee and Moonshot Pirates Top 20 finalist. Specializing in React.js, Node.js, Next.js, and MERN stack development.",
    url: "https://yeasararefin.vercel.app",
    siteName: "Yeasar Arefin Portfolio",
    images: [
      {
        url: "https://yeasararefin.vercel.app/yeasar-profile.png",
        width: 1200,
        height: 630,
        alt: "Yeasar Arefin - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Bangladesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeasar Arefin - Full Stack Developer | React.js & Node.js Expert | Bangladesh",
    description:
      "Expert full-stack developer from Bangladesh with 3+ years of experience. NASA Space App Challenge Global Nominee and Moonshot Pirates Top 20 finalist.",
    images: ["https://yeasararefin.vercel.app/yeasar-profile.png"],
    creator: "@yeasararefin",
    site: "@yeasararefin",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Yeasar Arefin",
            jobTitle: "Full Stack Developer",
            description:
              "Passionate full-stack developer from Bangladesh with 3+ years of experience. NASA Space App Challenge Global Nominee and Moonshot Pirates Top 20 finalist.",
            url: "https://yeasararefin.vercel.app",
            image: "https://yeasararefin.vercel.app/yeasar-profile.png",
            sameAs: [
              "https://github.com/yeasararefin",
              "https://linkedin.com/in/yeasararefin",
              "https://twitter.com/yeasararefin",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "BD",
              addressLocality: "Dhaka",
            },
            email: "yeasararefin009@gmail.com",
            telephone: "+880 1614647834",
            knowsAbout: [
              "JavaScript",
              "TypeScript",
              "React.js",
              "Node.js",
              "Next.js",
              "MongoDB",
              "Express.js",
              "Full Stack Development",
              "Web Development",
              "Software Engineering",
            ],
            award: ["NASA Space App Challenge Global Nominee", "Moonshot Pirates Top 20 Finalist", "Paradigm Finalist"],
            alumniOf: {
              "@type": "Organization",
              name: "NASA Space Apps Challenge",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Yeasar Arefin Portfolio",
            url: "https://yeasararefin.vercel.app",
            description: "Portfolio website of Yeasar Arefin, a passionate full-stack developer from Bangladesh.",
            author: {
              "@type": "Person",
              name: "Yeasar Arefin",
            },
            inLanguage: "en-US",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Yeasar Arefin Web Development Services",
            description:
              "Professional web development services specializing in React.js, Node.js, and full-stack development.",
            provider: {
              "@type": "Person",
              name: "Yeasar Arefin",
            },
            areaServed: "Worldwide",
            serviceType: [
              "Web Development",
              "Full Stack Development",
              "React.js Development",
              "Node.js Development",
              "Frontend Development",
              "Backend Development",
            ],
          }),
        }}
      />

      <TransitionProvider>
        <PortfolioHomepage />
      </TransitionProvider>
    </>
  );
}
