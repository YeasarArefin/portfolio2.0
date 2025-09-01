import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { Eye } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "./project-card";
import { Badge } from "./ui/badge";

export function PortfolioSection() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30 mb-4">Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">My</span>{" "}
            <span className="text-white">
              Works
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here is look my best projects. Where I have used MERN Stack Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
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
        <div className="text-center">
          <Link href={'/projects'}>
            <Button
              className="bg-gradient-to-r mt-10  from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold"
            >
              <Eye className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </Link>

          <p className="text-slate-400 text-sm mt-3">
            Explore my complete portfolio with detailed case studies and technical insights
          </p>
        </div>
      </div>
    </section>
  );
}
