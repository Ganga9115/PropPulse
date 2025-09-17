import React from "react";
import "../styles/MaintenanceDetailsModal.css";

// Import issue images from your assets folder
import electricalIssueImage from "../assets/electrical-issue.png";
import hvacIssueImage from "../assets/hvac-issue.png";
import plumbingIssueImage from "../assets/plumbing-issue.png";
import glassIssueImage from "../assets/glass-issue.png";

// Add onAccept and onAssign props
const MaintenanceDetailsModal = ({ request, onClose, onAccept, onAssign }) => {
  if (!request) return null;

  const getIssueImage = (issue) => {
    switch (issue) {
      case "Electrical (Power socket issue)":
        return electricalIssueImage;
      case "HVAC (AC not cooling)":
        return hvacIssueImage;
      case "Plumbing (Restroom tap broken)":
        return plumbingIssueImage;
      case "General (Broken glass door)":
        return glassIssueImage;
      default:
        return null;
    }
  };

  const currentImage = getIssueImage(request.issue);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <h3>Request Details: {request.id}</h3>
        </div>
        <div className="modal-body">
          <p><strong>Tenant:</strong> {request.tenant}</p>
          <p><strong>Issue Category:</strong> {request.issue}</p>
          <p><strong>Raised Date:</strong> {request.date}</p>
          <p><strong>Status:</strong> {request.status}</p>
          
          <div className="issue-details">
            <h4>Issue Description:</h4>
            <p>{request.details}</p>
          </div>

          <div className="issue-image-container">
            <h4>Maintenance Image:</h4>
            {currentImage ? (
              <img src={currentImage} alt="Maintenance issue" className="issue-image" />
            ) : (
              <p>No image available for this issue.</p>
            )}
          </div>

          <div className="modal-actions">
            <button className="btn accept-btn" onClick={onAccept}>Accept Request</button>
            <button className="btn assign-btn" onClick={onAssign}>Assign Vendor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceDetailsModal;