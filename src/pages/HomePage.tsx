import React from 'react';
import { FloatingNavbar } from '../components/FloatingNavbar';
import { LuxuryHero } from '../components/LuxuryHero';
import { QuickOffers } from '../components/QuickOffers';
import { AboutSection } from '../components/AboutSection';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { AgencyServices } from '../components/AgencyServices';
import { HowWeDoIt } from '../components/HowWeDoIt';
import { AgencyTestimonials } from '../components/AgencyTestimonials';
import { AgencyFAQ } from '../components/AgencyFAQ';
import { AgencyContact } from '../components/AgencyContact';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen text-[#1a1f22] font-sans selection:bg-[#FEE2E2] selection:text-[#991B1B] overflow-x-hidden bg-[#FFFFFF]">
      <SEO
        title="TrioCraft | Design & Development"
        description="TrioCraft is a full-service digital agency in Hyderabad. We build custom websites, hospital management systems (HMS), real-time AI chatbots, influencer marketing campaigns, and revenue intelligence platforms."
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              name: 'TrioCraft',
              alternateName: 'TrioCraft Design & Development',
              url: 'https://triocraft.in/',
            },
            {
              '@type': 'ProfessionalService',
              name: 'TrioCraft',
              alternateName: ['Trio Craft', 'TrioCraft Digital Agency', 'TrioCraft Design & Development'],
              url: 'https://triocraft.in/',
              logo: {
                '@type': 'ImageObject',
                url: 'https://triocraft.in/triocraft-logo.png',
                width: 512,
                height: 512,
              },
              image: 'https://triocraft.in/triocraft-logo.png',
              description: 'TrioCraft is a full-service digital design, custom engineering, and AI agency based in Hyderabad, India. We build web applications, hospital management systems, AI chatbots, influencer marketing campaigns, and revenue-scaling platforms.',
              email: 'trioocraaft@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN',
              },
              areaServed: 'Worldwide',
              serviceType: ['Web Development', 'Digital Marketing', 'AI Chatbot Development', 'Hospital Management Systems', 'Influencer Marketing'],
              sameAs: ['https://github.com/Tharun799337'],
              priceRange: '₹₹',
            },
          ],
        }}
      />

      {/* Sticky Agency Header */}
      <FloatingNavbar />

      {/* Main Agency Viewport */}
      <main className="w-full flex flex-col items-center">
        {/* Split Hero with 3D Developer & Outline Typography */}
        <LuxuryHero />

        {/* Quick Offers 4-card strip */}
        <QuickOffers />

        {/* About Trio Craft Section */}
        <AboutSection />

        {/* Featured Projects Showcase (Replaces Clients with High Quality Visuals) */}
        <ProjectShowcase />

        {/* Comprehensive Capabilities & Agency Services */}
        <AgencyServices />

        {/* 4-Phase Agency Workflow: How We Do It */}
        <HowWeDoIt />

        {/* Client Success Stories & Reviews */}
        <AgencyTestimonials />

        {/* Frequently Asked Questions */}
        <AgencyFAQ />

        {/* Direct Contact & Consultation Quote Form */}
        <AgencyContact />
      </main>

      {/* Agency Footer */}
      <Footer />
    </div>
  );
};
