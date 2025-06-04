# MondoAI Website Runbook

This comprehensive runbook will help you maintain, modify, and extend your MondoAI website. Whether you need to make simple text changes, adjust designs, add new functionality, or create new product pages, this guide has you covered.

## Table of Contents
1. [Website Overview](#website-overview)
2. [Basic Modifications](#basic-modifications)
   - [Changing Text Content](#changing-text-content)
   - [Updating Images](#updating-images)
   - [Modifying Links and Buttons](#modifying-links-and-buttons)
3. [Design Customization](#design-customization)
   - [Changing Colors and Themes](#changing-colors-and-themes)
   - [Typography Modifications](#typography-modifications)
   - [Layout Adjustments](#layout-adjustments)
   - [Responsive Design Tweaks](#responsive-design-tweaks)
4. [Adding New Functionality](#adding-new-functionality)
   - [Creating New Components](#creating-new-components)
   - [Adding Interactive Elements](#adding-interactive-elements)
   - [Implementing New Features](#implementing-new-features)
   - [Integrating Third-Party Services](#integrating-third-party-services)
5. [Adding New Products](#adding-new-products)
   - [Extending the Pricing Section](#extending-the-pricing-section)
   - [Creating Product Detail Pages](#creating-product-detail-pages)
   - [Setting Up Product Galleries](#setting-up-product-galleries)
6. [Form Customization](#form-customization)
   - [Modifying Form Fields](#modifying-form-fields)
   - [Changing Form Submission Behavior](#changing-form-submission-behavior)
   - [Adding Form Validation](#adding-form-validation)
7. [Deployment and Maintenance](#deployment-and-maintenance)
   - [GitHub Integration](#github-integration)
   - [Netlify Deployment](#netlify-deployment)
   - [Domain Management](#domain-management)
   - [Performance Optimization](#performance-optimization)
8. [Troubleshooting](#troubleshooting)
   - [Common Issues](#common-issues)
   - [Build Errors](#build-errors)
   - [Getting Help](#getting-help)

## Website Overview

The MondoAI website is built with React and uses modern web technologies to create a responsive, interactive user experience. The site is structured as a single-page application with multiple sections, including:

- Hero section with main call-to-action
- About Us section describing the company
- Services section showcasing offerings
- Pricing section with interactive purchase forms
- Contact section with social media links
- Footer with additional information

The website uses a component-based architecture, making it easy to modify individual sections without affecting others.

### File Structure

```
mondoai-github/
├── dist/                 # Built files ready for deployment
├── src/
│   ├── assets/           # Images and other static assets
│   │   └── mondoai-logo.png  # Your logo
│   ├── components/       # Individual website sections
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Hero.tsx      # Hero section
│   │   ├── About.tsx     # About section
│   │   ├── Services.tsx  # Services section
│   │   ├── Pricing.tsx   # Pricing section with purchase form
│   │   ├── Contact.tsx   # Contact section
│   │   ├── Footer.tsx    # Footer section
│   │   ├── PurchaseForm.tsx  # Purchase form component
│   │   └── WhatsAppFloat.tsx # Floating WhatsApp button
│   ├── App.tsx           # Main application file with global settings
│   └── index.css         # Global styles
```

## Basic Modifications

### Changing Text Content

To modify text content, locate the appropriate component file in the `src/components/` directory and edit the text between the JSX tags.

**Example: Changing Hero Text**

1. Open `src/components/Hero.tsx`
2. Find the headline text:
   ```jsx
   <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 fade-in">
     You Do Your Thing. <br />
     <span className="gradient-text">We'll Handle the Rest.</span>
   </h1>
   ```
3. Edit the text between the tags to your desired content
4. Save the file

**Example: Changing Global Information**

For information used across multiple components (like contact details), edit the `App.tsx` file:

```jsx
// Constants for the website - EASY TO MODIFY
const whatsappLink = "https://wa.me/19093315093"; // Change this to your WhatsApp number
const email = "info@mondoaimedia.com"; // Change this to your email
const instagramHandle = "@mondoaimedia"; // Change this to your Instagram handle
const twitterHandle = "@mondoaimedia"; // Change this to your Twitter/X handle
```

### Updating Images

To replace images on the website:

1. Prepare your new image (recommended formats: PNG or WebP for best quality)
2. Place the image in the `src/assets/` directory
3. Import and use the image in the relevant component:

```jsx
import newImage from '../assets/new-image.png';

// Then in your component:
<img src={newImage} alt="Description" className="your-image-class" />
```

**Example: Changing the Logo**

1. Prepare your new logo (ideally with transparent background)
2. Save it as `mondoai-logo.png` and replace the existing file in `src/assets/`
3. If you're using a different filename, update the import in `Navbar.tsx`:
   ```jsx
   import logo from '../assets/your-new-logo.png';
   ```

### Modifying Links and Buttons

**Changing Navigation Links**

1. Open `src/components/Navbar.tsx`
2. Find the navigation links section:
   ```jsx
   <a href="#about" className="nav-link">About</a>
   <a href="#services" className="nav-link">Services</a>
   <a href="#pricing" className="nav-link">Pricing</a>
   <a href="#contact" className="nav-link">Contact</a>
   ```
3. Change the `href` attribute to point to your desired section or page
4. Change the link text as needed

**Modifying Button Actions**

To change what happens when a button is clicked:

1. Find the button in the relevant component file
2. Update its `href` attribute or `onClick` handler:

```jsx
// Example: Changing a button to open an email client
<a 
  href={`mailto:${email}`} 
  className="btn-primary"
>
  Email Us
</a>

// Example: Adding an onClick handler
<button 
  className="btn-primary"
  onClick={() => {
    // Your custom action here
    console.log('Button clicked');
    window.open('https://your-link.com', '_blank');
  }}
>
  Custom Action
</button>
```

## Design Customization

### Changing Colors and Themes

The website uses CSS variables for consistent theming. To change the color scheme:

1. Open `src/index.css`
2. Find the root variables section:
   ```css
   :root {
     --background: #ffffff;
     --secondary-bg: #f8fafc;
     --accent: #4dfcff;
     --accent-dark: #00c2c7;
     --text: #1a202c;
     --text-light: #4a5568;
     --border-radius: 12px;
     --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
   }
   ```
3. Modify these values to change colors throughout the site

**Example: Creating a Dark Theme**

```css
:root {
  --background: #121212;
  --secondary-bg: #1e1e1e;
  --accent: #4dfcff;
  --accent-dark: #00c2c7;
  --text: #ffffff;
  --text-light: #cccccc;
  --border-radius: 12px;
  --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}
```

**Example: Changing Accent Color**

To change the accent color (currently electric blue):

```css
:root {
  --accent: #ff4d8c; /* New pink accent */
  --accent-dark: #c70050; /* Darker version for hover states */
}
```

### Typography Modifications

To change fonts:

1. Update the Google Fonts import at the top of `index.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
   ```

2. Change the font-family in the body selector:
   ```css
   body {
     font-family: 'Montserrat', sans-serif;
     /* other styles */
   }
   ```

3. You can also set different fonts for headings:
   ```css
   h1, h2, h3, h4, h5, h6 {
     font-family: 'Roboto', sans-serif;
   }
   ```

### Layout Adjustments

To modify the layout of a section:

1. Open the component file for the section you want to modify
2. Adjust the container classes and structure:

**Example: Changing from Two Columns to Three Columns**

```jsx
// Original two-column layout
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="col-span-1">Column 1</div>
  <div className="col-span-1">Column 2</div>
</div>

// Modified three-column layout
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="col-span-1">Column 1</div>
  <div className="col-span-1">Column 2</div>
  <div className="col-span-1">Column 3</div>
</div>
```

**Example: Adjusting Spacing**

To change the spacing between sections:

```css
/* In index.css */
.section {
  padding: 6rem 0; /* Increase from default 4rem */
}

/* Or in the component itself */
<section id="about" className="py-24"> {/* Increased padding */}
  {/* content */}
</section>
```

### Responsive Design Tweaks

The website is already responsive, but you may want to make adjustments for specific screen sizes:

1. Use Tailwind's responsive prefixes to apply styles at different breakpoints:
   - `sm:` - Small screens (640px and up)
   - `md:` - Medium screens (768px and up)
   - `lg:` - Large screens (1024px and up)
   - `xl:` - Extra large screens (1280px and up)

**Example: Adjusting Font Size on Different Screens**

```jsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

**Example: Changing Layout on Mobile**

```jsx
<div className="flex flex-col md:flex-row"> {/* Stack on mobile, side-by-side on tablets and up */}
  <div className="w-full md:w-1/2">Left content</div>
  <div className="w-full md:w-1/2">Right content</div>
</div>
```

## Adding New Functionality

### Creating New Components

To add new functionality, you'll often need to create new components:

1. Create a new file in `src/components/`, e.g., `Testimonials.tsx`
2. Set up the basic component structure:

```jsx
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-secondary-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Client Testimonials</h2>
        <p className="section-subtitle text-center mb-12">
          See what our clients have to say about our services
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial cards go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">"MondoAI transformed our social media presence. Highly recommended!"</p>
            <p className="font-bold">- Jane Smith, CEO of Example Co.</p>
          </div>
          
          {/* Add more testimonial cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
```

3. Import and add the new component to `App.tsx`:

```jsx
import Testimonials from './components/Testimonials';

// Then add it to the return statement
return (
  <div className="App">
    <Navbar />
    <Hero whatsappLink={whatsappLink} />
    <About />
    <Services />
    <Testimonials /> {/* Add your new component here */}
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
```

4. Add a navigation link in `Navbar.tsx`:
```jsx
<a href="#testimonials" className="nav-link">Testimonials</a>
```

### Adding Interactive Elements

You can enhance your website with interactive elements like sliders, accordions, or tabs:

**Example: Adding an Image Slider**

1. Install a slider library:
```bash
pnpm add react-slick slick-carousel
```

2. Import the styles in `App.tsx`:
```jsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
```

3. Create a slider component:
```jsx
import React from 'react';
import Slider from 'react-slick';

const ProjectSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Projects</h2>
        
        <Slider {...settings}>
          <div>
            <img src="/src/assets/project1.jpg" alt="Project 1" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-center">Project 1</h3>
          </div>
          <div>
            <img src="/src/assets/project2.jpg" alt="Project 2" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-center">Project 2</h3>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectSlider;
```

**Example: Adding an Accordion**

```jsx
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "What services does MondoAI offer?",
      answer: "MondoAI offers social media management, AI-powered content creation, custom chatbots, and launch starter kits for businesses."
    },
    {
      question: "How much does your service cost?",
      answer: "We offer various pricing tiers starting from $499/month. Check our pricing section for more details."
    },
    // Add more FAQ items
  ];
  
  return (
    <section id="faq" className="section bg-secondary-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium">{item.question}</span>
                <span>{openItem === index ? '−' : '+'}</span>
              </button>
              
              {openItem === index && (
                <div className="p-4 bg-white border-t">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
```

### Implementing New Features

**Example: Adding a Blog Section**

1. Create a new component `Blog.tsx`:

```jsx
import React from 'react';

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Social Media Management",
    excerpt: "Discover how artificial intelligence is revolutionizing the way brands manage their social media presence.",
    date: "June 1, 2025",
    image: "/src/assets/blog1.jpg",
    slug: "ai-transforming-social-media"
  },
  {
    id: 2,
    title: "5 Content Creation Tips for 2025",
    excerpt: "Stay ahead of the curve with these content creation strategies that will dominate in 2025.",
    date: "May 15, 2025",
    image: "/src/assets/blog2.jpg",
    slug: "content-creation-tips-2025"
  },
  // Add more blog posts
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Blog</h2>
        <p className="section-subtitle text-center mb-12">
          Insights and tips from our team of experts
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.slug}`} 
                  className="text-accent-dark font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/blog" className="btn-secondary">View All Posts</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
```

2. For a full blog implementation, you would need to:
   - Create individual blog post pages
   - Set up routing (using React Router)
   - Consider using a headless CMS like Contentful or Sanity for content management

**Example: Adding a Newsletter Subscription**

```jsx
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Subscribing email:', email);
    // For demo purposes, we'll just show a success message
    setSubscribed(true);
    setEmail('');
  };
  
  return (
    <section className="bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-white opacity-90 mb-8">
            Subscribe to our newsletter for the latest updates, tips, and special offers.
          </p>
          
          {subscribed ? (
            <div className="bg-white p-6 rounded-lg">
              <p className="text-accent-dark font-medium">
                Thank you for subscribing! Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-dark"
              />
              <button 
                type="submit" 
                className="bg-white text-accent-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
```

### Integrating Third-Party Services

**Example: Adding Google Analytics**

1. Install the React GA package:
```bash
pnpm add react-ga4
```

2. Initialize in `App.tsx`:
```jsx
import ReactGA from 'react-ga4';

// Initialize at the top of your App component
React.useEffect(() => {
  ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your tracking ID
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}, []);
```

**Example: Adding a Chat Widget**

For services like Intercom, Drift, or Crisp:

1. Add the script to `index.html`:
```html
<!-- In public/index.html -->
<script>
  window.intercomSettings = {
    app_id: "YOUR_APP_ID"
  };
</script>
<script>
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/YOUR_APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>
```

## Adding New Products

### Extending the Pricing Section

To add a new pricing tier:

1. Open `src/components/Pricing.tsx`
2. Find the pricing tiers array or JSX structure
3. Add a new pricing tier with the same structure:

```jsx
// Example: Adding a fourth pricing tier
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Existing pricing tiers */}
  
  {/* New pricing tier */}
  <div className="pricing-card">
    <h3 className="text-2xl font-bold mb-2">Enterprise Plan</h3>
    <p className="text-accent-dark font-bold text-3xl mb-4">$1499<span className="text-sm text-gray-600">/mo</span></p>
    
    <ul className="mb-8">
      <li className="mb-2 flex items-center">
        <CheckIcon className="mr-2 text-accent-dark" />
        All features from AI & Automation
      </li>
      <li className="mb-2 flex items-center">
        <CheckIcon className="mr-2 text-accent-dark" />
        Dedicated account manager
      </li>
      <li className="mb-2 flex items-center">
        <CheckIcon className="mr-2 text-accent-dark" />
        Priority support
      </li>
      <li className="mb-2 flex items-center">
        <CheckIcon className="mr-2 text-accent-dark" />
        Custom AI model training
      </li>
      <li className="mb-2 flex items-center">
        <CheckIcon className="mr-2 text-accent-dark" />
        Quarterly strategy sessions
      </li>
    </ul>
    
    <button 
      onClick={() => openPurchaseForm('Enterprise Plan', '$1499/mo')}
      className="btn-primary w-full"
    >
      Get Started
    </button>
  </div>
</div>
```

### Creating Product Detail Pages

For more complex products, you might want dedicated product pages:

1. Create a new component for each product, e.g., `ProductAIAutomation.tsx`:

```jsx
import React from 'react';

const ProductAIAutomation: React.FC = () => {
  return (
    <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
      <section className="bg-gradient-to-b from-accent/10 to-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            AI & Automation
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Our most comprehensive solution for businesses looking to leverage AI for content creation and social media management.
          </p>
          
          <div className="flex justify-center">
            <a href="#pricing" className="btn-primary mr-4">Get Started</a>
            <a href="#features" className="btn-secondary">See Features</a>
          </div>
        </div>
      </section>
      
      <section id="features" className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="feature-card">
              <div className="feature-icon">
                {/* Icon here */}
              </div>
              <h3 className="text-xl font-bold mb-2">AI Content Generation</h3>
              <p>
                Our advanced AI creates engaging content tailored to your brand voice and audience preferences.
              </p>
            </div>
            
            {/* Add more feature cards */}
          </div>
        </div>
      </section>
      
      {/* Add more sections as needed */}
      
      <section id="pricing" className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Pricing</h2>
          
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-12">
            <h3 className="text-2xl font-bold mb-2">AI & Automation</h3>
            <p className="text-accent-dark font-bold text-3xl mb-4">
              $899 <span className="text-sm text-gray-600">setup</span> + 
              $199 <span className="text-sm text-gray-600">/mo</span>
            </p>
            
            <ul className="mb-8">
              {/* List features */}
            </ul>
            
            <button className="btn-primary w-full">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductAIAutomation;
```

2. Set up routing to these pages (requires React Router):

```bash
pnpm add react-router-dom
```

3. Update `App.tsx` to include routing:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Move your current App content to a Home component
import ProductAIAutomation from './components/ProductAIAutomation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  // Your constants
  const whatsappLink = "https://wa.me/19093315093";
  const email = "info@mondoaimedia.com";
  const instagramHandle = "@mondoaimedia";
  const twitterHandle = "@mondoaimedia";
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <Home 
              whatsappLink={whatsappLink}
              email={email}
              instagramHandle={instagramHandle}
              twitterHandle={twitterHandle}
            />
          } />
          <Route path="/products/ai-automation" element={<ProductAIAutomation />} />
          {/* Add more routes as needed */}
        </Routes>
        
        <Footer 
          instagramHandle={instagramHandle}
          twitterHandle={twitterHandle}
        />
        <WhatsAppFloat whatsappLink={whatsappLink} />
      </div>
    </Router>
  );
}
```

### Setting Up Product Galleries

For showcasing multiple products in a gallery format:

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: 1,
    name: "Social Media Management",
    description: "Complete management of your social media presence across all platforms.",
    image: "/src/assets/product-social.jpg",
    slug: "social-media-management"
  },
  {
    id: 2,
    name: "AI-Powered Content",
    description: "AI-generated content tailored to your brand voice and audience.",
    image: "/src/assets/product-content.jpg",
    slug: "ai-content"
  },
  {
    id: 3,
    name: "Custom Chatbots",
    description: "Intelligent chatbots designed to engage with your customers 24/7.",
    image: "/src/assets/product-chatbot.jpg",
    slug: "custom-chatbots"
  },
  {
    id: 4,
    name: "Launch Starter Kit",
    description: "Everything you need to launch your brand's online presence.",
    image: "/src/assets/product-launch.jpg",
    slug: "launch-starter-kit"
  }
];

const ProductGallery: React.FC = () => {
  return (
    <section id="products" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Products</h2>
        <p className="section-subtitle text-center mb-12">
          Explore our range of AI-powered solutions for your business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <Link 
              to={`/products/${product.slug}`} 
              key={product.id}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-accent-dark font-medium mt-4 group-hover:underline">
                    Learn more →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
```

## Form Customization

### Modifying Form Fields

To customize the purchase form:

1. Open `src/components/PurchaseForm.tsx`
2. Find the form state initialization:
   ```jsx
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
     company: '',
     message: ''
   });
   ```
3. Add or remove fields as needed
4. Update the form JSX to match your fields:

**Example: Adding a "How did you hear about us?" field**

```jsx
// Add to state
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',
  referralSource: '', // New field
  message: ''
});

// Add to form JSX
<div>
  <label htmlFor="referralSource" className="block mb-1 text-sm font-medium text-gray-700">
    How did you hear about us?
  </label>
  <select
    id="referralSource"
    name="referralSource"
    value={formData.referralSource}
    onChange={handleChange}
    className="form-input"
    required
  >
    <option value="">Please select</option>
    <option value="Google">Google</option>
    <option value="Social Media">Social Media</option>
    <option value="Referral">Referral</option>
    <option value="Other">Other</option>
  </select>
</div>
```

### Changing Form Submission Behavior

To modify what happens when the form is submitted:

1. Find the `handleSubmit` function:
   ```jsx
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // This is where you would typically send the form data to a server
     console.log('Form submitted:', { ...formData, packageName, packagePrice });
     alert('Thank you for your interest! We will contact you shortly.');
     onClose();
   };
   ```
2. Replace with your desired behavior:

**Example: Sending to a specific email service**

```jsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // Example using a service like EmailJS
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: 'your_service_id',
        template_id: 'your_template_id',
        user_id: 'your_user_id',
        template_params: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          package: packageName,
          price: packagePrice
        }
      })
    });
    
    if (response.ok) {
      alert('Thank you for your interest! We will contact you shortly.');
      onClose();
    } else {
      alert('Something went wrong. Please try again later.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Something went wrong. Please try again later.');
  }
};
```

**Example: Storing submissions in a Google Sheet**

For this, you would typically use a service like Google Apps Script to create an API endpoint:

```jsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('YOUR_GOOGLE_SCRIPT_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        packageName,
        packagePrice,
        timestamp: new Date().toISOString()
      })
    });
    
    if (response.ok) {
      alert('Thank you for your interest! We will contact you shortly.');
      onClose();
    } else {
      alert('Something went wrong. Please try again later.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Something went wrong. Please try again later.');
  }
};
```

### Adding Form Validation

To add custom validation to your forms:

```jsx
import React, { useState } from 'react';

const PurchaseForm: React.FC<PurchaseFormProps> = ({ packageName, packagePrice, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', { ...formData, packageName, packagePrice });
      alert('Thank you for your interest! We will contact you shortly.');
      onClose();
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Get Started with {packageName}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'border-red-500' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="Your phone number"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          
          <div className="mb-4">
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
          
          <div className="mb-6">
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
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="font-medium">Selected Package:</p>
            <p className="text-lg font-bold text-accent-dark">{packageName} - {packagePrice}</p>
          </div>
          
          <button type="submit" className="btn-primary w-full">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;
```

## Deployment and Maintenance

### GitHub Integration

To manage your website with GitHub:

1. Create a repository on GitHub
2. Initialize Git in your local project folder:
   ```bash
   cd /path/to/mondoai-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. For future updates:
   ```bash
   # Make your changes to the code
   git add .
   git commit -m "Description of changes"
   git push
   ```

### Netlify Deployment

#### Option 1: Connect to GitHub (Recommended)

1. Log in to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub and authorize Netlify
4. Select your repository
5. Configure build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

#### Option 2: Manual Deploy

1. Build the site locally:
   ```bash
   pnpm run build
   ```
2. Log in to [Netlify](https://netlify.com)
3. Go to "Sites" and click "Add new site" → "Deploy manually"
4. Drag and drop the `dist` folder
5. Your site will be live immediately

### Domain Management

To use a custom domain:

1. In Netlify dashboard, go to your site settings
2. Click on "Domain management"
3. Click "Add custom domain"
4. Enter your domain name
5. Follow the instructions to set up DNS records:
   - If your domain is registered elsewhere, you'll need to add CNAME or A records
   - If you transfer your domain to Netlify, they'll handle DNS automatically

### Performance Optimization

To improve website performance:

1. **Optimize images**:
   - Use WebP format for better compression
   - Resize images to appropriate dimensions before uploading
   - Consider using a service like Cloudinary for image optimization

2. **Lazy loading**:
   Add lazy loading to images that are below the fold:
   ```jsx
   <img 
     src={image} 
     alt="Description" 
     loading="lazy" 
     className="your-image-class" 
   />
   ```

3. **Code splitting**:
   For larger applications, implement code splitting with React.lazy:
   ```jsx
   const Blog = React.lazy(() => import('./components/Blog'));
   
   // Then in your component:
   <React.Suspense fallback={<div>Loading...</div>}>
     <Blog />
   </React.Suspense>
   ```

4. **Preload critical assets**:
   Add preload links in `index.html`:
   ```html
   <link rel="preload" href="/src/assets/mondoai-logo.png" as="image" />
   ```

## Troubleshooting

### Common Issues

**Issue: Images not displaying after deployment**
- Check that image paths are correct
- Ensure images are included in the build
- Try using import statements for images instead of direct paths

**Issue: Styling differences between development and production**
- Check for CSS specificity issues
- Verify that all CSS is being included in the build
- Test in multiple browsers

**Issue: Form submission not working**
- Check browser console for errors
- Verify API endpoints are correct
- Test form submission with a tool like Postman

### Build Errors

**TypeScript Errors**

If you encounter TypeScript errors during build:

1. Check the error message for specific file and line number
2. Fix type issues in the indicated files
3. Run `pnpm run build` again

Common TypeScript errors:
- Missing type definitions: Install required @types packages
- Type mismatches: Ensure variables match their expected types
- Missing properties: Add required properties to objects

**Example: Fixing "Property does not exist on type" error**

```tsx
// Error: Property 'newProp' does not exist on type '{ name: string; }'
interface MyProps {
  name: string;
  // Add the missing property to the interface
  newProp?: string; // Make it optional with ?
}

const MyComponent: React.FC<MyProps> = (props) => {
  // Now you can use props.newProp without errors
  return <div>{props.name} {props.newProp}</div>;
};
```

### Getting Help

If you encounter issues that you can't resolve:

1. Check the React and Vite documentation
2. Search for solutions on Stack Overflow
3. Inspect browser console errors for clues
4. Use GitHub issues to search for similar problems
5. Consider hiring a developer for complex changes

## Conclusion

This runbook provides comprehensive guidance for maintaining and extending your MondoAI website. By following these instructions, you can confidently make changes to the design, add new functionality, and keep your website up-to-date.

Remember that the website is built with modern web technologies and follows best practices for maintainability and extensibility. This makes it easy to adapt to your changing business needs over time.

For any questions or additional support, refer to the React documentation or consider consulting with a web developer for more complex modifications.
