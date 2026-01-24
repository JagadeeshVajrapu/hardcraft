import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Activity,
  ArrowUp,
  ArrowDown,
  Search,
  Bell,
  Settings,
  HelpCircle,
  Menu,
  FileText,
  Shield,
  Zap,
  Target,
  Workflow,
  CheckCircle,
  Star,
  ChevronRight,
} from "lucide-react";

// Import feature images
import feature1 from "@/assets/featureImages/feature1.png";
import feature2 from "@/assets/featureImages/feature2.png";
import feature3 from "@/assets/featureImages/feature3.png";
import feature4 from "@/assets/featureImages/feature4.png";
import feature5 from "@/assets/featureImages/feature5.png";
import feature6 from "@/assets/featureImages/feature6.png";
import feature7 from "@/assets/featureImages/feature7.png";
import feature8 from "@/assets/featureImages/feature8.png";

const AnalyticsDashboard = () => {
  const [expandedFeature, setExpandedFeature] = useState<{
    [section: number]: number;
  }>({
    1: 0, // First feature expanded by default in section 1
    2: 0, // First feature expanded by default in section 2
    3: 0, // First feature expanded by default in section 3
  });

  const toggleFeature = (section: number, featureIndex: number) => {
    setExpandedFeature((prev) => ({
      ...prev,
      [section]: prev[section] === featureIndex ? -1 : featureIndex,
    }));
  };

  const sections = [
    {
      id: 1,
      title: "More trustworthy data",
      subtitle:
        "Elevate your data and make bolder decisions with the confidence they'll pay off.",
      features: [
        {
          icon: FileText,
          image: feature1,
          title: "Data Governance",
          description:
            "Controls and guardrails to keep your data clean, accurate, and organized, anywhere in the world.",
          color: "text-primary",
        },
        {
          icon: Zap,
          image: feature2,
          title: "Integrations",
          description:
            "Seamlessly connect with your existing tools and workflows for unified data management.",
          color: "text-accent",
        },
        {
          icon: Shield,
          image: feature3,
          title: "Security & Compliance",
          description:
            "Enterprise-grade security with built-in compliance for industry standards and regulations.",
          color: "text-industry-aerospace",
        },
      ],
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Faster action",
      subtitle:
        "Test, personalize, and engage your customers to turn insights into coming back for more.",
      features: [
        {
          icon: Target,
          image: feature4,
          title: "Feature Experimentation",
          description:
            "Flag targeted features and put every release to the test to prove your innovations work.",
          color: "text-primary",
        },
        {
          icon: BarChart3,
          image: feature5,
          title: "Web Experimentation",
          description:
            "A/B test your web experiences and optimize conversion rates with data-driven insights.",
          color: "text-accent",
        },
        {
          icon: Users,
          image: feature6,
          title: "Guides and Surveys",
          description:
            "Collect user feedback and guide users through optimal experiences with interactive surveys.",
          color: "text-industry-pharma",
        },
      ],
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Clearer insights",
      subtitle:
        "Where others guess, get the quantitative and qualitative answers to all your user questions.",
      features: [
        {
          icon: BarChart3,
          image: feature7,
          title: "Product Analytics",
          description:
            "Dig deeper into every click and metric to make smarter decisions with confidence.",
          color: "text-primary",
        },
        {
          icon: Globe,
          image: feature8,
          title: "Web Analytics",
          description:
            "Comprehensive web analytics to understand user behavior and optimize your digital presence.",
          color: "text-accent",
        },
        {
          icon: Activity,
          image: feature8,
          title: "Session Replay",
          description:
            "Watch user sessions to understand exactly how users interact with your product.",
          color: "text-industry-media",
        },
      ],
      imagePosition: "right",
    },
  ];

  return (
    <motion.section
      className="py-24 bg-gradient-to-br max-w-8xl sm:px-12 px-2 mx-auto from-background via-muted/10 to-background relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Component Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent sm:text-7xl">
            Intelligence Unleashed
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Transform raw data into strategic advantage with powerful analytics
            that drive smarter decisions and faster innovation.
          </p>
        </motion.div>

        <div className="space-y-32">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                section.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Content Section */}
              <div
                className={`space-y-8 ${
                  section.imagePosition === "left" ? "lg:col-start-2" : ""
                }`}
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="text-md text-foreground/90 leading-relaxed">
                    {section.subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {section.features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    const isExpanded = expandedFeature[section.id] === index;

                    return (
                      <Card
                        key={index}
                        className={`bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group ${
                          isExpanded
                            ? "border-primary shadow-lg shadow-primary/10"
                            : ""
                        }`}
                        onClick={() => toggleFeature(section.id, index)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className="p-3 rounded-xl bg-primary/20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                            >
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                  {feature.title}
                                </h4>
                                <ChevronRight
                                  className={`h-5 w-5 text-foreground/70 transition-transform duration-300 ${
                                    isExpanded ? "rotate-90" : ""
                                  }`}
                                />
                              </div>

                              {isExpanded && (
                                <div className="mt-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
                                  <p className="text-foreground/90 text-sm leading-relaxed">
                                    {feature.description}
                                  </p>
                                  <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors duration-300"
                                  >
                                    Learn more →
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Image Section */}
              <motion.div
                className={`${
                  section.imagePosition === "left" ? "lg:col-start-1" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Card className="bg-card border-2 border-border shadow-elevated overflow-hidden feature-dashboard-card">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden feature-dashboard-container">
                      <motion.img
                        src={
                          section.features[
                            expandedFeature[section.id] >= 0
                              ? expandedFeature[section.id]
                              : 0
                          ].image
                        }
                        alt={section.title}
                        className="w-full h-full object-cover feature-dashboard-image"
                        initial={{ opacity: 1, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AnalyticsDashboard;
