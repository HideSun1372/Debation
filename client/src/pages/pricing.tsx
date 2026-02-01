import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function Pricing() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 tracking-tighter">Choose Your Plan</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Unlock the full power of Debation with unlimited AI practice, advanced analytics, and master-tier opponents.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <Card className="relative overflow-hidden border-2">
                        <CardHeader>
                            <CardTitle className="text-2xl">Free</CardTitle>
                            <CardDescription>Perfect for getting started</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-3xl font-bold">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>3 AI Debates per day</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Access to Beginner & Intermediate opponents</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Basic performance stats</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Public Forum & Lincoln-Douglas formats</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline" disabled>
                                Current Plan
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="relative overflow-hidden border-2 border-primary shadow-lg">
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                            POPULAR
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">Pro</CardTitle>
                            <CardDescription>For serious debaters</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-3xl font-bold">$9.99<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Unlimited AI Debates</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Access to ALL opponents (including Master)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Advanced Analytics & Speech feedback</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>All formats including Policy & World Schools</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Priority support</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" disabled>
                                Coming Soon
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </div>
    );
}
