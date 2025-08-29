import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/UnitDetailsPage.css';

const UnitDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedUnit = location.state?.selectedUnit;

  if (!selectedUnit) {
    // Redirect or show a message if no unit was selected
    return <div className="unit-details-error">No unit selected. Please go back to the Select Unit page.</div>;
  }

  const handleRequestServiceClick = () => {
    navigate('/request-form');
  };

  return (
    <div className="unit-details-page-container">
      <div className="page-header-section">
        <h2 className="header-title">Unit Details</h2>
        <p className="header-subtitle">Access all your rental details, payment history, and support in one place</p>
      </div>

      <div className="unit-details-section">
        <h3 className="section-heading">Unit Details</h3>
        <div className="unit-details-card">
          <div className="image-and-details">
            <img src={selectedUnit.image} alt={selectedUnit.name} className="unit-details-image" />
            <div className="details-list">
              <p><b>Shop Name:</b> {selectedUnit.details.shopName}</p>
              <p><b>Floor No:</b> {selectedUnit.details.floorNo}</p>
              <p><b>Rental Price:</b> {selectedUnit.details.rentalPrice}</p>
              <p><b>Unit Size:</b> {selectedUnit.details.unitSize}</p>
              <p><b>Block:</b> {selectedUnit.details.block}</p>
              <p><b>Lease period:</b> {selectedUnit.details.leasePeriod}</p>
              <p><b>Status:</b> {selectedUnit.details.status}</p>
              <p><b>Payment Due date:</b> {selectedUnit.details.paymentDueDate}</p>
            </div>
          </div>
          <button className="request-service-button" onClick={handleRequestServiceClick}>
            Request Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitDetailsPage;