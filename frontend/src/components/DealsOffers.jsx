
const DealsOffers = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-gray-700 p-6 shadow-lg">
        <div className="flex items-center mb-10">
          <div className="bg-purple-600 p-2 rounded-lg mr-3">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.29l8 4v7.42l-8 4-8-4V6.29l8-4zM12 11a2 2 0 100 4 2 2 0 000-4zm-4 4a4 4 0 110-8 4 4 0 010 8zm8 0a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
          </div>
          <span className="text-xl font-bold">Property Management</span>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <details open className="group">
                <summary className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-gray-200">
                  <div className="flex items-center">
                    <span className="mr-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Interactive Mall</span>
                  </div>
                  <span className="transform transition-transform duration-200 group-open:rotate-180">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <ul className="pl-6 mt-2 space-y-2">
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-gray-200">
                      View Map
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md bg-purple-100 text-purple-700 font-semibold">
                      Explore Offers
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-light text-gray-800 mb-2">Deals/Offers</h1>
          <p className="text-lg text-gray-600">
            Explore the mall at your fingertips. Find stores, offers, and navigate easily with our smart map
          </p>
        </div>

        {/* Offer Coupons Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Offer Coupons!</h2>
          <p className="text-gray-600 mb-6">
            Unlock special discounts and limited-time promotions available only through our eMall platform
          </p>
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/900x450"
              alt="Mall Map with an offer pin"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Coupon Card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-2xl border-2 border-blue-500">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Mad Over Donuts store interior"
                  className="rounded-lg w-32 h-32 object-cover"
                />
              </div>
              <div>
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block">
                  Store A12 - Mad Over Donuts
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  Offer: Buy 1 Get 1 Free
                </h3>
                <p className="text-sm text-gray-500 mb-2">
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