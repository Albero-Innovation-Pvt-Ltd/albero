import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What's included in the template?",
    answer: "Our template includes 12+ pre-designed pages, 50+ custom components, responsive layouts for all devices, custom animations and interactions, and comprehensive documentation for easy setup."
  },
  {
    question: "Do I need coding knowledge to use this template?",
    answer: "No coding knowledge is required! Our template is built with Webflow's visual editor, allowing you to customize everything through an intuitive interface."
  },
  {
    question: "Can I customize the design?",
    answer: "Yes! Every aspect of the template can be customized including colors, typography, layouts, and components using Webflow's visual editor."
  },
  {
    question: "Is the template responsive?",
    answer: "Absolutely! The template is fully responsive and optimized for desktop, tablet, and mobile devices, ensuring a great experience across all screen sizes."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive documentation, video tutorials, and dedicated email support to help you make the most of your template."
  },
  {
    question: "Can I use this for client projects?",
    answer: "Yes! Our template is perfect for client projects. You can use it for unlimited websites, both personal and commercial."
  }
];

const FAQ = () => {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="space-y-4 max-w-3xl mx-auto"
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Accordion.Item
            value={`item-${index}`}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
          >
            <Accordion.Trigger className="accordion-trigger w-full px-6 py-4 flex justify-between items-center">
              <span className="text-lg font-medium">{faq.question}</span>
              <ChevronDown className="w-5 h-5 transform transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content px-6 pb-4">
              <p className="text-white/60">{faq.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        </motion.div>
      ))}
    </Accordion.Root>
  );
};

export default FAQ;