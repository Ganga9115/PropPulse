// backend/models/User.js
// This model uses the functional approach to avoid circular dependencies.

module.exports = (sequelize, DataTypes) => {
    // DataTypes is now passed as the second argument and can be used directly.
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('tenant', 'admin'),
            defaultValue: 'tenant',
            allowNull: false,
        },
    }, {
        tableName: 'Users',
        timestamps: true,
    });

    // We can define associations here if needed, accessing other models via sequelize.models
    // Example:
    // User.associate = function(models) {
    //     User.hasMany(models.Maintenance, { foreignKey: 'userId', as: 'maintenanceRequests' });
    // };

    return User;
};
