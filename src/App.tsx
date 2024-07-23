import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Your main page component
import CaseStudyPage from './case-study/CaseStudy'; // Your case study page component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
      </Routes>
    </div>
  );
}

export default App;
