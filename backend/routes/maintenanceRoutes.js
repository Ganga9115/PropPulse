// routes/maintenanceRequest.js

const express = require('express');
const router = express.Router();
const { sequelize } = require('../db');
const multer = require('multer');
const path = require('path'); // <-- FIXED: Use parentheses to require the module

// --- Multer Configuration (Unchanged) ---
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Helper functions to access Models
const getMaintenanceModel = () => sequelize.models.Maintenance;
const getUserModel = () => sequelize.models.User;


// --- POST /api/maintenance/submit - Raise a new maintenance request (unchanged) ---
router.post('/submit', upload.single('photoFile'), async (req, res) => {
    const Maintenance = getMaintenanceModel();
    if (!Maintenance) return res.status(500).json({ error: 'Database model not initialized.' });

    const { tenantId, title, description, category, priority, tenantShopUnit } = req.body;
    const userId = tenantId; 
    const photoUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !description || !category || !priority || !userId) {
        return res.status(400).json({ error: 'Missing required fields: title, description, category, priority, or userId.' });
    }

    try {
        const newRequest = await Maintenance.create({
            userId,
            title,
            details: description,
            category,
            priority,
            photoUrl,
            tenantShopUnit: tenantShopUnit || 'N/A',
            status: 'Open',
        });

        res.status(201).json({ message: 'Maintenance request submitted successfully.', request: newRequest });

    } catch (error) {
        console.error('Maintenance Request Submission Error:', error);
        res.status(500).json({ error: 'Failed to submit request: Internal Server Error.', details: error.message });
    }
});

// --- GET /api/maintenance/admin - Get all maintenance requests for admin (unchanged) ---
router.get('/admin', async (req, res) => {
    const Maintenance = getMaintenanceModel();
    const User = getUserModel();

    if (!Maintenance || !User) return res.status(500).json({ error: 'Database model not initialized.' });

    try {
        const requests = await Maintenance.findAll({
            include: [{
                model: User,
                as: 'tenant', 
                attributes: ['id', 'username', 'email'] 
            }],
            order: [['createdAt', 'DESC']],
        });
        res.status(200).json(requests);
    } catch (error) {
        console.error('Error fetching maintenance requests:', error);
        res.status(500).json({ error: 'Failed to fetch maintenance requests.' });
    }
});

// --- GET /api/maintenance/tenant/:userId - Get requests specific to one tenant (unchanged) ---
router.get('/tenant/:userId', async (req, res) => {
    const Maintenance = getMaintenanceModel();
    if (!Maintenance) return res.status(500).json({ error: 'Database model not initialized.' });

    const { userId } = req.params;

    try {
        const requests = await Maintenance.findAll({
            where: { userId: userId }, 
            order: [['createdAt', 'DESC']],
        });
        res.status(200).json(requests);
    } catch (error) {
        console.error('Error fetching tenant maintenance requests:', error);
        res.status(500).json({ error: 'Failed to fetch tenant requests.' });
    }
});


// --- PUT /api/maintenance/:id - Update status/assignment (CRITICAL FIX) ---
router.put('/:id', async (req, res) => {
    const Maintenance = getMaintenanceModel();
    if (!Maintenance) return res.status(500).json({ error: 'Database model not initialized.' });

    const { id } = req.params;
    // Frontend sends 'assignedVendor', Backend expects 'assignedTo'
    const { status, assignedVendor, expectedVisit } = req.body; 

    // Build the fields to update
    const updateFields = {};
    if (status) updateFields.status = status;
    
    // CRITICAL MAPPING: Map frontend name (assignedVendor) to the model column name (assignedTo)
    if (assignedVendor !== undefined) updateFields.assignedTo = assignedVendor; 
    
    if (expectedVisit !== undefined) updateFields.expectedVisit = expectedVisit; 

    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No update fields provided.' });
    }
    
    // Validate required fields only if status is changing to 'Assigned'
    if (status === 'Assigned' && (!assignedVendor || !expectedVisit)) {
         return res.status(400).json({ error: 'Vendor name and expected visit date are required for assignment.' });
    }

    try {
        const [rowsUpdated] = await Maintenance.update(updateFields, {
            where: { id: id },
        });

        if (rowsUpdated === 0) {
            return res.status(404).json({ error: 'Maintenance request not found.' });
        }

        const updatedRequest = await Maintenance.findByPk(id);
        res.status(200).json({ 
            message: 'Maintenance request updated successfully.', 
            request: updatedRequest 
        });

    } catch (error) {
        console.error('Maintenance Request Update Error:', error);
        res.status(500).json({ 
            error: 'Failed to update request: Internal Server Error.', 
            details: error.message 
        });
    }
});

module.exports = router;
