import MapSidebar from "./MapSidebar"
import offer from "../assets/offer.png"
import mallMap from "../assets/mallMap.png"
const DealsOffers = () => {
  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar */}
        <MapSidebar />
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header Section */}
        <div className="bg-blue-200 p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Deals/Offers</h1>
          <p className="text-lg text-[#616FDC]">
            Explore the mall at your fingertips. Find stores, offers, and navigate easily with our smart map
          </p>
        </div>

        {/* Offer Coupons Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Offer Coupons!</h2>
          <p className="text-[#616FDC] mb-6">
            Unlock special discounts and limited-time promotions available only through our eMall platform
          </p>
          <div className="flex justify-center">
            <img
              src={mallMap}
              alt="Mall Map with an offer pin"
               className="w-1/2 h-auto border-4 border-[#242A5C] rounded-lg" 
            />
          </div>
        </div>


  {/* Coupon Card */}
  <div className="flex justify-center">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl border-2 border-[#242A5C]">
      
      {/* Header Bar */}
      <div className="bg-[#242A5C] text-white text-sm font-semibold px-4 py-2 rounded-t-lg">
        Store A12 – Mad Over Donuts
      </div>

      {/* Body */}
      <div className="flex items-center p-4">
        {/* Left Image */}
        <div className="flex-shrink-0 mr-6">
          <img
            src={offer}
            alt="Mad Over Donuts store interior"
            className="rounded-lg w-32 h-32 object-cover border border-gray-300"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            Offer: Buy 1 Get 1 Free
          </h3>
          <p className="text-sm text-[#616FDC] font-medium mb-3">
            Validity: Until 25 Aug 2025
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-200">
            Get Coupons
          </button>
        </div>
      </div>
    </div>
  </div>


      </main>
    </div>
  );
};

export default DealsOffers;