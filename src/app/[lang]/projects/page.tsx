"use client"

import NextLink from "@/components/common/NextLink";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProjects } from "data/projects";
import { useTitle } from "@/hook/useTitle";

import '@/styles/pages/Projects.css'
import Link from "next/link";
import {Trans, useTranslation} from "react-i18next";

export default function Page() {
    const { t } = useTranslation();

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
                    <Trans
                        i18nKey="projects.description"
                        components={{
                            github: <Link className="github-link" href="https://github.com/lois-alirol" target="_blank">Github</Link>
                        }}
                    />
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