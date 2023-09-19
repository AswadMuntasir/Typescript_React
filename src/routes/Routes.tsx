import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your page components
import DashboardPage from '../pages/dashboard/Dashboard';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default RoutesComponent;