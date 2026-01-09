// frontend/MaintenanceDetailsModal.jsx (FINAL VERIFIED CODE)

import React, { useState } from "react";
import axios from 'axios'; 
import "../styles/MaintenanceDetailsModal.css";

axios.defaults.baseURL = 'http://localhost:5000'; 

const MaintenanceDetailsModal = ({ request, onClose, onActionSuccess }) => {
    if (!request) return null;

    // Use the actual model column name for reading
    const [vendorName, setVendorName] = useState(request.assignedTo || ""); 
    
    // Format the date correctly for the input field if it exists
    const initialVisitDate = request.expectedVisit 
      ? new Date(request.expectedVisit).toISOString().substring(0, 16) 
      : "";
    const [expectedVisit, setExpectedVisit] = useState(initialVisitDate);


    // --- ASSIGN/UPDATE VENDOR HANDLER ---
    const handleAssignVendor = async () => {
        if (!vendorName || !expectedVisit) {
            alert("Please enter both Vendor Name and Expected Visit Date/Time.");
            return;
        }

        try {
            await axios.put(`/api/maintenance/${request.id}`, {
                status: "Assigned", 
                assignedVendor: vendorName, // Sent to backend to map to 'assignedTo'
                expectedVisit: expectedVisit,
            });

            onActionSuccess(`Request MTN-${request.id} assigned to ${vendorName}!`);

        } catch (error) {
            console.error('Assignment failed:', error.response?.data || error.message);
            alert(`Failed to assign vendor: ${error.response?.data?.error || 'Server error'}`);
        }
    };
    
    // --- ACCEPT REQUEST HANDLER (Sets status to In Progress) ---
    const handleAcceptRequest = async () => {
        try {
            await axios.put(`/api/maintenance/${request.id}`, {
                status: "In Progress", 
            });
            onActionSuccess(`Request MTN-${request.id} accepted. Status set to In Progress.`);
        } catch (error) {
            console.error('Acceptance failed:', error.response?.data || error.message);
            alert(`Failed to accept request: ${error.response?.data?.error || 'Server error'}`);
        }
    };
    
    // --- MARK AS COMPLETED HANDLER ---
    const handleCompleteRequest = async () => {
        if (!window.confirm("Are you sure you want to mark this request as Completed?")) {
            return;
        }
        try {
            await axios.put(`/api/maintenance/${request.id}`, {
                status: "Completed", 
            });
            onActionSuccess(`Request MTN-${request.id} has been marked as Completed.`);
        } catch (error) {
            console.error('Completion failed:', error.response?.data || error.message);
            alert(`Failed to mark request complete: ${error.response?.data?.error || 'Server error'}`);
        }
    };
    // --------------------------------


    // Function to generate the full image URL (unchanged)
    const getFullImageUrl = (photoURL) => {
      if (!photoURL) return null;
      // Model uses 'photoUrl' (lowercase L)
      return `http://localhost:5000${photoURL}`; 
    };

    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>&times;</button>
          <div className="modal-header">
            <h3>Request Details: MTN-{request.id}</h3>
          </div>
          <div className="modal-body">
            <p><strong>Tenant ID:</strong> TNT-{request.userId}</p> 
            <p><strong>Issue Category:</strong> {request.category}</p>
            <p><strong>Raised Date:</strong> {new Date(request.createdAt).toLocaleDateString()}</p>
            <p><strong>Current Status:</strong> {request.status}</p>
            
            <div className="issue-details">
              <h4>Issue Description:</h4>
              {/* Use 'details' from the model */}
              <p>{request.details}</p> 
            </div>

            <div className="issue-image-container">
              <h4>Maintenance Image:</h4>
              {/* Use 'photoUrl' from the model */}
              {request.photoUrl ? ( 
                <img 
                  src={getFullImageUrl(request.photoUrl)} 
                  alt="Maintenance issue photo" 
                  className="issue-image" 
                />
              ) : (
                <p>No image uploaded for this issue.</p>
              )}
            </div>

            {/* Assignment form visible for Open, Assigned, or In Progress */}
            {['Open', 'Assigned', 'In Progress'].includes(request.status) && (
              <div className="assignment-form">
                <h4>Assign Vendor:</h4>
                <input
                  type="text"
                  placeholder="Vendor Name (e.g., ABC Services)"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                />
                <br />
                <br/>
                <input
                  type="datetime-local"
                  placeholder="Expected Visit Date/Time"
                  value={expectedVisit}
                  onChange={(e) => setExpectedVisit(e.target.value)}
                />
              </div>
            )}


            <div className="modal-actions">
              {request.status === 'Open' && (
                <>
                  <button className="btn accept-btn" onClick={handleAcceptRequest}>Accept Request</button>
                  <button className="btn assign-btn" onClick={handleAssignVendor}>Assign Vendor</button>
                </>
              )}
              {request.status === 'Assigned' && (
                  <button className="btn assign-btn" onClick={handleAssignVendor}>Update Assignment</button>
              )}
              {request.status === 'In Progress' && (
                <button className="btn success" onClick={handleCompleteRequest}>Mark as Completed</button> 
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default MaintenanceDetailsModal;