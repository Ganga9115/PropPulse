// backend/routes/userRoutes.js (FINALIZED CODE)

const express = require('express');
const router = express.Router();
const { sequelize } = require('../db'); // Only import the sequelize instance

// Helper function to access the User model (ensures it's ready after DB connection)
const getUserModel = () => {
    const User = sequelize.models.User;
    if (!User) {
        // This should only happen if the DB connection failed or models weren't defined.
        console.error("Sequelize Model 'User' not found in models object.");
    }
    return User;
};

// --- User Sign-Up Route ---
router.post('/signup', async (req, res) => {
    const User = getUserModel();
    if (!User) return res.status(500).json({ error: 'Database model not initialized.' });
    
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
        return res.status(400).json({ error: 'All fields are required for sign-up.' });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: 'A user with this email already exists.' });
        }

        // WARNING: Store as plain text for now, replace with HASHED password later.
        const newUser = await User.create({
            username,
            email,
            password: password, 
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
});

// --- User Login Route (NEWLY ADDED) ---
router.post('/login', async (req, res) => {
    const User = getUserModel();
    if (!User) return res.status(500).json({ error: 'Database model not initialized.' });

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        // 1. Find the user by email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // 2. Compare password (WARNING: This must be updated to compare with a HASH!)
        const isPasswordValid = (user.password === password); 

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // 3. Successful login (Simulated token is often returned here, but for now, just user info)
        res.status(200).json({
            message: 'Login successful.',
            // Return essential user info for frontend session
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
            // Include a placeholder token to prevent frontend errors if it expects one
            token: 'simulated_jwt_token_for_user_' + user.id
        });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Login failed.', details: error.message });
    }
});

// --- Placeholder for other routes ---
router.get('/', (req, res) => {
    res.send("User API endpoint working.");
});


module.exports = router;
