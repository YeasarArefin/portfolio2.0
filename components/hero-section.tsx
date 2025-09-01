import { Button } from "@/components/ui/button";
import profile from "@/images/profile.png";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden h-[100vh] flex items-center bg-[url('/grid.svg')] bg-center bg-repeat ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-blue-900/20" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Hi, I'm{" "}</span>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Yeasar Arefin
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-slate-300 font-medium">Full Stack Developer & Tech Innovator</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm">
                  🚀 NASA Global Nominee
                </Badge>
                <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm">
                  🏆 Paradigm Finalist
                </Badge>
                <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm">
                  🏴‍☠️  Top 20 Moonshot Pirates
                </Badge>

              </div>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Passionate full-stack developer from Bangladesh with 3+ years of experience. NASA Space App Challenge
                Global Nominee and Moonshot Pirates Top 20 finalist. I create modern, scalable web applications using
                React.js, Node.js, and cutting-edge technologies.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={'#contact'}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-slate-400 text-sm">Follow me:</span>
              <div className="flex gap-3">
                <a href="https://github.com/YeasarArefin" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                    <Github className="w-4 h-4" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/yeasararefin/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-3xl" />

              {/* Profile image */}
              <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full p-8 backdrop-blur-sm border border-white/10">
                <Image
                  src={profile}
                  alt="Yeasar Arefin - Full Stack Developer and Tech Innovator"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-purple-600/20 backdrop-blur-sm border border-purple-600/30 rounded-lg p-3">
                <span className="text-2xl">⚡</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 rounded-lg p-3">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
