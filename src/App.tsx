import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  // Constants for the website - EASY TO MODIFY
  const whatsappLink = "https://wa.me/19093315093"; // Updated WhatsApp number
  const email = "info@mondoaimedia.com"; // Change this to your email
  const instagramHandle = "@mondoaimedia"; // Updated Instagram handle
  const twitterHandle = "@mondoaimedia"; // Added Twitter/X handle
  
  // Animation effect for elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero whatsappLink={whatsappLink} />
      <About />
      <Services />
      <Pricing />
      <Contact 
        email={email} 
        whatsappLink={whatsappLink} 
        instagramHandle={instagramHandle}
        twitterHandle={twitterHandle}
      />
      <Footer 
        instagramHandle={instagramHandle}
        twitterHandle={twitterHandle}
      />
      <WhatsAppFloat whatsappLink={whatsappLink} />
    </div>
  );
}

export default App;
