import { ProjectsPage } from "@/components/projects-page";
import TransitionProvider from "@/components/transition-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects by Yeasar Arefin - Full Stack Developer Portfolio",
    description:
        "Explore the portfolio of Yeasar Arefin featuring innovative web applications built with React.js, Node.js, MongoDB, and modern technologies. NASA Space App Challenge projects and more.",
    keywords: [
        "Yeasar Arefin Projects",
        "Full Stack Projects",
        "React.js Projects",
        "Node.js Applications",
        "Web Development Portfolio",
        "JavaScript Projects",
        "TypeScript Applications",
        "MongoDB Projects",
        "Express.js Applications",
        "MERN Stack Projects",
        "Next.js Projects",
        "Frontend Projects",
        "Backend Projects",
        "NASA Space App Projects",
        "Web Applications",
        "Software Projects",
        "Developer Portfolio",
        "Coding Projects",
        "Programming Portfolio",
        "Tech Projects",
    ],
    authors: [{ name: "Yeasar Arefin" }],
    creator: "Yeasar Arefin",
    metadataBase: new URL("https://yeasararefin.vercel.app"),
    alternates: {
        canonical: "/projects",
    },
    openGraph: {
        title: "Projects by Yeasar Arefin - Full Stack Developer Portfolio",
        description:
            "Explore the portfolio of Yeasar Arefin featuring innovative web applications built with React.js, Node.js, MongoDB, and modern technologies.",
        url: "https://yeasararefin.vercel.app/projects",
        siteName: "Yeasar Arefin Portfolio",
        images: [
            {
                url: "/yeasar-profile.png",
                width: 1200,
                height: 630,
                alt: "Yeasar Arefin Projects Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects by Yeasar Arefin - Full Stack Developer Portfolio",
        description: "Explore innovative web applications built with React.js, Node.js, and modern technologies.",
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
};

export default function Projects() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Yeasar Arefin Projects Portfolio",
                        description:
                            "A collection of web development projects by Yeasar Arefin, showcasing expertise in React.js, Node.js, and full-stack development.",
                        url: "https://yeasararefin.vercel.app/projects",
                        author: {
                            "@type": "Person",
                            name: "Yeasar Arefin",
                            jobTitle: "Full Stack Developer",
                        },
                        mainEntity: {
                            "@type": "ItemList",
                            name: "Web Development Projects",
                            description: "Portfolio of web applications and software projects",
                            numberOfItems: 6,
                            itemListElement: [
                                {
                                    "@type": "CreativeWork",
                                    name: "E-Commerce Platform",
                                    description: "Full-stack e-commerce solution with React.js and Node.js",
                                    author: {
                                        "@type": "Person",
                                        name: "Yeasar Arefin",
                                    },
                                },
                                {
                                    "@type": "CreativeWork",
                                    name: "Task Management App",
                                    description: "Modern task management application with real-time updates",
                                    author: {
                                        "@type": "Person",
                                        name: "Yeasar Arefin",
                                    },
                                },
                                {
                                    "@type": "CreativeWork",
                                    name: "Social Media Dashboard",
                                    description: "Analytics dashboard for social media management",
                                    author: {
                                        "@type": "Person",
                                        name: "Yeasar Arefin",
                                    },
                                },
                            ],
                        },
                        breadcrumb: {
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://yeasararefin.vercel.app",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Projects",
                                    item: "https://yeasararefin.vercel.app/projects",
                                },
                            ],
                        },
                    }),
                }}
            />
            <TransitionProvider>
                <ProjectsPage />
            </TransitionProvider>
        </>
    );
}
