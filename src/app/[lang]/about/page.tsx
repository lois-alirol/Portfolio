
"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import {
    getAboutDomains,
    getAboutEducation,
    getAboutSoftSkills,
    Tech
} from "data/about";
import { useTitle } from "@/hook/useTitle";
import Image from "next/image";
import {Trans, useTranslation} from "react-i18next";
import NextLink from "@/components/common/NextLink";

import "@/styles/pages/About.css";
import {FaPaperclip} from "react-icons/fa";
import {openDocument} from "@/lib/documents";

export default function Page() {
    const { t } = useTranslation();

    useTitle(`${t("about.page-title")} | Loïs Alirol`);

    const domains = getAboutDomains(t);
    const softSkills = getAboutSoftSkills(t);
    const education = getAboutEducation(t).slice().reverse();

    const [activeTimeline, setActiveTimeline] = useState<string | null>(
        education[0]?.id ?? null
    );

    const [cvButtonActive, setCvButtonActive] = useState<boolean>(false);

    const handleCvButtonEnter = () => {
        setCvButtonActive(true);
    };

    const handleCvButtonLeave = () => {
        setCvButtonActive(false);
    };

    const handleOpenCV = () => {
        openDocument("CV.pdf").then(() => {});
    }

    const timelineRef = useRef<HTMLElement>(null);
    const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [datePositions, setDatePositions] = useState<number[]>([]);

    const updateDatePositions = useCallback(() => {
        const timeline = timelineRef.current;

        if (!timeline) return;

        const timelineRect = timeline.getBoundingClientRect();

        const positions = arrowRefs.current
            .slice(0, education.length)
            .map((arrow) => {
                if (!arrow) return 0;

                const arrowRect = arrow.getBoundingClientRect();

                return arrowRect.left - timelineRect.left;
            });

        setDatePositions(positions);
    }, [education.length]);

    useEffect(() => {
        const timeline = timelineRef.current;

        if (!timeline) return;

        const observer = new ResizeObserver(() => {
            updateDatePositions();
        });

        observer.observe(timeline);

        arrowRefs.current.forEach((arrow) => {
            if (arrow) observer.observe(arrow);
        });

        updateDatePositions();

        window.addEventListener("resize", updateDatePositions);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateDatePositions);
        };
    }, [updateDatePositions, activeTimeline]);

    return (
        <>
            <main className="about-page">
                <header className="about-header">
                    <h1 className="about-title">
                        <Trans
                            i18nKey="about.title"
                            components={{
                                highlighted: <span className="blue-text" />
                            }}
                        />
                    </h1>
                    <button
                        className="cv-button"
                        onMouseEnter={handleCvButtonEnter}
                        onMouseLeave={handleCvButtonLeave}
                        onClick={handleOpenCV}
                    >
                        <FaPaperclip size={24}/>
                        <span className={`cv-button-text ${cvButtonActive ? "" : "hidden"}`}>{t("about.cv.button")}</span>
                    </button>
                </header>

                <p className="about-description">
                    {t("about.description")}
                </p>

                <h2 className="about-section-title">
                    {t("about.skills.title")}
                </h2>

                <section className="about-grid">
                    {domains.map((domain) => (
                        <article
                            key={domain.id}
                            className="about-card animate-item"
                        >
                            <header className="about-card-header">
                                <h3 className="about-card-title">
                                    {domain.title}
                                </h3>

                                <p className="about-card-desc">
                                    {domain.description}
                                </p>
                            </header>

                            <div className="tech-chips">
                                {domain.techs.map((tech: Tech) => (
                                    <div className="tech" key={tech.name}>
                                        <Image
                                            src={tech.icon_url}
                                            width={28}
                                            height={28}
                                            alt={`${tech.name} icon`}
                                        />
                                        <p>{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </section>

                <h2 className="about-section-title">
                    {t("about.softskills.title")}
                </h2>

                <section className="softskills-grid">
                    {softSkills.map((skill) => (
                        <div
                            key={skill.id}
                            className="softskill-item animate-item"
                        >
                            <h3 className="softskill-title">
                                {skill.title}
                            </h3>

                            <p className="softskill-desc">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </section>

                <h2 className="about-section-title">
                    {t("about.education.title")}
                </h2>

                <div className="timeline-wrapper">
                    <div className="timeline-dates-row">
                        {education.map((item, index) => (
                            <span
                                key={item.id}
                                className="timeline-date"
                                style={{ left: datePositions[index] ?? 0}}
                            >
                                {item.from}
                            </span>
                        ))}
                    </div>

                    <section
                        className="timeline"
                        ref={timelineRef}
                    >
                        {education.map((item, index) => {
                            const isActive =
                                activeTimeline === item.id;

                            return (
                                <div
                                    key={item.id}
                                    ref={(element) => {
                                        arrowRefs.current[index] = element;
                                    }}
                                    className={`timeline-part ${isActive ? "active" : ""}`}
                                    onMouseEnter={() =>
                                        setActiveTimeline(item.id)
                                    }
                                >
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">
                                            {item.title} - {item.school}
                                        </h3>

                                        <p className="timeline-description">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </main>

            <NextLink
                pathname="/projects"
                labelKey="about.next-button"
            />
        </>
    );
}
