import React from 'react';

interface FooterProps {
  instagramHandle: string;
  twitterHandle: string; // Added Twitter handle prop
}

const Footer: React.FC<FooterProps> = ({ instagramHandle, twitterHandle }) => {
  return (
    <footer className="bg-[#f8fafc] py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-3">
              <span className="text-gray-800">Mondo</span>
              <span className="accent-text">AI</span>
            </div>
            <p className="text-gray-600">You do your thing. We'll handle the rest.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href={`https://instagram.com/${instagramHandle.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#00c2c7] transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              <a 
                href={`https://twitter.com/${twitterHandle.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#00c2c7] transition-colors"
                aria-label="Twitter/X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            <p className="text-gray-600">© {new Date().getFullYear()} Mondo AI Media Labs</p>
          </div>
        </div>
        
        {/* Added navigation links for better site structure */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#hero" className="text-gray-600 hover:text-[#00c2c7] transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-[#00c2c7] transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-[#00c2c7] transition-colors">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-[#00c2c7] transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-[#00c2c7] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
