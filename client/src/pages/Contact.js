import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ThreeScene from '../components/ThreeScene';
import './Contact.css';



const services = ['Residential Design', 'Commercial Design', 'Bathroom Design', '3D Visualization', 'Turnkey Project', 'Other'];
const budgets = ['Under ₹5 Lakhs', '₹5–15 Lakhs', '₹15–30 Lakhs', '₹30–50 Lakhs', 'Above ₹50 Lakhs'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('sending');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="page-hero__canvas">
          <ThreeScene variant="about" />
        </div>
        <div className="page-hero__content">
          <motion.div className="section-label" style={{ justifyContent: 'center' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Let's Connect</motion.div>
          <motion.h1 className="page-hero__title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Start Your <em>Design</em> Journey</motion.h1>
          <motion.p className="page-hero__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>Book a free consultation and let's create something extraordinary together.</motion.p>
        </div>
        <div className="page-hero__overlay" />
      </section>

      <section className="contact-section" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-grid">
            {/* Info */}
            <motion.div className="contact-info" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="section-label">Contact Details</div>
              <h2 className="section-title">Let's <em>Talk</em></h2>
              <p className="section-subtitle" style={{ marginBottom: '3rem' }}>We'd love to hear about your project. Reach out and our team will get back to you within 24 hours.</p>

              {[
                { label: 'Studio Addresses', value: 'Bhubaneshwar | Jamshedpur, India' },
                { label: 'Phone', value: '+91 62026 27874' },
                { label: 'Email', value: 'suprakashpradhan73@gmail.com' },
                { label: 'Working Hours', value: 'Monday – Saturday: 10am – 7pm\nSunday: By Appointment' },
              ].map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div>
                    <div className="contact-info-item__label">{item.label}</div>
                    <div className="contact-info-item__value">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* 3D decorative canvas */}
              <div className="contact-3d-box dimension-box" style={{ marginTop: '3rem' }}>
                <div className="dimension-box__top" />
                <div className="dimension-box__left" />
                <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>📐 COORDINATES [X: 12.5m, Y: 8.4m]</div>
                <ThreeScene variant="gallery" />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div className="contact-form-wrap" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {status === 'success' ? (
                <motion.div className="contact-success dimension-box" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="dimension-box__top" />
                  <div className="dimension-box__left" />
                  <div className="contact-success__icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you! We'll reach out within 24 hours to discuss your project.</p>
                  <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setStatus('idle')}>Send Another</button>
                </motion.div>
              ) : (
                <div className="dimension-box" style={{ padding: 0 }}>
                  <div className="dimension-box__top" />
                  <div className="dimension-box__left" />
                  <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>FORM DRAFT SCALE [1:100]</div>
                  <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate style={{ border: 'none', background: 'transparent' }}>
                    <h3 className="contact-form__title">Book a Free Consultation</h3>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="service">Service Interested In</label>
                        <select id="service" name="service" value={form.service} onChange={handleChange}>
                          <option value="">Select a service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="budget">Approximate Budget</label>
                      <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select budget range</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Tell Us About Your Project *</label>
                      <textarea id="message" name="message" placeholder="Describe your space, style preferences, timeline, and any specific requirements..." value={form.message} onChange={handleChange} rows={5} className={errors.message ? 'error' : ''} />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    <button type="submit" className="btn-primary contact-submit" disabled={status === 'sending'}>
                      <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                      <span>{status === 'sending' ? '⏳' : '→'}</span>
                    </button>

                    {status === 'error' && <p className="form-error" style={{ marginTop: '1rem', textAlign: 'center' }}>Something went wrong. Please try again or email us directly.</p>}
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
