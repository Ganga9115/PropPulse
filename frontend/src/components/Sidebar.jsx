import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaTools, FaMoneyBillWave, FaFileContract, FaPhone, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../styles/Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/"); // Redirect to landing page (change to "/login" if you want)
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Property Management Logo" className="sidebar-logo" />
        <span>Property Management</span>
      </div>

      <div className="sidebar-nav">
        <Link to="/rent" className="sidebar-link">
          <FaHome className="sidebar-icon" /> My Lease/Rent
        </Link>
        <Link to="/maintenance" className="sidebar-link">
          <FaTools className="sidebar-icon" /> Maintenance
        </Link>
        <Link to="/payment" className="sidebar-link">
          <FaMoneyBillWave className="sidebar-icon" /> Payment
        </Link>
        <Link to="/agreement" className="sidebar-link">
          <FaFileContract className="sidebar-icon" /> Agreement
        </Link>
        <Link to="/contact" className="sidebar-link">
          <FaPhone className="sidebar-icon" /> Contact Mall
        </Link>
      </div>

      <div className="sidebar-footer">
        <Link to="/settings" className="sidebar-link">
          <FaCog className="sidebar-icon" /> Settings
        </Link>
        {/* Logout button */}
        <button onClick={handleLogout} className="sidebar-link" style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}>
          <FaSignOutAlt className="sidebar-icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
