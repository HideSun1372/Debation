import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, FileText, AlertTriangle } from "lucide-react";

type Tab = "news" | "changelogs" | "incidents";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "news", label: "News", icon: Newspaper },
  { id: "changelogs", label: "Changelogs", icon: FileText },
  { id: "incidents", label: "Incidents", icon: AlertTriangle },
];

export default function Things() {
  const [activeTab, setActiveTab] = useState<Tab>("news");

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Things</h1>

      {/* Tabs */}
      <div className="flex gap-1 border-b mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {tab.id === "incidents" && (
                <Badge variant="secondary" className="h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs bg-green-100 text-green-800 leading-none">
                  0
                </Badge>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === "news" && (
        <div className="flex items-center justify-center min-h-[300px]">
          <p className="text-muted-foreground text-lg">No news yet, come back later.</p>
        </div>
      )}

      {activeTab === "changelogs" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Changelogs: March 29th, 2026</CardTitle>
                <Badge variant="secondary" className="text-xs">Latest</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The Expert and Master curriculum sections are now fully complete — all 22 units (31–52) are live with detailed lessons, questions, and practice exercises. Voice debate got several fixes: audio now plays correctly without the mute/unmute workaround, the timer ticks for all speeches (including opponent turns), and opponent speech is properly cut off when time expires. The Dominion badge on profile pages has also been fixed to display at the correct size.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Changelogs: March 28th, 2026 (v3)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Profile pages have been upgraded! You can now upload a profile picture directly (no more image URLs), add a bio, and show off role badges — Creator, Developer, and Dominion — as icon badges with tooltips. The top bar also displays your highest role badge.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Changelogs: March 28th, 2026 (v2)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The home screen is now personalized when you're signed in! AI analyzes your debate history to show your strengths, areas to improve, recommended formats, and actionable tips. Also fixed the Play page showing AI opponents in the Friend Challenge tab.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Changelogs: March 28th, 2026</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Voice debate UI has been vastly improved, while switching to a different API. I also fixed security issues.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "incidents" && (
        <div className="space-y-4">
          <Card className="border-green-500/30 bg-green-500/5">
            <CardHeader>
              <div className="flex items-center gap-3 line-through">
                <AlertTriangle className="h-5 w-5 text-green-600" />
                <CardTitle className="text-xl">Voice Debate Not Working</CardTitle>
              </div>
              <Badge variant="secondary" className="w-fit text-xs bg-green-100 text-green-800">✅ Resolved</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed line-through">
                Voice debate currently doesn't work. We are trying our best on fixing this issue. Please be patient!
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
