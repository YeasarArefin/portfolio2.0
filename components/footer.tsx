import { Button } from "@/components/ui/button";
import { Github, Heart, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <div className="space-y-1">
              <p className="text-white font-semibold text-base sm:text-lg">Yeasar Arefin</p>
              <p className="text-slate-400 text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-1 justify-center sm:justify-start">
                <span>© {new Date().getFullYear()} yeasararefin.vercel.app</span>
                <span className="hidden sm:inline"> • </span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-3 h-3 text-red-500" /> by Yeasar
                </span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href={'https://github.com/YeasarArefin'} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 p-2 sm:p-2.5"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link href={'https://www.linkedin.com/in/yeasararefin/'} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 p-2 sm:p-2.5"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile-friendly additional info */}
        <div className="mt-6 pt-6 border-t border-white/5 md:hidden">
          <div className="text-center space-y-2">
            <p className="text-slate-400 text-xs">
              Full Stack Developer & Tech Innovator
            </p>
            <p className="text-slate-500 text-xs">
              Building the future, one line of code at a time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
