"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/animation/FadeUp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getRandomImages } from "@/lib/images";

export function ProductShowcase() {
  const [images, setImages] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setImages(getRandomImages(2));
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background py-32 md:py-48 lg:py-64">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
          
          {/* Text Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center order-2 lg:order-1 z-10 lg:pl-12">
            <FadeUp delay={0.1}>
              <span className="text-caption text-primary mb-8 block ml-2">
                The Signature Ritual
              </span>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <h2 className="heading-section mb-10 max-w-[12ch] -ml-2">
                Kumkumadi <br />
                <span className="italic font-light">Radiance Oil.</span>
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.5}>
              <p className="body-editorial mb-12 ml-4 lg:ml-8 text-muted/90 max-w-sm">
                A transcendent blend of pure saffron, lotus extracts, and rare botanical oils. Designed to absorb instantly, leaving behind nothing but a profound, lit-from-within glow.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.7} className="ml-4 lg:ml-8">
              <MagneticButton variant="outline">
                Discover the Formula
              </MagneticButton>
            </FadeUp>
          </div>

          {/* Huge Image Composition */}
          <div className="w-full lg:w-7/12 relative h-[70vh] lg:h-[100svh] order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-float">
            {isMounted && images[0] ? (
              <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className="absolute inset-0"
              >
                <Image 
                  src={images[0]} 
                  alt="Kumkumadi Radiance Oil"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0 bg-card-beige" />
            )}
            
            <div className="absolute inset-0 bg-sandalwood/5 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />
            
            {/* Minimal floating detail */}
            <FadeUp delay={1} className="absolute right-8 bottom-12 bg-cream/80 backdrop-blur-md px-6 py-4 rounded-2xl hidden md:block">
              <p className="text-xs uppercase tracking-widest text-dark font-medium mb-1">Efficacy</p>
              <p className="font-serif text-2xl text-primary italic">98% Pure</p>
            </FadeUp>
          </div>

        </div>
      </Container>
    </section>
  );
}
