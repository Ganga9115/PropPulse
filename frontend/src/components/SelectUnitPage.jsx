import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectUnitPage.css';

const units = [
  { id: 1, name: 'SHOP A - F(4)', image: 'https://i.pinimg.com/736x/10/39/6e/10396e3cddd5f369ce7c72f3a4158a44.jpg', details: { shopName: "Shop A", floorNo: "4th", rentalPrice: "10000/-", unitSize: "450 sq.ft", block: "mall wing block", leasePeriod: "1st jan 2025 - 25th mar 2025", status: "Active", paymentDueDate: "1st week of every month" } },
  { id: 2, name: 'SHOP B - F(2)', image: 'https://i.pinimg.com/736x/84/e8/5d/84e85dc222e7da57bf9b3b895ea1d6f5.jpg', details: { shopName: "Shop B", floorNo: "2nd", rentalPrice: "12000/-", unitSize: "500 sq.ft", block: "mall wing block", leasePeriod: "1st feb 2025 - 25th apr 2025", status: "Active", paymentDueDate: "1st week of every month" } },
  { id: 3, name: 'SHOP A - F(2)', image: 'https://i.pinimg.com/736x/41/24/07/4124073b714caf838cd606cf0b30e877.jpg', details: { shopName: "Shop C", floorNo: "2nd", rentalPrice: "15000/-", unitSize: "600 sq.ft", block: "mall wing block", leasePeriod: "1st mar 2025 - 25th may 2025", status: "Active", paymentDueDate: "1st week of every month" } },
  { id: 4, name: 'SHOP L - F(1)', image: 'https://i.pinimg.com/736x/55/aa/7a/55aa7a889ae4fdb25443d70f26bd0bb0.jpg', details: { shopName: "Shop L", floorNo: "1st", rentalPrice: "9000/-", unitSize: "400 sq.ft", block: "mall wing block", leasePeriod: "1st apr 2025 - 25th jun 2025", status: "Active", paymentDueDate: "1st week of every month" } },
  { id: 5, name: 'SHOP C - F(2)', image: 'https://i.pinimg.com/736x/70/a4/78/70a478e7019b951c1a13840cf5068f6d.jpg', details: { shopName: "Shop C", floorNo: "2nd", rentalPrice: "11000/-", unitSize: "480 sq.ft", block: "mall wing block", leasePeriod: "1st may 2025 - 25th jul 2025", status: "Active", paymentDueDate: "1st week of every month" } },
  { id: 6, name: 'SHOP A - F(3)', image: 'https://i.pinimg.com/736x/b8/cd/dd/b8cddde0921c2b9c6298bdb49eb08531.jpg', details: { shopName: "Shop A", floorNo: "3rd", rentalPrice: "13000/-", unitSize: "550 sq.ft", block: "mall wing block", leasePeriod: "1st jun 2025 - 25th aug 2025", status: "Active", paymentDueDate: "1st week of every month" } },

];

const SelectUnitPage = () => {
  const navigate = useNavigate();

  const handleUnitSelect = (unit) => {
    navigate('/unit-details', { state: { selectedUnit: unit } });
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
              className="select-button"
              onClick={() => handleUnitSelect(unit)}
            >
              SELECT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectUnitPage;