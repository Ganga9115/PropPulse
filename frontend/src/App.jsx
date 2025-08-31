import { Routes, Route } from "react-router-dom";
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
import Rent from "./components/Rent"; 
import InteractiveMallMap from "./components/InteractiveMallMap";
import DealsOffers from "./components/DealsOffers";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mall-maps" element={<InteractiveMallMap />} />
        <Route path="/deals-offers" element={< DealsOffers />} />
      <Route element={<AppLayout />}>
        <Route path="/select-unit" element={<SelectUnitPage />} />
        <Route path="/request-form" element={<RequestForm />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route path="/request-submitted" element={<RequestSubmittedPage />} />
      </Route>
      <Route path="/dashboard" element={<TenantDashboard />} />
      <Route path="/maintenance" element={<MaintenanceView />} />
      <Route path="/maintenance/new" element={<MaintenanceRequest />} />
       <Route path="/rent" element={<Rent />} /> 
    </Routes>
  );
}
