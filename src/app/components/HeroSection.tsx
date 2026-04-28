'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from "../../components/ui/AppImage";

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Entrance animation
    const elements = heroRef.current?.querySelectorAll('.hero-enter');
    elements?.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(40px)';
      setTimeout(() => {
        htmlEl.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms`;
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100);
    });

    // Cursor parallax
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${dx * 40}px, ${dy * 40}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${dx * -30}px, ${dy * -30}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `perspective(1000px) rotateY(${dx * 2}deg) rotateX(${-dy * 2}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Parallax Blobs */}
      <div
        ref={blobRef1}
        className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none animate-blob"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(129,140,248,0.06) 60%, transparent 80%)',
          filter: 'blur(60px)',
          transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div
        ref={blobRef2}
        className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[480px] max-h-[480px] rounded-full pointer-events-none animate-blob"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, rgba(59,130,246,0.04) 60%, transparent 80%)',
          filter: 'blur(80px)',
          animationDelay: '4s',
          transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      <div ref={contentRef} className="max-w-6xl mx-auto w-full" style={{ transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="hero-enter inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-primary/20 mb-8 shadow-lg shadow-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Available for Opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-enter text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-4 whitespace-nowrap">
              <span className="text-foreground">Vishnu </span>
              <span className="text-gradient">Arun</span>
            </h1>

            {/* Role */}
            <div className="hero-enter flex items-center gap-3 justify-center lg:justify-start mb-6">
              <span className="text-xl md:text-2xl font-semibold text-muted-foreground">
                Quality Assurance Engineer
              </span>
            </div>

            {/* Intro */}
            <p className="hero-enter text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              4+ years crafting quality into every build — from MLM platforms to e-commerce flows. 
              Specialist in manual testing, API validation, and defect tracking that ships reliable software.
            </p>

            {/* Stats */}
            <div className="hero-enter flex flex-wrap gap-6 justify-center lg:justify-start mb-10">
              {[
                { value: '4+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-extrabold text-gradient">{stat.value}</div>
                  <div className="text-[12px] font-medium text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-enter flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-accent transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 animate-pulse-glow"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hero-enter flex-shrink-0 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #3B82F6, #818CF8, #60A5FA, #3B82F6)',
                  padding: '3px',
                  borderRadius: '50%',
                  animation: 'float 6s ease-in-out infinite',
                }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Photo */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <AppImage
                  src="/assets/images/photo_2026-04-04_14-26-36-1777362376320.jpg"
                  alt="Vishnu Arun, QA Engineer, professional portrait in well-lit studio setting"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold">Scroll</span>
        <div className="w-px h-10 bg-primary/20 relative overflow-hidden rounded-full">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-primary rounded-full animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
