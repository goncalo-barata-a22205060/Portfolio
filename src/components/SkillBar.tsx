
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number; // 0-5 scale
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, className }) => {
  const [visible, setVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  
  // Convert level from 0-5 scale to percentage
  const percentage = (level / 5) * 100;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={skillRef} className={cn('mb-6', className)}>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-portfolio-dark-gray">{name}</span>
        <span className="text-sm text-portfolio-muted">{level}/5</span>
      </div>
      <div className="skill-bar-bg">
        <div 
          className="skill-bar-fill"
          style={{ 
            width: visible ? `${percentage}%` : '0%',
            transitionDelay: '0.2s'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
