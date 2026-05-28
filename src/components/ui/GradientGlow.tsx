import { cn } from "@/lib/utils";

interface GradientGlowProps {
  className?: string;
}

export function GradientGlow({ className }: GradientGlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -inset-px opacity-30 blur-[100px] transition-opacity duration-1000",
        "bg-gradient-to-r from-primary/30 via-sandalwood/20 to-transparent",
        className
      )}
      aria-hidden="true"
    />
  );
}
