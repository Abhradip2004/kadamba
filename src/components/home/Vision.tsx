"use client";

import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/animation/FadeUp";
import { SoftDivider } from "@/components/ui/SoftDivider";

export function Vision() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-32 md:py-48 lg:py-64">
      <Container className="max-w-[1200px] text-center flex flex-col items-center">
        
        <FadeUp delay={0.1}>
          <span className="text-caption text-primary mb-12 block tracking-widest">
            Our Vision
          </span>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h2 className="heading-hero max-w-4xl mx-auto mb-16 !leading-snug">
            Redefining the <br />
            <span className="italic text-primary">Indian Luxury Narrative.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="body-editorial text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-20 leading-relaxed text-muted/80">
            For centuries, Ayurvedic wisdom has been revered globally. Yet, its presentation has often lacked the sophisticated, uncompromising elegance it deserves. We founded Kadamba to bridge this gap—to elevate ancient botanical science into an unparalleled luxury experience that stands proudly on the global stage.
          </p>
        </FadeUp>

        <FadeUp delay={0.7} className="w-full flex justify-center">
          <div className="w-full max-w-md">
            <SoftDivider />
          </div>
        </FadeUp>

      </Container>
    </section>
  );
}
