'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const domains = [
  { icon: 'CubeIcon', label: 'MLM Platforms', desc: 'Unilevel, Binary, Matrix structures' },
  { icon: 'ShoppingCartIcon', label: 'E-commerce', desc: 'Cart, checkout, payment flows' },
  { icon: 'WrenchScrewdriverIcon', label: 'Service Platforms', desc: 'Timesheet, workflow, approvals' },
  { icon: 'CurrencyDollarIcon', label: 'Finance', desc: 'Financial platforms and investment systems' },
  { icon: 'Squares2X2Icon', label: 'Multiple Service Domains', desc: 'Cross-domain service applications' },
];

const strengths = [
  {
    icon: 'DocumentTextIcon',
    label: 'Requirement Analysis & Understanding',
    desc: 'Ability to analyze SRS, user stories, and business workflows. Strong understanding of complex logic (MLM, e-commerce, service systems). Identifying edge cases and missing requirements.',
  },
  {
    icon: 'ClipboardDocumentListIcon',
    label: 'Test Case Design & Scenario Thinking',
    desc: 'Writing clear, structured test cases covering positive, negative, and edge case scenarios. Ensuring maximum test coverage across all functional areas.',
  },
  {
    icon: 'BugAntIcon',
    label: 'Defect Identification & Debugging',
    desc: 'Strong ability to find critical bugs and write clear, reproducible bug reports. Understanding root cause — whether UI, API, or logic issues.',
  },
  {
    icon: 'ServerIcon',
    label: 'API Testing & Data Validation',
    desc: 'Hands-on experience with Postman. Validating request/response, status codes, and JSON data. Ensuring frontend & backend consistency.',
  },
  {
    icon: 'SparklesIcon',
    label: 'AI-Assisted Testing & Productivity',
    desc: 'Using AI tools like ChatGPT, Google Gemini, Perplexity AI, and Claude to generate test cases, improve test coverage, create edge case ideas, assist in bug analysis, and speed up documentation.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.section-reveal, .stagger-child');
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-reveal text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6">
          About <span className="text-gradient">Me.</span>
        </h2>

        <p className="section-reveal text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          QA Engineer with 4+ years of hands-on experience in manual and API testing across web and mobile applications. 
          I specialize in testing complex business logic — particularly in MLM systems, e-commerce platforms, and service-based applications. 
          My approach combines methodical test case design with deep domain knowledge, ensuring every edge case is caught before it reaches production.
        </p>

        {/* Domains */}
        <div className="section-reveal mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Domains Worked</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((d) => (
              <div key={d.label} className="glass-light rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={d.icon as 'CubeIcon'} size={20} className="text-primary" />
                </div>
                <div className="font-bold text-foreground mb-1">{d.label}</div>
                <div className="text-sm text-muted-foreground">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="section-reveal">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Core Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <div
                key={s.label}
                className="stagger-child flex gap-4 glass-light rounded-2xl p-5 border border-primary/10 hover:border-primary/25 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5">
                  <Icon name={s.icon as 'BeakerIcon'} size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">{s.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}