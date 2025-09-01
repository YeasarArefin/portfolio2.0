import { Button } from "@/components/ui/button";
import { Github, Heart, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <div>
              <p className="text-white font-semibold">Yeasar Arefin</p>
              <p className="text-slate-400 text-sm flex items-center gap-1">
                © {new Date().getFullYear()} yeasararefin.vercel.app • Made with <Heart className="w-3 h-3 text-red-500" /> Yeasar Arefin
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href={'https://github.com/YeasarArefin'}>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
            </Link>
            <Link href={'https://www.linkedin.com/in/yeasararefin/'}>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
