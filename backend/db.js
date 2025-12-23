// backend/db.js (Updated structure to export models)

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

// Define Models here so they are added to sequelize.models immediately
const User = UserModel(sequelize, DataTypes);
const Maintenance = MaintenanceModelDefinition(sequelize, DataTypes);
const TenantRequest = TenantRequestModelDefinition(sequelize, DataTypes);

// Define Associations here immediately after models are defined
User.hasMany(Maintenance, { foreignKey: 'userId', as: 'maintenanceRequests' });
Maintenance.belongsTo(User, { foreignKey: 'userId', as: 'tenant' });

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    // Synchronize tables
    await User.sync();
    // REVERT FORCE: Make sure this is now { alter: true } or just sync()
    await Maintenance.sync({ alter: true }); 
    await TenantRequest.sync({ alter: true }); 

    console.log('✅ Tables created/updated successfully.');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

// Export sequelize instance and the models for use in controllers
module.exports = { sequelize, connectDB, User, Maintenance, TenantRequest };