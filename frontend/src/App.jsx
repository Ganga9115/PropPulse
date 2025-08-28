import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import SelectUnitPage from './components/SelectUnitPage';
import RequestForm from './components/RequestForm';
import AppLayout from './components/AppLayout';
import AgreementPage from './components/AgreementPage';
import RequestSubmittedPage from './components/RequestSubmittedPage';
import TenantDashboard from "./components/TenantDashboard";
import MaintenanceView from "./components/MaintenanceView";
import MaintenanceRequest from "./components/MaintenanceRequest";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<AppLayout />}>
          <Route path="/select-unit" element={<SelectUnitPage />} />
          <Route path="/request-form" element={<RequestForm />} />
          <Route path="/agreement" element={<AgreementPage />} />
          <Route path="/request-submitted" element={<RequestSubmittedPage />} />
        </Route>
        <Route path="/tenant" element={<TenantDashboard />} />
        <Route path="/maintenance" element={<MaintenanceView />} />
        <Route path="/maintenance/new" element={<MaintenanceRequest />} />
      </Routes>
    </Router>
  );
}
