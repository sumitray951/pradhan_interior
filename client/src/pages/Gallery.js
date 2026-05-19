import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';
import './Gallery.css';

const categories = ['All', 'Bathrooms', 'Commercial Properties', 'Residential Properties'];

// Generate local image paths from client/public folders
const generateImages = () => {
  const images = [];

  // Map the display category to the public folder name
  const folderMap = {
    'Bathrooms': 'bathrooms',
    'Commercial Properties': 'commercial projects',
    'Residential Properties': 'residential projects'
  };

  // Filenames taken from client/public (kept in the order you provided)
  const bathFiles = [
    'WhatsApp Image 2026-05-18 at 10.37.32 (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.32 (2).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.32 (3).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.32 (4).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.32 (5).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.32 (6).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.32 (7).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.32 (8).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.32.jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.47 (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.47 (2).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.47 (3).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.47 (4).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.47 (5).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.47 (6).jpeg',
    'WhatsApp Image 2026-05-18 at 10.37.47.jpeg'
  ];

  const commFiles = [
    'WhatsApp Image 2026-05-18 at 10.36.51 (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (10).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (11).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (12).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (13).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (14).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (15).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (16).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (17).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (18).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (19).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (2).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (20).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (21).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (22).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (23).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (24).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (25).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (26).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (27).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (28).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (29).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (3).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (30).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (31).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (32).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (33).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (34).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (35).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (36).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (37).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (38).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (39).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (4).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (40).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (41).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (42).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (43).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (44).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (45).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (46).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (47).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (48).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (49).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (5).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (50).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (51).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (52).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (53).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (54).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (55).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (56).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (57).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (58).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (59).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (6).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (60).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (61).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (7).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (8).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51 (9).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.51.jpeg'
  ];

  const resFiles = [
    'WhatsApp Image 2026-05-18 at 10.33.40 (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (10).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (11).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (12).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (13).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (14).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (15).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (16).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (17).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (18).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (19).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (2).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (20).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (21).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (22).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (23).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (24).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (25).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (26).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (27).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (28).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (29).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (3).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (30).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (31).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (32).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (33).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (34).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (35).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (36).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (37).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (38).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (39).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (4).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (40).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (5).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (6).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (7).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (8).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40 (9).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.40.jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (10).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (11).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (12).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (13).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (14).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (15).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (16).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (17).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (18).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (19).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (2).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (20).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (21).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (22).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (23).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (24).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (25).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (26).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (27).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (28).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (29).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (3).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (30).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (31).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (32).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (33).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (34).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (35).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (36).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (37).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (38).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (39).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (4).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (40).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (5).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (6).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (7).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (8).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41 (9).jpeg',
    'WhatsApp Image 2026-05-18 at 10.33.41.jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (10).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (11).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (12).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (13).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (14).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (15).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (16).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (17).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (18).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (19).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (2).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (20).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (21).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (22).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (23).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (24).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (25).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (26).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (27).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (28).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (29).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (3).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (30).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (31).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (32).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (33).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (34).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (35).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (36).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (37).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (38).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (39).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (4).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (40).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (41).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (42).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (43).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (44).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (45).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (46).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (47).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (48).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (49).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (5).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (50).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (51).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (52).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (53).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (6).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (7).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (8).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08 (9).jpeg',
    'WhatsApp Image 2026-05-18 at 10.36.08.jpeg'
  ];

  // Build image objects for each category
  bathFiles.forEach((f, i) => {
    const folder = folderMap['Bathrooms'];
    images.push({
      id: `bath-${i}`,
      src: `/${encodeURIComponent(folder)}/${encodeURIComponent(f)}`,
      fileName: f,
      folder,
      category: 'Bathrooms',
      title: `Luxury Bathroom ${i + 1}`,
      span: i % 5 === 0 ? 'wide' : 'normal',
      w: '3.2m',
      h: '4.5m'
    });
  });

  commFiles.forEach((f, i) => {
    const folder = folderMap['Commercial Properties'];
    images.push({
      id: `comm-${i}`,
      src: `/${encodeURIComponent(folder)}/${encodeURIComponent(f)}`,
      fileName: f,
      folder,
      category: 'Commercial Properties',
      title: `Commercial Space ${i + 1}`,
      span: i % 4 === 1 ? 'tall' : 'normal',
      w: '12.4m',
      h: '8.8m'
    });
  });

  resFiles.forEach((f, i) => {
    const folder = folderMap['Residential Properties'];
    images.push({
      id: `res-${i}`,
      src: `/${encodeURIComponent(folder)}/${encodeURIComponent(f)}`,
      fileName: f,
      folder,
      category: 'Residential Properties',
      title: `Residential Project ${i + 1}`,
      span: i % 6 === 0 ? 'wide' : 'normal',
      w: '9.0m',
      h: '7.2m'
    });
  });

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

  // For image loading effect
  const [loadedImages, setLoadedImages] = useState({});

  // Page transition effect
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 }
  };

  return (
    <motion.div
      className="gallery-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
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
                      style={{
                        filter: loadedImages[img.id] ? 'none' : 'blur(12px)',
                        opacity: loadedImages[img.id] ? 1 : 0.5,
                        transition: 'filter 0.5s, opacity 0.5s'
                      }}
                      onLoad={() => setLoadedImages(prev => ({ ...prev, [img.id]: true }))}
                      onError={(e) => {
                        // final fallback: hide the broken img and show fallback UI
                        const target = e.target;
                        target.style.display = 'none';
                        if (target.nextSibling) target.nextSibling.style.display = 'flex';
                      }}
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
    </motion.div>
  );
}
