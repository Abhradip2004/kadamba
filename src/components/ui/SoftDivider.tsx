import { cn } from "@/lib/utils";

interface SoftDividerProps {
  className?: string;
}

export function SoftDivider({ className }: SoftDividerProps) {
  return (
    <div
      className={cn(
        "h-[1px] w-full bg-gradient-to-r from-transparent via-muted/20 to-transparent",
        className
      )}
      aria-hidden="true"
    />
  );
}
