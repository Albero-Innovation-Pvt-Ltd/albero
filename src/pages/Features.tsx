import React from 'react';
import { Cpu, Shield, Zap, BarChart2, Users, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cpu />,
      title: "AI-Powered Analytics",
      description: "Leverage advanced machine learning algorithms to automatically discover insights in your data."
    },
    {
      icon: <Shield />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security measures to keep your data safe and compliant."
    },
    {
      icon: <Zap />,
      title: "Real-time Processing",
      description: "Process and analyze millions of data points in real-time with our distributed architecture."
    },
    {
      icon: <BarChart2 />,
      title: "Advanced Visualization",
      description: "Create stunning interactive dashboards and reports with our visualization tools."
    },
    {
      icon: <Users />,
      title: "Team Collaboration",
      description: "Work together seamlessly with role-based access control and shared workspaces."
    },
    {
      icon: <Globe />,
      title: "Global Infrastructure",
      description: "Deploy anywhere with our globally distributed infrastructure and edge computing."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white animate-gradient">
            Powerful Features
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to transform your data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;