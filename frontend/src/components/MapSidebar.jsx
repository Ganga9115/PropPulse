import { useState } from "react";
import { ChevronDown, ChevronUp, Users } from "lucide-react";
import logo from  "../assets/logo.png"
export default function MapSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
   <div className="min-h-screen w-56 bg-[#0D0F1A] text-gray-800 flex flex-col">


      {/* Sidebar Content */}
      <div className="flex flex-col bg-gray-100 h-full p-4">
        
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo} // replace with your logo path
            alt="Logo"
            className="w-14 h-14 mb-2"
          />
          <h2 className="text-[15px] font-semibold text-[#0D1240]">
            Property Management
          </h2>
        </div>

        {/* Interactive Mall Section */}
        <div>
          <button
            className="flex items-center justify-between w-full text-sm font-medium text-[#0D1240] py-2 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Interactive Mall</span>
            </span>
            {isOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {isOpen && (
            <div className="ml-6 mt-6 space-y-6 text-sm">
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600"
              >
                View Map
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600"
              >
                Explore Offers
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
