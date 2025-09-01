"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getProjectById } from "@/data/projects";
import { skills } from "@/images/skills_logo/skills-logo";
import {
    ArrowLeft,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Eye,
    Github,
    Star,
    X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ProjectDetailProps {
    projectId: string;
}

export function ProjectDetailPage({ projectId }: ProjectDetailProps) {
    const project = getProjectById(projectId);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Helper function to get skill image by name
    const getSkillImage = (techName: string) => {
        // First try exact match
        let skill = skills.find(skill =>
            skill.name.toLowerCase() === techName.toLowerCase()
        );

        // If no exact match, try partial match but be more specific
        if (!skill) {
            skill = skills.find(skill => {
                const skillLower = skill.name.toLowerCase();
                const techLower = techName.toLowerCase();

                // Handle specific cases
                if (techLower === 'tailwindcss' && skillLower === 'tailwindcss') return true;
                if (techLower === 'tailwind css' && skillLower === 'tailwindcss') return true;
                if (techLower === 'next.js' && skillLower === 'next.js') return true;
                if (techLower === 'react.js' && skillLower === 'react') return true;
                if (techLower === 'node.js' && skillLower === 'node.js') return true;

                // Avoid partial matches that could be wrong (like CSS matching Tailwind CSS)
                if (skillLower === 'css' && techLower !== 'css') return false;
                if (skillLower === 'html' && techLower !== 'html') return false;

                return skillLower.includes(techLower) || techLower.includes(skillLower);
            });
        }

        return skill || null;
    };
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (project?.video && videoRef.current && typeof window !== 'undefined') {
            const timer = setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.play().catch(error => {
                        console.log('Video autoplay failed:', error);
                    });
                }
            }, .1000);

            return () => clearTimeout(timer);
        }
    }, [project?.video]);

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const handlePreviousImage = () => {
        if (project?.gallery && selectedImageIndex !== null) {
            setSelectedImageIndex(
                selectedImageIndex === 0 ? project.gallery.length - 1 : selectedImageIndex - 1
            );
        }
    };

    const handleNextImage = () => {
        if (project?.gallery && selectedImageIndex !== null) {
            setSelectedImageIndex(
                selectedImageIndex === project.gallery.length - 1 ? 0 : selectedImageIndex + 1
            );
        }
    };

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
        if (!isModalOpen) return;

        switch (e.key) {
            case 'ArrowLeft':
                handlePreviousImage();
                break;
            case 'ArrowRight':
                handleNextImage();
                break;
            case 'Escape':
                setIsModalOpen(false);
                setSelectedImageIndex(null);
                break;
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isModalOpen, selectedImageIndex]);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-slate-300 mb-8">The project you're looking for doesn't exist.</p>
                    <Button
                        className="bg-transparent text-white"
                        onClick={() => (window.location.href = "/projects")}
                    >
                        Back to Projects
                    </Button>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Error Loading Project</h1>
                    <p className="text-slate-300 mb-8">{error}</p>
                    <Button
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        onClick={() => window.location.reload()}
                    >
                        Try Again
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-600/25 to-pink-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10">
                <div className="container mx-auto px-4 py-12 max-w-6xl pt-24">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Button
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Projects
                        </Button>
                    </div>

                    {/* Hero Section */}
                    <div className="mb-16">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">{project.category}</Badge>
                                {project.featured && (
                                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                                        <Star className="w-3 h-3 mr-1" />
                                        Featured
                                    </Badge>
                                )}
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                                    {project.title}
                                </span>
                            </h1>
                            <p className="text-xl text-purple-300 font-light">{project.subtitle}</p>
                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 py-5">
                                <Link href={project.liveUrl} target="_blank">
                                    <Button
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
                                        onClick={() => window.open(project.liveUrl, "_blank")}
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </Button>
                                </Link>
                                <Link href={project.githubUrl} target="_blank">
                                    <Button
                                        variant="outline"
                                        className="border-white/20 text-white hover:bg-white/10 bg-transparent px-8 py-3"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        View Code
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Main Image/Video */}
                        <div className="mb-16 flex justify-center">
                            <div className="relative h-[500px] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
                                {project.video ? (
                                    <video
                                        ref={videoRef}
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            console.error('Video loading error:', e);
                                            setError('Failed to load project video');
                                        }}
                                    >
                                        <source src={project.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        onError={() => {
                                            console.error('Image loading error for:', project.image);
                                            setError('Failed to load project image');
                                        }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>



                        {/* Technologies Row */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    Description
                                </h3>
                                <div className="flex flex-wrap gap-4 items-center">
                                    {project.technologies.map((tech, index) => {
                                        const skillImage = getSkillImage(tech.name);
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                                            >
                                                <div className="relative w-6 h-6 flex items-center justify-center">
                                                    {skillImage ? (
                                                        <Image
                                                            src={skillImage.image}
                                                            alt={skillImage.alt}
                                                            width={24}
                                                            height={24}
                                                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                    ) : (
                                                        <div className="w-6 h-6 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                                                            <span className="text-white text-xs font-medium">
                                                                {tech.name.charAt(0).toUpperCase()}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <span className="text-slate-300 text-sm font-medium">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                        <p className="text-lg text-slate-300 leading-relaxed mb-8 text-justify">{project.description}</p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {/* Key Features */}
                        <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl col-span-2">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    Key Features
                                </h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {project.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                                        >
                                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Project Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl col-span-1">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-4">Project Gallery</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {project.gallery.map((image, index) => (
                                            <div
                                                key={index}
                                                className="relative h-24 rounded-lg overflow-hidden group cursor-pointer"
                                                onClick={() => handleImageClick(index)}
                                            >
                                                <Image
                                                    src={image || "/placeholder.svg"}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    onError={() => {
                                                        console.error('Gallery image loading error for:', image);
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                                    <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>

                {/* Image Modal */}
                {project.gallery && project.gallery.length > 0 && (
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogContent
                            className="!max-w-none w-full md:w-[90vh] h-full md:h-[90vh] p-0 bg-black/95 border-0"
                            showCloseButton={false}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Close Button */}
                                <button
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setSelectedImageIndex(null);
                                    }}
                                    className="absolute top-3 right-3 md:top-4 md:right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors duration-200 backdrop-blur-sm"
                                >
                                    <X className="w-5 h-5 md:w-6 md:h-6" />
                                </button>

                                {/* Navigation Arrows */}
                                {project.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={handlePreviousImage}
                                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors duration-200 backdrop-blur-sm"
                                        >
                                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                                        </button>
                                        <button
                                            onClick={handleNextImage}
                                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors duration-200 backdrop-blur-sm"
                                        >
                                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                                        </button>
                                    </>
                                )}

                                {/* Image Counter */}
                                {project.gallery.length > 1 && (
                                    <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/60 text-white text-xs md:text-sm font-medium backdrop-blur-sm">
                                        {selectedImageIndex !== null ? selectedImageIndex + 1 : 0} / {project.gallery.length}
                                    </div>
                                )}

                                {/* Main Image */}
                                {selectedImageIndex !== null && project.gallery[selectedImageIndex] && (
                                    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
                                        <Image
                                            src={project.gallery[selectedImageIndex]}
                                            alt={`${project.title} screenshot ${selectedImageIndex + 1}`}
                                            fill
                                            className="object-contain"
                                            priority
                                            sizes="(max-width: 768px) 95vw, (max-width: 1024px) 90vw, 85vw"
                                            onError={() => {
                                                console.error('Modal image loading error for:', project.gallery[selectedImageIndex]);
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </div>
    );
}
