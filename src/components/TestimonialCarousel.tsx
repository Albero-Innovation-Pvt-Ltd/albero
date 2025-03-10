import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Alex Chen",
    role: "Founder & CEO",
    company: "TechStart AI",
    content: "This template saved us weeks of development time. The design is stunning and the customization options are endless. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    author: "Sarah Williams",
    role: "Product Manager",
    company: "CloudScale",
    content: "The best Webflow template we've used. Perfect for our SaaS platform and incredibly easy to customize. The support team is amazing too!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    author: "Michael Rodriguez",
    role: "CTO",
    company: "DataFlow",
    content: "Exceptional quality and attention to detail. The template's performance and responsive design exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  }
];

const TestimonialCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="embla__slide px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-white/60">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-saatify-blue text-saatify-blue"
                  />
                ))}
              </div>
              <p className="text-white/80">{testimonial.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;