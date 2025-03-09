import React from 'react';
import SectionTitle from './SectionTitle';
import SkillBar from './SkillBar';
import { FileText, ExternalLink } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Java', level: 4 },
    { name: 'Kotlin', level: 4 },
    { name: 'Data Science', level: 5 },
    { name: 'Web Development', level: 4 },
    { name: 'Python', level: 4 },
    { name: 'SQL', level: 4 },
    { name: 'Scrum/Agile', level: 5 },
  ];

  const certificates = [
    {
      name: 'First (FCE) – Level B2',
      issuer: 'Cambridge',
      date: 'December 2023',
      url: '/cambridge.jpg',
      image: '/cambridge.jpg'
    },
    {
      name: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM',
      date: 'October 2024',
      url: 'https://www.credly.com/badges/4e9988ca-d19b-41e2-a1c8-580e038da005/linked_in_profile',
      image: '/artificial.png'
    },
    {
      name: 'Data Fundamentals',
      issuer: 'IBM',
      date: 'October 2024',
      url: 'https://www.credly.com/badges/3e17c4e6-2b36-42ee-8520-68805d2e5bf0/linked_in_profile',
      image: '/data.png'
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="section-container">
        <SectionTitle title="Skills & Certificates" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark-gray">Technical Skills</h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  className="reveal"
                  // Add staggered animation delay
                  // style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          <div className="reveal">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark-gray">Certificates</h3>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-center justify-between"
                >
                  {/* Certificate Details */}
                  <div className="flex-grow pr-4">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-portfolio-muted">
                      {cert.issuer} • {cert.date}
                    </p>
                    <div className="mt-3">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-portfolio-accent hover:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        View Certificate
                      </a>
                    </div>
                  </div>

                  {/* Imagem certificado */}
                  <div className="flex-shrink-0 ml-4">
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;