"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/animation/FadeUp";
import { getRandomImages } from "@/lib/images";
import { cn } from "@/lib/utils";

const INGREDIENTS_DATA = [
  {
    name: "Neem",
    desc: "The great purifier. Sourced from organic groves in Southern India, our Neem extract clears congestion and balances oil production without stripping natural moisture.",
  },
  {
    name: "Kumkumadi",
    desc: "A legendary Ayurvedic elixir. This 16-herb infusion, starring pure Kashmiri Saffron, illuminates dull skin and dramatically improves tone and texture.",
  },
  {
    name: "Sandalwood",
    desc: "A sacred cooling agent. Mysore Sandalwood soothes inflammation, reduces redness, and provides a calming aromatherapeutic experience during your ritual.",
  },
];

export function Ingredients() {
  const [images, setImages] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setImages(getRandomImages(3));
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-card-beige py-32 md:py-48 lg:py-64">
      <Container>
        <div className="mb-24 lg:mb-40 flex flex-col items-center text-center max-w-3xl mx-auto">
          <FadeUp delay={0.1}>
            <span className="text-caption text-primary mb-8 block">
              Pure Ingredients
            </span>
          </FadeUp>
          <FadeUp delay={0.3}>
            <h2 className="heading-section">
              Sourced from the earth. <br />
              <span className="italic font-light text-primary">Clinically elevated.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {INGREDIENTS_DATA.map((item, i) => (
            <div 
              key={item.name} 
              className={cn(
                "flex flex-col",
                // Create a staggered vertical rhythm
                i === 1 ? "md:mt-24 lg:mt-32" : "",
                i === 2 ? "md:mt-48 lg:mt-64" : ""
              )}
            >
              <FadeUp delay={0.2 + (i * 0.2)}>
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-float mb-8 lg:mb-12">
                  {isMounted && images[i] ? (
                    <Image 
                      src={images[i]} 
                      alt={item.name}
                      fill
                      className="object-cover object-center transition-transform duration-[2s] hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-background" />
                  )}
                  <div className="absolute inset-0 bg-sandalwood/5 mix-blend-multiply pointer-events-none" />
                </div>
              </FadeUp>

              <FadeUp delay={0.4 + (i * 0.2)}>
                <h3 className="heading-card mb-4 lg:mb-6">{item.name}</h3>
                <p className="body-editorial text-sm lg:text-base leading-relaxed">
                  {item.desc}
                </p>
              </FadeUp>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
