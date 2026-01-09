// backend/app.js (Resolved - Final Version)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { connectDB } = require('./db');
const userRoutes = require('./routes/userRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to database
connectDB();

// Root endpoint
app.get('/', (req, res) => res.send('PropPulse Backend API is running!'));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/tenants', tenantRoutes);
app.use('/api/payments', paymentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => console.log(`✅ Server running on port ${port}`));