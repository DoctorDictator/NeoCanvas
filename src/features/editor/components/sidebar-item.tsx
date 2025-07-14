import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  isActive = false,
  onClick,
}: SidebarItemProps) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full h-auto aspect-video  flex flex-col rounded-none",
        isActive && "bg-muted text-primary"
      )}
      onClick={onClick}
    >
      <Icon className="size-5 stroke-2 shrink-0" />
      <span className="text-xs">{label}</span>
    </Button>
  );
};
