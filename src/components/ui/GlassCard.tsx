import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/30 bg-white/40 backdrop-blur-[16px]",
        "shadow-soft transition-all duration-700 ease-out",
        hoverEffect && "hover:bg-white/50 hover:shadow-float hover:-translate-y-2",
        className
      )}
    >
      {children}
    </div>
  );
}
