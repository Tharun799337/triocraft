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
    <div className="relative min-h-screen text-[#1a1f22] font-sans selection:bg-[#FEE2E2] selection:text-[#991B1B] overflow-x-hidden bg-[#f8f9fc]">
      <SEO
        title="Trio Craft — Digital Marketing, Web Development & AI Agency in Hyderabad"
        description="360-degree digital solutions: custom web development, hospital management systems (HMS), real-time AI chatbots, influencer marketing, festival puja portals, and revenue intelligence."
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
