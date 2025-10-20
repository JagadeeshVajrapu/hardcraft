import { Card, CardContent } from "@/components/ui/card";
import { Car, Plane, Pill, Video } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Car,
      name: "Automotive",
      description:
        "From concept cars to production vehicles, manage complex automotive development with precision.",
      color: "industry-auto",
      stats: "500+ automotive teams",
    },
    {
      icon: Plane,
      name: "Aerospace",
      description:
        "Navigate strict regulations and complex supply chains in aerospace and defense projects.",
      color: "industry-aerospace",
      stats: "50+ aerospace companies",
    },
    {
      icon: Pill,
      name: "Pharmaceuticals",
      description:
        "Maintain compliance and track medical device development with rigorous documentation.",
      color: "industry-pharma",
      stats: "200+ pharma teams",
    },
    {
      icon: Video,
      name: "Media & Technology",
      description:
        "Rapid prototyping and iteration for consumer electronics and media hardware products.",
      color: "industry-media",
      stats: "300+ tech companies",
    },
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto max-w-8xl px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 sm:text-5xl">
            Built for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're building cars, spacecraft, medical devices, or
            consumer electronics, our platform adapts to your industry's unique
            requirements and standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur border-border/30 shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105 group relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${industry.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-8 relative z-10">
                  <div className="text-center space-y-6">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-${industry.color}/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`h-8 w-8 text-${industry.color}`}
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {industry.description}
                      </p>
                      <div
                        className={`inline-block px-3 py-1 rounded-full bg-${industry.color}/10 border border-${industry.color}/20`}
                      >
                        <span
                          className={`text-sm font-medium text-${industry.color}`}
                        >
                          {industry.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don't see your industry?{" "}
            <span className="text-primary underline cursor-pointer hover:text-primary-glow">
              Contact us
            </span>{" "}
            to learn how we can customize our platform for your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
