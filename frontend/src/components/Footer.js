import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'url("/bg-footer-doodle.png")', // Ganti dengan URL latar belakang doodle
        backgroundSize: 'cover', // Menyesuaikan gambar dengan layar
        backgroundPosition: 'center',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay untuk memberikan kontras */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Overlay semi-transparan hitam
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row>
          <Col>
            <p
              style={{
                margin: 0,
                fontSize: '1rem',
                fontFamily: "'Permanent Marker', cursive", // Font bergaya doodle
                color: '#ffcc00', // Warna kuning cerah
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Efek bayangan pada teks
              }}
            >
              &copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Elemen dekoratif doodle */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '100px',
          height: '100px',
          backgroundColor: '#ffcc00', // Warna kuning cerah
          borderRadius: '50%',
          boxShadow: '0 0 15px rgba(255, 204, 0, 0.8)', // Efek glow
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '100px',
          height: '100px',
          backgroundColor: '#00ffff', // Warna biru neon
          borderRadius: '50%',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)', // Efek glow
          zIndex: 0,
        }}
      ></div>
    </footer>
  );
};

export default Footer;