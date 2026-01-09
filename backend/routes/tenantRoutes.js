// backend/routes/tenantRoutes.js

const express = require('express');
const router = express.Router();
const { createTenantRequest, getAllTenantRequests } = require('../controllers/tenantController');

router.post('/', createTenantRequest);
router.get('/', getAllTenantRequests);

module.exports = router;
