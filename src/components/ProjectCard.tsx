import React from 'react';
import { Github, ExternalLink, FileDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  pdfUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  pdfUrl,
  className
}) => {
  // Function to handle multiline text with proper line breaks
  const formatDescription = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className={cn(
      'project-card opacity-0 animate-fade-in',
      'flex flex-col h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
      className
    )}>
      <div className="relative overflow-hidden group">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-portfolio-dark-gray">{title}</h3>
        <div className="text-portfolio-muted mb-4 text-sm flex-grow whitespace-pre-line">
          {formatDescription(description)}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-portfolio-muted px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium py-2 px-4 rounded-full shadow-md transform transition-all duration-200 hover:scale-105 hover:rotate-1 hover:shadow-lg hover:bg-gradient-to-l from-blue-500 to-blue-700"
              aria-label="View on GitHub"
            >
              <Github size={16} className="mr-2" />
              GitHub
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium py-2 px-4 rounded-full shadow-md transform transition-all duration-200 hover:scale-105 hover:rotate-1 hover:shadow-lg hover:bg-gradient-to-l from-blue-500 to-blue-700"
              aria-label="View live project"
            >
              <ExternalLink size={16} className="mr-2" />
              View Project
            </a>
          )}

          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium py-2 px-4 rounded-full shadow-md transform transition-all duration-200 hover:scale-105 hover:rotate-1 hover:shadow-lg hover:bg-gradient-to-l from-blue-500 to-blue-700"
              aria-label="Download PDF"
            >
              <FileDown size={16} className="mr-2" />
              Download PDF 📥
            </a>
          )}
        </div>


      </div>
    </div>
  );
};

export default ProjectCard;