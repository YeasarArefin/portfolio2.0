import { ProjectDetailPage } from "@/components/project-detail-page";
import TransitionProvider from "@/components/transition-provider";
import { getProjectById, projects } from "@/data/projects";
import type { Metadata } from "next";

// Force static generation
export const dynamic = 'force-static';

interface ProjectDetailProps {
    params: {
        slug: string;
    };
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectById(slug);

    if (!project) {
        return {
            title: "Project Not Found | Yeasar Arefin",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: `${project.title} - Project Details | Yeasar Arefin`,
        description: project.description || `Explore ${project.title} - a ${project.category} project developed by Yeasar Arefin. ${project.subtitle || ''}`,
        keywords: [
            project.title,
            project.category,
            "web development",
            "full stack development",
            "React.js",
            "Node.js",
            "Yeasar Arefin",
            "portfolio project",
            "web application",
            "software development",
            "Bangladesh developer",
            ...(project.technologies?.map(tech => tech.name) || []),
        ],
        openGraph: {
            title: `${project.title} - Project Details | Yeasar Arefin`,
            description: project.description || `Explore ${project.title} - a ${project.category} project developed by Yeasar Arefin.`,
            url: `https://yeasararefin.vercel.app/projects/${slug}`,
            siteName: "Yeasar Arefin Portfolio",
            images: project.image ? [
                {
                    url: project.image.startsWith('http') ? project.image : `https://yeasararefin.vercel.app${project.image}`,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} - Project Screenshot`,
                }
            ] : undefined,
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} - Project Details | Yeasar Arefin`,
            description: project.description || `Explore ${project.title} - a ${project.category} project developed by Yeasar Arefin.`,
            images: project.image ? [project.image.startsWith('http') ? project.image : `https://yeasararefin.vercel.app${project.image}`] : undefined,
        },
        alternates: {
            canonical: `https://yeasararefin.vercel.app/projects/${slug}`,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
    const { slug } = await params;
    return (
        <TransitionProvider>
            <ProjectDetailPage projectId={slug} />
        </TransitionProvider>
    );
}
