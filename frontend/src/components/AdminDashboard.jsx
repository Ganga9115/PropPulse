// src/pages/AdminDashboard.jsx

import React from 'react';
import Sidebar from './Sidebar';
import '../Styles/AdminDashboard.css';
import { Doughnut, Bar } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faHouse, faCreditCard, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

// Register the chart components you'll use
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const AdminDashboard = () => {
  // Data for the Property Overview (Doughnut Chart)
  const propertyData = {
    labels: ['Vacant', 'Occupied'],
    datasets: [
      {
        data: [9, 21], // Based on your UI (9 vacant, 21 occupied)
        backgroundColor: [
          '#ffc857', // Your yellow color
          '#416597ff', // Your blue color
        ],
        borderWidth: 0,
      },
    ],
  };

  const propertyOptions = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false, // Hide the built-in legend as it's separate in the design
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  // Data for the Maintenance Status (Bar Chart)
  const maintenanceData = {
    labels: ['Open request', 'In progress', 'Closed this week'],
    datasets: [
      {
        label: 'Maintenance Tickets',
        data: [12, 5, 10], // Based on your UI
        backgroundColor: ['#e58b8f', '#ffc857', '#416597ff'],
        borderRadius: 5,
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
    ],
  };

  const maintenanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.raw} tickets`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
  };

  return (
    <div className="admin-dashboard-layout">
      <Sidebar />
      <div className="admin-dashboard-main">
        <header className="admin-header">
          <div className="welcome-section">
            <h2>Welcome back!!</h2>
            <p>Access all your rental details, payment history, and support in one place</p>
          </div>
          <div className="header-right">
            <div className="search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" placeholder="Search tenants, units, invoices quickly" />
            </div>
            <FontAwesomeIcon icon={faBell} className="notification-icon" />
          </div>
        </header>

        <section className="summary-cards">
          <div className="card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div className="card-content">
              <h4>Rent Collected This Month</h4>
              <p>12, 56, 000</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className="card-content">
              <h4>Total Tenants</h4>
              <p>49/68</p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <div className="card-content">
              <h4>Payment Success Rate</h4>
              <p>94%</p>
            </div>
          </div>
        </section>

        <section className="analytics-section">
          <div className="analytics-card property-overview-card">
            <h4>Property Overview</h4>
            <div className="chart-container">
              <Doughnut data={propertyData} options={propertyOptions} />
            </div>
            <div className="legend-container">
              <span className="legend-item"><span className="legend-dot vacant-dot"></span> vacant<br/>9/30</span>
              <span className="legend-item"><span className="legend-dot occupied-dot"></span> occupied<br/>21/30</span>
            </div>
          </div>
          <div className="analytics-card renewal-card">
            <h4>Renewal due soon!</h4>
            <div className="renewal-info">
              <p>Tenant ID: 2STM009</p>
              <div className="date-block start">
                <span>Start Date</span>
                <p>1st Mar, 2025</p>
              </div>
              <div className="date-block renewal">
                <span>Renewal Date</span>
                <p>1st Feb, 2026</p>
              </div>
              <div className="date-block end">
                <span>End Date</span>
                <p>28th Feb, 2026</p>
              </div>
            </div>
          </div>
          <div className="analytics-card maintenance-card">
            <h4>Maintenance Status</h4>
            <div className="chart-container">
              <Bar data={maintenanceData} options={maintenanceOptions} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;