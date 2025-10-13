// backend/db.js

const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./models/User');
const MaintenanceModelDefinition = require('./models/Maintenance');
const TenantRequestModelDefinition = require('./models/TenantRequest');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT || 'mysql',
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    const User = UserModel(sequelize, DataTypes);
    const Maintenance = MaintenanceModelDefinition(sequelize, DataTypes);
    const TenantRequest = TenantRequestModelDefinition(sequelize, DataTypes);

    User.hasMany(Maintenance, { foreignKey: 'userId', as: 'maintenanceRequests' });
    Maintenance.belongsTo(User, { foreignKey: 'userId', as: 'tenant' });

    await User.sync();
    await Maintenance.sync();
    await TenantRequest.sync({ alter: true }); // sync schema

    console.log('✅ Tables created/updated successfully.');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
