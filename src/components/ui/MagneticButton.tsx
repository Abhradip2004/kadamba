"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({ 
  children, 
  className, 
  onClick,
  variant = "primary"
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-primary text-cream hover:bg-primary/90",
    secondary: "bg-sandalwood text-cream hover:bg-sandalwood/90",
    outline: "border border-muted/30 text-dark hover:bg-muted/5",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.5 }}
      className={cn(
        "relative rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-colors duration-500",
        variants[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
