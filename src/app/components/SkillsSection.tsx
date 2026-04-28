'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const skillCategories = [
  {
    icon: 'ClipboardDocumentCheckIcon',
    title: 'Testing',
    skills: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Integration Testing', 'Exploratory Testing'],
    colSpan: 'md:col-span-2',
  },
  {
    icon: 'ServerIcon',
    title: 'API Testing',
    skills: ['Postman', 'REST API Validation', 'JSON Handling', 'Request/Response Testing'],
    colSpan: 'md:col-span-1',
  },
  {
    icon: 'CommandLineIcon',
    title: 'Automation (Basic)',
    skills: ['Selenium WebDriver (Java)', 'TestNG', 'Page Object Model (POM)', 'Maven'],
    colSpan: 'md:col-span-1',
  },
  {
    icon: 'WrenchIcon',
    title: 'Tools',
    skills: ['Jira', 'Redmine', 'Trello', 'Postman', 'Confluence'],
    colSpan: 'md:col-span-2',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Methodology & Other',
    skills: ['Agile (Scrum)', 'SDLC', 'STLC', 'Basic SQL', 'UAT Support'],
    colSpan: 'md:col-span-2',
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.section-reveal, .stagger-child');
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal flex items-center gap-4 mb-4">
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-primary">Skills</span>
          <div className="flex-1 h-px bg-primary/20 max-w-[60px]" />
        </div>

        <h2 className="section-reveal text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-16">
          Tools and techniques<br />
          <span className="text-gradient">I work with.</span>
        </h2>

        {/* Bento Grid */}
        {/* Row 1: [col-1-2: Testing cs-2] [col-3: API Testing cs-1] */}
        {/* Row 2: [col-1: Automation cs-1] [col-2-3: Tools cs-2] */}
        {/* Row 3: [col-1-2: Methodology cs-2 → expand to col-span-3] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card: Testing — col-span-2 */}
          <div className="stagger-child md:col-span-2 glass-light rounded-2xl p-6 border border-primary/10 hover:border-primary/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="ClipboardDocumentCheckIcon" size={18} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-base">{skillCategories?.[0]?.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategories?.[0]?.skills?.map((s) => (
                <span key={s} className="skill-badge px-3.5 py-1.5 rounded-lg text-[13px] font-semibold">{s}</span>
              ))}
            </div>
          </div>

          {/* Card: API Testing — col-span-1 */}
          <div className="stagger-child md:col-span-1 glass-light rounded-2xl p-6 border border-primary/10 hover:border-primary/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="ServerIcon" size={18} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-base">{skillCategories?.[1]?.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategories?.[1]?.skills?.map((s) => (
                <span key={s} className="skill-badge px-3.5 py-1.5 rounded-lg text-[13px] font-semibold">{s}</span>
              ))}
            </div>
          </div>

          {/* Card: Automation — col-span-1 */}
          <div className="stagger-child md:col-span-1 glass-light rounded-2xl p-6 border border-primary/10 hover:border-primary/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="CommandLineIcon" size={18} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-base">{skillCategories?.[2]?.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategories?.[2]?.skills?.map((s) => (
                <span key={s} className="skill-badge px-3.5 py-1.5 rounded-lg text-[13px] font-semibold">{s}</span>
              ))}
            </div>
          </div>

          {/* Card: Tools — col-span-2 */}
          <div className="stagger-child md:col-span-2 glass-light rounded-2xl p-6 border border-primary/10 hover:border-primary/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="WrenchIcon" size={18} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-base">{skillCategories?.[3]?.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategories?.[3]?.skills?.map((s) => (
                <span key={s} className="skill-badge px-3.5 py-1.5 rounded-lg text-[13px] font-semibold">{s}</span>
              ))}
            </div>
          </div>

          {/* Card: Methodology — col-span-3 (full row) */}
          <div className="stagger-child md:col-span-3 glass-light rounded-2xl p-6 border border-primary/10 hover:border-primary/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="AcademicCapIcon" size={18} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-base">{skillCategories?.[4]?.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategories?.[4]?.skills?.map((s) => (
                <span key={s} className="skill-badge px-3.5 py-1.5 rounded-lg text-[13px] font-semibold">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}