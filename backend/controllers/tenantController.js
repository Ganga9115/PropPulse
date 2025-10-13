// backend/controllers/tenantController.js

const { sequelize } = require('../db');
const TenantRequestModel = require('../models/TenantRequest');
const { DataTypes } = require('sequelize');

const TenantRequest = TenantRequestModel(sequelize, DataTypes);

exports.createTenantRequest = async (req, res) => {
  try {
    const { tenantName, tenantId, email, contactNo, preferredDate, preferredTime, shopName } = req.body;

    if (!tenantName || !tenantId || !email || !contactNo || !preferredDate || !preferredTime || !shopName) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newRequest = await TenantRequest.create(req.body);

    res.status(201).json({
      message: 'Tenant request created successfully',
      data: newRequest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create tenant request' });
  }
};

exports.getAllTenantRequests = async (req, res) => {
  try {
    const tenants = await TenantRequest.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(tenants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
