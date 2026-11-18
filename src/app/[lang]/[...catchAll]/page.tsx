"use client"

import '@/styles/pages/errors/Error404.css';
import {useTitle} from "@/hook/useTitle";
import TransitionLink from "@/components/common/TransitionLink";
import {FaCode} from "react-icons/fa";
import React from "react";
import {useTranslation} from "react-i18next";

export default function CatchAllNotFound() {
    const { t } = useTranslation();

    useTitle(`${t("404-error.title")} | Loïs Alirol`);

    return (
        <>
            <main className="notfound-container">
                <div className="notfound-hero">
                    <h1 className="notfound-code">404</h1>
                    <p className="notfound-title">
                        {t("404-error.title")}
                    </p>
                </div>

                <p className="notfound-description">
                    {t("404-error.description")}
                </p>

                <TransitionLink href="/public" className="notfound-link">
                    <FaCode/>
                    {t("404-error.button")}
                </TransitionLink>
            </main>
        </>
    );
}