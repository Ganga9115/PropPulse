import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../styles/TenantDetails.css';
import '../styles/PreferSchedule.css';

const TenantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [tenant, setTenant] = useState(location.state?.tenant || null);
  const [loading, setLoading] = useState(!tenant);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedDate, setSelectedDate] = useState('');

  // Fetch tenant from backend if not passed via state
  useEffect(() => {
    if (!tenant) {
      setLoading(true);
      fetch(`http://localhost:5000/api/tenants/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTenant(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching tenant:', err);
          setLoading(false);
        });
    }
  }, [id, tenant]);

  if (loading) return <p>Loading tenant details...</p>;

  if (!tenant) {
    return (
      <div className="main-content">
        <div className="details-header">
          <h2 className="details-title">Tenant Not Found</h2>
        </div>
        <div className="not-found-message">
          <p>The details for this tenant could not be loaded. Please return to the tenant directory.</p>
          <button onClick={() => navigate('/tenants')}>Go Back</button>
        </div>
      </div>
    );
  }

  const handleAcceptClick = () => setShowPopup(true);
  const handleDeclineClick = () => alert('The request is declined.');

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Time:', selectedTime);
    console.log('Selected Date:', selectedDate);
    setShowPopup(false);
    alert('Schedule submitted successfully!');
  };

  return (
    <div className="main-content">
      <div className="details-header">
        <h2 className="details-title">Tenant Details</h2>
      </div>

      <div className="profile-section">
        <div className="profile-image">
          <img src={tenant.profilePic || 'https://cdn.icon-icons.com/icons2/2406/PNG/512/person_account_icon_145945.png'} alt={`${tenant.tenantName}'s profile`} />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{tenant.tenantName}</h3>
          <p className="profile-id">Tenant ID {tenant.tenantId}</p>
        </div>
      </div>

      {/* Lease & Payment cards */}
      <div className="details-card-grid">
        <div className="details-card lease-card">
          <div className="card-header">
            <h4>Lease & Unit</h4>
            <span className={`status-badge ${tenant.status.toLowerCase().replace(/ /g, '')}`}>{tenant.status}</span>
          </div>
          <div className="card-content">
            <div className="unit-info">
              <span className="unit-icon">🏠</span>
              <div className="unit-text">
                <span className="unit-name">{tenant.shopName}</span>
              </div>
            </div>
            <span className="contract-link">Contract</span>
            <div className="lease-info">
              <p>Lease Start <span>{tenant.leaseStart} - {tenant.leaseEnd}</span></p>
              <p>Rent <span>₹{tenant.rentAmount?.toLocaleString()} / month</span></p>
            </div>
          </div>
        </div>

        <div className="details-card payment-card">
          <h4>Payment</h4>
          <div className="card-content">
            <p className="payment-due">Next Payment Due <span className="due-amount">₹{tenant.rentAmount?.toLocaleString()}</span></p>
            <p className="last-payment-date">Last Payment Date <span>1 Mar</span></p>
          </div>
        </div>

        <div className="details-card contact-card">
          <h4>Emergency Contact</h4>
          <div className="card-content">
            <p className="contact-name">{tenant.emergencyContact?.name}</p>
            <p className="contact-info"><span className="contact-icon">📞</span>{tenant.emergencyContact?.phone}</p>
            <p className="contact-info"><span className="contact-icon">✉️</span>{tenant.emergencyContact?.email}</p>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn btn-accept" onClick={handleAcceptClick}>Accept</button>
        <button className="btn btn-decline" onClick={handleDeclineClick}>Decline</button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              <h4>Prefer schedule</h4>
              <form onSubmit={handleScheduleSubmit}>
                <div className="form-group">
                  <label htmlFor="time-slot">Time Slot</label>
                  <div className="input-with-icon">
                    <input
                      type="time"
                      id="time-slot"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    />
                    <span className="icon">⏰</span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="date-picker">Date Picker</label>
                  <div className="input-with-icon">
                    <input
                      type="date"
                      id="date-picker"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <span className="icon">🗓️</span>
                  </div>
                </div>
               
                <div className="popup-actions">
                  <button type="submit" className="btn btn-submit">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenantDetails;
