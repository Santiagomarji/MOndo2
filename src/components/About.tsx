import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="section alternate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-gray-800">About Us</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Mondo AI Media Labs is a global creative studio helping brands scale through 
            AI-powered content, chatbots, and social automation. We manage your digital 
            presence so you can focus on growth.
          </p>
          
          {/* Added feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4dfcff] to-[#00c2c7] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Leveraging cutting-edge AI to deliver exceptional results</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4dfcff] to-[#00c2c7] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-600">Focused on delivering measurable growth for your business</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4dfcff] to-[#00c2c7] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Human Touch</h3>
              <p className="text-gray-600">AI-generated content refined by expert human creators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
