import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const tiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "/month",
    description: "Get started with the basics",
    features: ["Up to 3 projects", "Community support", "Email reports"],
    cta: { label: "Get started", variant: "outline" as const },
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    cadence: "/month",
    description: "Everything you need to scale",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Team collaboration",
    ],
    cta: { label: "Start Pro", variant: "default" as const },
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "Security, SSO, and dedicated support",
    features: [
      "SSO & SAML",
      "Custom SLAs",
      "Dedicated CSM",
      "Onboarding & training",
    ],
    cta: { label: "Contact us", variant: "secondary" as const },
    highlight: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const getDisplayedPrice = (tierName: string, base: string) => {
    if (tierName !== "Pro") return base;
    if (!isYearly) return base;
    const baseMonthly = 29;
    const discountedMonthly = Math.round(baseMonthly * 0.8);
    return `$${discountedMonthly}`;
  };

  return (
    <motion.section
      id="pricing"
      className="w-full py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-8xl sm:px-12 px-2">
        <motion.div
          className="mx-auto mb-8 max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-3">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Choose a plan that fits your team today and scale as you grow.
          </p>
        </motion.div>

        <motion.div
          className="mb-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-sm font-medium text-muted-foreground">
            Monthly
          </span>
          <Switch
            aria-label="Toggle yearly billing"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Yearly</span>
            <Badge className="text-xs" variant="secondary">
              Save 20%
            </Badge>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.highlight ? "border-primary/40 shadow-md" : undefined
              }
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  {tier.highlight && <Badge>Most popular</Badge>}
                </div>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-bold">
                    {getDisplayedPrice(tier.name, tier.price)}
                  </span>
                  {tier.cadence && (
                    <span className="text-muted-foreground">
                      {tier.cadence}
                    </span>
                  )}
                </div>
                {tier.name === "Pro" && isYearly && (
                  <p className="text-xs text-muted-foreground">Billed yearly</p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.cta.variant}>
                  {tier.cta.label}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pricing;
