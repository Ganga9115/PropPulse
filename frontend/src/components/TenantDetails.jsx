import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../styles/TenantDetails.css';
import '../styles/PreferSchedule.css'; // Import the new CSS for the popup

// Mock data, acting as a temporary database
const initialTenants = [
  {
    id: '12101',
    name: 'Abi',
    unit: 'Shop A-12',
    phone: '901234567',
    status: 'Active',
    address: '123 ABC Street, Chennai',
    email: 'abi@example.com',
    rentAmount: 20000,
    rentDueDate: '2025-10-01',
    joiningDate: '2024-05-15',
    profilePic: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/person_account_icon_145945.png',
    leaseStart: '1 Jan 2024',
    leaseEnd: '31 Dec 2024',
    emergencyContact: {
      name: 'Jane Doe',
      phone: '9988776655',
      email: 'jane.doe@example.com'
    }
  },
  {
    id: '12103',
    name: 'Deepika',
    unit: 'Shop B-05',
    phone: '901234567',
    status: 'pending',
    address: '456 XYZ Road, Bangalore',
    email: 'deepika@example.com',
    rentAmount: 12000,
    rentDueDate: '2025-10-05',
    joiningDate: '2024-03-20',
    profilePic: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/person_account_icon_145945.png',
    leaseStart: '20 Mar 2024',
    leaseEnd: '20 Mar 2025',
    emergencyContact: {
      name: 'John Smith',
      phone: '9988776655',
      email: 'john.smith@example.com'
    }
  },
  {
    id: '12108',
    name: 'Ganga',
    unit: 'Shop C-08',
    phone: '901234567',
    status: 'overdue',
    address: '789 PQR Avenue, Coimbatore',
    email: 'ganga@example.com',
    rentAmount: 18000,
    rentDueDate: '2025-09-25',
    joiningDate: '2023-11-10',
    profilePic: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/person_account_icon_145945.png',
    leaseStart: '10 Nov 2023',
    leaseEnd: '10 Nov 2024',
    emergencyContact: {
      name: 'Priya Sharma',
      phone: '9988776655',
      email: 'priya.sharma@example.com'
    }
  },
];

const TenantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedDate, setSelectedDate] = useState('');

  let tenant = location.state?.tenant;

  if (!tenant) {
    tenant = initialTenants.find(t => t.id === id);
  }

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

  const handleAcceptClick = () => {
    setShowPopup(true);
  };

  const handleDeclineClick = () => {
    alert('The request is declined.');
  };

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
          <img src={tenant.profilePic} alt={`${tenant.name}'s profile`} />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{tenant.name}</h3>
          <p className="profile-id">Tenant ID {tenant.id}</p>
        </div>
      </div>

      <div className="details-card-grid">
        <div className="details-card lease-card">
          <div className="card-header">
            <h4>Lease & Unit</h4>
            <span className={`status-badge ${tenant.status.toLowerCase()}`}>{tenant.status}</span>
          </div>
          <div className="card-content">
            <div className="unit-info">
              <span className="unit-icon">🏠</span>
              <div className="unit-text">
                <span className="unit-name">{tenant.unit}</span>
                <span className="unit-floor">1st Floor</span>
              </div>
            </div>
            <span className="contract-link">Contract</span>
            <div className="lease-info">
              <p>Lease Start <span>{tenant.leaseStart} - {tenant.leaseEnd}</span></p>
              <p>Rent <span>₹{tenant.rentAmount.toLocaleString()} / month</span></p>
            </div>
          </div>
        </div>

        <div className="details-card payment-card">
          <h4>Payment</h4>
          <div className="card-content">
            <p className="payment-due">Next Payment Due <span className="due-amount">₹{tenant.rentAmount.toLocaleString()}</span></p>
            <p className="last-payment-date">Last Payment Date <span>1 Mar</span></p>
            <div className="payment-chart">
              <div className="chart-bar unpaid"></div>
              <div className="chart-bar unpaid"></div>
              <div className="chart-bar unpaid"></div>
              <div className="chart-bar unpaid"></div>
              <div className="chart-bar paid"></div>
              <div className="chart-bar paid"></div>
              <div className="chart-bar current-due"></div>
            </div>
          </div>
        </div>

        <div className="details-card contact-card">
          <h4>Emergency Contact</h4>
          <div className="card-content">
            <p className="contact-name">{tenant.emergencyContact.name}</p>
            <p className="contact-info"><span className="contact-icon">📞</span>{tenant.emergencyContact.phone}</p>
            <p className="contact-info"><span className="contact-icon">✉️</span>{tenant.emergencyContact.email}</p>
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
                <div className="form-group">
                  <label htmlFor="assign-vendor">Assign Vendor</label>
                  <select id="assign-vendor">
                    <option>Select Vendor</option>
                    <option>Vendor A</option>
                    <option>Vendor B</option>
                  </select>
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