import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import QuizPage from './pages/QuizPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/quiz/:course/:unit/:lesson" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}