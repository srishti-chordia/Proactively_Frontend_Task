import React, { useState } from 'react';
import './styles/Login.css'; 

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (you'll likely have more robust server-side validation)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/doctors/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect to dashboard)
        const data = await response.json();
        // Store token in local storage (or use a secure mechanism like cookies)
        localStorage.setItem('doctorToken', data.token);
        window.location.href = '/dashboard'; // Redirect to dashboard
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed.');
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <h2>Doctor Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLogin;
