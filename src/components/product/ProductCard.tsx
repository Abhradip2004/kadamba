"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  ingredients: string;
  tags?: string[];
  price: number;
  image: string;
  className?: string;
}

export function ProductCard({ id, name, ingredients, tags, price, image, className }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className={cn("group block", className)}>
      <div className="relative mb-6 overflow-hidden bg-card-beige rounded-none aspect-[4/5] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
        
        {/* Placeholder for the image */}
        <div className="absolute inset-0 flex items-center justify-center text-dark/20 text-sm font-medium">
          [Image: {name}]
        </div>
        
        {/* Wishlist Button */}
        <button 
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/30 text-dark opacity-0 backdrop-blur-md transition-all duration-500 hover:bg-cream hover:text-primary group-hover:opacity-100"
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist logic
          }}
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" strokeWidth={1.5} />
        </button>

        {/* Hover overlay with Quick Add */}
        <div className="absolute inset-0 bg-dark/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex items-end justify-center pb-8">
          <button 
            className="flex items-center gap-2 rounded-full bg-cream/90 px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-primary shadow-soft backdrop-blur-md transition-all duration-700 translate-y-8 group-hover:translate-y-0 hover:bg-cream"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
          >
            <Plus className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="flex flex-col items-center text-center space-y-2 px-4">
        {tags && tags.length > 0 && (
          <div className="flex gap-2 justify-center mb-1">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest text-muted border border-muted/20 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="heading-card transition-colors duration-300 group-hover:text-primary">
          {name}
        </h3>
        <p className="text-sm font-light text-muted">{ingredients}</p>
        <p className="mt-4 text-sm font-medium text-dark">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
