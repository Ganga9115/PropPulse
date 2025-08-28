import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AgreementPage.css';

const AgreementPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleAgreeClick = () => {
    if (isChecked) {
      // Navigate to the success page
      navigate('/request-submitted');
    } else {
      alert("Please confirm that you have read and agreed to the Terms & Conditions.");
    }
  };

  return (
    <div className="agreement-container">
      <div className="header-section">
        <h1 className="agreement-title">Agreement</h1>
        <h2 className="terms-subtitle">Terms & Conditions</h2>
        <p className="terms-description">
          By accessing or using our application, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
      </div>

      <div className="terms-card">
        <ul className="terms-list">
          <li className="term-item">
            <span className="bullet">●</span> 
            <span className="term-text">
              User Responsibility – Users must provide accurate information and use the app for lawful property management purposes only.
            </span>
          </li>
          <li className="term-item">
            <span className="bullet">●</span>
            <span className="term-text">
              Payment Terms – All rental and service payments processed through the app are subject to applicable fees and must be completed on time.
            </span>
          </li>
          <li className="term-item">
            <span className="bullet">●</span>
            <span className="term-text">
              Data Privacy – Personal and property data will be collected and used strictly in accordance with our Privacy Policy
            </span>
          </li>
          <li className="term-item">
            <span className="bullet">●</span>
            <span className="term-text">
              Service Limitations – The app facilitates communication and management but is not liable for disputes between tenants and property owners.
            </span>
          </li>
          <li className="term-item">
            <span className="bullet">●</span>
            <span className="term-text">
              Termination – The company reserves the right to suspend or terminate user accounts in case of misuse or policy violation.
            </span>
          </li>
        </ul>
      </div>

      <div className="agreement-footer">
        <label className="checkbox-container">
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={() => setIsChecked(!isChecked)} 
          />
          <span className="checkmark"></span>
          <span className="label-text">I confirm that you have read, understood, and agreed to these Terms & Conditions.</span>
        </label>
        <button 
          className={`agree-button ${isChecked ? '' : 'disabled'}`} 
          onClick={handleAgreeClick}
          disabled={!isChecked}
        >
          Agree & Continue
        </button>
      </div>
    </div>
  );
};

export default AgreementPage;