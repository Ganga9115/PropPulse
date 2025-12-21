// backend/routes/maintenanceRoutes.js
// Matches the structure of backend/routes/tenantRoutes.js

const express = require('express');
const router = express.Router();

// 1. Import all controller functions
const { 
    submitMaintenanceRequest, // Mapped from your router.post('/submit')
    getAllMaintenanceRequests, // Mapped from your router.get('/admin')
    getTenantMaintenanceRequests, // Mapped from your router.get('/tenant/:userId')
    updateMaintenanceRequest // Mapped from your router.put('/:id')
} = require('../controllers/maintenanceController'); 

// Note: Multer/upload config will be in the controller.

// 2. Define the routes
router.post('/', submitMaintenanceRequest); // Use simpler '/' path
router.get('/admin', getAllMaintenanceRequests);
router.get('/tenant/:userId', getTenantMaintenanceRequests);
router.put('/:id', updateMaintenanceRequest);

module.exports = router;