import { useState } from 'react';
import { Link } from 'react-router-dom';
import homeImage from "../assets/homeImage.png";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"

import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Replaced react-icons with inline SVG for compatibility
  const FaHome = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M280.4 143.2L32 263.2V464h128V320h128v144h128V263.2l-248.4-120zM576 264L288 120 0 264v32h64v144h160V320h160v144h160V296h64V264z" /></svg>;
  const FaChartBar = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM0 416c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zm256-64c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-17.7 0-32 14.3-32 32zM288 448h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-17.7 0-32 14.3-32 32s14.3 32 32 32zM256 128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-17.7 0-32 14.3-32 32zM288 224h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-17.7 0-32 14.3-32 32s14.3 32 32 32z" /></svg>;
  const FaUserFriends = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M320 320c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm233-27.1c-22.3-17.3-51.5-27.4-83.3-27.4-44.6 0-86.8 19.4-118.8 53.6-26.7-10-55.6-15.6-86.3-15.6-43.5 0-84.5 17.8-114.7 49.3-16.1 16.9-30.2 36.3-41.8 57.7-18.4 33.7-29.3 71.3-29.3 110.8 0 7.8 1.4 15.5 4.1 22.9 2.5 6.7 6.1 12.8 10.6 18.2-19.1-39.8-29.8-83.8-29.8-129.8 0-46.7 10-91.8 28.5-133.5 21.6-49.8 58.7-90.8 105.1-120.7 20.3-13 41.6-23.7 63.3-32.1C352 14.1 404.9 0 464 0c102.5 0 185.7 83.2 185.7 185.7 0 45.4-16.5 87.8-44.5 120.2zM224 384c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z" /></svg>;
  const FaMapMarkerAlt = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M172.5 351.4c17.5 37 57.3 54.9 94.3 37.4 37-17.5 54.9-57.3 37.4-94.3-17.5-37-57.3-54.9-94.3-37.4-37 17.5-54.9 57.3-37.4 94.3zm154.8-164.7c-26.6 2.7-52.5-9.3-70.6-32.6l10-10.9c25.4-27.8 40.4-64.8 40.4-105.4 0-88.4-71.6-160-160-160S0 52.6 0 141c0 40.5 15 77.5 40.4 105.4l10 10.9c-18.1 23.3-44 35.3-70.6 32.6C3.9 279.1 0 286.7 0 295.4c0 33.8 30.6 61.1 68.3 64.9 74.3 7.6 142.7 41.5 198.8 97.6 5.8 5.8 13.5 8.9 21.7 8.9s15.9-3.1 21.7-8.9c56.1-56.1 90-124.5 97.6-198.8 3.8-37.7 31.1-68.3 64.9-68.3 8.7 0 16.3-3.9 20.3-10.7z" /></svg>;
  const FaTag = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M416 336c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm80-160c0 17.7-14.3 32-32 32H352V96h128c17.7 0 32-14.3 32-32zm-64 64H320c-17.7 0-32 14.3-32 32v240c0 17.7 14.3 32 32 32h144c17.7 0 32-14.3 32-32v-80h32c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32h-64zm-256 96c-17.7 0-32 14.3-32 32v144c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H192zm-96-32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H32C14.3 0 0 14.3 0 32v160z" /></svg>;
  const MdReportProblem = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-248 80c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zM256 120c-22.1 0-40 17.9-40 40v128c0 22.1 17.9 40 40 40s40-17.9 40-40V160c0-22.1-17.9-40-40-40z" /></svg>;
  const MdOutlineArchitecture = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M480 32h-80a80 80 0 0 0-80 80v240a80 80 0 0 0 80 80h80a80 80 0 0 0 80-80V112a80 80 0 0 0-80-80zM96 96h-64a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32zM288 32h-80a80 80 0 0 0-80 80v240a80 80 0 0 0 80 80h80a80 80 0 0 0 80-80V112a80 80 0 0 0-80-80z" /></svg>;
  const MdFeedback = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.9 14.3s12.5 2.5 17.8-.5L288 432l-64-64h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z" /></svg>;

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            PROPERTY MANAGEMENT E-MALL
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Use Link component for navigation */}
            <Link to="/login" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full font-semibold transition duration-300 hover:bg-purple-50">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold transition duration-300 hover:bg-purple-700">
              Sign Up
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Use Link component for navigation */}
            <Link to="/login" className="block w-full text-left px-3 py-2 border border-purple-600 text-purple-600 rounded-md font-semibold transition duration-300 hover:bg-purple-50">
              Login
            </Link>
            <Link to="/signup" className="block w-full text-left px-3 py-2 bg-purple-600 text-white rounded-md font-semibold transition duration-300 hover:bg-purple-700">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${homeImage})`}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 z-10 text-white text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              Manage properties, track tenants, and handle services with ease, anytime, anywhere
            </h1>
            <p className="mt-4 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 drop-shadow-md">
              Property Management eMall is your one-stop digital hub for property listings, rentals, payments, and services. Manage properties, connect with tenants and streamline operations - all in one place.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              {/* Use Link component for navigation */}
              <Link to="/signup" className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold transition duration-300 hover:bg-purple-700 shadow-lg">
                Get Started
              </Link>
              <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold transition duration-300 hover:bg-gray-100 shadow-lg">
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* Platform Highlights Section */}
        <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#6771DE]">
          PLATFORM HIGHLIGHTS
        </h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          All-in-one property management redefined. Explore the core modules that keep your property ecosystem efficient, scalable, and future-ready.
        </p>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Leases/Rent Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200">
            <div className="w-24 h-24 mb-4">
              <img src={img3} alt="Leases/Rent icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-[#6771DE]">Leases/Rent</h3>
          </div>

          {/* Analytics & Reporting Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200">
            <div className="w-24 h-24 mb-4">
              <img src={img4} alt="Analytics & Reporting icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-[#6771DE]">Analytics & Reporting</h3>
          </div>

          {/* Compliance & Alerts Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200">
            <div className="w-24 h-24 mb-4">
              <img src={img5} alt="Compliance & Alerts icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-[#6771DE]">Compliance & Alerts</h3>
          </div>

          {/* Scalable Architecture Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200">
            <div className="w-24 h-24 mb-4">
              <img src={img6} alt="Scalable Architecture icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-[#6771DE]">Scalable Architecture</h3>
          </div>

          {/* CRM & Communication Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200">
            <div className="w-24 h-24 mb-4">
              <img src={img7} alt="CRM & Communication icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-[#6771DE]">CRM & Communication</h3>
          </div>

          {/* Customer Feedback Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200">
            <div className="w-24 h-24 mb-4">
              <img src={img8} alt="Customer Feedback icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-[#6771DE]">Customer Feedback</h3>
          </div>
        </div>
      </div>
    </section>

        {/* Maps Section */}
<section className="bg-blue-200 min-h-screen flex flex-col items-center justify-center p-8">
      {/* Header Text */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Discover, navigate, and unlock exclusive offers with our Interactive Mall Map!
        </h1>
        <p className="text-lg md:text-xl text-blue-700">
          Tap the map, spot the deal, grab the offer
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-4xl w-full justify-center mb-12">
        {/* Interactive Map Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center w-full md:w-1/2">
          <div className="mb-4">
            <img 
              src={img1} 
              alt="Man with a magnifying glass over a map pin" 
              className="w-48 h-48 object-contain" 
            />
          </div>
          <h2 className="text-2xl font-semibold text-blue-800">
            Interactive Map
          </h2>
        </div>

        {/* Deals/Offers Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center w-full md:w-1/2">
          <div className="mb-4">
            <img 
              src={img2} 
              alt="Person holding a coupon and shopping bag" 
              className="w-48 h-48 object-contain" 
            />
          </div>
          <h2 className="text-2xl font-semibold text-purple-800">
            Deals/Offers
          </h2>
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 text-gray-700">
        <div className="flex items-center">
          <FaPhoneAlt className="text-2xl mr-3 text-gray-600" />
          <span className="text-lg font-medium">+91 4445789040</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-2xl mr-3 text-gray-600" />
          <span className="text-lg font-medium">propulseteam@gmail.com</span>
        </div>
      </div>
    </section>
      </main>
    </div>
  );
};

export default LandingPage;
