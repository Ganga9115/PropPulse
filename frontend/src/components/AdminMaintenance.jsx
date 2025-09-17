import React, { useState } from "react";
import "../styles/AdminMaintenance.css";
import Sidebar from "./Sidebar";
import MaintenanceDetailsModal from "./MaintenanceDetailsModal";
import SuccessModal from "./SuccessModal"; // New component for the success screen

const AdminMaintenance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // New state for success message

  const requests = [
    {
      id: "MTN-2001",
      tenant: "NA Fashion (Unit F-12)",
      issue: "Electrical (Power socket issue)",
      date: "12-Sep-2025",
      status: "Open",
      details: "The power socket in the main retail area is not working. The tenant has tried resetting the breaker with no success.",
      image: "path/to/electrical-issue.png",
    },
    {
      id: "MTN-1012",
      tenant: "Trends Footwear",
      issue: "HVAC (AC not cooling)",
      date: "13-Sep-2025",
      status: "In Progress",
      details: "The AC unit in the back room is blowing warm air. The tenant reported this issue this morning and it's affecting their storage area.",
      image: "path/to/hvac-issue.png",
    },
    {
      id: "MTN-2007",
      tenant: "Aroma Coffee Shop (Unit D-10)",
      issue: "Plumbing (Restroom tap broken)",
      date: "10-Sep-2025",
      status: "In Progress",
      details: "The tap in the customer restroom is leaking continuously and is completely broken.",
      image: "path/to/plumbing-issue.png",
    },
    {
      id: "MTN-2004",
      tenant: "Dynamics Mobiles",
      issue: "General (Broken glass door)",
      date: "9-Sep-2025",
      status: "Closed",
      details: "The glass door at the entrance was shattered due to an accident.",
      image: "path/to/glass-issue.png",
    },
  ];

  const handleOpenModal = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const handleActionSuccess = (message) => {
    handleCloseModal(); // Close the details modal
    const currentTime = new Date();
    const formattedDate = currentTime.toLocaleDateString();
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSuccessMessage({
      text: message,
      date: formattedDate,
      time: formattedTime,
    });
  };

  const handleCloseSuccessModal = () => {
    setSuccessMessage(null);
  };

  const getStatusButton = (status, request) => {
    switch (status) {
      case "Open":
        return (
          <button className="btn danger" onClick={() => handleOpenModal(request)}>
            <span className="dot red"></span> Accept / Assign Vendor
          </button>
        );
      case "In Progress":
        return (
          <button className="btn warning" onClick={() => handleOpenModal(request)}>
            <span className="dot orange"></span> Assign Vendor / Close
          </button>
        );
      case "Closed":
        return (
          <button className="btn success" onClick={() => handleOpenModal(request)}>
            <span className="dot green"></span> View Details
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="maintenance-page">
      <Sidebar />

      <div className="main-content">
        {/* Header with Image */}
        <div className="header-container">
          <div className="text-content">
            
            <div className="main-title">
              <h2>
                Stay in control of every maintenance request – 
                <span className="highlight"> track, assign, and resolve</span> with ease
              </h2>
            </div>
          </div>
       
        </div>

        {/* Filters and Search Bar */}
        <div className="filter-row">
          <div className="status-filter">
            <div className="status-dropdown">Status</div>
            <div className="status-legend-popup">
              <div className="legend-item"><span className="dot red"></span> Open</div>
              <div className="legend-item"><span className="dot orange"></span> In Progress</div>
              <div className="legend-item"><span className="dot green"></span> Closed</div>
            </div>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search requests by ID, status, or issue"
            />
          </div>
        </div>

        {/* Table */}
        <table className="maintenance-table">
          <thead>
            <tr>
              <th>Tenant ID</th>
              <th>Tenant (Shop & Unit No)</th>
              <th>Issue Category</th>
              <th>Raised Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={index}>
                <td>{req.id}</td>
                <td>{req.tenant}</td>
                <td>{req.issue}</td>
                <td>{req.date}</td>
                <td>{getStatusButton(req.status, req)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedRequest && (
        <MaintenanceDetailsModal
          request={selectedRequest}
          onClose={handleCloseModal}
          onAccept={() => handleActionSuccess("Request Accepted!")}
          onAssign={() => handleActionSuccess("Vendor Assigned!")}
        />
      )}

      {successMessage && (
        <SuccessModal
          message={successMessage.text}
          date={successMessage.date}
          time={successMessage.time}
          onClose={handleCloseSuccessModal}
        />
      )}
    </div>
  );
};

export default AdminMaintenance;