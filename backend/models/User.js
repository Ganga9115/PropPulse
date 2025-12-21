// backend/models/User.js

module.exports = (sequelize, DataTypes) => {
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

    // The association logic is correctly centralized in db.js, so this can be empty or omitted.
    // User.associate = function(models) {
    //     User.hasMany(models.Maintenance, { foreignKey: 'userId', as: 'maintenanceRequests' });
    // };

    return User;
};