// backend/controllers/paymentController.js
const { Payment } = require("../db");

// Validate card number using Luhn algorithm
const validateCardNumber = (cardNumber) => {
  const digits = cardNumber.replace(/\D/g, "");
  if (digits.length < 13 || digits.length > 19) return false;

  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

exports.createPayment = async (req, res) => {
  try {
    const {
      paymentMethod,
      cardNumber,
      cvv,
      expirationDate,
      cardHolderName,
      amount,
    } = req.body;

    // Validate required fields
    if (!paymentMethod || !amount) {
      return res
        .status(400)
        .json({ message: "Payment method and amount are required" });
    }

    // Validate amount is positive
    if (amount <= 0) {
      return res.status(400).json({ message: "Amount must be greater than 0" });
    }

    // If not COD, validate card details
    if (paymentMethod !== "cod") {
      if (!cardNumber || !cvv || !expirationDate || !cardHolderName) {
        return res.status(400).json({ message: "Card details are required" });
      }

      // Validate card number format
      if (!validateCardNumber(cardNumber)) {
        return res.status(400).json({ message: "Invalid card number" });
      }

      // Validate CVV
      if (!/^\d{3,4}$/.test(cvv)) {
        return res.status(400).json({ message: "Invalid CVV" });
      }

      // Validate expiration date format (MM/YY)
      if (!/^\d{2}\/\d{2}$/.test(expirationDate)) {
        return res
          .status(400)
          .json({ message: "Invalid expiration date format (MM/YY)" });
      }

      // Check if card is expired
      const [month, year] = expirationDate.split("/");
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      if (
        parseInt(year) < currentYear ||
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      ) {
        return res.status(400).json({ message: "Card is expired" });
      }

      // Validate cardholder name
      if (cardHolderName.trim().length < 3) {
        return res
          .status(400)
          .json({ message: "Card holder name must be at least 3 characters" });
      }
    }

    // Hash sensitive fields
    let encryptedCard = null;
    let encryptedCVV = null;

    if (paymentMethod !== "cod") {
      const bcrypt = require("bcrypt");
      const saltRounds = 10;
      encryptedCard = await bcrypt.hash(cardNumber.replace(/\s/g, ""), saltRounds);
      encryptedCVV = await bcrypt.hash(cvv, saltRounds);
    }

    // Create payment record
    const payment = await Payment.create({
      paymentMethod,
      cardNumber: encryptedCard,
      cvv: encryptedCVV,
      expirationDate: paymentMethod === "cod" ? null : expirationDate,
      cardHolderName: paymentMethod === "cod" ? null : cardHolderName,
      amount,
      status: "SUCCESS",
    });

    return res.status(201).json({
      message: "Payment successful",
      paymentId: payment.id,
      transactionId: payment.transactionId,
      amount: payment.amount,
      paymentMethod: payment.paymentMethod,
    });
  } catch (error) {
    console.error("Payment error:", error);
    res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Payment ID is required" });
    }

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    // Don't return sensitive data
    const safePayment = {
      id: payment.id,
      transactionId: payment.transactionId,
      paymentMethod: payment.paymentMethod,
      amount: payment.amount,
      status: payment.status,
      createdAt: payment.createdAt,
    };

    res.json(safePayment);
  } catch (error) {
    console.error("Get payment error:", error);
    res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Get all payments (Admin only - add authentication in production)
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      attributes: {
        exclude: ["cardNumber", "cvv"], // Never return sensitive data
      },
      order: [["createdAt", "DESC"]],
    });

    res.json(payments);
  } catch (error) {
    console.error("Get all payments error:", error);
    res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Update payment status (Admin only)
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["PENDING", "SUCCESS", "FAILED"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    payment.status = status;
    await payment.save();

    res.json({
      message: "Payment status updated",
      paymentId: payment.id,
      status: payment.status,
    });
  } catch (error) {
    console.error("Update payment error:", error);
    res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};