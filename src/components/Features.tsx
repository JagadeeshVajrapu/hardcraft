import { motion } from "framer-motion";
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
      iconColor: "text-white",
      bgGradient: "from-white/10 to-white/0",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Real-time component tracking, automated reorder points, and supplier integration for seamless inventory control.",
      iconColor: "text-white",
      bgGradient: "from-slate-200/15 to-slate-50/0",
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description:
        "Track design revisions, manage CAD files, and maintain complete audit trails for all hardware iterations.",
      iconColor: "text-white",
      bgGradient: "from-gray-200/20 to-gray-50/0",
    },
    {
      icon: FileText,
      title: "Document Storage",
      description:
        "Centralized repository for specifications, test results, compliance documents, and technical drawings.",
      iconColor: "text-white",
      bgGradient: "from-zinc-100/20 to-zinc-50/0",
    },
    {
      icon: Workflow,
      title: "Workflow Tracking",
      description:
        "Automated workflows for design reviews, testing protocols, and approval processes with customizable stages.",
      iconColor: "text-white",
      bgGradient: "from-slate-100/20 to-slate-50/0",
    },
    {
      icon: CreditCard,
      title: "Cost Tracking",
      description:
        "Monitor project costs, track supplier payments, and generate detailed financial reports for better budget control.",
      iconColor: "text-white",
      bgGradient: "from-gray-100/20 to-gray-50/0",
    },
    {
      icon: Shield,
      title: "ISO Standards Integration",
      description:
        "Built-in compliance templates and automated reporting for ISO 9001, ISO 13485, and other industry standards.",
      iconColor: "text-white",
      bgGradient: "from-white/10 to-white/0",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Real-time collaboration tools, comment systems, and notification workflows to keep your team synchronized.",
      iconColor: "text-white",
      bgGradient: "from-slate-200/15 to-slate-50/0",
    },
  ];

  return (
    <motion.section
      id="features"
      className="py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-8xl sm:px-12 px-2">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4 sm:text-5xl text-center">
            Everything You Need in{" "}
            <span className="text-primary">One Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Comprehensive tools designed specifically for hardware development
            teams. Stop juggling multiple platforms and focus on what matters
            most - building great products.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div
                    className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:shadow-glow group-hover:bg-white/15 transition-all duration-300"
                  >
                    <IconComponent className="h-6 w-6 text-white" />
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
