import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RequestForm.css';

const RequestForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Directly go to the Request Submitted page
    navigate('/request-submitted');
  };

  return (
    <div className="request-form-container">
      <div className="form-header-section">
        <h2 className="form-header-title">Tenant Request</h2>
        <p className="form-header-subtitle">
          Access all your rental details, payment history, and support in one place
        </p>
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <h3 className="form-section-heading">REQUEST FORM</h3>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label" htmlFor="tenantName">Tenant Name</label>
            <input className="form-input" type="text" id="tenantName" placeholder="Tenant Name" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="tenantId">Tenant ID</label>
            <input className="form-input" type="text" id="tenantId" placeholder="Tenant ID" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" type="email" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="contactNo">Contact No</label>
            <input className="form-input" type="tel" id="contactNo" placeholder="Contact No" />
          </div>
        </div>

        <div className="form-schedule-section">
          <h4 className="form-schedule-heading">Preferred Schedule</h4>
          <div className="form-schedule-inputs">
            <input className="form-input schedule-input" type="date" />
            <input className="form-input schedule-input" type="time" />
          </div>
        </div>

        <button className="form-submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestForm;
