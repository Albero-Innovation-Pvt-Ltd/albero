import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-white/60 mb-8">
          Get the latest updates about new features and company news.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 focus:border-saatify-blue focus:outline-none transition-colors"
            disabled={status === 'loading' || status === 'success'}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-medium flex items-center gap-2 ${
              status === 'success'
                ? 'bg-green-500'
                : status === 'loading'
                ? 'bg-saatify-blue/50'
                : 'bg-saatify-blue hover:bg-saatify-blue/80'
            } transition-colors`}
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'success' ? (
              'Subscribed!'
            ) : status === 'loading' ? (
              <>
                <span className="animate-spin">
                  <Send className="w-5 h-5" />
                </span>
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Newsletter;