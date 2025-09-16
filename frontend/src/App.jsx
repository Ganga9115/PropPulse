import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import SelectUnitPage from './components/SelectUnitPage';
import RequestForm from './components/RequestForm';
import AgreementPage from './components/AgreementPage';
import RequestSubmittedPage from './components/RequestSubmittedPage';
import TenantDashboard from "./components/TenantDashboard";
import MaintenanceView from "./components/MaintenanceView";
import MaintenanceRequest from "./components/MaintenanceRequest";
import Rent from "./components/Rent"; 
import InteractiveMallMap from "./components/InteractiveMallMap";
import DealsOffers from "./components/DealsOffers";
import Payment from "./components/Payment";
import Sidebar from './components/Sidebar';
import "./index.css";
import SuccessfulPayment from './components/SuccessfulPayment';
import UnitDetailsPage from './components/UnitDetailsPage';
import Contact from "./components/Contact";  
import PaymentHistory from "./components/PaymentHistory";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mall-maps" element={<InteractiveMallMap />} />
      <Route path="/deals-offers" element={<DealsOffers />} />
       
      {/* Routes with Sidebar */}
      <Route path="/dashboard" element={<div className="flex"><Sidebar /><TenantDashboard /></div>} />
      <Route path="/maintenance" element={<div className="flex"><Sidebar /><MaintenanceView /></div>} />
      <Route path="/maintenance/new" element={<div className="flex"><Sidebar /><MaintenanceRequest /></div>} />
      <Route path="/rent" element={<div className="flex"><Sidebar /><Rent /></div>} /> 
      <Route path="/payment" element={<div className="flex"><Sidebar /><Payment /></div>} />
      <Route path="/select-unit" element={<div className="flex"><Sidebar /><SelectUnitPage /></div>} />
      <Route path="/request-form" element={<div className="flex"><Sidebar /><RequestForm /></div>} />
      <Route path="/agreement" element={<div className="flex"><Sidebar /><AgreementPage /></div>} />
      <Route path="/request-submitted" element={<div className="flex"><Sidebar /><RequestSubmittedPage /></div>} />
      <Route path="/successful-payment" element={<div className="flex"><Sidebar /><SuccessfulPayment /></div>} />
      <Route path="/unit-details" element={<div className="flex"><Sidebar /><UnitDetailsPage /></div>} />
      <Route path="/contact" element={<div className="flex"><Sidebar /><Contact /></div>} /> 
      <Route path="/payment-history" element={<div className="flex"><Sidebar /><PaymentHistory /></div>} />
    </Routes>
  );
}
