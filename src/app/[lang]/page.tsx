"use client"

import TransitionLink from "@/components/common/TransitionLink";
import Hero from "@/components/home/Hero";
import NextLink from "@/components/common/NextLink";
import { useTitle } from "@/hook/useTitle";

import '@/styles/pages/Home.css'
import {Trans, useTranslation} from "react-i18next";

export default function Page() {
    const { t } = useTranslation();

    useTitle(`${t("home.page-title")} | Loïs Alirol`);

    return (
        <>
            <main className="main-content">
            <Hero name="LOIS ALIROL" />
                <section className="description-container">
                    <p className="description-long">
                        <Trans
                            i18nKey="home.description"
                            components={{
                                projects: <TransitionLink href="/projects" className="description-links">{ t('home.description.projects-link') }</TransitionLink>,
                                contact: <TransitionLink href="/contact" className="description-links">{ t('home.description.contact-link') }</TransitionLink>
                            }}
                        />
                    </p>
                </section>
            </main>

            <NextLink pathname="/about" labelKey="home.next-button"/>
        </>
    );
};