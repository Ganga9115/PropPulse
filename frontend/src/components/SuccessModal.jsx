import React from "react";
import "../styles/SuccessModal.css";
import tickImage from "../assets/tick.png";

const SuccessModal = ({ message, date, time, vendor, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="success-modal-content">
        <div className="success-icon">
          <img src={tickImage} alt="Success" />
        </div>
        <div className="success-message">
          <h3>{message}</h3>
          <p>The action was completed successfully.</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>

          {vendor && (
            <div className="vendor-details">
              <h4>Vendor Details:</h4>
              <p><strong>Company:</strong> {vendor.name}</p>
              <p><strong>Contact:</strong> {vendor.phone}</p>
              <p><strong>Email:</strong> {vendor.email}</p>
            </div>
          )}
        </div>
        <button className="close-success-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;