import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContent } from './components/layout/AppContent';

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}