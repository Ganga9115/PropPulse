// backend/db.js

const { Sequelize, DataTypes } = require('sequelize'); // CRITICAL: Import DataTypes here
const UserModel = require('./models/User'); // Assumes User model exports a function
const MaintenanceModelDefinition = require('./models/Maintenance'); // Assumes Maintenance model exports a function

// Initialize Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Set to true to see SQL queries
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected...');

        // 1. Initialize Models
        // We call the imported functions, passing the sequelize instance and DataTypes.
        // This resolves the circular dependency issue.
        const User = UserModel(sequelize, DataTypes); 
        const Maintenance = MaintenanceModelDefinition(sequelize, DataTypes); 
        
        // 2. Define Associations (Relationships)
        // A user (tenant) can have many maintenance requests.
        // The foreign key 'userId' is defined in the Maintenance model.
        User.hasMany(Maintenance, { foreignKey: 'userId', as: 'maintenanceRequests' });
        Maintenance.belongsTo(User, { foreignKey: 'userId', as: 'tenant' });
        
        // 3. Update existing data if needed
        try {
            await sequelize.query("UPDATE MaintenanceRequests SET status = 'Open' WHERE status = 'Pending'");
        } catch (err) {
            console.log('No existing data to update or table does not exist yet.');
        }

        // 4. Sync the database (creates/updates tables)
        await sequelize.sync({ alter: true });
        console.log('Tables updated/created successfully.');

    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
