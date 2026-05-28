import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 flex flex-col gap-4", centered && "items-center text-center", className)}>
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-foreground/70 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
