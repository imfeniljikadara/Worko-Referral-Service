// src/components/Index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
// import SearchComponent from './SearchComponent';
import './Index.css'; // Custom CSS for Index page
// import image1 from '/src/globe-img.png';
// import image2 from '/src/logo_bg.png';
// import image3 from '/src/Screenshot_2024-07-10_at_4.06.00_PM-removebg-preview.png';
// import image4 from '/src/Screenshot_2024-07-10_at_4.06.09_PM-removebg-preview.png';
const Index = () => {
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
            <Link to="/login" className="btn btn-outline-secondary ms-2">Login</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="content-container">
        <header className="text-center py-5">
          <h1 className="mb-4">Welcome to Worko, Connect to people!</h1>
        </header>

        <main>
  {<div className="py-4">
              <img src="/src/globe-img.png" className="index-image" alt="Office workspace 1" />
              <img src="/srs/logo_bg.png" className="index-image1" alt="Office workspace 2" />
              <img src="/srs/Screenshot_2024-07-10_at_4.06.00_PM-removebg-preview.png" className="index-image2" alt="Office workspace 3" />
              <img src="/srs/Screenshot_2024-07-10_at_4.06.09_PM-removebg-preview.png" className="index-image3" alt="Office workspace 4" /> */}
{/* // <img src={image1} alt="Office workspace 1" className="index-image" />
            // <img src={image2} alt="Office workspace 2" className="index-image1" />
            // <img src={image3} alt="Office workspace 3" className="index-image2" />
            // <img src={image4} alt="Office workspace 4" className="index-image3" />*/}
          </div>}
        </main>

        <footer className="mt-5 text-center">
          <p>&copy; {new Date().getFullYear()} Worko. All Rights Reserved.</p>
        </footer>
      </Container>
    </div>
  );
};

export default Index;
