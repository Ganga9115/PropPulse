import React from "react";
import { useNavigate } from "react-router-dom";  // ✅ import navigation
import Sidebar from "./Sidebar";
import "../styles/MaintenanceView.css";
import maintenanceImg from "../assets/maintenances1.png";

const MaintenanceView = () => {
  const navigate = useNavigate();

  return (
      <div className="dashboard">
        {/* Blue Header */}
        <div className="dashboard-header">
          <h1>Hello Tenant!</h1>
          <p>
            Access all your rental details, payment history, and support in one place
          </p>
        </div>

        {/* Maintenance Section */}
        <div className="maintenance-content">
          <div className="maintenance-header">
            <h2>Maintenance</h2>
            <p>Raise requests, track progress, and resolve issues quickly.</p>
            <div className="maintenance-actions">
              {/* 🔴 Red button → New Request Page */}
              <button
                className="btn raise-btn"
                onClick={() => navigate("/maintenance/new")}
              >
                ➕ Raise New Request
              </button>

              {/* 🟡 Yellow button → Stay on this View */}
              <button
                className="btn status-btn"
                onClick={() => navigate("/maintenance")}
              >
                👁 View Maintenance status
              </button>
            </div>
          </div>

          {/* Filters + Search */}
          <div className="filters">
            <select>
              <option>Status</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            <input
              type="text"
              placeholder="🔍 Search requests by ID, status, or issue"
            />
          </div>

          {/* Legend */}
          <div className="legend">
            <span className="pending">Pending</span>
            <span className="progress">Progress</span>
            <span className="completed">Completed</span>
          </div>

          {/* Request Card + Illustration side by side */}
          <div className="request-section">
            <div className="request-card">
              <div className="request-header">
                <span className="request-id">Request ID: MR-1056</span>
                <span className="status-badge in-progress">In progress</span>
              </div>
              <div className="request-body">
                <p className="request-title">
                  Title: “AC not working in Shop A12”
                </p>
                <p>
                  🔧 Assigned to vendor: <strong>abcService.pvt.lmt</strong>
                </p>
                <p>📅 Expected visit: 28th Feb 2026, 2:00 pm</p>
              </div>
            </div>

            <div className="illustration">
              <img src={maintenanceImg} alt="Maintenance worker" />
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default MaintenanceView;
