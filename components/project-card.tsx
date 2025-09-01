"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";
import { ArrowRight, Calendar, ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  showViewDetails?: boolean;
  showStatus?: boolean;
  showCategory?: boolean;
  showTechnologies?: boolean;
  showYear?: boolean;
  showFeatured?: boolean;
}

export function ProjectCard({
  project,
  showViewDetails = true,
  showStatus = true,
  showCategory = true,
  showTechnologies = true,
  showYear = true,
  showFeatured = true,
}: ProjectCardProps) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105">
      <CardContent className="p-0">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Status Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {showFeatured && project.featured && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-xs">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>

          {/* Year */}
          {showYear && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-black/50 text-white border-white/20 text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                {project.year}
              </Badge>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {showCategory && (
              <Badge variant="outline" className="text-xs border-white/20 text-slate-300">
                {project.category}
              </Badge>
            )}
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tags */}
          {showTechnologies && (
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 4).map((tech, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-600/30"
                >
                  {tech.name}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-slate-600/20 text-slate-400 text-xs rounded-full border border-slate-600/30">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {showViewDetails ? (
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex-1"
                onClick={() => (window.location.href = `/projects/${project.id}`)}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                View Details
              </Button>
            ) : (
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex-1"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
