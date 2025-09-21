import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/TenantDashboard.css";
import leaseImg from "../assets/lease.png";
import maintenanceImg from "../assets/maintenance.png";
import paymentImg from "../assets/payment.png";
import { FaFileContract, FaMoneyBillWave, FaTools } from "react-icons/fa";

const TenantDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect if not logged in
      return;
    }

    fetch("http://localhost:5000/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 400) {
          navigate("/login"); // Invalid token → login again
        }
        return res.json();
      })
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch((err) => console.error(err));
  }, [navigate]);

  return (
    <div style={{ display: "flex" }}>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Hello {user ? user.username : "Tenant"}!</h1>
          <p>
            Access all your rental details, payment history, and support in one place
          </p>
        </div>

        <div className="dashboard-info">
          <div className="welcome-box">
            <h2>👋 Welcome back {user ? user.username : ""}!</h2>
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
            <a href="/rent" className="card-link">
              <img src={leaseImg} alt="lease" />
              <h3>MY LEASE/RENT</h3>
            </a>
          </div>

          <div className="card">
            <a href="/maintenance" className="card-link">
              <img src={maintenanceImg} alt="maintenance" />
              <h3>MAINTENANCE</h3>
            </a>
          </div>

          <div className="card">
            <a href="/payment" className="card-link">
              <img src={paymentImg} alt="payment" />
              <h3>PAYMENT</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
