const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static images from the IMAGES folder
app.use('/images', express.static(path.join(__dirname, '../IMAGES')));

// API: Get all gallery images grouped by category
app.get('/api/gallery', (req, res) => {
  const imagesDir = path.join(__dirname, '../IMAGES');
  const categories = {};

  try {
    const folders = fs.readdirSync(imagesDir).filter(f =>
      fs.statSync(path.join(imagesDir, f)).isDirectory()
    );

    folders.forEach(folder => {
      const folderPath = path.join(imagesDir, folder);
      const files = fs.readdirSync(folderPath).filter(f =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(f)
      );
      categories[folder] = files.map(file => ({
        filename: file,
        url: `/images/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
        category: folder
      }));
    });

    res.json({ success: true, categories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API: Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message, service } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  // Log submission (in production, send email via nodemailer)
  console.log('📩 New Contact Submission:', { name, email, phone, message, service });

  res.json({
    success: true,
    message: 'Thank you! We will contact you within 24 hours.'
  });
});

// API: Services data
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      title: 'Residential Design',
      description: 'Transform your home into a masterpiece with our bespoke residential interior design services.',
      icon: 'home',
      price: 'Starting from ₹50,000',
      features: ['Space Planning', 'Furniture Selection', 'Color Consultation', '3D Visualization', 'Project Management']
    },
    {
      id: 2,
      title: 'Commercial Design',
      description: 'Create inspiring workspaces and commercial environments that drive productivity and success.',
      icon: 'building',
      price: 'Starting from ₹1,50,000',
      features: ['Office Design', 'Retail Spaces', 'Hospitality Design', 'Brand Integration', 'Turnkey Solutions']
    },
    {
      id: 3,
      title: 'Kitchen Design',
      description: 'Craft the heart of your home with our premium modular kitchen design solutions.',
      icon: 'chef-hat',
      price: 'Starting from ₹75,000',
      features: ['Modular Kitchens', 'Custom Cabinetry', 'Appliance Selection', 'Storage Solutions', 'Lighting Design']
    },
    {
      id: 4,
      title: 'Bathroom Design',
      description: 'Elevate your daily rituals with luxurious bathroom designs that combine form and function.',
      icon: 'droplets',
      price: 'Starting from ₹40,000',
      features: ['Spa-Like Retreats', 'Fixture Selection', 'Tile Design', 'Vanity Design', 'Smart Bathroom Features']
    },
    {
      id: 5,
      title: '3D Visualization',
      description: 'See your space before it\'s built with our photorealistic 3D rendering and virtual tours.',
      icon: 'cube',
      price: 'Starting from ₹15,000',
      features: ['Photorealistic Renders', 'Virtual Walkthroughs', 'Material Visualization', 'Lighting Simulation', 'VR Experience']
    },
    {
      id: 6,
      title: 'Turnkey Projects',
      description: 'Complete end-to-end interior design and execution from concept to completion.',
      icon: 'key',
      price: 'Custom Pricing',
      features: ['Full Project Management', 'Contractor Coordination', 'Quality Control', 'Timely Delivery', 'Post-handover Support']
    }
  ];

  res.json({ success: true, services });
});

// API: Projects/Portfolio data
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'The Azure Penthouse',
      category: 'RESIDENTIAL PROPERTIES',
      location: 'Mumbai, Maharashtra',
      area: '4,500 sq ft',
      year: '2024',
      description: 'A contemporary penthouse with panoramic ocean views, featuring custom furniture and smart home integration.',
      tags: ['Luxury', 'Contemporary', 'Smart Home']
    },
    {
      id: 2,
      title: 'Serene Corporate Hub',
      category: 'COMMERCIAL PROPERTIES',
      location: 'Bangalore, Karnataka',
      area: '12,000 sq ft',
      year: '2024',
      description: 'A dynamic workspace designed to foster creativity and collaboration for a leading tech company.',
      tags: ['Corporate', 'Modern', 'Collaborative']
    },
    {
      id: 3,
      title: 'The Heritage Villa',
      category: 'RESIDENTIAL PROPERTIES',
      location: 'Jaipur, Rajasthan',
      area: '8,000 sq ft',
      year: '2023',
      description: 'A stunning fusion of traditional Rajasthani architecture with modern luxuries and amenities.',
      tags: ['Heritage', 'Fusion', 'Luxury']
    },
    {
      id: 4,
      title: 'Minimalist Kitchen Suite',
      category: 'KITCHENS',
      location: 'Delhi NCR',
      area: '450 sq ft',
      year: '2024',
      description: 'A sleek German-engineered modular kitchen with integrated appliances and hidden storage solutions.',
      tags: ['Minimalist', 'Modular', 'German Engineering']
    },
    {
      id: 5,
      title: 'Spa Bathroom Retreat',
      category: 'BATHROOMS',
      location: 'Pune, Maharashtra',
      area: '280 sq ft',
      year: '2023',
      description: 'A luxurious spa-inspired bathroom with imported marble, rain shower, and jacuzzi.',
      tags: ['Spa', 'Luxury', 'Marble']
    },
    {
      id: 6,
      title: 'Boutique Hotel Lobby',
      category: 'COMMERCIAL PROPERTIES',
      location: 'Goa',
      area: '3,200 sq ft',
      year: '2023',
      description: 'An opulent hotel lobby that blends colonial-era charm with contemporary design aesthetics.',
      tags: ['Hospitality', 'Opulent', 'Colonial']
    }
  ];

  res.json({ success: true, projects });
});

app.listen(PORT, () => {
  console.log(`🚀 Aura Interiors Server running on http://localhost:${PORT}`);
});
