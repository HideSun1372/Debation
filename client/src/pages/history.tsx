import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser, type DebateHistoryItem } from "@/lib/user-context";
import { AI_OPPONENTS, DEBATE_TOPICS, DEBATE_FORMATS, type Debate } from "@shared/schema";
import { History as HistoryIcon, TrendingUp, TrendingDown, ChevronDown, ChevronUp, FileText, Loader2 } from "lucide-react";

export default function History() {
  const { user } = useUser();
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // UserContext now handles fetching from API and merging with local history
  const combinedHistory = user.debateHistory.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const filteredHistory = combinedHistory.filter((item) => {
    if (filter === "all") return true;
    return item.result === filter;
  });

  const getOpponent = (id: string) => AI_OPPONENTS.find((o) => o.id === id);
  const getTopic = (id: string) => DEBATE_TOPICS.find((t) => t.id === id);
  const getFormat = (id: string) => DEBATE_FORMATS.find((f) => f.id === id);

  const totalWins = combinedHistory.filter((h) => h.result === "win").length;
  const totalLosses = combinedHistory.filter((h) => h.result === "loss").length;
  const netPoints = combinedHistory.reduce((acc, h) => acc + h.pointsChange, 0);

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-6 w-96" />
        </div>
        <Card>
          <CardContent className="py-16 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Debate History</h1>
        <p className="text-muted-foreground text-lg">
          Review your past debates and track your performance over time.
        </p>
      </div>

      {combinedHistory.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-16 text-center">
            <HistoryIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No debate history yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Once you complete your first debate, you'll be able to see all your past matches here,
              including opponents, topics, results, and points changes.
            </p>
            <Link href="/practice">
              <Button data-testid="link-start-first-debate">Start Your First Debate</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Performance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-tier-beginner">{totalWins}</p>
                  <p className="text-sm text-muted-foreground">Total Wins</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-destructive">{totalLosses}</p>
                  <p className="text-sm text-muted-foreground">Total Losses</p>
                </div>
                <div className="text-center">
                  <p className={`text-3xl font-bold ${netPoints >= 0 ? "text-primary" : "text-destructive"}`}>
                    {netPoints > 0 ? "+" : ""}{netPoints}
                  </p>
                  <p className="text-sm text-muted-foreground">Net Points</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <HistoryIcon className="h-5 w-5" />
                  All Debates
                </CardTitle>
                <CardDescription>
                  {filteredHistory.length} debate{filteredHistory.length !== 1 ? "s" : ""} found
                </CardDescription>
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-32" data-testid="select-filter-result">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="win">Wins</SelectItem>
                  <SelectItem value="loss">Losses</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Opponent</TableHead>
                      <TableHead className="hidden md:table-cell">Format</TableHead>
                      <TableHead className="hidden lg:table-cell">Topic</TableHead>
                      <TableHead>Result</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                      <TableHead className="w-10"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredHistory.map((item) => {
                      const opponent = getOpponent(item.opponentId);
                      const topic = getTopic(item.topicId);
                      const format = getFormat(item.formatId);
                      const isExpanded = expandedId === item.id;

                      return (
                        <>
                          <TableRow
                            key={item.id}
                            className="cursor-pointer"
                            onClick={() => setExpandedId(isExpanded ? null : item.id)}
                            data-testid={`row-debate-${item.id}`}
                          >
                            <TableCell className="font-medium">
                              {new Date(item.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </TableCell>
                            <TableCell>{opponent?.name || "Unknown"}</TableCell>
                            <TableCell className="hidden md:table-cell">
                              {format?.name || "Unknown"}
                            </TableCell>
                            <TableCell className="hidden lg:table-cell max-w-xs truncate">
                              {topic?.title || "Unknown"}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={item.result === "win" ? "default" : "destructive"}
                                className={item.result === "win" ? "bg-tier-beginner" : ""}
                              >
                                {item.result === "win" ? "Win" : "Loss"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <span className={`flex items-center justify-end gap-1 font-mono ${item.pointsChange > 0 ? "text-tier-beginner" : "text-destructive"
                                }`}>
                                {item.pointsChange > 0 ? (
                                  <TrendingUp className="h-4 w-4" />
                                ) : (
                                  <TrendingDown className="h-4 w-4" />
                                )}
                                {item.pointsChange > 0 ? "+" : ""}{item.pointsChange}
                              </span>
                            </TableCell>
                            <TableCell>
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </TableCell>
                          </TableRow>
                          {isExpanded && (
                            <TableRow key={`${item.id}-expanded`}>
                              <TableCell colSpan={7} className="bg-muted/50">
                                <div className="p-4 space-y-3">
                                  <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Topic</p>
                                      <p className="font-medium">{topic?.title}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Your Side</p>
                                      <Badge variant="outline">
                                        {item.side === "pro" ? "Pro (For)" : "Con (Against)"}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Opponent Personality</p>
                                    <p className="text-sm">{opponent?.personality}</p>
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          )}
                        </>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
