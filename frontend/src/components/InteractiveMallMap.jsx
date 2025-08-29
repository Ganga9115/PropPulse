import React from 'react';

const InteractiveMallMap = () => {
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
                <summary className="flex items-center justify-between p-2 rounded-md cursor-pointer bg-purple-100 text-purple-700 font-semibold hover:bg-gray-200">
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
                    <a href="#" className="block p-2 rounded-md bg-purple-200 text-purple-800 font-bold">
                      View Map
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-gray-200">
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
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Interactive Mall Map!</h1>
          <p className="text-lg text-blue-700">
            Explore the mall at your fingertips. Find stores, offers, and navigate easily with our smart map
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative flex items-center bg-white rounded-full shadow-md p-3 max-w-2xl mx-auto">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for stores by name, category, or floor"
              className="flex-1 outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Mall View */}
        <div className="flex justify-center mb-8">
          <div className="relative bg-white rounded-lg shadow-xl p-4">
            <img
              src="https://via.placeholder.com/300x450"
              alt="Mall interior with navigation path"
              className="rounded-lg object-cover h-[450px]"
            />
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-200">
              Nike Store
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition duration-200">
            Explore
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition duration-200">
            Walk
          </button>
        </div>

        {/* Navigation Directions */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl border-l-4 border-blue-600">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Towards <span className="text-red-600">NIKE STORE</span>
              </h3>
              <p className="text-gray-600 text-sm">
                1 st Floor | 17 min walk
              </p>
            </div>
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex-shrink-0 mr-3"></div>
                  <span>2nd Floor Food Court</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-gray-300 ml-[6px] mr-3"></div>
                  <span>Take Elevator</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-gray-300 ml-[6px] mr-3"></div>
                  <span>Take Left</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-gray-300 ml-[6px] mr-3"></div>
                  <span>Move Right</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-gray-300 ml-[6px] mr-3"></div>
                  <span>2 mint Straight</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-300 flex-shrink-0 mr-3"></div>
                  <span>Make a turn right</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 transition duration-200 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                End Navigation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InteractiveMallMap;