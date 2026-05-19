import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import ThreeScene from '../components/ThreeScene';
import './Services.css';



const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential Design',
    tagline: 'Your Dream Home, Realized',
    description: 'We design homes that are deeply personal — reflecting who you are and how you live. From compact apartments to sprawling villas, every space is curated with intention.',
    features: ['Space Planning & Layout', 'Furniture Selection & Sourcing', 'Color & Material Consultation', 'Lighting Design', '3D Visualization', 'Project Management'],
    price: 'Starting from ₹50,000',
    duration: '6–16 weeks',
    tag: 'Most Popular',
    w: '8.4m', h: '12.8m'
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7h1M9 11h1M9 15h1M14 7h1M14 11h1M14 15h1" />
      </svg>
    ),
    title: 'Commercial Design',
    tagline: 'Spaces That Work As Hard As You Do',
    description: 'We craft commercial environments — offices, retail stores, restaurants, and hotels — that align with your brand and drive performance.',
    features: ['Workplace Strategy', 'Brand Integration', 'Office & Co-working Spaces', 'Retail & Hospitality Design', 'Ergonomic Planning', 'Turnkey Execution'],
    price: 'Starting from ₹1,50,000',
    duration: '8–24 weeks',
    tag: 'Enterprise',
    w: '24.0m', h: '16.5m'
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20M4 12v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4" />
        <path d="M7 19v2M17 19v2" />
        <path d="M20 9V7a3 3 0 0 0-3-3h-2" />
      </svg>
    ),
    title: 'Bathroom Design',
    tagline: 'Your Private Sanctuary',
    description: 'Transform your bathroom into a spa-like retreat. We work with the finest tiles, fixtures, and vanities to create a space of pure indulgence.',
    features: ['Layout & Space Planning', 'Tile Selection & Design', 'Fixture & Fitting Selection', 'Vanity Design', 'Rain Shower & Jacuzzi Integration', 'Waterproofing Guidance'],
    price: 'Starting from ₹40,000',
    duration: '3–6 weeks',
    tag: 'Luxury',
    w: '3.2m', h: '3.8m'
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: '3D Visualization',
    tagline: 'See It Before You Build It',
    description: 'Our photorealistic 3D renders and virtual walkthroughs let you experience your space before a single nail is hammered. Zero surprises, total confidence.',
    features: ['Photorealistic 3D Renders', 'Virtual Walkthrough Tours', 'Material & Finish Visualization', 'Lighting Simulation', 'VR-Ready Experience', 'Multiple Revision Rounds'],
    price: 'Starting from ₹15,000',
    duration: '1–2 weeks',
    tag: 'Technology',
    w: 'RENDER', h: 'WALKTHROUGH'
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="12" r="4" />
        <path d="M11 12h10M16 12v3M20 12v3" />
      </svg>
    ),
    title: 'Turnkey Projects',
    tagline: 'Concept to Completion',
    description: 'Hand us the keys and walk into a finished space. Our end-to-end turnkey service manages everything — design, procurement, execution, and handover.',
    features: ['Full Design & Execution', 'Contractor Management', 'Material Procurement', 'Quality Assurance', 'Timeline & Budget Control', 'Post-handover Support'],
    price: 'Custom Pricing',
    duration: '12–30 weeks',
    tag: 'Complete',
    w: 'ALL-IN', h: 'HANDOVER'
  },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="page-hero__canvas">
          <ThreeScene variant="services" />
        </div>
        <div className="page-hero__content">
          <motion.div className="section-label" style={{ justifyContent: 'center' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            What We Offer
          </motion.div>
          <motion.h1 className="page-hero__title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Our <em>Premium</em> Services
          </motion.h1>
          <motion.p className="page-hero__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Comprehensive interior design solutions tailored to your vision, budget, and timeline.
          </motion.p>
        </div>
        <div className="page-hero__overlay" />
      </section>

      {/* Services Grid */}
      <section className="services-section" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="services-cards-grid">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.08}>
                  <div className="service-detail-card glass-card dimension-box">
                    <div className="dimension-box__top" />
                    <div className="dimension-box__left" />
                    <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>SPEC {svc.w}</div>
                    <div className="dimension-label-overlay" style={{ bottom: '-10px', right: '10px', fontSize: '0.45rem' }}>ELEVATION {svc.h}</div>
                    
                    {svc.tag && <div className="service-tag">{svc.tag}</div>}
                    <div className="service-detail-card__icon">{svc.icon}</div>
                    <h2 className="service-detail-card__title">{svc.title}</h2>
                    <p className="service-detail-card__tagline">{svc.tagline}</p>
                    <p className="service-detail-card__desc">{svc.description}</p>
                    <div className="service-detail-card__features">
                      {svc.features.map(f => (
                        <div key={f} className="service-feature">
                          <span className="service-feature__check">✦</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="service-detail-card__footer">
                      <Link to="/contact" className="service-book-btn" style={{ width: '100%', textAlign: 'center', padding: '0.8rem 1.5rem' }}>
                        Schedule a Meeting
                      </Link>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="process-section__bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className="section-header center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Our <em>Design</em> Process</h2>
          </motion.div>

          <div className="process-steps">
            {[
              { num: '01', title: 'Discovery Call', desc: 'We start with a free 30-min consultation to understand your vision, lifestyle, and requirements.', bound: 'DRAFT A' },
              { num: '02', title: 'Concept Design', desc: 'Our designers create mood boards, space plans, and initial concepts tailored to your style.', bound: 'DRAFT B' },
              { num: '03', title: '3D Visualization', desc: 'Photorealistic renders bring your space to life before any work begins — giving you full confidence.', bound: 'DRAFT C' },
              { num: '04', title: 'Execution', desc: 'Our project managers coordinate every contractor, supplier, and artisan with precision and care.', bound: 'DRAFT D' },
              { num: '05', title: 'Handover', desc: 'We do a thorough quality check and hand over your transformed space — ready to be lived in.', bound: 'FINAL KEY' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                className="process-step dimension-box"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '2rem 1.5rem', marginBottom: '1rem', border: '1px solid var(--color-border)' }}
              >
                <div className="dimension-box__top" />
                <div className="dimension-box__left" />
                <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>PHASE {step.num} / {step.bound}</div>
                <div className="process-step__num">{step.num}</div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="cta-band__glow" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className="cta-band__inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-band__title">Ready to <em>Get Started?</em></h2>
            <p className="cta-band__subtitle">Schedule a free consultation and let's create something extraordinary together.</p>
            <Link to="/contact" className="btn-primary">
              <span>Book Free Consultation</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
