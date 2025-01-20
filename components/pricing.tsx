"use client";

import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Pricing - Century School Management",
  description: "Simple and transparent pricing for schools of all sizes",
};

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "For small schools just getting started",
      price: 0,
      features: [
        "Up to 50 students",
        "Basic attendance tracking",
        "Simple grade book",
        "Parent communication portal",
        "Email support",
      ],
      cta: "Get Started",
      ctaVariant: "outline" as const,
    },
    {
      name: "Standard",
      description: "Perfect for growing schools",
      price: isAnnual ? 2000 : 200,
      features: [
        "Up to 250 students",
        "Advanced attendance tracking",
        "Complete grade management",
        "Parent & teacher communication",
        "Basic reporting",
        "Student performance analytics",
        "Priority email support",
      ],
      cta: "Start Free Trial",
      ctaVariant: "default" as const,
      popular: true,
    },
    {
      name: "Premium",
      description: "For large schools with advanced needs",
      price: isAnnual ? 400 : 20,
      features: [
        "Unlimited students",
        "All Standard features",
        "Advanced reporting",
        "Custom integrations",
        "API access",
        "Dedicated account manager",
        "24/7 phone & email support",
        "Access to Premium School Directory Features"
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const,
    },
  ];

  return (
    <section className="container mx-auto py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-rethink)]">
          Simple, transparent pricing for schools of all sizes
        </h1>
        <p className="text-lg text-muted-foreground mb-8 font-[family-name:var(--font-rethink)]">
          Choose the perfect plan for your school's needs, with no hidden fees
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Label htmlFor="billing-toggle" className="text-sm font-[family-name:var(--font-rethink)]">
            Monthly billing
          </Label>
          <Switch
            id="billing-toggle"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <div className="flex items-center gap-1.5">
            <Label htmlFor="billing-toggle" className="text-sm font-[family-name:var(--font-rethink)]">
              Annual billing
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  Save up to 17% with annual billing
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? "border-primary" : ""}
          >
            <CardHeader>
              {plan.popular && (
                <div className="px-3 py-1 text-sm text-white font-[family-name:var(--font-rethink)] dark:text-black bg-primary w-fit rounded-full mb-2">
                  Most Popular
                </div>
              )}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold font-[family-name:var(--font-rethink)]">ZMW {plan.price}</span>
                {plan.price > 0 && (
                  <span className="text-muted-foreground font-[family-name:var(--font-rethink)]">
                    / {isAnnual ? "billed annually" : "month"}
                  </span>
                )}
              </div>
              {isAnnual && plan.price > 0 && (
                <div className="text-sm text-green-600 font-[family-name:var(--font-rethink)]">
                  Save up to 17% with annual billing
                </div>
              )}
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 font-[family-name:var(--font-rethink)]">
                    <Check className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-[family-name:var(--font-rethink)]" variant={plan.ctaVariant}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-8 font-[family-name:var(--font-rethink)]">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2 font-[family-name:var(--font-rethink)]">Can I switch plans later?</h3>
            <p className="text-muted-foreground font-[family-name:var(--font-rethink)]">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              will be reflected in your next billing cycle.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 font-[family-name:var(--font-rethink)]">
              What happens if we exceed our student limit?
            </h3>
            <p className="text-muted-foreground font-[family-name:var(--font-rethink)]">
              We'll notify you when you're approaching your limit. You can then
              choose to upgrade to the next tier or contact us for a custom
              solution.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 font-[family-name:var(--font-rethink)]">Do you offer a free trial?</h3>
            <p className="text-muted-foreground">
              Yes, we offer a 30-day free trial for our Standard plan. You can
              explore all features without any commitment.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 font-[family-name:var(--font-rethink)]">
              Do you offer educational discounts?
            </h3>
            <p className="text-muted-foreground font-[family-name:var(--font-rethink)]">
              Yes, we offer special pricing for public schools and non-profit
              educational institutions. Contact our sales team to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
