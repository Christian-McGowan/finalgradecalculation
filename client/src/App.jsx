import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';

import HomePage from './pages/HomePage.jsx';
import FinalGradeCalculatorPage from './pages/FinalGradeCalculatorPage.jsx';
import WhatDoINeedOnMyFinalPage from './pages/WhatDoINeedOnMyFinalPage.jsx';
import WeightedGradeCalculatorPage from './pages/WeightedGradeCalculatorPage.jsx';
import GradePlannerLandingPage from './pages/GradePlannerLandingPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* High-intent SEO landers */}
        <Route path="/final-grade-calculator" element={<FinalGradeCalculatorPage />} />
        <Route path="/what-do-i-need-on-my-final" element={<WhatDoINeedOnMyFinalPage />} />
        <Route path="/weighted-grade-calculator" element={<WeightedGradeCalculatorPage />} />
        <Route path="/grade-planner" element={<GradePlannerLandingPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* Ads-readiness / trust */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Optional: keep old URLs safe */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Simple not-found */}
        <Route path="*" element={<div style={{ padding: 16 }}>Page not found.</div>} />
      </Routes>
    </Layout>
  );
}
