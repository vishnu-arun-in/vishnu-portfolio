'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const contactItems = [
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'vishnuarun071@gmail.com',
    href: 'mailto:vishnuarun071@gmail.com',
    display: 'vishnuarun071@gmail.com',
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+91 9526337597',
    href: 'tel:+919526337597',
    display: '+91 9526 337 597',
  },
  {
    icon: 'MapPinIcon',
    label: 'Location',
    value: 'Kollam, Kerala, India',
    href: null,
    display: 'Kollam, Kerala, India',
  },
];

const socialLinks = [
  {
    icon: 'LinkIcon',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    display: 'linkedin.com/in/vishnuarun',
  },
  {
    icon: 'CodeBracketSquareIcon',
    label: 'GitHub',
    href: 'https://github.com',
    display: 'github.com/vishnuarun',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/email service here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)',
      }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="section-reveal flex items-center gap-4 mb-4">
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-primary">Contact</span>
          <div className="flex-1 h-px bg-primary/20 max-w-[60px]" />
        </div>

        <h2 className="section-reveal text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          <span className="text-gradient">Get In Touch.</span>
        </h2>
        <p className="section-reveal text-muted-foreground max-w-xl mb-16">
          Open to QA Engineer roles, freelance testing engagements, and consulting. Reach out via any channel below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <div
                  key={item.label}
                  className="stagger-child flex items-center gap-4 glass-light rounded-2xl p-5 border border-primary/10 hover:border-primary/25 transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={item.icon as 'EnvelopeIcon'} size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-semibold hover:text-primary transition-colors text-sm">
                        {item.display}
                      </a>
                    ) : (
                      <span className="text-foreground font-semibold text-sm">{item.display}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="stagger-child space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Connect Online</div>
              {socialLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-light rounded-2xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={link.icon as 'LinkIcon'} size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{link.label}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{link.display}</div>
                  </div>
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} className="text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}