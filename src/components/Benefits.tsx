import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, Users, Zap, ArrowRight } from "lucide-react";
import WaitlistDialog from "@/components/WaitlistDialog";
import { useNavigate } from "react-router-dom";

const Benefits = () => {
  const navigate = useNavigate();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      value: "40%",
      description: "Faster project completion",
      detail:
        "Streamlined workflows and automation eliminate repetitive tasks, allowing your team to focus on innovation.",
    },
    {
      icon: TrendingDown,
      title: "Reduce Errors",
      value: "85%",
      description: "Fewer costly mistakes",
      detail:
        "Automated checks and validation prevent errors before they become expensive problems in production.",
    },
    {
      icon: Users,
      title: "Improve Collaboration",
      value: "3x",
      description: "Better team coordination",
      detail:
        "Real-time updates and centralized communication keep everyone aligned and productive.",
    },
    {
      icon: Zap,
      title: "Ensure Compliance",
      value: "100%",
      description: "Standards adherence",
      detail:
        "Built-in templates and automated reporting ensure you never miss compliance requirements.",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-24 relative z-30 bg-background min-h-screen"
    >
      <div className="container mx-auto max-w-8xl sm:px-12 px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 sm:text-5xl">
            Measurable{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Our customers see real, measurable
            improvements in their hardware development processes from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>

                    <div className="space-y-2">
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {benefit.value}
                      </div>
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-primary font-medium">
                        {benefit.description}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary/10 border-primary/20 shadow-glow">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">
                Ready to Transform Your Hardware Development Process?
              </h3>
              <p className="text-xl text-muted-foreground">
                Join thousands of hardware teams who have already streamlined
                their workflows and accelerated their time to market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                  onClick={() => setIsWaitlistOpen(true)}
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  onClick={() => navigate("/contact")}
                >
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Early adopters get{" "}
                <span className="font-bold text-primary">
                  6 months free access
                </span>{" "}
                — limited spots. Join the waitlist now.
              </p>
            </div>
          </CardContent>
        </Card>
        {/* Waitlist Dialog */}
        <WaitlistDialog
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
        />
      </div>
    </section>
  );
};

export default Benefits;
