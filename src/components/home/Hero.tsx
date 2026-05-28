"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Sparkles, Droplet } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/animation/FadeUp";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientGlow } from "@/components/ui/GradientGlow";
import { cn } from "@/lib/utils";

const HERO_IMAGE_POOL = [
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.27.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.28.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.32 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.32.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.34 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.34 (2).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.34.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.35 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.35.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.36 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.36 (2).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.36.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37 (2).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37 (3).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37 (4).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.37.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.38 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.38.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.39 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.39.jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.40 (1).jpeg",
  "/images/products/WhatsApp Image 2026-05-29 at 02.09.40.jpeg",
];

const INGREDIENTS = [
  { name: "Sandalwood", icon: Sparkles, delay: 0.2, top: "25%", left: "-8%" },
  { name: "Neem", icon: Leaf, delay: 0.4, top: "60%", right: "-12%" },
  { name: "Kumkumadi", icon: Droplet, delay: 0.6, bottom: "10%", left: "-15%" },
  { name: "Aloe Vera", icon: Leaf, delay: 0.8, bottom: "35%", right: "15%" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Dynamic image selection
  const [images, setImages] = useState({
    primary: HERO_IMAGE_POOL[0],
    secondary: HERO_IMAGE_POOL[1]
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Select two random, unique images on mount to avoid hydration mismatch
    const shuffled = [...HERO_IMAGE_POOL].sort(() => 0.5 - Math.random());
    setImages({ primary: shuffled[0], secondary: shuffled[1] });
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[110svh] w-full flex items-center overflow-hidden bg-background pt-48 pb-32 lg:pt-40 lg:pb-40"
    >
      <Container className="relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center h-full">
          
          {/* Left Content Area (~35% composition) */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 z-20">
            <FadeUp delay={0.1}>
              <span className="text-caption text-primary mb-16 block ml-2">
                Ayurvedic Alchemy
              </span>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <h1 className="heading-hero mb-16 max-w-[9ch] text-dark/85 -ml-2 lg:-ml-6 text-4xl lg:text-5xl xl:text-[4.5rem]">
                Ancient Rituals.<br />
                <span className="text-primary italic font-light tracking-wide">Modern Radiance.</span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.5}>
              <p className="body-editorial mb-20 max-w-sm ml-6 lg:ml-12 text-muted/90">
                Experience the luxury of ancient wisdom. Pure ingredients, mindfully sourced, and elegantly formulated to restore your natural radiance.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.7} className="flex flex-col sm:flex-row items-center gap-10 ml-6 lg:ml-12">
              <MagneticButton variant="primary">
                Experience Kadamba
              </MagneticButton>
              <Button variant="ghost" className="hidden sm:inline-flex opacity-70 hover:opacity-100">
                Our Philosophy
              </Button>
            </FadeUp>
          </div>

          {/* Right Visual Area (~65% composition) */}
          <div className="lg:col-span-8 relative h-[75vh] sm:h-[85vh] lg:h-[95vh] w-full order-1 lg:order-2 overflow-visible">
            <GradientGlow className="opacity-70 scale-110" />
            
            {/* Parallax Image Container */}
            <motion.div 
              style={{ y, opacity }}
              className="absolute inset-0 lg:-inset-y-12 lg:left-12 lg:-right-32 rounded-[2.5rem] overflow-hidden shadow-float bg-card-beige"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: isMounted ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={images.primary}
                  alt="Kadamba Skincare Ritual"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </motion.div>
              {/* Warm overlays and textures */}
              <div className="absolute inset-0 bg-sandalwood/5 mix-blend-multiply z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent z-10 pointer-events-none" />
            </motion.div>

            {/* Floating Secondary Detail Image */}
            <FadeUp delay={1.4} className="absolute -left-16 bottom-16 hidden lg:block z-20">
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-56 h-72 rounded-[2rem] overflow-hidden shadow-float border-[8px] border-cream/90 bg-card-beige"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isMounted ? 1 : 0 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={images.secondary}
                    alt="Kadamba Skincare Detail"
                    fill
                    className="object-cover object-center"
                    sizes="224px"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-sandalwood/10 mix-blend-multiply z-10 pointer-events-none" />
              </motion.div>
            </FadeUp>

            {/* Floating Ingredient Cards */}
            {INGREDIENTS.map((ingredient, index) => {
              const Icon = ingredient.icon;
              return (
                <FadeUp 
                  key={ingredient.name} 
                  delay={1.4 + ingredient.delay}
                  className={cn(
                    "absolute z-20 hidden lg:block"
                  )}
                >
                  <motion.div
                    className="absolute"
                    style={{
                      top: ingredient.top,
                      bottom: ingredient.bottom,
                      left: ingredient.left,
                      right: ingredient.right,
                    }}
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: ingredient.delay * 2,
                    }}
                  >
                    <GlassCard 
                      hoverEffect 
                      className="flex items-center gap-5 px-7 py-5 min-w-[170px] rounded-3xl bg-cream/70 backdrop-blur-[32px] border-white/20"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/80 text-primary shadow-sm">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-medium tracking-widest uppercase text-dark/80">
                        {ingredient.name}
                      </span>
                    </GlassCard>
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>
          
        </div>
      </Container>
    </section>
  );
}
