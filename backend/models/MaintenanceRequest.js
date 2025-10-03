// backend/models/MaintenanceRequest.js (FINALIZED CODE)

// Import the Sequelize library (to get DataTypes) and the sequelize instance (which we don't need directly here, but keeps the function structure consistent)
const { Sequelize } = require('../db'); 

// The model function now only needs to define the model
module.exports = (sequelize) => {
    // CRITICAL FIX: Use the DataTypes object from the imported Sequelize library
    const { DataTypes } = Sequelize; 

    const MaintenanceRequest = sequelize.define('MaintenanceRequest', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        tenantId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        priority: {
            type: DataTypes.ENUM('Low', 'Medium', 'High'),
            allowNull: false,
        },
        photoURL: { 
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('Open', 'Assigned', 'In Progress', 'Completed', 'Closed'),
            defaultValue: 'Open', 
            allowNull: false,
        },
        assignedVendor: { 
            type: DataTypes.STRING,
            allowNull: true,
        },
        expectedVisit: { 
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        tableName: 'maintenance_requests'
    });

    return MaintenanceRequest;
};