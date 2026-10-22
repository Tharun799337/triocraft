import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Tharun | AI Developer & Full-Stack Web Developer", 
  description = "Freelance portfolio of Tharun. I build modern websites and AI-powered tools, RAG systems, chatbots, and automations for businesses."
}) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description]);

  return null;
};
