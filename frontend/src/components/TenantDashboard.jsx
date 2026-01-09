// src/components/TenantDashboard.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// NOTE: Sidebar is rendered in App.jsx now, no need to import/render here.
import "../styles/TenantDashboard.css";
import leaseImg from "../assets/lease.png";
import maintenanceImg from "../assets/maintenance.png";
import paymentImg from "../assets/payment.png";
import { FaFileContract, FaMoneyBillWave, FaTools } from "react-icons/fa";

const TenantDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const navigate = useNavigate();

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localUser = localStorage.getItem("user");
    
    // 1. Check for authentication data
    if (!localToken || !localUser) {
      setLoading(false);
      navigate("/login"); // Redirect if credentials are missing
      return;
    }

    // Set user state immediately for fast UI rendering
    try {
        const userData = JSON.parse(localUser);
        setUser(userData);
    } catch (e) {
        console.error("Failed to parse user from local storage:", e);
        localStorage.clear(); // Clear bad data
        setLoading(false);
        navigate("/login");
        return;
    }

    // 2. Fetch live data (API call to /dashboard) using the token
    fetch("http://localhost:5000/dashboard", {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 400) {
            // Token failed server validation; clear and redirect
            localStorage.clear();
            navigate("/login"); 
            return null; 
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          // Update state with any live data from the API
        }
      })
      .catch((err) => console.error("Dashboard API Error:", err))
      .finally(() => {
          setLoading(false); // Finished loading attempt
      });
  }, [navigate]);

  if (loading) {
    // Show a minimal loading screen while checking local storage and making API call
    return <div className="flex justify-center items-center min-h-screen w-full text-xl text-blue-600">Loading Dashboard...</div>;
  }

  return (
    // NOTE: Removed the surrounding style={{ display: "flex" }} div as it's handled in App.jsx
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
  );
};

export default TenantDashboard;