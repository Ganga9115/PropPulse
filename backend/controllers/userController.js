// backend/controllers/userController.js

const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/User'); 

// Ensure the model is accessed after sequelize connection and model definition
const User = UserModel(sequelize, DataTypes); 

// ------------------------------------
// 1. REGISTER USER
// ------------------------------------
exports.registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: 'A user with this email already exists.' });
        }

        // --- CRITICAL SECURITY STEP: HASH THE PASSWORD ---
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword, // Store the HASH
            role: role || 'tenant',
        });

        res.status(201).json({ 
            message: 'User registered successfully. Redirecting to login...', 
            user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role } 
        });

    } catch (error) {
        console.error('Sign-Up Error:', error);
        res.status(500).json({ error: 'Failed to register user.', details: error.message });
    }
};

// ------------------------------------
// 2. LOGIN USER
// ------------------------------------
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // --- CRITICAL SECURITY STEP: COMPARE WITH HASH ---
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // Successful login
        res.status(200).json({
            message: 'Login successful.',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                // Ensure role matches frontend check (lowercase)
                role: user.role.toLowerCase(), 
            },
            token: 'simulated_jwt_token_for_user_' + user.id // Placeholder token
        });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Login failed.', details: error.message });
    }
};