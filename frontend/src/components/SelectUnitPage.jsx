import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectUnitPage.css';

const units = [
  { id: 1, name: 'SHOP A - F(4)', image: 'https://i.pinimg.com/736x/10/39/6e/10396e3cddd5f369ce7c72f3a4158a44.jpg' },
  { id: 2, name: 'SHOP B - F(2)', image: 'https://i.pinimg.com/736x/84/e8/5d/84e85dc222e7da57bf9b3b895ea1d6f5.jpg' },
  { id: 3, name: 'SHOP A - F(2)', image: 'https://i.pinimg.com/736x/d4/95/35/d495354b9d6f9ee9f0cabcb43ffbbe6a.jpg' },
  { id: 4, name: 'SHOP L - F(1)', image: 'https://i.pinimg.com/736x/55/aa/7a/55aa7a889ae4fdb25443d70f26bd0bb0.jpg' },
  { id: 5, name: 'SHOP C - F(2)', image: 'https://i.pinimg.com/1200x/17/5e/d9/175ed9290d761a8754d6b4a6eca1aa3d.jpg' },
  { id: 6, name: 'SHOP A - F(3)', image: 'https://i.pinimg.com/1200x/66/d0/42/66d042437014e0cd0826a239673e3893.jpg' },
  { id: 7, name: 'SHOP A - F(2)', image: 'https://i.pinimg.com/1200x/14/80/99/148099cd4f6c7e9ddde8ce66934c428e.jpg' },
  { id: 8, name: 'SHOP L - F(1)', image: 'https://i.pinimg.com/736x/a7/5b/c1/a75bc11c28afc141b3522b020bbf0dfa.jpg' },
  { id: 9, name: 'SHOP C - F(2)', image: 'https://i.pinimg.com/736x/97/57/eb/9757eb75504aae98401960ab0f76df24.jpg' },
  { id: 10, name: 'SHOP A - F(3)', image: 'https://i.pinimg.com/736x/bc/d0/79/bcd079aba9738cee1c6d6b4a97747e5a.jpg' },
];

const SelectUnitPage = () => {
  const navigate = useNavigate();
  const [selectedUnitId, setSelectedUnitId] = useState(null);

  const handleUnitSelect = (unitId) => {
    setSelectedUnitId(unitId);
  };

  const handleRequestServiceClick = () => {
    if (selectedUnitId !== null) {
      navigate('/request-form');
    } else {
      alert('Please select a unit before proceeding.');
    }
  };

  return (
    <div className="select-unit-container">
      <div className="header-section">
        <h2 className="header-title">Tenant Request</h2>
        <p className="header-subtitle">Access all your rental details, payment history, and support in one place</p>
      </div>
      
      <h3 className="section-heading">Select your unit/Place</h3>
      
      <div className="unit-grid">
        {units.map(unit => (
          <div key={unit.id} className="unit-card">
            <img src={unit.image} alt={unit.name} className="unit-image" />
            <p className="unit-name">{unit.name}</p>
            <button
              className={`select-button ${selectedUnitId === unit.id ? 'selected' : ''}`}
              onClick={() => handleUnitSelect(unit.id)}
            >
              SELECT
            </button>
          </div>
        ))}
      </div>
      
      <button 
        className={`request-service-button ${selectedUnitId === null ? 'disabled' : ''}`}
        onClick={handleRequestServiceClick}
        disabled={selectedUnitId === null}
      >
        Request Service
      </button>
    </div>
  );
};

export default SelectUnitPage;
