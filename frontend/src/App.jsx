import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import SelectUnitPage from './components/SelectUnitPage';
import RequestForm from './components/RequestForm';
import AppLayout from './components/AppLayout';
import AgreementPage from './components/AgreementPage';
import RequestSubmittedPage from './components/RequestSubmittedPage'; // Import the new component

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route element={<AppLayout />}>
        <Route path="/select-unit" element={<SelectUnitPage />} />
        <Route path="/request-form" element={<RequestForm />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route path="/request-submitted" element={<RequestSubmittedPage />} /> {/* Add the new route */}
      </Route>
    </Routes>
  );
}