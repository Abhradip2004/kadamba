"use client";

import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/animation/FadeUp";

const QUOTES = [
  {
    quote: "A masterclass in modern wellness. Kadamba proves that efficacy and profound luxury can coexist seamlessly.",
    author: "Elena V.",
    role: "Beauty Editor",
  },
  {
    quote: "The texture and scent profiles are unparalleled. It feels less like skincare and more like a grounding daily meditation.",
    author: "Sarah J.",
    role: "Early Adopter",
  }
];

export function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-card-beige py-32 md:py-48 lg:py-56">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32 max-w-6xl mx-auto">
          {QUOTES.map((item, index) => (
            <div key={index} className="flex flex-col justify-center">
              <FadeUp delay={0.2 + (index * 0.2)}>
                <p className="font-serif text-3xl lg:text-4xl text-dark leading-snug font-light italic mb-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex flex-col">
                  <span className="text-sm font-medium tracking-widest uppercase text-dark mb-1">
                    {item.author}
                  </span>
                  <span className="text-caption text-primary">
                    {item.role}
                  </span>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
