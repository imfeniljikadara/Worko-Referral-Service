// src/components/Login.js
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './Login.css'; // Custom CSS for login page

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here

    // Redirect to candidate home after login
    navigate('/candidate/home');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
        <Navbar.Brand as={Link} to="/">Worko</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex ms-auto">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="content-container">
        <div className="login-container">
          <div className="login-form">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="login-input"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="login-input"
                required
              />
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
