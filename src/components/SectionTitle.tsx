
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-portfolio-dark-gray relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-accent transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
      </h2>
      {subtitle && (
        <p className="text-portfolio-muted max-w-2xl mx-auto mt-4">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
