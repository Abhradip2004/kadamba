"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/animation/FadeUp";
import { getRandomImages } from "@/lib/images";

export function Philosophy() {
  const [images, setImages] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setImages(getRandomImages(2));
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background py-32 md:py-48 lg:py-64">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative w-full h-[60vh] lg:h-[85vh] rounded-[2rem] overflow-hidden shadow-float">
            {isMounted && images[0] ? (
              <Image 
                src={images[0]} 
                alt="Ayurvedic Philosophy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <div className="absolute inset-0 bg-card-beige" />
            )}
            <div className="absolute inset-0 bg-sandalwood/10 mix-blend-multiply z-10 pointer-events-none" />
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl lg:ml-12">
            <FadeUp delay={0.1}>
              <span className="text-caption text-primary mb-8 block">
                Our Philosophy
              </span>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <h2 className="heading-section mb-12 lg:mb-16">
                Harmony between <br />
                <span className="italic font-light">nature and science.</span>
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.5}>
              <p className="body-editorial mb-8 lg:mb-10 text-muted/90">
                We believe that true luxury stems from balance. By combining time-honored Ayurvedic traditions with modern botanical science, we create formulas that don't just treat the skin—they nourish the soul.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.7}>
              <p className="body-editorial mb-16 text-muted/90">
                Every jar is a testament to purity, meticulously crafted in small batches to preserve the vital energy of our plant-based ingredients. We source sustainably, formulate mindfully, and invite you to experience skincare as a grounding daily ritual.
              </p>
            </FadeUp>
          </div>

        </div>
      </Container>
    </section>
  );
}
