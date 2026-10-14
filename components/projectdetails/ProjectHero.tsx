import React from 'react';
import '@/styles/components/projectdetails/ProjectHero.css';
import type { ProjectLink } from '@/data/projects';
import {FaChevronRight, FaLink} from 'react-icons/fa';
import Link from "next/link";
import TransitionLink from "@/components/common/TransitionLink";
import {useT} from "@/hooks/useT";

interface ProjectHeroProps {
  title: string;
  description: string;
  links?: ProjectLink[];
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ title, description, links }) => {
  const { t } = useT();

  return (
    <section className="project-hero">
      <div className="hero-overlay">
        <div className="hero-content">

          <div className="location-bar">
            <TransitionLink href={"/projects"} data-cursor="pointer">{t("projects.title")}</TransitionLink>
            <FaChevronRight className="icon" size={12} />
            <span>{title}</span>
          </div>

          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{description}</p>

          {links && links.length > 0 && (
            <div className="hero-cta-group">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta"
                  style={{ 
                    backgroundColor: link.color
                  }}
                  data-cursor="pointer"
                >
                  {link.label}
                  {link.icon ? <link.icon /> : <FaLink/>}
                </a>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
