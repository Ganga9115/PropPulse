import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RequestSubmittedPage.css';

const RequestSubmittedPage = () => {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    // Navigate back to the home or select unit page
    navigate('/select-unit');
  };

  return (
    <div className="request-submitted-page-container">
      {/* The main header section, as seen on the Request Form page */}
      <div className="form-header-section">
        <h2 className="form-header-title">Tenant Request</h2>
        <p className="form-header-subtitle">Access all your rental details, payment history, and support in one place</p>
      </div>
      
      {/* The main content card */}
      <div className="status-card-container">
        <h3 className="form-section-heading">REQUEST FORM</h3>
        <div className="status-card">
          {/* The checkmark icon and its dark blue background */}
          <div className="checkmark-icon-container">
            <svg className="checkmark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9 16.172l-4.95-4.95L2.636 12 9 18.364 20.364 7 18.95 5.586z" fill="white"/>
            </svg>
          </div>
          <h2 className="status-message">Request Submitted Successfully......</h2>
          <button className="done-button" onClick={handleDoneClick}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestSubmittedPage;