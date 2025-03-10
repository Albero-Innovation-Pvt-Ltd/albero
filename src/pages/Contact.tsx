import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["alberoinnovation@gmail.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9305823309"],
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Innovation Drive", "San Francisco, CA 94107"],
      description: "Come visit us"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white animate-gradient">
            Get in Touch
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have questions about our template? We're here to help you create the perfect website for your business.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-white/80">{detail}</p>
              ))}
              <p className="text-sm text-white/60 mt-2">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;