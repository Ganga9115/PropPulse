// src/components/ProtectedRoute.jsx (Revised)

import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
    // Attempt to get the role directly (our primary check)
    let userRole = localStorage.getItem('userRole');
    
    // Fallback Check: If userRole is null, try parsing the full user object
    if (!userRole) {
        const user = localStorage.getItem('user');
        if (user) {
            try {
                // If the full user object is present, extract the role from it
                userRole = JSON.parse(user).role; 
            } catch (e) {
                console.error("Failed to parse user object from localStorage", e);
            }
        }
    }
    
    // Normalize role and set authenticated status
    userRole = userRole ? userRole.toLowerCase() : null;
    const isAuthenticated = !!userRole;

    // Authorization check
    const isAuthorized = isAuthenticated && allowedRoles.includes(userRole);

    if (!isAuthenticated) {
        // Clear storage just in case of stale data before redirecting to login
        localStorage.clear();
        // Redirect to login page
        return <Navigate to="/login" replace />; 
    }

    if (!isAuthorized) {
        // If logged in but unauthorized (e.g., tenant hitting /admin-dashboard)
        // Redirect to their default dashboard (Tenant -> /dashboard, Admin -> /admin-dashboard)
        if (userRole === 'admin') {
            return <Navigate to="/admin-dashboard" replace />;
        } else if (userRole === 'tenant') {
            return <Navigate to="/dashboard" replace />;
        }
        // Fallback to home page if role is weird
        return <Navigate to="/" replace />;
    }

    // Pass the route check
    return <Outlet />;
};

export default ProtectedRoute;