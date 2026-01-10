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

import ToolsPage from './pages/ToolsPage.jsx';
import WhatScoreDoINeedOnMyFinalExamPage from './pages/WhatScoreDoINeedOnMyFinalExamPage.jsx';
import CanIStillPassThisClassPage from './pages/CanIStillPassThisClassPage.jsx';
import DropLowestGradeCalculatorPage from './pages/DropLowestGradeCalculatorPage.jsx';
import FinalExamWorth40PercentPage from './pages/FinalExamWorth40PercentPage.jsx';

import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Hub */}
        <Route path="/tools" element={<ToolsPage />} />

        {/* Core tools */}
        <Route path="/final-grade-calculator" element={<FinalGradeCalculatorPage />} />
        <Route path="/what-do-i-need-on-my-final" element={<WhatDoINeedOnMyFinalPage />} />
        <Route path="/weighted-grade-calculator" element={<WeightedGradeCalculatorPage />} />
        <Route path="/grade-planner" element={<GradePlannerLandingPage />} />

        {/* Long-tail traction pages */}
        <Route path="/what-score-do-i-need-on-my-final-exam" element={<WhatScoreDoINeedOnMyFinalExamPage />} />
        <Route path="/can-i-still-pass-this-class" element={<CanIStillPassThisClassPage />} />
        <Route path="/drop-lowest-grade-calculator" element={<DropLowestGradeCalculatorPage />} />
        <Route path="/final-exam-worth-40-percent" element={<FinalExamWorth40PercentPage />} />

        {/* Trust */}
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Old URLs */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
