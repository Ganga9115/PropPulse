// frontend/MaintenanceRequest.jsx (FINAL CORRECTED VERSION)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from 'axios'; 
import "../styles/MaintenanceRequest.css";

axios.defaults.baseURL = 'http://localhost:5000'; 

const Maintenance2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    photo: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.agree) {
        alert("You must agree to the terms to submit a request.");
        return;
    }

    const data = new FormData();
    data.append("tenantId", 1); // Placeholder - TODO: Replace with authenticated user ID
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("priority", formData.priority);
    
    if (formData.photo) {
      data.append("photoFile", formData.photo); 
    }

    try {
        // FIX 1: Corrected POST URL to align with backend router.post('/')
        const response = await axios.post("/api/maintenance", data, {
            headers: {
              'Content-Type': 'multipart/form-data' 
            }
        });
      
        // FIX 2: Corrected response key to 'data' to match backend controller
        alert(`Maintenance request submitted successfully! ID: MR-${response.data.data.id}`);
        navigate("/maintenance"); 

    } catch (error) {
        console.error('Submission failed:', error.response?.data || error.message);
        alert(`Failed to submit request: ${error.response?.data?.error || 'Server error'}`);
    }
  };

return (
  <div className="maintenance-layout">
      <Sidebar />
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Hello Tenant!</h1>
          <p>
            Access all your rental details, payment history, and support in one
            place
          </p>
        </div>

        <div className="maintenance-form-container">
          <div className="maintenance-header">
            <h2>Maintenance</h2>
            <p>Raise requests, track progress, and resolve issues quickly.</p>
            <div className="maintenance-actions">
              <button
                className="btn raise-btn"
                onClick={() => navigate("/maintenance/new")}
              >
                ➕ Raise New Request
              </button>
              <button
                className="btn status-btn"
                onClick={() => navigate("/maintenance")}
              >
                👁 View Maintenance status
              </button>
            </div>
          </div>

          <form className="maintenance-form" onSubmit={handleSubmit}> 
            <div className="form-left">
              <label>Request title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter a short title (e.g., AC not working)"
                value={formData.title}
                onChange={handleChange}
                required
              />

              <label>Request details</label>
              <textarea
                name="description"
                placeholder="Please describe the issue in detail..."
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>

              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Wiring issues">Wiring issues</option>
                <option value="Water supply problems">
                  Water supply problems
                </option>
                <option value="Ceilings">Ceilings</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="form-right">
              <label>Upload photo</label>
              <div className="upload-box">
                <input
                  type="file"
                  name="photo"
                  id="fileUpload"
                  accept="image/*"
                  onChange={handleChange}
                />
                <label htmlFor="fileUpload" className="upload-label">
                  + Click here
                  {formData.photo && <span className="file-name">{formData.photo.name}</span>}
                </label>
              </div>

              <label>Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select priority</option>
                <option value="High">🔴 High</option>
                <option value="Medium">🟠 Medium</option>
                <option value="Low">🟢 Low</option>
              </select>
            </div>
          
          <div className="form-footer">
            <label className="terms">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              By listing your equipment, you agree to the terms, including
              security deposit deductions for damages and compliance with
              platform policies.
            </label>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
          </form>
        </div>
      </div>
  </div>

);

};

export default Maintenance2;