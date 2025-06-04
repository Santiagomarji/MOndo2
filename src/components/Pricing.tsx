import React, { useState } from 'react';
import PurchaseForm from './PurchaseForm';

interface PricingProps {
  // No props needed since whatsappLink is not used
}

const Pricing: React.FC<PricingProps> = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({ name: '', price: '' });

  const handleGetStarted = (packageName: string, packagePrice: string) => {
    setSelectedPackage({ name: packageName, price: packagePrice });
    setShowForm(true);
  };

  return (
    <section id="pricing" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-gray-800">Pricing</h2>
        <p className="section-subtitle text-center">
          Choose the perfect plan for your business needs. All plans include our core
          AI-powered services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Kit */}
          <div className="pricing-card fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-2">Starter Kit</h3>
            <div className="text-3xl font-bold text-[#00c2c7] mb-4">$799</div>
            <p className="text-gray-600 mb-6">One-time setup for new brands</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Brand identity setup</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Social media profiles</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Initial content batch</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Basic automation</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleGetStarted('Starter Kit', '$799')}
              className="btn-primary w-full"
            >
              Get Started
            </button>
          </div>
          
          {/* Monthly Plan */}
          <div className="pricing-card fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-2">Monthly Plan</h3>
            <div className="text-3xl font-bold text-[#00c2c7] mb-4">$499/mo</div>
            <p className="text-gray-600 mb-6">Ongoing content and management</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Daily social posts</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Content calendar</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Performance analytics</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Monthly strategy call</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleGetStarted('Monthly Plan', '$499/mo')}
              className="btn-primary w-full"
            >
              Get Started
            </button>
          </div>
          
          {/* AI & Automation */}
          <div className="pricing-card fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-2">AI & Automation</h3>
            <div className="text-3xl font-bold text-[#00c2c7] mb-4">$899 setup + $199/mo</div>
            <p className="text-gray-600 mb-6">Advanced AI solutions</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Custom chatbot development</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>AI content generation</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Workflow automation</span>
              </li>
              <li className="flex items-start">
                <svg className="text-[#00c2c7] mt-1 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>24/7 support system</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleGetStarted('AI & Automation', '$899 setup + $199/mo')}
              className="btn-primary w-full"
            >
              Get Started
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom solution? <a href="#contact" className="text-[#00c2c7] hover:underline">Contact us</a> for personalized pricing.
          </p>
        </div>
      </div>
      
      {showForm && (
        <PurchaseForm 
          packageName={selectedPackage.name} 
          packagePrice={selectedPackage.price} 
          onClose={() => setShowForm(false)} 
        />
      )}
    </section>
  );
};

export default Pricing;
