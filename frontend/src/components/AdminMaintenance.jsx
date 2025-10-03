// frontend/AdminMaintenance.jsx

import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import "../styles/AdminMaintenance.css";
import SidebarAdmin from "./SidebarAdmin";
import MaintenanceDetailsModal from "./MaintenanceDetailsModal";
import SuccessModal from "./SuccessModal"; 

axios.defaults.baseURL = 'http://localhost:5000'; 

const AdminMaintenance = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null); 
    const [requests, setRequests] = useState([]); // State to hold fetched requests
    const [loading, setLoading] = useState(true);

    // Function to fetch data from the backend
    const fetchRequests = useCallback(async () => {
        try {
            setLoading(true);
            // Calls the Admin Fetch Route, which now includes tenant data
            const response = await axios.get('/api/maintenance/admin');
            setRequests(response.data);
        } catch (error) {
            console.error('Error fetching maintenance data:', error);
            // This alert might be the source of the "failed to load" message if the request fails
            alert('Failed to load maintenance requests. Check console for details.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchRequests();
    }, [fetchRequests]);

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
        fetchRequests(); // RE-FETCH DATA to update the table instantly
        const currentTime = new Date();
        setSuccessMessage({
            text: message,
            date: currentTime.toLocaleDateString(),
            time: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
    };

    const handleCloseSuccessModal = () => {
        setSuccessMessage(null);
    };

    // This function determines the button and text based on the request status
    const getStatusButton = (status, request) => {
        switch (status) {
            case "Open":
                return (
                    <button className="btn danger" onClick={() => handleOpenModal(request)}>
                        <span className="dot red"></span> Accept / Assign Vendor
                    </button>
                );
            case "Assigned": 
            case "In Progress":
                return (
                    <button className="btn warning" onClick={() => handleOpenModal(request)}>
                        <span className="dot orange"></span> Assign Vendor / Close
                    </button>
                );
            case "Completed": 
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
    
    if (loading) {
        return <div className="maintenance-page"><SidebarAdmin /><div className="main-content">Loading Requests...</div></div>;
    }

    return (
        <div className="maintenance-page">
            <SidebarAdmin />

            <div className="main-content">
                {/* Header Content */}
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
                    {/* ... (Filters/Search UI) ... */}
                </div>

                {/* Table */}
                <table className="maintenance-table">
                    <thead>
                        <tr>
                            <th>Request ID</th>
                            <th>Tenant</th>
                            <th>Issue Category</th>
                            <th>Raised Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length > 0 ? (
                            requests.map((req) => (
                                <tr key={req.id}>
                                    <td>{req.maintenanceId || `MTN-${req.id}`}</td>
                                    {/* FIX: Use Optional Chaining (?.) to safely access nested username */}
                                    <td>
                                        {req.tenant?.username || `TNT-${req.userId}`} 
                                    </td>
                                    <td>
                                        {req.category} ({req.title || 'N/A'})
                                    </td>
                                    <td>{new Date(req.createdAt).toLocaleDateString()}</td>
                                    <td>{req.status}</td>
                                    <td>{getStatusButton(req.status, req)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="6" style={{textAlign: 'center'}}>No maintenance requests currently available.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedRequest && (
                <MaintenanceDetailsModal
                    request={selectedRequest}
                    onClose={handleCloseModal}
                    // We pass the action success handler here
                    onActionSuccess={handleActionSuccess} 
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