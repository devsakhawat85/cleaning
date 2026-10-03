import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { ResultsSection } from './components/ResultsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VideoSection } from './components/VideoSection';
import { CallToActionSection } from './components/CallToActionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedServiceForEstimate, setSelectedServiceForEstimate] = useState<string>('General Office Cleaning');

  const handleOpenEstimate = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForEstimate(serviceName);
    }
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#FCB913] selection:text-[#002244] flex flex-col">
      {/* Sticky Navigation */}
      <Navbar onOpenEstimate={() => handleOpenEstimate()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEstimate={() => handleOpenEstimate()} />

        {/* Trust & Credibility Bar */}
        <TrustBar />

        {/* About JMD Janitorial */}
        <AboutSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Commercial Services Grid */}
        <ServicesSection onOpenEstimateForService={(service) => handleOpenEstimate(service)} />

        {/* Industries We Serve */}
        <IndustriesSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Why JMD / How We Care */}
        <WhyChooseUs />

        {/* 4-Step Process */}
        <ProcessSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Interactive Before & After Comparison */}
        <ResultsSection />

        {/* Authentic Customer Reviews */}
        <TestimonialsSection />

        {/* See JMD In Action (Videos) */}
        <VideoSection />

        {/* Strong Bottom CTA Section */}
        <CallToActionSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Contact & Free Estimate Form */}
        <ContactSection prefilledService={selectedServiceForEstimate} />
      </main>

      {/* Multi-Column Footer */}
      <Footer onOpenEstimate={() => handleOpenEstimate()} />

      {/* Free Estimate Dialog Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        defaultService={selectedServiceForEstimate}
      />
    </div>
  );
}
