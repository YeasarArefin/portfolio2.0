"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { ProjectCard } from "./project-card";

export function ProjectsPage() {
    return (
        <div className="min-h-screen bg-slate-950 relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-600/25 to-pink-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
            </div>

            <div className="relative z-10">
                <div className="container mx-auto px-4 py-12 max-w-7xl pt-24">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm mb-6">
                            💼 Complete Portfolio
                        </Badge>

                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                                All Projects
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Explore my complete collection of web applications, from e-commerce platforms to healthcare systems. Each
                            project showcases different aspects of modern web development.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30 px-3 py-1">
                                {projects.length} Total Projects
                            </Badge>
                            <Badge className="bg-green-600/20 text-green-300 border-green-600/30 px-3 py-1">
                                {projects.filter((p) => p.featured).length} Featured
                            </Badge>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                showViewDetails={true}
                                showStatus={true}
                                showCategory={true}
                                showTechnologies={true}
                                showYear={true}
                                showFeatured={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
