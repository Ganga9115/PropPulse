// frontend/MaintenanceView.jsx

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Sidebar from "./Sidebar";
import "../styles/MaintenanceView.css";
import maintenanceImg from "../assets/maintenances1.png"; // Placeholder image

axios.defaults.baseURL = 'http://localhost:5000'; 

const MaintenanceView = () => {
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Placeholder: Replace '1' with the actual authenticated tenant ID
    const tenantId = 1; 

    const fetchRequests = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/maintenance/tenant/${tenantId}`);
            setRequests(response.data);
        } catch (error) {
            console.error("Error fetching maintenance requests:", error);
            alert("Failed to load maintenance status.");
        } finally {
            setLoading(false);
        }
    }, [tenantId]);

    useEffect(() => {
        fetchRequests();
    }, [fetchRequests]);
    
    // Helper to format the status badge class (e.g., 'In Progress' -> 'in-progress')
    const getStatusClass = (status) => {
        if (!status) return 'pending';
        return status.toLowerCase().replace(' ', '-');
    };

    const handleViewRequest = (requestId) => {
        // Navigate to a detailed view of the request
        navigate(`/maintenance/${requestId}`);
    };

    const renderRequestCard = (request) => {
        const visitDate = request.expectedVisit ? new Date(request.expectedVisit) : null;
        
        // Determine if the status badge should be a clickable button
        const isActionButton = request.status === 'Open' || request.status === 'Assigned' || request.status === 'In Progress';
        
        return (
            <div className="request-card" key={request.id}>
                <div className="request-header">
                    <span className="request-id">Request ID: {request.maintenanceId || `MR-${request.id}`}</span>
                    
                    {/* Render status as a Button if actionable, otherwise a Span badge */}
                    {isActionButton ? (
                        <button 
                            className={`status-badge ${getStatusClass(request.status)}`}
                            onClick={() => handleViewRequest(request.id)}
                        >
                            {request.status}
                        </button>
                    ) : (
                        <span className={`status-badge ${getStatusClass(request.status)}`}>{request.status}</span>
                    )}
                </div>
                
                <div className="request-body">
                    <p className="request-title">
                        Title: "{request.title}"
                    </p>
                    
                    {request.assignedTo && (
                        <p>
                            🔧 Assigned to vendor: <strong>{request.assignedTo}</strong>
                        </p>
                    )}
                    
                    {visitDate && (
                        <p>
                            📅 Expected visit: {visitDate.toLocaleDateString()} at {visitDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    )}
                    
                    {!request.assignedTo && request.status === 'Open' && (
                        <p>Waiting for admin review and vendor assignment...</p>
                    )}
                </div>
            </div>
        );
    }
    
    if (loading) {
        return <div className="maintenance-layout"><Sidebar /><div className="dashboard">Loading Status...</div></div>;
    }

    return (
        <div className="maintenance-layout">
            <Sidebar />
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>Hello Tenant!</h1>
                    <p>
                        Access all your rental details, payment history, and support in one place
                    </p>
                </div>

                <div className="maintenance-content">
                    {/* NEW: Container for Header Text and Illustration */}
                    <div className="header-and-illustration">
                        <div className="maintenance-header">
                            <h2>Maintenance Status</h2>
                            <p>Track the progress of your maintenance requests below.</p>
                            <div className="maintenance-actions">
                                <button
                                    className="btn raise-btn"
                                    onClick={() => navigate("/maintenance/new")}
                                >
                                    ➕ Raise New Request
                                </button>
                            </div>
                        </div>
                        
                        {/* Illustration is now next to the header, not the request list */}
                        <div className="illustration">
                            <img src={maintenanceImg} alt="Maintenance worker" />
                        </div>
                    </div>
                    {/* END NEW CONTAINER */}

                    <div className="legend">
                        <span className="open">Open</span>
                        <span className="assigned">Assigned</span>
                        <span className="in-progress">Progress</span>
                        <span className="completed">Completed</span>
                    </div>

                    {/* The list now uses the full width */}
                    <div className="request-list">
                        {requests.length > 0 ? (
                            requests.map(renderRequestCard)
                        ) : (
                            <p>You have no submitted maintenance requests.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceView;