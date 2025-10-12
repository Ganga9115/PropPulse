import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TenantDirectory.css';

const TenantDirectory = () => {
  const [tenants, setTenants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  // Fetch tenants from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/tenants')
      .then((res) => res.json())
      .then((data) => {
        setTenants(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tenants:', err);
        setLoading(false);
      });
  }, []);

  // Search input handler
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Status filter handler
  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  // Filter tenants based on search and status
  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.tenantName.toLowerCase().includes(searchTerm) ||
      tenant.shopName.toLowerCase().includes(searchTerm);
    const matchesStatus = statusFilter === 'All' || tenant.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) return <p>Loading tenant data...</p>;

  return (
    <div className="main-content">
      <div className="header-container">
        <h2 className="page-header-title">Tenant Directory</h2>
      </div>

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
        <div className="filter-dropdown-container">
          <select
            className="filter-select"
            value={statusFilter}
            onChange={handleStatusFilter}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Declined">Declined</option>
            <option value="Vendor Assigned">Vendor Assigned</option>
          </select>
        </div>
      </div>

      <div className="table-section">
        <h4 className="table-title">List of Tenants:</h4>
        <table className="tenant-table">
          <thead>
            <tr>
              <th>Tenant Name</th>
              <th>Unit/Shop</th>
              <th>Tenant ID</th>
              <th>Phone No.</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTenants.map((tenant) => (
              <tr key={tenant.id}>
                <td colSpan="5">
                  <Link
                    to={`/tenant/${tenant.id}`}
                    state={{ tenant }}
                    className="table-row-link"
                  >
                    <div className="table-row-content">
                      <span className="cell-name">{tenant.tenantName}</span>
                      <span className="cell-unit">{tenant.shopName}</span>
                      <span className="cell-id">{tenant.tenantId}</span>
                      <span className="cell-phone">{tenant.contactNo}</span>
                      <span
                        className={`cell-status status-cell ${tenant.status.toLowerCase().replace(/ /g,'')}`}
                      >
                        <div className="status-dot"></div>
                        {tenant.status}
                      </span>
                    </div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenantDirectory;
