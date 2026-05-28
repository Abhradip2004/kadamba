"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "/philosophy" },
    { name: "Ingredients", href: "/ingredients" },
    { name: "Vision", href: "/vision" },
    { name: "Partner", href: "/partner" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out",
        isScrolled 
          ? "bg-cream/70 py-5 backdrop-blur-[24px] shadow-soft border-b border-muted/10" 
          : "bg-transparent py-10 md:py-14"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-dark hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-caption transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-tight text-dark hover:text-primary transition-colors">
            KADAMBA
          </Link>

          {/* Right Actions & Desktop Navigation */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-10 mr-6">
              {navLinks.slice(2).map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-caption transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <button aria-label="Search" className="text-dark hover:text-primary transition-colors">
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-cream px-6 py-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl tracking-tight text-dark">KADAMBA</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
                className="text-dark hover:text-primary transition-colors"
              >
                <X className="h-8 w-8" strokeWidth={1} />
              </button>
            </div>
            <nav className="mt-20 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="heading-section transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
