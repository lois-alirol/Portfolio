"use client"

import CustomCursor from "@/components/common/CustomCursor";
import NextLink from "@/components/common/NextLink";
import StarsCanvas from "@/components/common/StarCanvas";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProjects } from "@/data/projects";
import { useT } from "@/hooks/useT";
import { useTitle } from "@/hooks/useTitle";

import '@/styles/pages/Projects.css'
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Page() {
    const { t, tRich } = useT();
  
    useTitle(`${t("projects.page-title")} | Loïs Alirol`);

    const projectList = getProjects(t);
    let projectId = 0;

    const leftCol = projectList.filter((_, i) => i % 2 === 0);
    const rightCol = projectList.filter((_, i) => i % 2 !== 0);

    return (
        <>
            <main className="projects-page">
                <h1 className="projects-title">{t("projects.title")}</h1>
                <p className="projects-description">
                    {tRich("projects.description", {
                        github: <Link className="github-link" href="https://github.com/lois-alirol" target="_blank">Github</Link>
                    })}
                </p>

                <section className="projects-columns-container">
                    <div className="column column-left">
                        {leftCol.map(p => <ProjectCard key={p.id} project={p} side={projectId++ % 2 === 0 ? "LEFT" : "RIGHT"} />)}
                    </div>
                    <div className="column column-right">
                        {rightCol.map(p => <ProjectCard key={p.id} project={p} side={projectId++ % 2 === 0 ? "LEFT" : "RIGHT"} />)}
                    </div>
                </section>
            </main>

            <NextLink pathname="/contact" labelKey="projects.next-button"/>
        </>
    );
};