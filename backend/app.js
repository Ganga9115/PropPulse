<<<<<<< Updated upstream
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sequelize = require('./db');
const User = require('./models/User');
=======
// backend/app.js (Updated with Payment routes)
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { connectDB } = require("./db");
const userRoutes = require("./routes/userRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
const tenantRoutes = require("./routes/tenantRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
>>>>>>> Stashed changes

dotenv.config();
const app = express();
<<<<<<< Updated upstream
app.use(cors());
app.use(express.json());

// Sync database
sequelize.sync()
    .then(() => console.log('Tables synced'))
    .catch(err => console.log(err));

// Signup
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: 'User created', user: { id: user.id, username, email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user.id, username: user.username, email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to database
connectDB();

// Root endpoint
app.get("/", (req, res) =>
  res.send("PropPulse Backend API is running!")
);

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/tenants", tenantRoutes);
app.use("/api/payments", paymentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? {} : err,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () =>
  console.log(`✅ Server running on port ${port}`)
);
>>>>>>> Stashed changes
