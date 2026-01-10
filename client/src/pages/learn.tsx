import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { EDUCATIONAL_CONTENT, DEBATE_FORMATS } from "@shared/schema";
import { BookOpen, Lightbulb, Target, Clock, CheckCircle2 } from "lucide-react";

export default function Learn() {
  const [activeTab, setActiveTab] = useState("fundamentals");

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Learn to Debate</h1>
        <p className="text-muted-foreground text-lg">
          Master the fundamentals, techniques, and strategies of effective debate.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 h-auto">
          <TabsTrigger value="fundamentals" className="gap-2 py-2" data-testid="tab-fundamentals">
            <BookOpen className="h-4 w-4 hidden sm:block" />
            <span>Fundamentals</span>
          </TabsTrigger>
          <TabsTrigger value="techniques" className="gap-2 py-2" data-testid="tab-techniques">
            <Lightbulb className="h-4 w-4 hidden sm:block" />
            <span>Techniques</span>
          </TabsTrigger>
          <TabsTrigger value="strategies" className="gap-2 py-2" data-testid="tab-strategies">
            <Target className="h-4 w-4 hidden sm:block" />
            <span>Strategies</span>
          </TabsTrigger>
          <TabsTrigger value="formats" className="gap-2 py-2" data-testid="tab-formats">
            <Clock className="h-4 w-4 hidden sm:block" />
            <span>Formats</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="fundamentals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Debate Fundamentals
              </CardTitle>
              <CardDescription>
                Essential concepts every debater needs to understand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {EDUCATIONAL_CONTENT.fundamentals.map((item, index) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger 
                      className="text-left hover:no-underline"
                      data-testid={`accordion-${item.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.content}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Key Points:</p>
                        <ul className="space-y-1">
                          {item.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-tier-beginner mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="techniques" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-tier-intermediate" />
                Debate Techniques
              </CardTitle>
              <CardDescription>
                Practical skills to improve your debate performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {EDUCATIONAL_CONTENT.techniques.map((item, index) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger 
                      className="text-left hover:no-underline"
                      data-testid={`accordion-${item.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-tier-intermediate/10 text-tier-intermediate text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.content}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Key Points:</p>
                        <ul className="space-y-1">
                          {item.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-tier-intermediate mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-tier-advanced" />
                Advanced Strategies
              </CardTitle>
              <CardDescription>
                High-level strategic thinking for competitive debate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {EDUCATIONAL_CONTENT.strategies.map((item, index) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger 
                      className="text-left hover:no-underline"
                      data-testid={`accordion-${item.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-tier-advanced/10 text-tier-advanced text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.content}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Key Points:</p>
                        <ul className="space-y-1">
                          {item.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-tier-advanced mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-tier-master" />
                Debate Formats
              </CardTitle>
              <CardDescription>
                Different styles and structures of formal debate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {DEBATE_FORMATS.map((format) => (
                  <Card key={format.id} className="bg-muted/30">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <CardTitle className="text-lg">{format.name}</CardTitle>
                        <Badge variant="secondary" className="gap-1">
                          <Clock className="h-3 w-3" />
                          {format.timeLimit} min/turn
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{format.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
