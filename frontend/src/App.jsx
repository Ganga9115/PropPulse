import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import SelectUnitPage from "./components/SelectUnitPage";
import RequestForm from "./components/RequestForm";
import AppLayout from "./components/AppLayout";
import AgreementPage from "./components/AgreementPage";
import RequestSubmittedPage from "./components/RequestSubmittedPage";
import TenantDashboard from "./components/TenantDashboard";
import MaintenanceView from "./components/MaintenanceView";
import MaintenanceRequest from "./components/MaintenanceRequest";
import Rent from "./components/Rent";
import UnitDetailsPage from "./components/UnitDetailsPage";
import Contact from "./components/Contact"; // <- new page

import "./index.css";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Protected/Layout Routes */}
     
        <Route path="/select-unit" element={<SelectUnitPage />} />
        <Route path="/request-form" element={<RequestForm />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route path="/request-submitted" element={<RequestSubmittedPage />} />
        <Route path="/dashboard" element={<TenantDashboard />} />
        <Route path="/maintenance" element={<MaintenanceView />} />
        <Route path="/maintenance/new" element={<MaintenanceRequest />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/unit-details" element={<UnitDetailsPage />} />
        <Route path="/contact" element={<Contact/>} />
    
    </Routes>
  );
}
