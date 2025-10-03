// backend/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { connectDB } = require('./db');
const userRoutes = require('./routes/userRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes'); // NEW: Import Maintenance Routes

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests from your frontend
app.use(bodyParser.json()); // To parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // To parse application/x-www-form-urlencoded
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Connect to Database and Sync Models
connectDB();

// Root route
app.get('/', (req, res) => {
    res.send('PropPulse Backend API is running!');
});

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/maintenance', maintenanceRoutes); // NEW: Link Maintenance Routes

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
