import MapSidebar from "./MapSidebar"
import mallImage from "../assets/mallImage.png"
const InteractiveMallMap = () => {
  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar */}
         <MapSidebar />
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header Section */}
        <div className="bg-blue-200 p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Interactive Mall Map!</h1>
          <p className="text-lg text-blue-700">
            Explore the mall at your fingertips. Find stores, offers, and navigate easily with our smart map
          </p>
        </div>

        {/* Search Bar */}
<div className="mb-8">
  <div className="relative flex items-center bg-[#DCE8FF] rounded-full px-4 py-2 max-w-2xl mx-auto">
    <svg
      className="w-5 h-5 text-gray-600 mr-2"
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
      className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-500"
    />
  </div>
</div>


{/* Mall View */}
<div className="flex flex-col items-center mb-8">
  <div className="relative">
    <img
      src={mallImage}
      alt="Mall interior with navigation path"
      className="rounded-lg object-cover h-[450px]"
    />
  </div>

  {/* Button placed below the image */}
  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-200">
    Nike Store
  </button>
</div>


{/* Navigation Buttons */}
<div className="flex justify-center items-center space-x-4 mb-4">
  <span className="text-gray-700 font-medium">Explore</span>
  <button className="border border-gray-600 text-gray-700 px-6 py-1 rounded-full font-medium hover:bg-gray-100 transition duration-200">
    Walk
  </button>
</div>

{/* Navigation Directions */}
<div className="flex justify-center">
  <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl border border-blue-400">
    
    {/* Header */}
    <div className="bg-[#0D1240] text-white rounded-t-lg px-4 py-3">
      <h3 className="text-xl font-bold">
        Towards <span className="text-red-500">NIKE STORE</span>
      </h3>
      <p className="text-[#616FDC] text-sm">1 st Floor | 17 min walk</p>
    </div>

    {/* Body */}
    <div className="flex justify-between items-start p-6">
      {/* Timeline */}
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex-shrink-0 mr-3"></div>
          <span className="text-gray-500 font-semibold">2nd Floor Food Court</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-6 bg-gray-300 ml-[7px] mr-3 rounded"></div>
          <span>Take Elevator</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-6 bg-gray-300 ml-[7px] mr-3 rounded"></div>
          <span>Take Left</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-6 bg-gray-300 ml-[7px] mr-3 rounded"></div>
          <span>Move Right</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-6 bg-gray-300 ml-[7px] mr-3 rounded"></div>
          <span>2 mint Straight</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mr-3"></div>
          <span>Make a turn right</span>
        </div>
      </div>

      {/* End Navigation Button */}
      <button className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-green-700 transition duration-200 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
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