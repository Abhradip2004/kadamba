import { cn } from "@/lib/utils";

interface NoiseOverlayProps {
  className?: string;
}

export function NoiseOverlay({ className }: NoiseOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 h-full w-full bg-noise",
        className
      )}
      aria-hidden="true"
    />
  );
}
