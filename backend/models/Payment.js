// backend/models/Payment.js
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "Payment",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      paymentMethod: {
        type: DataTypes.ENUM("visa", "mastercard", "paypal", "cod"),
        allowNull: false,
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cvv: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expirationDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cardHolderName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      status: {
        type: DataTypes.ENUM("PENDING", "SUCCESS", "FAILED"),
        defaultValue: "PENDING",
      },
      transactionId: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: true,
      tableName: "payments",
    }
  );

  // Generate transaction ID before create
  Payment.beforeCreate((payment) => {
    if (!payment.transactionId) {
      payment.transactionId = `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
  });

  return Payment;
};