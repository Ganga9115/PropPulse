import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("visa");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
    expirationDate: "",
    cardHolderName: "",
  });
  const navigate = useNavigate();

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment details submitted:", { selectedMethod, ...cardDetails });
    navigate("/successful-payment");
  };

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
              <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">
                2
              </div>
              <p className="mt-2 text-xs font-semibold text-gray-600">PAYMENT</p>
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

          {/* Payment Options */}
          <div className="flex justify-start space-x-6 items-center mb-10">
            {/* PayPal */}
            <label
              className={`p-4 border-2 rounded-lg cursor-pointer ${
                selectedMethod === "paypal" ? "border-blue-500" : "border-gray-300"
              }`}
            >
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
            <label
              className={`p-4 border-2 rounded-lg cursor-pointer ${
                selectedMethod === "visa" ? "border-blue-500" : "border-gray-300"
              }`}
            >
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
            <label
              className={`p-4 border-2 rounded-lg cursor-pointer ${
                selectedMethod === "mastercard" ? "border-blue-500" : "border-gray-300"
              }`}
            >
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
            <label
              className={`p-4 border-2 rounded-lg cursor-pointer text-sm font-bold ${
                selectedMethod === "cod" ? "border-blue-500" : "border-gray-300"
              }`}
            >
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
            <form className="grid grid-cols-2 gap-6 mb-8 max-w-2xl" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  placeholder="xxxx xxxx xxxx xxxx"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
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
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
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
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
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
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
            </form>
          )}

          {/* Total + Button */}
          <div className="flex flex-col items-end">
            <p className="text-xl font-bold mb-6">TOTAL : 5000</p>
            <button
              onClick={handleSubmit}
              className="bg-[#5A6FF0] text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-600"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}