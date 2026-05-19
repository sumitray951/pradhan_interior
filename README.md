# Aura Interiors - The Pradhan Design Studio

A luxurious interior design portfolio website for The Pradhan Design Studio.

## Features

- Responsive design with React
- 3D visualization using Three.js
- Interactive gallery with animations
- Contact form with email integration
- Services showcase
- About and portfolio pages

## Project Structure

```
├── client/              # React frontend
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   └── App.js      # Main app component
│   └── package.json
├── server/              # Express backend
│   ├── index.js        # Server entry point
│   └── package.json
├── IMAGES/             # Portfolio images
└── package.json        # Root package.json
```

## Installation

1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

   This will start both the React frontend (port 3000) and Express backend (port 5000).

## Available Scripts

### Root Level
- `npm start` - Start both client and server
- `npm run client` - Start React development server only
- `npm run server` - Start Express server only
- `npm run install-all` - Install dependencies for root, client, and server

### Client
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

### Server
- `npm start` - Start server
- `npm run dev` - Start with nodemon (auto-reload)

## Environment

The client is configured to proxy API requests to `http://localhost:5000`.

## Technologies Used

- **Frontend:** React 18, Framer Motion, Three.js, React Router
- **Backend:** Express.js, CORS, Nodemailer
- **Build:** Create React App, Webpack

## Contact

For inquiries about The Pradhan Design Studio:
- Email: suprakashpradhan73@gmail.com
- Phone: +91 62026 27874
- Location: Bhubaneshwar | Jamshedpur, India
