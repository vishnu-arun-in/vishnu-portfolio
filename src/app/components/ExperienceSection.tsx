'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const experiences = [
  {
    company: 'Epixel Solutions Pvt Ltd',
    role: 'Quality and Compliance Engineer',
    duration: 'June 2023 – Present',
    current: true,
    responsibilities: [
      'Manual and API testing of web and mobile applications across multiple project types',
      'Test case design and execution — functional, regression, and integration testing',
      'API validation using Postman — endpoints, response codes, JSON payloads, edge cases',
      'Bug tracking and lifecycle management using Redmine',
      'Agile/Scrum collaboration — sprint ceremonies, standups, retrospectives',
      'UAT support — working directly with stakeholders to validate business requirements',
    ],
    tags: ['Manual Testing', 'Postman', 'Redmine', 'Agile', 'UAT'],
  },
  {
    company: 'QAWebPrints Info Solutions LLP',
    role: 'Software Test Engineer',
    duration: 'July 2021 – June 2023',
    current: false,
    responsibilities: [
      'Manual testing across multiple domains — e-commerce, service platforms, web apps',
      'Test case design and systematic execution for functional and regression cycles',
      'API testing using Postman — validating REST endpoints and data integrity',
      'Defect tracking across Jira, Trello, and Zoho with detailed bug reports',
      'Functional, regression, and integration testing on web and mobile platforms',
      'Active participation in Agile ceremonies and sprint planning sessions',
    ],
    tags: ['Functional Testing', 'Postman', 'Jira', 'Trello', 'Zoho'],
  },
];

export default function ExperienceSection() {
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

    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)',
      }} />
      <div className="max-w-6xl mx-auto relative">
        <div className="section-reveal flex items-center gap-4 mb-4">
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-primary">
          </span>
          <div className="flex-1 h-px bg-primary/20 max-w-[60px]" />
        </div>

        <h2 className="section-reveal text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-16">
          <span className="text-gradient">Professional Experience.</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences?.map((exp, i) => (
              <div
                key={exp?.company}
                className="stagger-child relative md:pl-20"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-primary bg-background hidden md:flex items-center justify-center">
                  {exp?.current && (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>

                <div className="glass-light rounded-2xl p-6 md:p-8 border border-primary/10 hover:border-primary/25 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-extrabold text-foreground">{exp?.company}</h3>
                        {exp?.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold text-accent">{exp?.role}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
                      <Icon name="CalendarIcon" size={14} className="text-primary" />
                      {exp?.duration}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {exp?.responsibilities?.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp?.tags?.map((tag) => (
                      <span key={tag} className="skill-badge px-3 py-1 rounded-lg text-[12px] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}