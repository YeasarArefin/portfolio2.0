import { Award, Rocket, Target, Trophy } from "lucide-react";
import { ContactForm } from "./components/contact-form";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { PortfolioSection } from "./components/portfolio-section";
import { ServicesSection } from "./components/services-section";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import AchivementsSection from "./components/achivements-section";

export default function PortfolioHomepage() {


  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-600/25 to-pink-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AchivementsSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </div>
  );
}
