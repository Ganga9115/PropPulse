// backend/models/Maintenance.js

// We no longer import sequelize here. We will export a function 
// that accepts the sequelize instance and DataTypes when called.

module.exports = (sequelize, DataTypes) => {
    const Maintenance = sequelize.define('Maintenance', {
        maintenanceId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // Function to generate a sequential ID based on the current date or count
            defaultValue: () => `MTN-${Math.floor(Math.random() * 10000)}`,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', 
                key: 'id',
            },
        },
        tenantShopUnit: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        priority: {
            type: DataTypes.ENUM('High', 'Medium', 'Low'),
            allowNull: false,
        },
        photoUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('Open', 'Assigned', 'In Progress', 'Completed', 'Closed'),
            defaultValue: 'Open',
            allowNull: false,
        },
        assignedTo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'MaintenanceRequests',
    });

    return Maintenance;
};
