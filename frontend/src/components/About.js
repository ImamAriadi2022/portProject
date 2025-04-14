import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <div
      className="about-section text-white text-center"
      style={{
        background: 'url("/bg-doodle.png")', // Ganti dengan URL latar belakang doodle/mural
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
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // Latar belakang semi-transparan putih
          zIndex: 1, // Di bawah konten utama
        }}
      ></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center">
        <h2
              style={{
                fontWeight: 'bold',
                fontFamily: "'Permanent Marker', cursive", // Font bergaya doodle
                color: '#ff007f', // Warna pink neon
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)', // Bayangan tebal
                fontSize: '2.5rem',
                marginBottom: '20px',
              }}
                className="mb-5"
            >
              About Me
            </h2>
          <Col md={6}>
            <Image
              src="https://via.placeholder.com/300"
              roundedCircle
              alt="Profile"
              className="mb-4"
              style={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Efek bayangan halus
                border: '5px solid #ffcc00', // Border kuning cerah untuk gambar
                backgroundColor: '#ffffff', // Latar belakang putih untuk gambar
              }}
            />
          </Col>
          <Col md={6}>
            <p
              style={{
                fontSize: '1.2rem',
                fontFamily: "'Comic Neue', cursive", // Font bergaya santai
                color: '#333333',
                background: 'rgba(255, 255, 255, 0.9)', // Latar belakang putih semi-transparan
                padding: '15px 20px', // Memberikan ruang di sekitar teks
                borderRadius: '15px', // Membuat sudut melengkung
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Efek bayangan lembut
                display: 'inline-block', // Agar latar belakang hanya mencakup teks
                position: 'relative',
              }}
            >
              Hello! I'm a passionate web developer with experience in building modern, responsive,
              and user-friendly web applications. I enjoy solving complex problems and continuously
              learning new technologies to improve my skills.
              {/* Elemen doodle */}
              <span
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ffcc00', // Warna kuning cerah
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(255, 204, 0, 0.8)', // Efek glow
                }}
              ></span>
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                fontFamily: "'Comic Neue', cursive", // Font bergaya santai
                color: '#333333',
                background: 'rgba(255, 255, 255, 0.9)', // Latar belakang putih semi-transparan
                padding: '15px 20px', // Memberikan ruang di sekitar teks
                borderRadius: '15px', // Membuat sudut melengkung
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Efek bayangan lembut
                display: 'inline-block', // Agar latar belakang hanya mencakup teks
                position: 'relative',
              }}
            >
              My expertise includes working with React, JavaScript, and Bootstrap to create dynamic
              and visually appealing user interfaces. I'm always excited to collaborate on
              interesting projects and bring ideas to life.
              {/* Elemen doodle */}
              <span
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#00ffff', // Warna biru neon
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)', // Efek glow
                }}
              ></span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;