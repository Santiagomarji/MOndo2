import React, { useState } from 'react';

interface PurchaseFormProps {
  packageName: string;
  packagePrice: string;
  onClose: () => void;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ packageName, packagePrice, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where you would typically send the form data to a server
    console.log('Form submitted:', { ...formData, packageName, packagePrice });
    alert('Thank you for your interest! We will contact you shortly.');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Get Started with {packageName}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <p className="mb-6 text-gray-600">
          Complete the form below to get started with our {packageName} package at {packagePrice}.
          Our team will contact you shortly to discuss the next steps.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input" 
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input" 
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input" 
              placeholder="Your phone number"
              required
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block mb-1 text-sm font-medium text-gray-700">Company Name</label>
            <input 
              type="text" 
              id="company" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input" 
              placeholder="Your company"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message (Optional)</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4} 
              className="form-input" 
              placeholder="Any specific requirements or questions?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary w-full"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;
