const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {   // 👈 Added role field
        type: DataTypes.ENUM('tenant', 'admin'),
        allowNull: false,
        defaultValue: 'tenant'
    }
}, {
    timestamps: true
});

module.exports = User;
