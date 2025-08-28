
import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/AppLayout.css';

const AppLayout = () => {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="logo-section">
          <img src="https://via.placeholder.com/48" alt="Property Management Logo" className="logo" />
          <h1 className="logo-text">Property Management</h1>
        </div>
        <ul className="menu-items">
          <li className="menu-item active">
            <span className="icon">🔑</span>
            My Lease/Rent
          </li>
          <li className="menu-item">
            <span className="icon">🛠️</span>
            Maintenance
          </li>
          <li className="menu-item">
            <span className="icon">💳</span>
            Payment
          </li>
          <li className="menu-item">
            <span className="icon">📜</span>
            Agreement
          </li>
          <li className="menu-item">
            <span className="icon">📧</span>
            Contact Mall
          </li>
        </ul>
        <div className="sidebar-bottom">
          <button className="bottom-button">
            <span className="icon">⚙️</span>
            Settings
          </button>
          <button className="bottom-button logout">
            <span className="icon">🚪</span>
            Logout
          </button>
        </div>
      </nav>
      <main className="main-content">
        {/* This is the key change. The <Outlet> component renders the child route's element here. */}
        <Outlet /> 
      </main>
    </div>
  );
};

export default AppLayout;