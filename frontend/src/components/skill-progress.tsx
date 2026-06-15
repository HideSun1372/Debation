import { cn } from "@/lib/utils";
import { getSkillTier, getTierProgress, SKILL_TIERS } from "@shared/schema";
import { Progress } from "@/components/ui/progress";

interface SkillProgressProps {
  points: number;
  className?: string;
  showLabels?: boolean;
}

const tierProgressColors = {
  BEGINNER: "bg-tier-beginner",
  INTERMEDIATE: "bg-tier-intermediate",
  ADVANCED: "bg-tier-advanced",
  EXPERT: "bg-tier-expert",
  MASTER: "bg-tier-master",
};

export function SkillProgress({ points, className, showLabels = true }: SkillProgressProps) {
  const tier = getSkillTier(points);
  const tierInfo = SKILL_TIERS[tier];
  const progress = getTierProgress(points);
  const nextTierPoints = tier === "MASTER" ? null : tierInfo.maxPoints + 1;

  return (
    <div className={cn("space-y-2", className)}>
      {showLabels && (
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            {tierInfo.minPoints} pts
          </span>
          <span className="font-medium">{points} points</span>
          <span className="text-muted-foreground">
            {nextTierPoints ? `${nextTierPoints} pts` : "Max"}
          </span>
        </div>
      )}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out rounded-full",
            tierProgressColors[tier as keyof typeof tierProgressColors]
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLabels && tier !== "MASTER" && (
        <p className="text-xs text-muted-foreground text-center">
          {tierInfo.maxPoints - points + 1} points to next tier
        </p>
      )}
    </div>
  );
}
