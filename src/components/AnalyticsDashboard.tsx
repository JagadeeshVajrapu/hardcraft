import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
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
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2Ff3bd9da3bb752f8333eeaf876de7be74cf670a40-2160x1760.png&w=3840&q=75",
          title: "Data Governance",
          description:
            "Controls and guardrails to keep your data clean, accurate, and organized, anywhere in the world.",
          color: "text-primary",
        },
        {
          icon: Zap,
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2F8d0e5d328fbd0e3b1d81b452e7a4fff7124e0432-2160x1760.png&w=3840&q=75",
          title: "Integrations",
          description:
            "Seamlessly connect with your existing tools and workflows for unified data management.",
          color: "text-accent",
        },
        {
          icon: Shield,
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2F7b8122ed7701613edf61659bb863aafb05877401-2160x1760.png&w=3840&q=75",
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
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2Fc04fd48089f906e5548c815d310072d4364a033f-2160x1760.png&w=3840&q=75",
          title: "Feature Experimentation",
          description:
            "Flag targeted features and put every release to the test to prove your innovations work.",
          color: "text-primary",
        },
        {
          icon: BarChart3,
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2F5da0e9fc5809db535df41c32e3753805a6f000e0-2160x1760.png&w=3840&q=75",
          title: "Web Experimentation",
          description:
            "A/B test your web experiences and optimize conversion rates with data-driven insights.",
          color: "text-accent",
        },
        {
          icon: Users,
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2F0a0b7283dd2211e616920bb1ad7cc1eb25b8ce75-2160x1760.png&w=3840&q=75",
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
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2Fba7b0ea2a35bc8c892b2a81d7f2a71148a535c41-2160x1760.png&w=3840&q=75",
          title: "Product Analytics",
          description:
            "Dig deeper into every click and metric to make smarter decisions with confidence.",
          color: "text-primary",
        },
        {
          icon: Globe,
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2F96ec6dee024625597e5e9713009ab7b1a0d9c78c-2160x1760.png&w=3840&q=75",
          title: "Web Analytics",
          description:
            "Comprehensive web analytics to understand user behavior and optimize your digital presence.",
          color: "text-accent",
        },
        {
          icon: Activity,
          image:
            "https://amplitude.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl5rq9j6r%2Fproduction%2Ff3bd9da3bb752f8333eeaf876de7be74cf670a40-2160x1760.png&w=3840&q=75",
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
    <section className="py-24 bg-gradient-to-br max-w-8xl px-12 mx-auto from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Component Title */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent sm:text-7xl">
            Intelligence Unleashed
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform raw data into strategic advantage with powerful analytics
            that drive smarter decisions and faster innovation.
          </p>
        </div>

        <div className="space-y-32">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                section.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
              }`}
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
                  <p className="text-md text-muted-foreground leading-relaxed">
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
                        className={`bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group ${
                          isExpanded
                            ? "border-primary/50 shadow-lg shadow-primary/10"
                            : ""
                        }`}
                        onClick={() => toggleFeature(section.id, index)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`p-3 rounded-xl bg-primary/10 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                            >
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                                  {feature.title}
                                </h4>
                                <ChevronRight
                                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                                    isExpanded ? "rotate-90" : ""
                                  }`}
                                />
                              </div>

                              {isExpanded && (
                                <div className="mt-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
                                  <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                  </p>
                                  <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
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
              <div
                className={`${
                  section.imagePosition === "left" ? "lg:col-start-1" : ""
                }`}
              >
                <Card className="bg-gradient-to-br from-primary/5 via-card/50 to-accent/5 backdrop-blur-sm border-border/50 shadow-elevated overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={
                          section.features[
                            expandedFeature[section.id] >= 0
                              ? expandedFeature[section.id]
                              : 0
                          ].image
                        }
                        alt={section.title}
                        className="w-full h-full object-cover transition-opacity duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
