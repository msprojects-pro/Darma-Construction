import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectLightboxModal } from './components/ProjectLightboxModal';
import { Footer } from './components/Footer';
import { ServiceItem, ProjectItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Quote form prefill state
  const [quoteServiceId, setQuoteServiceId] = useState<string>('');
  const [quoteSqft, setQuoteSqft] = useState<string>('');
  const [quoteEstRange, setQuoteEstRange] = useState<string>('');

  const scrollToContact = (serviceId?: string, sqft?: string, estRange?: string) => {
    if (serviceId) setQuoteServiceId(serviceId);
    if (sqft) setQuoteSqft(sqft);
    if (estRange) setQuoteEstRange(estRange);

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-400">
      
      {/* Header Navigation */}
      <Navbar onOpenQuote={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuote={() => scrollToContact()} 
          onExploreWork={scrollToGallery} 
        />

        {/* 2. Services Section (6 Cards + Detail trigger) */}
        <ServicesSection 
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuoteWithService={(serviceId) => scrollToContact(serviceId)}
        />

        {/* 3. Featured Work / Gallery Section (Before/After toggles) */}
        <GallerySection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. Why Choose Us Section + Estimator Tool */}
        <WhyChooseUs 
          onOpenQuoteWithDetails={(serviceId, sqft, estRange) => scrollToContact(serviceId, sqft, estRange)}
        />

        {/* 5. About & Community Trust Section */}
        <AboutSection />

        {/* 6. Contact / CTA Quote Section */}
        <ContactSection 
          initialServiceId={quoteServiceId}
          initialSqft={quoteSqft}
          initialEstRange={quoteEstRange}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={(serviceId) => scrollToContact(serviceId)}
      />

      <ProjectLightboxModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={(serviceId) => scrollToContact(serviceId)}
      />

    </div>
  );
}
