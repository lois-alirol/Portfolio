"use client";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Props {
    lang: string;
    children: React.ReactNode;
}

export default function I18nProvider({ lang, children }: Props) {
    const { i18n } = useTranslation();

    useEffect(() => {
        if (i18n.language !== lang) {
            localStorage.setItem("language", lang);
            i18n.changeLanguage(lang).then(() => {});
        }
    }, [lang, i18n]);

    return children;
}