import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  description,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className="text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 max-w-3xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
