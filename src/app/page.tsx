import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import CertificationsSection from '@/app/components/CertificationsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="noise-overlay" />
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}