import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,182,246,0.15),rgba(0,0,0,0))]" />
          <div ref={parallaxRef} className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px]" />
          </div>
        </div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;