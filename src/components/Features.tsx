import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FolderKanban,
  Package,
  GitBranch,
  FileText,
  CreditCard,
  Shield,
  Workflow,
  Users,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FolderKanban,
      title: "Project Management",
      description:
        "Kanban boards, Gantt charts, and milestone tracking designed specifically for hardware development cycles.",
      color: "text-primary",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Real-time component tracking, automated reorder points, and supplier integration for seamless inventory control.",
      color: "text-accent",
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description:
        "Track design revisions, manage CAD files, and maintain complete audit trails for all hardware iterations.",
      color: "text-industry-aerospace",
    },
    {
      icon: FileText,
      title: "Document Storage",
      description:
        "Centralized repository for specifications, test results, compliance documents, and technical drawings.",
      color: "text-industry-pharma",
    },
    {
      icon: Workflow,
      title: "Workflow Tracking",
      description:
        "Automated workflows for design reviews, testing protocols, and approval processes with customizable stages.",
      color: "text-industry-auto",
    },
    {
      icon: CreditCard,
      title: "Cost Tracking",
      description:
        "Monitor project costs, track supplier payments, and generate detailed financial reports for better budget control.",
      color: "text-industry-media",
    },
    {
      icon: Shield,
      title: "ISO Standards Integration",
      description:
        "Built-in compliance templates and automated reporting for ISO 9001, ISO 13485, and other industry standards.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Real-time collaboration tools, comment systems, and notification workflows to keep your team synchronized.",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-8xl px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 sm:text-5xl">
            Everything You Need in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed specifically for hardware development
            teams. Stop juggling multiple platforms and focus on what matters
            most - building great products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`h-12 w-12 rounded-lg bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}
                  >
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
