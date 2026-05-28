import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "default" | "sm" | "none";
}

export function Section({ 
  children, 
  className, 
  id,
  spacing = "default" 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "relative w-full",
        spacing === "default" && "py-section",
        spacing === "sm" && "py-section-sm",
        className
      )}
    >
      {children}
    </section>
  );
}
