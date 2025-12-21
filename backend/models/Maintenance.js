// backend/models/Maintenance.js
// Adopt the (sequelize, DataTypes) signature for consistency.

module.exports = (sequelize, DataTypes) => {
    const Maintenance = sequelize.define('Maintenance', {
        id: { // Change to 'id' for consistency with TenantRequest model
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        // Remove the separate 'maintenanceId' field if 'id' will be the primary key.
        // If you still need a custom string ID, keep it, but use 'id' as primary key.
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // Associations should be set up in a separate db/index.js file,
            // but for now, we leave the reference:
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
            type: DataTypes.TEXT, // Using 'details' as in your current code
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
        assignedTo: { // Using 'assignedTo' as in your current code
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'MaintenanceRequests',
        // Add timestamps to match your teammate's default behavior
        timestamps: true, 
    });

    return Maintenance;
};