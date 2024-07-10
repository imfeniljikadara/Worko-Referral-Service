// src/components/CandidateHome.js
import React from 'react';
import { Navbar, Container, Form, FormControl, Button, Card, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './CandidateHome.css'; // Custom CSS for CandidateHome page

const CandidateHome = () => {
  // Dummy data for referrals and services
  const mockReferrals = [
    { id: 1, company: 'Company A', industry: 'Tech' },
    { id: 2, company: 'Company B', industry: 'Finance' },
    { id: 3, company: 'Company C', industry: 'Tech' },
    { id: 4, company: 'Company D', industry: 'Tech' },
    { id: 5, company: 'Company E', industry: 'Finance' },
    { id: 6, company: 'Company F', industry: 'Finance' },
  ];

  const mockServices = [
    { id: 1, service: 'Resume Review' },
    { id: 2, service: 'Interview Handholding' },
    { id: 3, service: 'Career Guidance' },
  ];

  // Use useHistory hook to manage navigation
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/index');
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
            <Button variant="outline-secondary" onClick={handleLogout} className="ms-2">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="content-container">
        <Row>
          <Col md={6}>
            <h2 className="section-title">Referrals</h2>
            {mockReferrals.map((referral) => (
              <Card key={referral.id} className="card">
                <Card.Body>
                  <Card.Title>{referral.company}</Card.Title>
                  <Card.Text>Industry: {referral.industry}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6}>
            <h2 className="section-title">Services</h2>
            {mockServices.map((service) => (
              <Card key={service.id} className="card">
                <Card.Body>
                  <Card.Text>{service.service}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CandidateHome;
