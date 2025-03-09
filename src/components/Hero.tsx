
import React, { useEffect, useRef } from 'react';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
    };
    
    const resetTransform = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    
    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove as EventListener);
      element.addEventListener('mouseleave', resetTransform);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove as EventListener);
        element.removeEventListener('mouseleave', resetTransform);
      }
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-0">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-portfolio-accent text-sm font-medium mb-6 animate-fade-in">
            Hello World
          </span>

          <h1 className="text-8xl md:text-8xl lg:text-8xl font-bold leading-tight text-portfolio-dark-gray mb-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Gonçalo Costa Barata
          </h1>

          <p className="text-xl text-portfolio-muted mb-8 max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Welcome to my portfolio.
          </p>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <SocialLinks className="justify-center md:justify-start" />
          </div>

          <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-portfolio-accent hover:bg-blue-600 transition-colors duration-300"
              aria-label="Learn more about me"
            >
              Learn More
            </a>
          </div>
        </div>






      </div>

    </section>
  );
};

export default Hero;
