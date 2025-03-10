import React from 'react';
import {
  ChevronRight,
  Code2,
  Layers,
  Zap,
  Layout,
  ArrowRight,
  CheckCircle2,
  Globe,
  Cpu,
  Shield
} from 'lucide-react';
import Newsletter from '../components/Newsletter';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-blue-400">New</span>
              <span className="text-white/60">The Ultimate Webflow Template</span>
              <ArrowRight className="w-4 h-4 text-white/60" />
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white animate-gradient">
              Build Your SaaS Website
              <br />
              Without Code
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Create stunning, professional websites for your tech startup or enterprise SaaS business with our premium Webflow template.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold flex items-center justify-center gap-2 group transition-all duration-300">
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 rounded-full font-semibold transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "12+", label: "Pre-built Pages" },
              { number: "50+", label: "Custom Components" },
              { number: "100%", label: "No-Code Solution" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Everything you need to build a professional SaaS website without writing code.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "No-Code Building",
                description: "Build your entire website visually with our intuitive Webflow template",
                features: ["Visual editor", "Drag & drop interface", "Real-time preview"]
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Component Library",
                description: "Access a comprehensive library of pre-built components and layouts",
                features: ["50+ components", "Customizable elements", "Responsive design"]
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Page Templates",
                description: "Choose from multiple pre-designed page templates for every need",
                features: ["12+ page templates", "Industry-specific designs", "Custom layouts"]
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/60 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Perfect For Every Industry</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Designed to meet the needs of modern tech businesses across all sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu />,
                title: "AI/ML Platforms",
                description: "Perfect for artificial intelligence and machine learning companies"
              },
              {
                icon: <Zap />,
                title: "SaaS Startups",
                description: "Ideal for software-as-a-service businesses of all sizes"
              },
              {
                icon: <Shield />,
                title: "Enterprise Tech",
                description: "Built for enterprise-grade technology solutions"
              },
              {
                icon: <Globe />,
                title: "Web3/Blockchain",
                description: "Ready for next-generation web technologies"
              }
            ].map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-white/60">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Trusted by Leaders</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              See what others are saying about our Webflow template.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Everything you need to know about our template.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Get notified about template updates and new features.
            </p>
          </div>
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Home;