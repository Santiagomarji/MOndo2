import React from 'react';

interface HeroProps {
  whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ whatsappLink }) => {
  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="floating-dots top-right"></div>
          
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 fade-in">
              You Do Your Thing. <br />
              <span className="gradient-text">We'll Handle the Rest.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-600 fade-in" style={{ animationDelay: '0.2s' }}>
              AI-powered content, social media, and automation for fast-growing brands.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Let's Talk
              </a>
              
              <a 
                href="#services" 
                className="btn-secondary"
              >
                Explore Services
              </a>
            </div>
          </div>
          
          {/* Manus AI-inspired floating elements */}
          <div className="mt-20 md:mt-32 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="manus-card fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Always available to answer questions and provide assistance.</p>
              </div>
              
              <div className="manus-card fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Your data is protected with enterprise-grade security.</p>
              </div>
              
              <div className="manus-card fade-in" style={{ animationDelay: '1s' }}>
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Focused</h3>
                <p className="text-gray-600">Optimized for results that drive business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
