import React from 'react';
import Image from 'next/image';
import '@/styles/components/projects/ProjectCard.css';
import { useTransition } from '@/hooks/useTransition';

interface ProjectProps {
  side: 'LEFT' | 'RIGHT';
  project: {
    id: string;
    title: string;
    image: string;
    description: string;
    link?: string;
    linkLabel?: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ side, project }) => {
  const { navigateWithTransition } = useTransition();

  const handleCardClick = () => {
    navigateWithTransition(`/projects/${project.id}`);
  };

  return (
    <div 
      className="project-item"
      onClick={handleCardClick}
      data-cursor="pointer"
    >
      {side === 'LEFT' && (
          <>
            <Image src={project.image} alt={project.title} width={50} height={50} className="project-img left" />
            <div className="project-content left">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </>
      )}

      {side === 'RIGHT' && (
          <>
            <div className="project-content right">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <Image src={project.image} alt={project.title} width={50} height={50} className="project-img right" />
          </>
      )}
    </div>
  );
};

export default ProjectCard;