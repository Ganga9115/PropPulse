import React from "react";
import Sidebar from "./Sidebar";
import { FaHouseUser } from "react-icons/fa";
import { RiDownloadLine, RiRefreshLine, RiMailLine } from "react-icons/ri";
import "../styles/Rent.css";
// Import the PDF file directly
import rentalAgreementPdf from '../assets/Rental_Agreement.pdf';

const Rent = () => {
  // Function to handle the download of the agreement PDF
  const handleDownloadAgreement = () => {
    // The imported file now contains the correct URL
    const fileUrl = rentalAgreementPdf;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Rental_Agreement.pdf'); // Sets the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="rent-content">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Hello Tenant!</h1>
        <p>
          Access all your rental details, payment history, and support in one place
        </p>
      </div>

      {/* Lease / Rent Overview Section */}
      <div className="welcome-box">
        <h2 className="title-with-icon">
          <FaHouseUser className="inline-icon" />
          Lease / Rent Overview
        </h2>
        <p>
          Quickly view your lease details, contract period, and financials. Stay updated and avoid surprises.
        </p>
      </div>

      {/* Your Lease/Rent Details Section */}
      <div className="details-section">
        <div className="dashboard-cards">
          {/* Tenant Info Card */}
          <div className="card tenant-info-card">
            <div className="card-header">Tenant Information</div>
            <div className="card-body tenant-info-body">
              <div className="tenant-info-grid">
                <div>
                  <strong>Tenant Name:</strong> Deepika
                  <div className="property-address-box">
                    <strong>Property Address:</strong>
                    <h1>2nd Floor, Store 29, ABC Mall, Chennai</h1>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="action-btn" onClick={handleDownloadAgreement}>
                    <RiDownloadLine className="action-icon" /> Download Agreement
                  </button>
                  <button className="action-btn">
                    <RiRefreshLine className="action-icon" /> Renew Contract
                  </button>
                  <button className="action-btn">
                    <RiMailLine className="action-icon" /> Contact Owner
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Period Card */}
          <div className="card">
            <div className="card-header">Contract Period</div>
            <div className="card-body period-details">
              <div className="period-item">
                <span className="badge green">Start Date</span>
                <span>1st Mar, 2025</span>
              </div>
              <div className="period-item">
                <span className="badge red">End Date</span>
                <span>28th Feb, 2026</span>
              </div>
              <div className="period-item">
                <span className="badge yellow">Renewal Date</span>
                <span>1st Feb, 2026</span>
              </div>
              <span className="warning">⚠️ Renewal due soon!</span>
            </div>
          </div>

          {/* Financials Card */}
          <div className="card financials-card">
            <div className="card-header">Financials </div>

            <div className="card-body financials-body">
              <h1>Monthly Rent: ₹18,000</h1>

              <h1>Due Date: 5th of every month</h1>
              <h1>Security Amount Deposited: ₹36,000</h1>
            </div>
<br/>
<br/>
<br/>
            <a href="/payment">
              <button className="payment-btn">Click here to Payment</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;