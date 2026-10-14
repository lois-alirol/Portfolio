"use client"

import CustomCursor from "@/components/common/CustomCursor";
import StarsCanvas from "@/components/common/StarCanvas";
import {useState} from "react";
import {getAboutDomains, getAboutEducation, getAboutSoftSkills, Tech} from "@/data/about";
import { useT } from "@/hooks/useT";
import { useTitle } from "@/hooks/useTitle";

import '@/styles/pages/About.css'
import NextLink from "@/components/common/NextLink";
import Image from "next/image";

export default function Page() {
    const { t, tRich } = useT();
    useTitle(`${t('about.page-title')} | Loïs Alirol`);

    const domains = getAboutDomains(t);
    const softSkills = getAboutSoftSkills(t);
    const education = getAboutEducation(t).slice().reverse();

    const [activeTimeline, setActiveTimeline] = useState<string | null>(
        education[0]?.id ?? null
    );

    return (
        <>
            <main className="about-page">
                <h1 className="about-title">
                    {tRich('about.title.value', {
                        highlighted: <span className={"blue-text"}>{t('about.title.highlighted')}</span>
                    })}
                </h1>
                <p className="about-description">{t('about.description')}</p>

                <h2 className="about-section-title">{t('about.skills.title')}</h2>
                <section className="about-grid">
                    {domains.map((domain) => (
                        <article key={domain.id} className="about-card animate-item">
                            <header className="about-card-header">
                                <h3 className="about-card-title">{domain.title}</h3>
                                <p className="about-card-desc">{domain.description}</p>
                            </header>

                            <div className="tech-chips">
                                {domain.techs.map((tech: Tech) => (
                                    <div className="tech" key={tech.name}>
                                        <Image src={tech.icon_url} width={28} height={28} alt={`${tech.name} icon`}/>
                                        <p>{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </section>

                <h2 className="about-section-title">{t('about.softskills.title')}</h2>
                <section className="softskills-grid">
                    {softSkills.map((skill) => (
                        <div key={skill.id} className="softskill-item animate-item">
                            <h3 className="softskill-title">{skill.title}</h3>
                            <p className="softskill-desc">{skill.description}</p>
                        </div>
                    ))}
                </section>

                <h2 className="about-section-title">{t('about.education.title')}</h2>
                <section className="timeline">
                    {education.map((item) => {
                        const isActive = activeTimeline === item.id;

                        return (
                            <div
                                key={item.id}
                                className={`timeline-part ${isActive ? "active" : ""}`}
                                onMouseEnter={() => setActiveTimeline(item.id)}
                            >
                                <div className="timeline-content">
                                    <h3 className="timeline-title">
                                        {item.title} - {item.school}
                                        <span className="timeline-dates">{item.period}</span>
                                    </h3>

                                    <p className="timeline-description">
                                        {item.details}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </main>

            <NextLink pathname="/projects" labelKey="about.next-button"/>
        </>
    );
};