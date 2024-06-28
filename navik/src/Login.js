import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting login form with username:', username, 'password:', password);

    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });
      const { token } = response.data;
      console.log('Login successful. Token:', token);

      // sacuvaj token u local storage
      localStorage.setItem('token', token);

      // idi u dashboard
      window.location.href = '/dashboard'; // treba da se promjeni

    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center login-background" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="card" style={{ width: "650px" }}>
            <div className="card-body">
              <h2 className="card-title text-center">Log In</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
