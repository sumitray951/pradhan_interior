import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.png" alt="The Pradhan Design Studio" className="footer__logo-img" />
              <div>
                <div className="footer__logo-name">THE PRADHAN</div>
                <div className="footer__logo-sub">DESIGN STUDIO</div>
              </div>
            </div>
            <p className="footer__tagline">
              Crafting spaces that transcend the ordinary. Where luxury meets purpose, and design becomes art.
            </p>
            <div className="footer__social">
              <a href="https://www.instagram.com/the_pradhan_design_studio?igsh=ZDdjaXRkdGFuMnlvv" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__nav">
            <h4 className="footer__heading">Navigation</h4>
            <ul>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([path, label]) => (
                <li key={path}><Link to={path} className="footer__link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__nav">
            <h4 className="footer__heading">Services</h4>
            <ul>
              {['Residential Design', 'Commercial Design', 'Bathroom Design', '3D Visualization', 'Turnkey Projects'].map(s => (
                <li key={s}><a href="/services" className="footer__link">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__heading">Get In Touch</h4>
            <div className="footer__contact-items">
              <div className="footer__contact-item">
                <span>Bhubaneshwar | Jamshedpur, India</span>
              </div>
              <div className="footer__contact-item">
                <span>+91 62026 27874</span>
              </div>
              <div className="footer__contact-item">
                <span>suprakashpradhan73@gmail.com</span>
              </div>
              <div className="footer__contact-item">
                <span>Mon – Sat: 10am – 7pm</span>
              </div>
            </div>
            <Link to="/contact" className="footer__cta">Book a Free Consultation</Link>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} The Pradhan Design Studio. All rights reserved.</p>
          <p>Designed with <span style={{ color: 'var(--color-gold)' }}>♦</span> for extraordinary living</p>
        </div>
      </div>
    </footer>
  );
}
