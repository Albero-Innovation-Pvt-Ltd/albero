import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "24/7 support",
        "API access"
      ]
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing businesses and teams",
      features: [
        "Up to 20 team members",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Advanced security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics",
        "Dedicated support",
        "API access",
        "Custom integrations",
        "Advanced security",
        "Custom deployment"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white animate-gradient">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                plan.popular
                  ? 'bg-blue-500/10 border-blue-500/50 hover:border-blue-400'
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-2xl font-bold mb-2">{plan.name}</div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-white/60 ml-2">/month</span>}
              </div>
              <p className="text-white/60 mb-6">{plan.description}</p>
              <button
                className={`w-full py-3 px-6 rounded-full font-medium mb-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;