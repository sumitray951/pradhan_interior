import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import ThreeScene from '../components/ThreeScene';
import './Home.css';



// Interactive Blueprint-to-Solid 3D Before/After Slider
function DesignBeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef();

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div 
      ref={containerRef} 
      className="featured-3d-canvas" 
      style={{ position: 'relative', cursor: 'ew-resize', overflow: 'hidden' }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* "Before" Layer: Blueprint Wireframe / Structural Grid */}
      <div style={{ position: 'absolute', inset: 0, background: '#F4EFE6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="arch-grid-bg" style={{ opacity: 0.8 }} />
        <ThreeScene variant="hero" wireframe={true} />
        <div className="dimension-label-overlay" style={{ top: '20px', left: '20px' }}>📐 BLUEPRINT DRAFT [SCALE 1:50]</div>
        <div className="dimension-label-overlay" style={{ bottom: '20px', right: '20px' }}>COORDINATE X: 14.8m</div>
      </div>

      {/* "After" Layer: Finished Luxury Textured Solid Render */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          width: `${sliderPos}%`, 
          overflow: 'hidden', 
          background: '#ffffff', 
          borderRight: '3px solid var(--color-gold)', 
          boxShadow: '0 0 30px rgba(184, 141, 48, 0.4)',
          transition: 'width 0.05s ease-out'
        }}
      >
        <div style={{ width: containerRef.current ? containerRef.current.clientWidth : '500px', height: '100%', position: 'relative', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ThreeScene variant="hero" wireframe={false} />
          <div className="dimension-label-overlay" style={{ top: '20px', left: '20px', background: 'var(--color-gold)', color: 'var(--color-bg)' }}>💎 FINISHED PREMIUM INTERIOR</div>
        </div>
      </div>
      
      {/* Interactive Slider Handle */}
      <div 
        style={{ 
          position: 'absolute', 
          left: `${sliderPos}%`, 
          top: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          background: 'var(--color-gold)', 
          color: 'var(--color-bg)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '1rem', 
          fontWeight: 'bold',
          boxShadow: '0 6px 20px rgba(184, 141, 48, 0.4)',
          zIndex: 20,
          pointerEvents: 'none',
          transition: 'left 0.05s ease-out'
        }}
      >
        ↔
      </div>
    </div>
  );
}



const services = [
  { 
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential', 
    desc: 'Bespoke home interiors crafted to reflect your personality and lifestyle.', 
    href: '/services', 
    w: '4.8m', 
    h: '6.4m' 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7h1M9 11h1M9 15h1M14 7h1M14 11h1M14 15h1" />
      </svg>
    ),
    title: 'Commercial', 
    desc: 'Dynamic workspaces and retail environments that inspire and perform.', 
    href: '/services', 
    w: '12.4m', 
    h: '8.2m' 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20M4 12v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4" />
        <path d="M7 19v2M17 19v2" />
        <path d="M20 9V7a3 3 0 0 0-3-3h-2" />
      </svg>
    ),
    title: 'Bathroom', 
    desc: 'Spa-like retreats with imported marble, smart fixtures, and sensory design.', 
    href: '/services', 
    w: '2.8m', 
    h: '3.4m' 
  },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Homeowner, Mumbai', quote: 'The Pradhan Design Studio completely transformed our apartment into a breathtaking sanctuary. Every detail was perfect.' },
  { name: 'Rahul Mehta', role: 'CEO, TechVenture', quote: 'Our office has never been more inspiring. The team understood our brand and translated it perfectly into space.' },
  { name: 'Kavita Nair', role: 'Homeowner, Pune', quote: 'The 3D visualizations before execution were remarkable. We knew exactly what we were getting. Truly world-class.' },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* ─── HERO ─── */}
      <section className="hero" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="hero__canvas">
          <ThreeScene variant="hero" wireframe={false} />
        </div>

        <motion.div className="hero__content" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero__eyebrow-line" />
            <span>Luxury Interior Design Studio</span>
            <span className="hero__eyebrow-line" />
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            Where <em>Design</em> Becomes
            <br />
            <span className="hero__title-accent">A Living Art</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            We create extraordinary spaces that reflect your vision, elevate your lifestyle, and leave a lasting impression. Premium luxury interior design, crafted for the discerning few.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">
              <span>Book Consultation</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/gallery" className="hero__gallery-link">
              <span className="hero__gallery-circle">▶</span>
              <span>View Portfolio</span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>

        <div className="hero__gradient-overlay" />
      </section>



      {/* ─── SERVICES ─── */}
      <section className="home-services" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our <em>Signature</em> Services</h2>
            <p className="section-subtitle">
              From concept to completion, we deliver exceptional interior design experiences across every space.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.1}>
                  <Link to={svc.href} className="service-card glass-card dimension-box">
                    <div className="dimension-box__top" />
                    <div className="dimension-box__left" />
                    <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>LAYOUT {svc.w}</div>
                    <div className="dimension-label-overlay" style={{ bottom: '-10px', right: '10px', fontSize: '0.45rem' }}>DEPTH {svc.h}</div>
                    
                    <div className="service-card__icon" style={{ zIndex: 2, position: 'relative' }}>{svc.icon}</div>
                    <h3 className="service-card__title" style={{ zIndex: 2, position: 'relative' }}>{svc.title}</h3>
                    <p className="service-card__desc" style={{ zIndex: 2, position: 'relative' }}>{svc.desc}</p>
                    <div className="service-card__arrow" style={{ zIndex: 2, position: 'relative' }}>→</div>
                  </Link>
                </Tilt>
              </motion.div>
            ))}
          </div>

          <div className="services-cta">
            <Link to="/services" className="btn-outline">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECT WITH BEFORE/AFTER BLUEPRINT SLIDER ─── */}
      <section className="featured-project" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" style={{ opacity: 0.4 }} />
        <div className="featured-project__bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="featured-project__inner">
            <motion.div
              className="featured-project__content"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label">Featured Work</div>
              <h2 className="section-title">The <em>Azure</em> Penthouse</h2>
              <p className="section-subtitle">
                A 4,500 sq ft contemporary penthouse in South Mumbai with panoramic ocean views. Interact with our **Blueprint-to-Render slider** to see how we conceptualized and completed the layout from original draft to solid luxury.
              </p>
              <div className="project-tags" style={{ marginBottom: '2rem' }}>
                {['Contemporary', 'Luxury', 'Smart Home', 'Custom Furniture'].map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <Link to="/projects" className="btn-primary">
                <span>View All Projects</span>
                <span>→</span>
              </Link>
            </motion.div>

            <motion.div
              className="featured-project__visual"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Before/After 3D Slider */}
              <DesignBeforeAfterSlider />

              <div className="project-images-grid" style={{ marginTop: '1.5rem' }}>
                {['COMMERCIAL PROPERTIES', 'BATHROOMS'].map((cat, i) => (
                  <div key={i} className="project-img-placeholder dimension-box">
                    <div className="dimension-box__top" />
                    <div className="dimension-box__left" />
                    <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>SPEC SECTION {i+1}</div>
                    <div className="project-img-icon">◆</div>
                    <span>{cat.split(' ')[0]} Layout</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ─── TESTIMONIALS ─── */}
      <section className="testimonials" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" style={{ opacity: 0.3 }} />
        <div className="container">
          <motion.div
            className="section-header center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">Client Stories</div>
            <h2 className="section-title">What Our <em>Clients</em> Say</h2>
          </motion.div>

          <div className="testimonial-carousel">
            <motion.div
              key={activeTestimonial}
              className="testimonial-card glass-card dimension-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="dimension-box__top" />
              <div className="dimension-box__left" />
              <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>SURFACE AREA: 24m²</div>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{testimonials[activeTestimonial].quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonials[activeTestimonial].name[0]}
                </div>
                <div>
                  <div className="testimonial-name">{testimonials[activeTestimonial].name}</div>
                  <div className="testimonial-role">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </motion.div>

            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
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
            <h2 className="cta-band__title">Ready to Transform <em>Your Space?</em></h2>
            <p className="cta-band__subtitle">Book a free 30-minute consultation and let's bring your blueprint to life.</p>
            <Link to="/contact" className="btn-primary">
              <span>Start Your Journey</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
