import React from 'react';

interface ContactProps {
  email: string;
  whatsappLink: string;
  instagramHandle: string;
  twitterHandle: string; // Added Twitter handle prop
}

const Contact: React.FC<ContactProps> = ({ email, whatsappLink, instagramHandle, twitterHandle }) => {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-gray-800">Get In Touch</h2>
        <p className="section-subtitle text-center">
          Have questions or ready to get started? Reach out to us through any of these channels.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-4 flex items-center justify-center rounded-lg bg-[rgba(0,194,199,0.1)]">
                    <svg className="text-[#00c2c7]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <a href={`mailto:${email}`} className="text-gray-600 hover:text-[#00c2c7] transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-4 flex items-center justify-center rounded-lg bg-[rgba(0,194,199,0.1)]">
                    <svg className="text-[#00c2c7]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">WhatsApp</div>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00c2c7] transition-colors">
                      Click to chat
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-4 flex items-center justify-center rounded-lg bg-[rgba(0,194,199,0.1)]">
                    <svg className="text-[#00c2c7]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Instagram</div>
                    <a href={`https://instagram.com/${instagramHandle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00c2c7] transition-colors">
                      {instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-4 flex items-center justify-center rounded-lg bg-[rgba(0,194,199,0.1)]">
                    <svg className="text-[#00c2c7]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">X (Twitter)</div>
                    <a href={`https://twitter.com/${twitterHandle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00c2c7] transition-colors">
                      {twitterHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="form-input" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
