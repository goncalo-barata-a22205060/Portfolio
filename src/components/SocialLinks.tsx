
import { Github, FileText, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className, 
  iconSize = 18,
  vertical = false
}) => {
  const links = [
    { 
      icon: Github, 
      href: "https://github.com/goncalo-barata-a22205060",
      label: "GitHub"
    },
    { 
      icon: FileText,
      href: "/English_CV.pdf",
      label: "CV"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/ogoncalobarata/",
      label: "Instagram"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/gon%C3%A7alo-barata-682043251/",
      label: "LinkedIn" 
    }
  ];

  return (
    <div className={cn(
      'flex items-center gap-4',
      vertical ? 'flex-col' : 'flex-row',
      className
    )}>
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon group"
          aria-label={link.label}
        >
          <link.icon size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
