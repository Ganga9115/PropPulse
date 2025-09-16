import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TenantDirectory.css';

const initialTenants = [
  {
    id: '12101',
    name: 'Abi',
    unit: 'Shop A',
    phone: '901234567',
    status: 'Active',
    address: '123 ABC Street, Chennai',
    email: 'abi@example.com',
    rentAmount: 20000,
    rentDueDate: '2025-10-01',
    joiningDate: '2024-05-15',
    profilePic: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/person_account_icon_145945.png',
    leaseStart: '1 Jan 2024',
    leaseEnd: '31 Dec 2024',
    emergencyContact: {
      name: 'Jane Doe',
      phone: '9988776655',
      email: 'jane.doe@example.com'
    }
  },
  {
    id: '12103',
    name: 'Deepika',
    unit: 'Shop B',
    phone: '901234567',
    status: 'pending',
    address: '456 XYZ Road, Bangalore',
    email: 'deepika@example.com',
    rentAmount: 12000,
    rentDueDate: '2025-10-05',
    joiningDate: '2024-03-20',
    profilePic: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/person_account_icon_145945.png',
    leaseStart: '20 Mar 2024',
    leaseEnd: '20 Mar 2025',
    emergencyContact: {
      name: 'John Smith',
      phone: '9988776655',
      email: 'john.smith@example.com'
    }
  },
  {
    id: '12108',
    name: 'Ganga',
    unit: 'Shop C',
    phone: '901234567',
    status: 'overdue',
    address: '789 PQR Avenue, Coimbatore',
    email: 'ganga@example.com',
    rentAmount: 18000,
    rentDueDate: '2025-09-25',
    joiningDate: '2023-11-10',
    profilePic: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/person_account_icon_145945.png',
    leaseStart: '10 Nov 2023',
    leaseEnd: '10 Nov 2024',
    emergencyContact: {
      name: 'Priya Sharma',
      phone: '9988776655',
      email: 'priya.sharma@example.com'
    }
  },
  {
    id: '12102',
    name: 'Bhuvi',
    unit: 'Shop A',
    phone: '901234567',
    status: 'Active',
    address: '101 JKL Lane, Chennai',
    email: 'bhuvi@example.com',
    rentAmount: 14000,
    rentDueDate: '2025-10-01',
    joiningDate: '2024-06-01',
    profilePic: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/person_account_icon_145945.png',
    leaseStart: '1 Jun 2024',
    leaseEnd: '1 Jun 2025',
    emergencyContact: {
      name: 'Raj Kumar',
      phone: '9988776655',
      email: 'raj.kumar@example.com'
    }
  },
];

const TenantDirectory = () => {
  const [tenants, setTenants] = useState(initialTenants);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredTenants = tenants.filter(tenant => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchTerm) ||
      tenant.unit.toLowerCase().includes(searchTerm);
    
    const matchesStatus = statusFilter === 'All' || tenant.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

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
            <option value="Active">Active</option>
            <option value="pending">pending</option>
            <option value="overdue">overdue</option>
          </select>
        </div>
      </div>

      <div className="table-section">
        <h4 className="table-title">List of Tenants:</h4>
        <table className="tenant-table">
          <thead>
            <tr>
              <th>Tenant Name</th>
              <th>Unit/shop</th>
              <th>Tenant ID</th>
              <th>Phone no.</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTenants.map(tenant => (
              <tr key={tenant.id}>
                <td colSpan="5">
                  <Link 
                    to={`/tenant/${tenant.id}`} 
                    state={{ tenant }}
                    className="table-row-link"
                  >
                    <div className="table-row-content">
                      <span className="cell-name">{tenant.name}</span>
                      <span className="cell-unit">{tenant.unit}</span>
                      <span className="cell-id">{tenant.id}</span>
                      <span className="cell-phone">{tenant.phone}</span>
                      <span className={`cell-status status-cell ${tenant.status.toLowerCase()}`}>
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