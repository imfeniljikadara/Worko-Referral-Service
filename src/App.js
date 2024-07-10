// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import CandidateHome from './components/CandidateHome';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidate/home" element={<CandidateHome />} />
        <Route path="/" element={<Index />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
