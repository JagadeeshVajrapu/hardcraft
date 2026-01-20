import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Plane, Pill, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Industries = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Pill,
      name: "Meditech",
      description:
        "Accelerate compliant medical device and healthtech development with end-to-end traceability.",
      color: "industry-pharma",
      stats: "200+ meditech teams",
    },
    {
      icon: Plane,
      name: "Drone",
      description:
        "Plan, prototype, and certify UAV systems with robust workflows across hardware and firmware.",
      color: "industry-aerospace",
      stats: "100+ drone programs",
    },
    {
      icon: Car,
      name: "Automotive",
      description:
        "From concept to production, orchestrate complex vehicle programs with precision and quality.",
      color: "industry-auto",
      stats: "500+ automotive teams",
    },
    {
      icon: Video,
      name: "Consumer Electronics",
      description:
        "Ship reliable consumer devices faster with coordinated design, firmware, and manufacturing.",
      color: "industry-media",
      stats: "300+ electronics companies",
    },
  ];

  return (
    <motion.section
      id="industries"
      className="py-24 bg-gradient-secondary"
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
          <h2 className="text-4xl font-bold mb-4 sm:text-5xl">
            Built for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Hardware Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purpose-built workflows to plan, build, and ship reliable products
            faster.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-muted-foreground">
            Don't see your industry?{" "}
            <span
              className="text-primary underline cursor-pointer hover:text-primary-glow"
              onClick={() => navigate("/contact")}
            >
              Contact us
            </span>{" "}
            to learn how we can customize our platform for your specific needs.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Industries;
