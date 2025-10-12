import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RequestForm.css';

const RequestForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      tenantName: e.target.tenantName.value,
      tenantId: e.target.tenantId.value,
      email: e.target.email.value,
      contactNo: e.target.contactNo.value,
      preferredDate: e.target.preferredDate.value,
      preferredTime: e.target.preferredTime.value,
      shopName: e.target.shopName.value || 'N/A',
    };

    try {
      const response = await fetch('http://localhost:5000/api/tenants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to submit request');

      navigate('/request-submitted');
    } catch (err) {
      alert(err.message);
    }
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
            <input className="form-input" type="text" id="tenantName" name="tenantName" placeholder="Tenant Name" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="tenantId">Tenant ID</label>
            <input className="form-input" type="text" id="tenantId" name="tenantId" placeholder="Tenant ID" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="contactNo">Contact No</label>
            <input className="form-input" type="tel" id="contactNo" name="contactNo" placeholder="Contact No" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="shopName">Shop Name</label>
            <input className="form-input" type="text" id="shopName" name="shopName" placeholder="Shop Name" required />
          </div>
        </div>

        <div className="form-schedule-section">
          <h4 className="form-schedule-heading">Preferred Schedule</h4>
          <div className="form-schedule-inputs">
            <input className="form-input schedule-input" type="date" name="preferredDate" required />
            <input className="form-input schedule-input" type="time" name="preferredTime" required />
          </div>
        </div>

        <button className="form-submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestForm;
