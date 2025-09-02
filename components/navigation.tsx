"use client";

import { Button } from "@/components/ui/button";
import { FolderOpen, Github, Home, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Handle menu open/close with animation
  const toggleMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (isOpen) {
      // Closing animation
      setIsOpen(false);
      setTimeout(() => setIsAnimating(false), 300);
    } else {
      // Opening animation
      setIsOpen(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

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
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white transition-all duration-300 hover:bg-white/10"
            onClick={toggleMenu}
            disabled={isAnimating}
          >
            <div className="relative w-5 h-5">
              <Menu
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
              />
              <X
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Menu with Animations */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen
              ? 'max-h-96 opacity-100 py-4 border-t border-white/10'
              : 'max-h-0 opacity-0 py-0 border-t border-transparent'
            }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`transition-all duration-300 ease-out ${isOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4 opacity-0'
                  }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => {
                      smoothScrollToSection(item.href);
                      toggleMenu();
                    }}
                    className={`flex items-center gap-2 py-3 px-4 transition-all duration-200 cursor-pointer w-full text-left rounded-lg hover:bg-white/5 active:bg-white/10 ${pathname === item.href
                        ? "text-white font-medium bg-white/10"
                        : "text-slate-300 hover:text-white"
                      }`}
                  >
                    <item.icon
                      className={`w-4 h-4 transition-all duration-200 ${pathname === item.href ? "text-purple-500 scale-110" : ""
                        }`}
                    />
                    <span className="transition-all duration-200">{item.name}</span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 py-3 px-4 transition-all duration-200 rounded-lg hover:bg-white/5 active:bg-white/10 ${pathname === item.href
                        ? "text-white font-medium bg-white/10"
                        : "text-slate-300 hover:text-white"
                      }`}
                    onClick={() => toggleMenu()}
                  >
                    <item.icon
                      className={`w-4 h-4 transition-all duration-200 ${pathname === item.href ? "text-purple-500 scale-110" : ""
                        }`}
                    />
                    <span className="transition-all duration-200">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Social Links with Animation */}
            <div
              className={`flex items-center gap-3 pt-2 transition-all duration-300 ease-out ${isOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-4 opacity-0'
                }`}
              style={{
                transitionDelay: isOpen ? '300ms' : '0ms'
              }}
            >
              <span className="text-slate-400 text-sm">Follow me:</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/YeasarArefin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 text-slate-300 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yeasararefin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 text-slate-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
