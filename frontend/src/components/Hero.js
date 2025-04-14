import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div
      className="hero-section text-white text-center py-5"
      style={{
        background: 'url("/bg-hero.png")', // Ganti dengan URL mural/doodle
        backgroundSize: 'cover', // Menyesuaikan gambar dengan layar
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Untuk elemen overlay
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Latar belakang semi-transparan
          zIndex: 1, // Di bawah konten utama
        }}
      ></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center">
          <Col>
            <h1
              className="display-4"
              style={{
                fontWeight: 'bold',
                fontFamily: "'Permanent Marker', cursive", // Font bergaya doodle
                color: '#ffcc00', // Warna kuning cerah
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)', // Bayangan tebal
              }}
            >
              Welcome to My Creative Space
            </h1>
            <p
              className="lead"
              style={{
                fontSize: '1.5rem',
                fontFamily: "'Comic Neue', cursive", // Font bergaya santai
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                background: 'rgba(0, 0, 0, 0.6)', // Latar belakang semi-transparan untuk teks
                padding: '10px 20px', // Memberikan ruang di sekitar teks
                borderRadius: '10px', // Membuat sudut melengkung
                display: 'inline-block', // Agar latar belakang hanya mencakup teks
              }}
            >
              A place where creativity meets technology. Let's build something amazing together!
            </p>
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              style={{
                backgroundColor: '#ff007f', // Warna pink neon
                border: 'none',
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                padding: '10px 20px',
                boxShadow: '0 0 10px rgba(255, 0, 127, 0.8)', // Efek glow
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#e60073')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#ff007f')}
            >
              Explore Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;