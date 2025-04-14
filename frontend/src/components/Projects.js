import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'This is a brief description of Project 1.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of Project 2.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'This is a brief description of Project 3.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];

  return (
    <div
      className="projects-section py-5"
      style={{
        background: 'url("/bg-doodle.png")', // Ganti dengan URL latar belakang doodle
        backgroundSize: 'cover', // Menyesuaikan gambar dengan layar
        backgroundPosition: 'center',
        color: '#fff',
        position: 'relative',
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
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Overlay semi-transparan putih
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <h2
          className="text-center mb-4"
          style={{
            color: '#ff007f', // Warna pink neon
            fontFamily: "'Permanent Marker', cursive", // Font bergaya doodle
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)', // Efek bayangan tebal
          }}
        >
          My Projects
        </h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                style={{
                  backgroundColor: '#ffffff', // Warna putih untuk kartu
                  border: '2px dashed #ffcc00', // Border bergaya doodle
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Efek bayangan lembut
                  borderRadius: '15px', // Membuat sudut melengkung
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Efek bayangan pada gambar
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: '#ff007f', // Warna pink neon
                      fontFamily: "'Comic Neue', cursive", // Font bergaya santai
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Efek bayangan pada teks
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: '#333333',
                      fontFamily: "'Roboto', sans-serif", // Font bersih dan profesional
                      background: 'rgba(255, 255, 255, 0.9)', // Latar belakang putih semi-transparan
                      padding: '10px',
                      borderRadius: '10px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Efek bayangan lembut
                    }}
                  >
                    {project.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={project.link}
                    style={{
                      backgroundColor: '#ff007f', // Warna pink neon
                      border: 'none',
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      padding: '10px 20px',
                      boxShadow: '0 0 10px rgba(255, 0, 127, 0.8)', // Efek glow
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#e60073')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#ff007f')}
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;