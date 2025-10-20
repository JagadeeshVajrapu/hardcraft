import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Clock,
  Settings,
} from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      title: "Scattered Tools",
      description: "Different apps for each task",
      icon: Settings,
      color: "text-red-400",
    },
    {
      title: "Version Control Issues",
      description: "Lost files and outdated designs",
      icon: Clock,
      color: "text-yellow-400",
    },
    {
      title: "Compliance Chaos",
      description: "Missing documents and audits",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      title: "Poor Teamwork",
      description: "Slow communication and delays",
      icon: Users,
      color: "text-purple-400",
    },
  ];

  const solutions = [
    {
      title: "One Platform",
      description: "All tools in one place",
      icon: Sparkles,
      color: "text-blue-400",
    },
    {
      title: "Smart Version Control",
      description: "Never lose your work again",
      icon: CheckCircle,
      color: "text-emerald-400",
    },
    {
      title: "Auto Compliance",
      description: "Built-in standards and checks",
      icon: Target,
      color: "text-indigo-400",
    },
    {
      title: "Real-time Collaboration",
      description: "Work together instantly",
      icon: Users,
      color: "text-violet-400",
    },
  ];

  return (
    <section className="py-24 max-w-8xl px-12 mx-auto bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Transformation
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent sm:text-6xl">
            From Chaos to Clarity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hardware teams struggle with scattered tools and messy workflows. We
            fix that.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Problems Section */}
          <div className="space-y-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-4">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span className="text-sm font-semibold text-destructive">
                  Current Challenges
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">The Problems</h3>
              <p className="text-muted-foreground">
                What's slowing down your team
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-destructive/10 hover:border-destructive/30 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-destructive/10 ${problem.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <problem.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-foreground font-semibold text-lg mb-1 group-hover:text-destructive transition-colors duration-300">
                        {problem.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="space-y-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Our Solution
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Solution</h3>
              <p className="text-muted-foreground">How we make it better</p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-primary/10 ${solution.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-foreground font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                        {solution.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
            <ArrowRight className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Ready to get started?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
