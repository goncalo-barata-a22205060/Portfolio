
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Ensure all images are properly loaded
    const preloadImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.complete) return;
        img.addEventListener('error', function handleError() {
          console.error('Failed to load image:', img.src);
        });
      });
    };

    // Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
    
    preloadImages();
    
    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
