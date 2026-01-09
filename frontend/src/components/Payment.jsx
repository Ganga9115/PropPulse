import { useState } from "react";

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("visa");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
    expirationDate: "",
    cardHolderName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [amount] = useState(5000);

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateCardDetails = () => {
    if (selectedMethod === "cod") return true;

    const { cardNumber, cvv, expirationDate, cardHolderName } = cardDetails;

    if (!cardNumber || cardNumber.replace(/\s/g, "").length < 13) {
      setError("Please enter a valid card number");
      return false;
    }

    if (!cvv || cvv.length < 3) {
      setError("Please enter a valid CVV");
      return false;
    }

    if (!expirationDate || !expirationDate.match(/^\d{2}\/\d{2}$/)) {
      setError("Please enter expiration date in MM/YY format");
      return false;
    }

    if (!cardHolderName || cardHolderName.trim().length < 3) {
      setError("Please enter a valid card holder name");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCardDetails()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const payload = {
        paymentMethod: selectedMethod,
        amount: amount,
      };

      // Only include card details if not COD
      if (selectedMethod !== "cod") {
        payload.cardNumber = cardDetails.cardNumber.replace(/\s/g, "");
        payload.cvv = cardDetails.cvv;
        payload.expirationDate = cardDetails.expirationDate;
        payload.cardHolderName = cardDetails.cardHolderName;
      }

      const response = await fetch(
        "http://localhost:5000/api/payments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Payment failed");
      }

      setSuccess(true);
      // Store payment ID for later use
      localStorage.setItem("paymentId", data.paymentId);
      
      setTimeout(() => {
        window.location.href = "/successful-payment";
      }, 1500);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white flex-1 flex flex-col items-center justify-center py-10 px-6 min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl text-green-600">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-4">Redirecting to confirmation page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex-1 flex flex-col items-center py-10 px-6">
      {/* Page Title & Progress Steps container */}
      <div className="flex flex-col w-full max-w-5xl">
        {/* Page Title */}
        <div className="bg-[#E9F0FB] w-full py-6 px-12 rounded-t-lg">
          <h1 className="text-3xl font-bold text-[#0D1B56]">Payment</h1>
        </div>

        {/* Progress Steps */}
        <div className="bg-white w-full py-8 px-12 shadow-sm">
          <div className="flex items-center justify-start space-x-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                ✓
              </div>
              <p className="mt-2 text-xs font-semibold text-gray-600">RENTAL DETAILS</p>
            </div>

            <div className="w-20 h-[2px] bg-gray-300"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                2
              </div>
              <p className="mt-2 text-xs font-semibold text-blue-600">PAYMENT</p>
            </div>

            <div className="w-20 h-[2px] bg-gray-300"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
                3
              </div>
              <p className="mt-2 text-xs font-semibold text-gray-400">CONFIRMATION</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full mt-10 p-6">
          <h2 className="text-2xl font-bold text-black mb-8">PAYMENT METHOD</h2>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Payment Options */}
          <div className="flex justify-start space-x-6 items-center mb-10 flex-wrap gap-4">
            {/* PayPal */}
            <label className={`p-4 border-2 rounded-lg cursor-pointer transition ${selectedMethod === "paypal" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={selectedMethod === "paypal"}
                onChange={() => handleMethodChange("paypal")}
                className="hidden"
              />
              <img
                src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
                alt="PayPal"
                className="h-8 mx-auto"
              />
            </label>

            {/* Visa */}
            <label className={`p-4 border-2 rounded-lg cursor-pointer transition ${selectedMethod === "visa" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
              <input
                type="radio"
                name="paymentMethod"
                value="visa"
                checked={selectedMethod === "visa"}
                onChange={() => handleMethodChange("visa")}
                className="hidden"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-6 mx-auto"
              />
            </label>

            {/* Mastercard */}
            <label className={`p-4 border-2 rounded-lg cursor-pointer transition ${selectedMethod === "mastercard" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
              <input
                type="radio"
                name="paymentMethod"
                value="mastercard"
                checked={selectedMethod === "mastercard"}
                onChange={() => handleMethodChange("mastercard")}
                className="hidden"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                alt="Mastercard"
                className="h-8 mx-auto"
              />
            </label>

            {/* Cash on Delivery */}
            <label className={`p-4 border-2 rounded-lg cursor-pointer text-sm font-bold transition ${selectedMethod === "cod" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={selectedMethod === "cod"}
                onChange={() => handleMethodChange("cod")}
                className="hidden"
              />
              CASH ON DELIVERY
            </label>
          </div>

          {/* Card Details Form */}
          {selectedMethod !== "cod" && (
            <div className="grid grid-cols-2 gap-6 mb-8 max-w-2xl">
              <div>
                <label className="text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  placeholder="xxxx xxxx xxxx xxxx"
                  maxLength="19"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  placeholder="xxx"
                  maxLength="4"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={cardDetails.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Card Holder name</label>
                <input
                  type="text"
                  name="cardHolderName"
                  value={cardDetails.cardHolderName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* Total + Button */}
          <div className="flex flex-col items-end">
            <p className="text-xl font-bold mb-6">TOTAL : {amount}</p>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`py-3 px-8 rounded-full font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[#5A6FF0] text-white hover:bg-blue-600"
              }`}
            >
              {loading ? "Processing..." : "Confirm Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}