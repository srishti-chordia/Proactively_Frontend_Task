import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DoctorLogin from './styles/DoctorLogin'; // Import your DoctorLogin component
import './styles/App.scss';

function App() {
  return (
    <Router>
      <nav>
        {/* Add a link to the Doctor Login page */}
        <Link to="/doctor-login">Doctor Login</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-login" element={<DoctorLogin />} /> 
      </Routes>
    </Router>
  );
}

export default App;
