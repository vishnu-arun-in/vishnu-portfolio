'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const certifications = [
  {
    title: 'Selenium with Java Automation',
    issuer: 'Obsqura Zone',
    icon: 'CodeBracketIcon',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
  {
    title: 'Postman API Testing',
    issuer: 'Postman Academy',
    icon: 'ServerIcon',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    title: 'Jira & Trello Project Management',
    issuer: 'Atlassian',
    icon: 'ClipboardDocumentListIcon',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.section-reveal, .stagger-child');
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
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
    <section ref={sectionRef} id="certifications" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal flex items-center gap-4 mb-4">
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-primary">Certifications</span>
          <div className="flex-1 h-px bg-primary/20 max-w-[60px]" />
        </div>

        <h2 className="section-reveal text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-16">
          Verified skills and<br />
          <span className="text-gradient">credentials.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="stagger-child glass-light rounded-2xl p-6 border border-primary/10 hover:border-primary/25 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-2xl ${cert.bg} border ${cert.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={cert.icon as 'CodeBracketIcon'} size={22} className={cert.color} />
              </div>
              <div className="font-extrabold text-foreground text-base mb-1 leading-tight">{cert.title}</div>
              <div className="text-sm text-muted-foreground font-medium">{cert.issuer}</div>
              <div className="mt-4 flex items-center gap-2">
                <Icon name="CheckBadgeIcon" size={14} className="text-primary" />
                <span className="text-[12px] text-primary font-semibold">Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}