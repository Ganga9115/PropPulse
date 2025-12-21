// backend/controllers/maintenanceController.js (FIXED)

// Import the pre-associated model instances from db.js
const { sequelize, Maintenance, User } = require('../db'); 
const multer = require('multer');
const path = require('path');

// --- Multer Configuration ---
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


// --- 2. Controller Functions (Exported) ---

// POST /api/maintenance/
exports.submitMaintenanceRequest = [
    // 2.1. Apply Multer middleware before the async function
    upload.single('photoFile'), 
    async (req, res) => {
        const { tenantId, title, description, category, priority, tenantShopUnit } = req.body;
        const userId = tenantId; 
        const photoUrl = req.file ? `/uploads/${req.file.filename}` : null;

        if (!title || !description || !category || !priority || !userId) {
            return res.status(400).json({ error: 'Missing required fields.' });
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

            res.status(201).json({ 
                message: 'Maintenance request submitted successfully.', 
                data: newRequest, 
            });

        } catch (error) {
            console.error('Submission Error:', error);
            res.status(500).json({ error: 'Failed to submit request.' });
        }
    }
];

// GET /api/maintenance/admin
exports.getAllMaintenanceRequests = async (req, res) => {
    // User and Maintenance are imported directly
    try {
        const requests = await Maintenance.findAll({
            include: [{
                model: User,
                as: 'tenant', // Alias must match the association defined in db.js
                attributes: ['id', 'username', 'email'] 
            }],
            order: [['createdAt', 'DESC']],
        });
        res.status(200).json(requests);
    } catch (error) {
        console.error('Fetch Admin Error:', error);
        res.status(500).json({ error: error.message });
    }
};

// GET /api/maintenance/tenant/:userId
exports.getTenantMaintenanceRequests = async (req, res) => {
    const { userId } = req.params;

    try {
        const requests = await Maintenance.findAll({
            where: { userId: userId }, 
            order: [['createdAt', 'DESC']],
        });
        res.status(200).json(requests);
    } catch (error) {
        console.error('Fetch Tenant Error:', error);
        res.status(500).json({ error: error.message });
    }
};

// PUT /api/maintenance/:id
exports.updateMaintenanceRequest = async (req, res) => {
    const { id } = req.params;
    const { status, assignedVendor, expectedVisit } = req.body; 

    // Build the fields to update
    const updateFields = {};
    if (status) updateFields.status = status;
    if (assignedVendor !== undefined) updateFields.assignedTo = assignedVendor; // Mapping
    if (expectedVisit !== undefined) updateFields.expectedVisit = expectedVisit; 

    if (Object.keys(updateFields).length === 0) {
        return res.status(400).json({ error: 'No update fields provided.' });
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
            data: updatedRequest 
        });

    } catch (error) {
        console.error('Update Error:', error);
        res.status(500).json({ error: 'Failed to update request.' });
    }
};