import React, { useState } from 'react';
import '../styles/PaymentHistory.css';

const initialPayments = [
  { id: 1, name: 'Abi', unit: 'Shop A', date: '12.09.2025', amount: 10000, status: 'Unpaid' },
  { id: 2, name: 'Deepika', unit: 'Shop B', date: '08.09.2025', amount: 15000, status: 'Paid' },
  { id: 3, name: 'Ganga', unit: 'Shop C', date: '12.08.2025', amount: 12500, status: 'Paid' },
];

const PaymentHistory = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPayments = payments.filter(payment =>
    payment.name.toLowerCase().includes(searchTerm) ||
    payment.unit.toLowerCase().includes(searchTerm)
  );

  const totalPaid = payments.reduce((acc, current) =>
    current.status === 'Paid' ? acc + current.amount : acc, 0
  );

  const totalPending = payments.reduce((acc, current) =>
    current.status === 'Unpaid' ? acc + current.amount : acc, 0
  );

  const overdueCount = payments.filter(p => p.status === 'Unpaid').length;

  return (
    <div className="main-content">
      {/* Header Container */}
      <div className="header-container">
        <h2 className="page-header-title">Payment History</h2>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by tenant name or shop unit"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-dropdowns-container">
          <select className="filter-select"><option>All</option></select>
          <div className="filter-select-with-dot">
            <span className="dot paid-dot"></span>
            <select className="filter-select"><option>Paid</option></select>
          </div>
          <div className="filter-select-with-dot">
            <span className="dot unpaid-dot"></span>
            <select className="filter-select"><option>Unpaid</option></select>
          </div>
          <div className="date-input-container">
            <label>Due Date :</label>
            <input type="date" className="date-input" />
          </div>
        </div>
      </div>

      {/* Payment Table Section */}
      <div className="table-section">
        <h4 className="table-title">List of Tenant payments:</h4>
        <table className="payment-table">
          <thead>
            <tr>
              <th>Tenant Name</th>
              <th>Unit/shop</th>
              <th>Payment date</th>
              <th>Amount</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.name}</td>
                <td>{payment.unit}</td>
                <td>{payment.date}</td>
                <td>{payment.amount.toLocaleString()}</td>
                <td className={`status ${payment.status.toLowerCase()}`}>
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-item">
          <p>Total payment: {totalPaid.toLocaleString()}</p>
        </div>
        <div className="summary-item">
          <p>Total pending: {totalPending.toLocaleString()}</p>
        </div>
        <div className="summary-item">
          <p>Over due count: {overdueCount}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;