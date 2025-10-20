import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React from "react";
import {
  Target,
  HeartHandshake,
  Factory,
  Users2,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="container mx-auto sm:px-12 px-2 pt-28 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold">
              About OpenPlan
            </h1>
            <p className="mt-3 text-muted-foreground">
              OpenPlan is building modern operations software for hardware
              teams. We help you unify planning, BOM, sourcing, builds, quality,
              and analytics in one place so you can ship reliably and scale with
              confidence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/40 border-border/60">
              <CardHeader className="flex-row items-center gap-3 p-6">
                <div className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Our mission</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <CardDescription>
                  Empower every hardware team with software that feels
                  delightful, unifies their workflows, and lets them focus on
                  building great products.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-border/60">
              <CardHeader className="flex-row items-center gap-3 p-6">
                <div className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">What we value</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <CardDescription>
                  Reliability, clarity, and speed. We sweat the details and
                  design for teams that build in the real world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-border/60">
              <CardHeader className="flex-row items-center gap-3 p-6">
                <div className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Factory className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Who we serve</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <CardDescription>
                  From startups to enterprises across manufacturing, automotive,
                  aerospace, electronics, and more.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 rounded-xl border border-border/60 bg-card/40 p-6">
            <h3 className="text-base font-semibold">Our story</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We started OpenPlan after years of wrestling with fragmented tools
              and spreadsheets. We believed hardware deserved software as
              polished as the products it creates. So we built OpenPlan to bring
              everything together.
            </p>
          </div>

          {/* Team section */}
          <div className="mt-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users2 className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">Meet our team</h3>
              </div>
              {/* <a
                href="#team"
                className="hidden md:inline-flex items-center text-sm text-primary hover:underline"
              >
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </a> */}
            </div>

            {/* Mobile: carousel */}
            <div className="md:hidden mt-6">
              <Carousel opts={{ align: "start" }}>
                <CarouselContent>
                  {[
                    {
                      name: "Avery Collins",
                      role: "Founder & CEO",
                      initials: "AC",
                    },
                    {
                      name: "Jordan Lee",
                      role: "Head of Product",
                      initials: "JL",
                    },
                    {
                      name: "Sam Patel",
                      role: "Engineering Lead",
                      initials: "SP",
                    },
                    { name: "Maya Chen", role: "Operations", initials: "MC" },
                  ].map((m) => (
                    <CarouselItem key={m.name} className="basis-full">
                      <Card className="bg-card/40 border-border/60">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage
                                src="/placeholder.svg"
                                alt={m.name}
                              />
                              <AvatarFallback>{m.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium leading-none">
                                {m.name}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {m.role}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Desktop: grid */}
            <div
              id="team"
              className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
            >
              {[
                {
                  name: "Avery Collins",
                  role: "Founder & CEO",
                  initials: "AC",
                },
                { name: "Jordan Lee", role: "Head of Product", initials: "JL" },
                { name: "Sam Patel", role: "Engineering Lead", initials: "SP" },
                { name: "Maya Chen", role: "Operations", initials: "MC" },
              ].map((m) => (
                <Card key={m.name} className="bg-card/40 border-border/60">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt={m.name} />
                        <AvatarFallback>{m.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {m.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {m.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
