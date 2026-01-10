import { cn } from "@/lib/utils";
import { getSkillTier, SKILL_TIERS } from "@shared/schema";
import { Circle, Hexagon, Star, Crown } from "lucide-react";

interface SkillBadgeProps {
  points: number;
  size?: "sm" | "md" | "lg";
  showPoints?: boolean;
  className?: string;
}

const tierIcons = {
  BEGINNER: Circle,
  INTERMEDIATE: Hexagon,
  ADVANCED: Star,
  MASTER: Crown,
};

const tierColors = {
  BEGINNER: "text-tier-beginner bg-tier-beginner/10 border-tier-beginner/30",
  INTERMEDIATE: "text-tier-intermediate bg-tier-intermediate/10 border-tier-intermediate/30",
  ADVANCED: "text-tier-advanced bg-tier-advanced/10 border-tier-advanced/30",
  MASTER: "text-tier-master bg-tier-master/10 border-tier-master/30",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-3 py-1 text-sm gap-1.5",
  lg: "px-4 py-1.5 text-base gap-2",
};

const iconSizes = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export function SkillBadge({
  points,
  size = "md",
  showPoints = true,
  className,
}: SkillBadgeProps) {
  const tier = getSkillTier(points);
  const tierInfo = SKILL_TIERS[tier];
  const Icon = tierIcons[tier];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border font-medium",
        tierColors[tier],
        sizeClasses[size],
        className
      )}
      data-testid="badge-skill-tier"
    >
      <Icon className={iconSizes[size]} />
      <span>{tierInfo.name}</span>
      {showPoints && (
        <span className="opacity-70 font-mono">{points}</span>
      )}
    </div>
  );
}
