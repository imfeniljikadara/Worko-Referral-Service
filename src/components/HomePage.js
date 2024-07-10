import React from 'react';
import { Navbar, Container, Form, FormControl, Button, Card, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  // Dummy data for referrals and services
  const mockReferrals = [
    { id: 1, company: 'Company A', industry: 'Tech' },
    { id: 2, company: 'Company B', industry: 'Finance' },
  ];

  const mockServices = [
    { id: 1, service: 'Resume Review' },
    { id: 2, service: 'Interview Handholding' },
    { id: 3, service: 'Career Guidance' },
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Worko</Navbar.Brand>
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
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <h2>Referrals</h2>
            {mockReferrals.map((referral) => (
              <Card key={referral.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{referral.company}</Card.Title>
                  <Card.Text>Industry: {referral.industry}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6}>
            <h2>Services</h2>
            {mockServices.map((service) => (
              <Card key={service.id} className="mb-3">
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

export default HomePage;
