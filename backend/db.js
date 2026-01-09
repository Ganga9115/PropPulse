// backend/db.js (Resolved - Final Version)
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./models/User');
const MaintenanceModelDefinition = require('./models/Maintenance');
const TenantRequestModelDefinition = require('./models/TenantRequest');
const PaymentModelDefinition = require('./models/Payment');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
  }
);

// Define Models
const User = UserModel(sequelize, DataTypes);
const Maintenance = MaintenanceModelDefinition(sequelize, DataTypes);
const TenantRequest = TenantRequestModelDefinition(sequelize, DataTypes);
const Payment = PaymentModelDefinition(sequelize, DataTypes);

// Define Associations
User.hasMany(Maintenance, {
  foreignKey: 'userId',
  as: 'maintenanceRequests',
});
Maintenance.belongsTo(User, { foreignKey: 'userId', as: 'tenant' });

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    // Synchronize tables
    await User.sync({ alter: true });
    await Maintenance.sync({ alter: true });
    await TenantRequest.sync({ alter: true });
    await Payment.sync({ alter: true });

    console.log('✅ Tables created/updated successfully.');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

// Export models
module.exports = {
  sequelize,
  connectDB,
  User,
  Maintenance,
  TenantRequest,
  Payment,
};