import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: 'rgba(0, 0, 0, 0.5)', // Latar belakang transparan
        backdropFilter: 'blur(10px)', // Efek blur untuk latar belakang
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Bayangan halus
        zIndex: 1030, // Agar selalu di atas konten lainnya
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#ffcc00', // Warna kuning cerah
            fontWeight: 'bold',
            fontFamily: "'Permanent Marker', cursive", // Font bergaya doodle
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Bayangan tebal
          }}
        >
          {/* Logo */}
          <img
            src="https://via.placeholder.com/40" // Ganti dengan URL logo Anda
            alt="Logo"
            style={{
              width: '40px',
              height: '40px',
              marginRight: '10px',
              borderRadius: '50%', // Membuat logo berbentuk lingkaran
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)', // Efek glow pada logo
            }}
          />
          MyPortfolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            border: 'none', // Menghapus border default
            backgroundColor: '#ff007f', // Warna pink neon
            boxShadow: '0 0 8px #ff007f', // Efek glow pada tombol toggle
            borderRadius: '5px', // Membuat sudut tombol sedikit melengkung
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{
                color: '#ffffff',
                fontFamily: "'Comic Neue', cursive", // Font bergaya santai
                margin: '0 10px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Bayangan pada teks
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.color = '#ffcc00')}
              onMouseOut={(e) => (e.target.style.color = '#ffffff')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{
                color: '#ffffff',
                fontFamily: "'Comic Neue', cursive", // Font bergaya santai
                margin: '0 10px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Bayangan pada teks
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.color = '#ffcc00')}
              onMouseOut={(e) => (e.target.style.color = '#ffffff')}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              style={{
                color: '#ffffff',
                fontFamily: "'Comic Neue', cursive", // Font bergaya santai
                margin: '0 10px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Bayangan pada teks
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.color = '#ffcc00')}
              onMouseOut={(e) => (e.target.style.color = '#ffffff')}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;