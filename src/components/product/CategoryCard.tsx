"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
  className?: string;
}

export function CategoryCard({ title, image, href, className }: CategoryCardProps) {
  return (
    <Link 
      href={href} 
      className={cn("group relative block overflow-hidden rounded-none aspect-square md:aspect-[3/4]", className)}
    >
      <div className="absolute inset-0 bg-card-beige transition-transform duration-1000 ease-out group-hover:scale-105">
         {/* Placeholder for the image. */}
         <div className="absolute inset-0 flex items-center justify-center text-dark/20 text-sm font-medium">
          [Image: {title}]
        </div>
      </div>
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <h3 className="heading-section text-cream mb-4 tracking-wide">{title}</h3>
        <div className="flex items-center gap-3 text-cream/90 text-xs uppercase tracking-widest font-medium overflow-hidden">
          <span className="transform transition-transform duration-700 ease-out group-hover:translate-x-1">
            Explore Collection
          </span>
          <ArrowRight className="h-4 w-4 transform -translate-x-8 opacity-0 transition-all duration-700 ease-out group-hover:translate-x-1 group-hover:opacity-100" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}
