"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/animation/FadeUp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getRandomImages } from "@/lib/images";

export function FinalCTA() {
  const [images, setImages] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setImages(getRandomImages(1));
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-dark text-cream min-h-[90svh] flex items-center">
      {/* Background Image with heavy darkening */}
      <div className="absolute inset-0 z-0">
        {isMounted && images[0] && (
          <Image 
            src={images[0]} 
            alt="Partner with Kadamba"
            fill
            className="object-cover object-center opacity-40 grayscale-[30%]"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-dark/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center py-32">
        <FadeUp delay={0.1}>
          <span className="text-caption text-cream/70 mb-10 block tracking-[0.3em]">
            The Future of Wellness
          </span>
        </FadeUp>
        
        <FadeUp delay={0.3}>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tight text-cream leading-[1.1] max-w-4xl mx-auto mb-16">
            Join the <span className="italic text-sandalwood/90">Journey.</span>
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.5}>
          <p className="body-editorial text-cream/80 max-w-2xl mx-auto mb-16 md:text-xl">
            We are actively seeking strategic partners who share our vision for redefining global luxury skincare through the lens of ancient Ayurvedic science.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.7}>
          {/* We force primary variant styles to adapt to dark background if needed, or use a specific class */}
          <MagneticButton className="bg-cream text-dark hover:bg-white hover:text-dark">
            Partner With Us
          </MagneticButton>
        </FadeUp>
      </Container>
    </section>
  );
}
