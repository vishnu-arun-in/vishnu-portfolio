'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Project {
  name: string;
  domain: string;
  plan?: string;
  tag: string;
  tagColor: string;
  summary: string;
  responsibilities: string[];
}

const projects: Project[] = [
  {
    name: '5-15 Global Energy',
    domain: 'MLM Platform',
    plan: 'Unilevel MLM',
    tag: 'MLM',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    summary: 'Unilevel MLM platform with 5 bonus types, referral commissions, and game-based earning modules.',
    responsibilities: [
      'Tested referral linking and user hierarchy tree structure end-to-end',
      'Validated all 5 bonus calculations — accuracy, eligibility, and edge cases',
      'Verified commission distribution across multiple referral levels',
      'Tested game-based earning modules for correct reward logic',
      'API testing for commission data endpoints using Postman',
      'Regression testing after each feature deployment cycle',
    ],
  },
  {
    name: 'JEFE CAPITAL',
    domain: 'MLM Platform',
    plan: 'Binary MLM',
    tag: 'MLM',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    summary: 'Binary MLM platform with left & right leg structure, pair matching system, and bonus calculation logic.',
    responsibilities: [
      'Tested pair matching between left and right legs',
      'Verified commission and bonus calculations',
      'Checked spillover placement logic',
      'Validated user hierarchy and sponsor relationships',
    ],
  },
  {
    name: 'Charlie Lounge',
    domain: 'MLM Platform',
    plan: 'Binary MLM',
    tag: 'MLM',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    summary: 'Binary MLM platform with binary structure, commission and bonus system.',
    responsibilities: [
      'Tested user tree structure and binary placement',
      'Verified pairing logic across account levels',
      'Validated commission calculations for matched pairs',
      'Performed regression testing after updates',
    ],
  },
  {
    name: 'Winterleaf Investments',
    domain: 'MLM Platform',
    plan: 'Binary MLM',
    tag: 'MLM',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    summary: 'Binary MLM platform with binary network structure and bonus distribution system.',
    responsibilities: [
      'Validated binary tree logic and user placement',
      'Tested bonus calculations and distribution accuracy',
      'Verified reports and earnings data',
      'Conducted functional testing across modules',
    ],
  },
  {
    name: 'As Player Academie',
    domain: 'MLM Platform',
    plan: 'Unilevel MLM',
    tag: 'MLM',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    summary: 'Unilevel MLM platform with unlimited direct referrals and level-based commission structure.',
    responsibilities: [
      'Tested referral tracking and correct sponsor assignment',
      'Verified level commissions across configured depth levels',
      'Validated user onboarding flow and hierarchy',
      'Performed API testing for commission and referral data',
    ],
  },
  {
    name: 'X-Mo.com',
    domain: 'MLM Platform',
    plan: 'Unilevel MLM',
    tag: 'MLM',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    summary: 'Unilevel MLM platform with multi-level referral system and commission distribution.',
    responsibilities: [
      'Tested user hierarchy and upline chain accuracy',
      'Validated commission logic across multiple levels',
      'Verified referral linking and sponsor assignment',
      'Performed regression testing after deployments',
    ],
  },
  {
    name: 'Stefan Thome Personalvermittlung',
    domain: 'MLM Platform',
    plan: 'Unilevel MLM',
    tag: 'MLM',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    summary: 'Unilevel MLM platform with multi-level referral structure and commission system.',
    responsibilities: [
      'Tested referral structure and depth-level accuracy',
      'Verified commission distribution across levels',
      'Validated user management and profile data',
      'Performed API and functional testing',
    ],
  },
  {
    name: 'H2U Operaciones de México',
    domain: 'MLM Platform',
    plan: 'Matrix MLM (5×5, 2×18)',
    tag: 'MLM',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    summary: 'Matrix MLM platform (5×5, 2×18) with auto-placement, overflow/spillover handling, and commission distribution.',
    responsibilities: [
      'Tested matrix structures — 5×5 and 2×18 configurations for correct slot filling',
      'Verified placement logic — auto-placement follows FIFO and sponsor preference',
      'Checked overflow handling — users placed correctly when matrix is full',
      'Validated commission distribution per filled matrix level',
      'Performed end-to-end testing across matrix configurations',
    ],
  },
  {
    name: 'America Learns',
    domain: 'Service Platform',
    tag: 'Service',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    summary: 'Timesheet management platform with time logging, approval workflows, and mobile/web integration.',
    responsibilities: [
      'Tested Timesheet module — log, edit, submit, and delete time entries',
      'Verified time logging accuracy and approval workflow states',
      'Tested mobile and web integration — data sync and feature parity',
      'Regression testing after timesheet module updates',
    ],
  },
  {
    name: 'Shield Your Body',
    domain: 'E-commerce',
    tag: 'E-commerce',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    summary: 'E-commerce platform for health products — full purchase flow from listing to payment.',
    responsibilities: [
      'Tested product listing pages — details, images, pricing, availability',
      'Validated cart and checkout — add, update, remove, coupon application',
      'Tested complete order flow — placement, confirmation, status updates',
      'Verified payment process — multiple payment methods, success and failure states',
    ],
  },
];

const automationProject = {
  title: 'Selenium Automation Project',
  description: 'Automated login functionality for a web application using Selenium WebDriver with Java, structured with the Page Object Model pattern for maintainability.',
  stack: ['Selenium WebDriver (Java)', 'TestNG', 'Page Object Model (POM)', 'Maven'],
  highlights: [
    'Automated login flow — valid credentials, invalid credentials, empty fields',
    'Page Object Model for clean separation of page logic and test logic',
    'TestNG annotations for test execution, grouping, and reporting',
    'Maven build management and dependency resolution',
  ],
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="project-card stagger-child rounded-2xl overflow-hidden"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-foreground text-base leading-tight mb-1">{project.name}</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${project.tagColor}`}>
                {project.tag}
              </span>
              {project.plan && (
                <span className="text-[12px] text-muted-foreground font-medium">{project.plan}</span>
              )}
            </div>
          </div>
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center">
            <Icon name="FolderIcon" size={16} className="text-primary" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.summary}</p>

        {/* Expand Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-[13px] font-bold text-primary hover:text-accent transition-colors duration-200 group"
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Hide Details' : 'View Responsibilities'}</span>
          <Icon
            name="ChevronDownIcon"
            size={14}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          style={{ transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease, margin-top 0.3s ease' }}
        >
          <div className="border-t border-primary/10 pt-4">
            <ul className="space-y-2">
              {project.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 30% at 50% 80%, rgba(59,130,246,0.04) 0%, transparent 70%)',
      }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="section-reveal flex items-center gap-4 mb-4">
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-primary">
          </span>
          <div className="flex-1 h-px bg-primary/20 max-w-[60px]" />
        </div>

        <h2 className="section-reveal text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          <span className="text-gradient">Projects.</span>
        </h2>
        <p className="section-reveal text-muted-foreground mb-12 max-w-2xl">
          Click any card to expand full responsibilities. Each project represents real-world QA work across MLM, e-commerce, and service domains.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Automation Project — Full Width Highlight */}
        <div className="stagger-child rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center border border-primary/20">
              <Icon name="CodeBracketIcon" size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-extrabold text-foreground">{automationProject.title}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 border border-primary/20 text-primary">
                  Automation
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{automationProject.description}</p>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {automationProject.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-48">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {automationProject.stack.map((s) => (
                      <span key={s} className="skill-badge px-3 py-1 rounded-lg text-[12px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}