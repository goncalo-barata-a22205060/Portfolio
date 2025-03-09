
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Gonçalo Barata</h2>
            <p className="text-gray-400 max-w-md">
              A 20-year-old final-year Computer Engineering student with a passion for web development and data science.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <SocialLinks className="mb-6" />
            <p className="text-gray-400 text-sm">
              © {currentYear} Gonçalo Barata. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
