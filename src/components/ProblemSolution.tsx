import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Zap } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Scattered tools across different platforms",
    "Manual inventory tracking leading to errors",
    "Poor version control for hardware designs", 
    "Delayed procurement processes",
    "Compliance documentation chaos",
    "Limited team collaboration"
  ];

  const solutions = [
    "Unified platform for all project needs",
    "Automated inventory management",
    "Comprehensive version control system",
    "Streamlined procurement workflows", 
    "Built-in ISO standards compliance",
    "Real-time team collaboration tools"
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 sm:text-5xl">
            The Challenge Hardware Teams Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hardware development is complex enough without fighting your tools. 
            Most teams struggle with fragmented workflows and outdated processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <Card className="bg-card/50 backdrop-blur border-destructive/20 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <h3 className="text-2xl font-bold">Current Problems</h3>
              </div>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Solutions */}
          <Card className="bg-card/50 backdrop-blur border-primary/20 shadow-glow">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <Zap className="h-4 w-4 text-accent absolute -top-1 -right-1" />
                </div>
                <h3 className="text-2xl font-bold">Our Solution</h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground font-medium">{solution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;