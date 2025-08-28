import Sidebar from "./Sidebar";
import "../styles/TenantDashboard.css";
import leaseImg from "../assets/lease.png";
import maintenanceImg from "../assets/maintenance.png";
import paymentImg from "../assets/payment.png";
import { FaFileContract, FaMoneyBillWave, FaTools } from "react-icons/fa";

const TenantDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Hello Tenant!</h1>
          <p>
            Access all your rental details, payment history, and support in one place
          </p>
        </div>

<div className="dashboard-info">
        <div className="welcome-box">
            <h2>👋 Welcome back!!</h2>
            <p>
            Use the side menu to manage agreements, submit service requests, and view
            payment history with ease.
            </p>
        </div>
        </div>


        {/* Info Boxes with Icons */}
        <div className="info-box">
          <FaFileContract className="info-icon" />
          Active Lease: Shop #102 | Expiry: 15-Dec-2025
        </div>

        <div className="info-box">
          <FaMoneyBillWave className="info-icon" />
          Next Payment Due: ₹50,000 on 1-Sep-2025
        </div>

        <div className="info-box">
          <FaTools className="info-icon" />
          Open Maintenance Requests: 2 Pending
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <img src={leaseImg} alt="lease" />
            <h3>MY LEASE/RENT</h3>
          </div>

          <div className="card">
            <img src={maintenanceImg} alt="maintenance" />
            <h3>MAINTENANCE</h3>
          </div>

          <div className="card">
            <img src={paymentImg} alt="payment" />
            <h3>PAYMENT</h3>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default TenantDashboard;
