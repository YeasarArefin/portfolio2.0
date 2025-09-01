"use client";

import { Button } from "@/components/ui/button";
import { FolderOpen, Github, Home, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Smooth scroll function for anchor links
  const smoothScrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed navigation height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "Contact", href: "/#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={'/'} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-white font-bold text-xl">Yeasar Arefin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => smoothScrollToSection(item.href)}
                    className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${isActive(item.href)
                      ? "text-white font-medium"
                      : "text-slate-300 hover:text-white"
                      }`}
                  >
                    <item.icon className={`w-4 h-4 ${isActive(item.href) ? "text-purple-500" : ""}`} />
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 transition-colors duration-200 ${isActive(item.href)
                      ? "text-white font-medium"
                      : "text-slate-300 hover:text-white"
                      }`}
                  >
                    <item.icon className={`w-4 h-4 ${isActive(item.href) ? "text-purple-500" : ""}`} />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith('#') ? (
                    <button
                      onClick={() => {
                        smoothScrollToSection(item.href);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-2 py-2 transition-colors duration-200 cursor-pointer w-full text-left ${pathname === item.href
                        ? "text-white font-medium"
                        : "text-slate-300 hover:text-white"
                        }`}
                    >
                      <item.icon className={`w-4 h-4 ${pathname === item.href ? "text-purple-500" : ""}`} />
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 py-2 transition-colors duration-200 ${pathname === item.href
                        ? "text-white font-medium"
                        : "text-slate-300 hover:text-white"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className={`w-4 h-4 ${pathname === item.href ? "text-purple-500" : ""}`} />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
