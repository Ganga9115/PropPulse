// backend/routes/userRoutes.js (FINALIZED CLEAN CODE)

const express = require('express');
const router = express.Router();
// Import the controller functions (which handles the logic)
const userController = require('../controllers/userController'); 

// The userController must now handle all the logic, including model access.
router.post('/signup', userController.registerUser); 
router.post('/login', userController.loginUser); 

// --- Placeholder for other routes ---
router.get('/', (req, res) => {
    res.send("User API endpoint working.");
});

module.exports = router;