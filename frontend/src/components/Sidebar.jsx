import { Link } from "react-router-dom";
import { FaHome, FaTools, FaMoneyBillWave, FaFileContract, FaPhone, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../styles/Sidebar.css";
import logo from "../assets/logo.png"; // 👈 put your building logo inside src/assets

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Property Management Logo" className="sidebar-logo" />
        <span>Property Management</span>
      </div>

      <div className="sidebar-nav">
        <Link to="/tenant" className="sidebar-link">
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
        <Link to="/logout" className="sidebar-link" style={{ color: "red" }}>
          <FaSignOutAlt className="sidebar-icon" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
