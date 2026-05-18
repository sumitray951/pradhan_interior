import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';
import './Gallery.css';

const categories = ['All', 'Bathrooms', 'Commercial Properties', 'Residential Properties'];

// Generate local image paths
const generateImages = () => {
  const images = [];
  const bathFiles = [
    'WhatsApp Image 2026-05-18 at 10.37.34 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.35 AM (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.35 AM (2).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.35 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.36 AM (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.36 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.37 AM (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.37 AM (2).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.37 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.48 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.49 AM (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.49 AM.jpeg',
  ];
  const commFiles = [
    'WhatsApp Image 2026-05-18 at 11.13.22 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.23 AM (1).jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.23 AM (2).jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.23 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.24 AM (1).jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.24 AM (2).jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.24 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.25 AM (1).jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.25 AM (2).jpeg',
    'WhatsApp Image 2026-05-18 at 11.13.25 AM.jpeg',
  ];

  bathFiles.forEach((f, i) => images.push({ id: `bath-${i}`, src: `/images/BATHROOMS/${encodeURIComponent(f)}`, category: 'Bathrooms', title: `Luxury Bathroom ${i + 1}`, span: i % 5 === 0 ? 'wide' : 'normal', w: '3.2m', h: '4.5m' }));
  commFiles.forEach((f, i) => images.push({ id: `comm-${i}`, src: `/images/COMMERCIAL PROPERTIES/${encodeURIComponent(f)}`, category: 'Commercial Properties', title: `Commercial Space ${i + 1}`, span: i % 4 === 1 ? 'tall' : 'normal', w: '12.4m', h: '8.8m' }));
  return images;
};

const allImages = generateImages();



export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [images, setImages] = useState(allImages);

  useEffect(() => {
    if (activeCategory === 'All') setImages(allImages);
    else setImages(allImages.filter(img => img.category === activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="page-hero__canvas">
          <ThreeScene variant="gallery" />
        </div>
        <div className="page-hero__content">
          <motion.div className="section-label" style={{ justifyContent: 'center' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Our Portfolio
          </motion.div>
          <motion.h1 className="page-hero__title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            A Gallery of <em>Extraordinary</em> Spaces
          </motion.h1>
          <motion.p className="page-hero__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Explore our curated portfolio of luxury interiors — each space a unique story of design excellence.
          </motion.p>
        </div>
        <div className="page-hero__overlay" />
      </section>

      {/* Filter Tabs */}
      <section className="gallery-section" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="gallery-filters" style={{ marginBottom: '4rem' }}>
            {categories.map(cat => (
              <motion.button
                key={cat}
                className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div className="gallery-grid" layout>
            <AnimatePresence>
              {images.map((img, i) => (
                <motion.div
                  key={img.id}
                  className={`gallery-item gallery-item--${img.span || 'normal'} dimension-box`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  layout
                  onClick={() => setLightbox(img)}
                  whileHover={{ scale: 1.02 }}
                  style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '6px', background: 'var(--color-surface)', marginBottom: '1.5rem' }}
                >
                  <div className="dimension-box__top" />
                  <div className="dimension-box__left" />
                  <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px', fontSize: '0.45rem' }}>GRID {img.w || '4.5m'}</div>
                  <div className="dimension-label-overlay" style={{ bottom: '-10px', right: '10px', fontSize: '0.42rem' }}>ELEV {img.h || '3.2m'}</div>
                  
                  <div className="gallery-item__inner" style={{ borderRadius: 'var(--radius-md)' }}>
                    <img
                      src={img.src}
                      alt={img.title}
                      className="gallery-item__img"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                    <div className="gallery-item__fallback" style={{ display: 'none' }}>
                      <span>◆</span>
                      <p>{img.category}</p>
                    </div>
                    <div className="gallery-item__overlay">
                      <div className="gallery-item__info">
                        <p className="gallery-item__cat">{img.category}</p>
                        <h3 className="gallery-item__title">{img.title}</h3>
                      </div>
                      <div className="gallery-item__zoom">⊕</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {images.length === 0 && (
            <div className="gallery-empty">
              <p>No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox__inner dimension-box"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}
            >
              <div className="dimension-box__top" />
              <div className="dimension-box__left" />
              <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>📐 SPEC SCALE [FULL DISPLAY]</div>
              <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
              <img src={lightbox.src} alt={lightbox.title} className="lightbox__img" style={{ borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)' }} />
              <div className="lightbox__caption" style={{ padding: '1.5rem' }}>
                <span className="lightbox__cat">{lightbox.category}</span>
                <h3 className="lightbox__title">{lightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
