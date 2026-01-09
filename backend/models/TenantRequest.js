// backend/models/TenantRequest.js

module.exports = (sequelize, DataTypes) => {
  const TenantRequest = sequelize.define('TenantRequest', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tenantName: { type: DataTypes.STRING, allowNull: false },
    tenantId: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    contactNo: { type: DataTypes.STRING, allowNull: false },
    preferredDate: { type: DataTypes.DATEONLY, allowNull: false },
    preferredTime: { type: DataTypes.STRING, allowNull: false },
    shopName: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('Pending', 'Accepted', 'Declined'), defaultValue: 'Pending' },
  });
  return TenantRequest;
};
