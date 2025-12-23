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

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            PROPERTY MANAGEMENT E-MALL
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Use Link component for navigation */}
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full font-semibold transition duration-300 hover:bg-blue-50"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold transition duration-300 hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/login"
              className="block w-full text-left px-3 py-2 border border-blue-600 text-blue-600 rounded-md font-semibold transition duration-300 hover:bg-blue-50"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md font-semibold transition duration-300 hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${homeImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 z-10 text-white text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              Manage properties, track tenants, and handle services with ease, anytime, anywhere
            </h1>
            <p className="mt-4 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 drop-shadow-md">
              Property Management eMall is your one-stop digital hub for property listings, rentals, payments, and services. Manage properties, connect with tenants and streamline operations - all in one place.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <Link
                to="/signup"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold transition duration-300 hover:bg-blue-700 shadow-lg"
              >
                Get Started
              </Link>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold transition duration-300 hover:bg-gray-100 shadow-lg">
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* Platform Highlights Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#3366cc]">
              PLATFORM HIGHLIGHTS
            </h2>
            <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
              All-in-one property management redefined. Explore the core modules that keep your property ecosystem efficient, scalable, and future-ready.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[img3, img4, img5, img6, img7, img8].map((image, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200"
                >
                  <div className="w-24 h-24 mb-4">
                    <img
                      src={image}
                      alt={`Platform highlight ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#3366cc]">
                    {
                      [
                        "Leases/Rent",
                        "Analytics & Reporting",
                        "Compliance & Alerts",
                        "Scalable Architecture",
                        "CRM & Communication",
                        "Customer Feedback",
                      ][index]
                    }
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section className="bg-blue-200 min-h-screen flex flex-col items-center justify-center p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Discover, navigate, and unlock exclusive offers with our Interactive Mall Map!
            </h1>
            <p className="text-lg md:text-xl text-blue-700">
              Tap the map, spot the deal, grab the offer
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-4xl w-full justify-center mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center w-full md:w-1/2">
              <div className="mb-4">
                <img src={img1} alt="Interactive Map" className="w-48 h-48 object-contain" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-800">Interactive Map</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center w-full md:w-1/2">
              <div className="mb-4">
                <img src={img2} alt="Deals/Offers" className="w-48 h-48 object-contain" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-800">Deals/Offers</h2>
            </div>
          </div>

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
