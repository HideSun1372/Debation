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
                <Badge variant="destructive" className="h-5 min-w-5 flex items-center justify-center rounded-full p-0 text-xs">
                  1
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
                <CardTitle className="text-xl">Changelogs: March 28th, 2026 (v2)</CardTitle>
                <Badge variant="secondary" className="text-xs">Latest</Badge>
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
          <Card className="border-destructive/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <CardTitle className="text-xl">Voice Debate Not Working</CardTitle>
              </div>
              <Badge variant="destructive" className="w-fit text-xs">Ongoing</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Voice debate currently doesn't work. We are trying our best on fixing this issue. Please be patient!
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
