import React from 'react';
import NavigationBar from '../components/navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <NavigationBar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;