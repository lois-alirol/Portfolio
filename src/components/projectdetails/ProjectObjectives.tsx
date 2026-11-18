import React from 'react';
import '@/styles/components/projectdetails/ProjectObjectives.css';
import {useTranslation} from "react-i18next";

interface ProjectObjectivesProps {
  objectives: string[];
}

const ProjectObjectives: React.FC<ProjectObjectivesProps> = ({ objectives }) => {
    const { t } = useTranslation();

    if (!objectives || objectives.length === 0) return null;

  return (
    <section className="full-width-section">
      <h3 className="section-title center">{t("projects.project.objectives")}</h3>
      <div className="objectives-grid">
        {objectives.map((obj, i) => (
          <div key={i} className="objective-card">
            <p>{obj}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectObjectives;