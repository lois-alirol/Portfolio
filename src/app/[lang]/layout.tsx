import { notFound } from "next/navigation";
import RouteTransitionShell from "@/components/transition/RouteTransitionShell";
import React from "react";
import {isValidLanguage, LANGUAGES} from "@/lib/i18n";
import I18nProvider from "@/components/I18nProvider";

export function generateStaticParams() {
    return LANGUAGES.map((lang: string) => ({ lang }));
}

export default async function LangLayout({ children, params }: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    if (!isValidLanguage(lang)) {
        notFound();
    }

    return (
        <I18nProvider lang={lang}>
            <div className="page">
                <RouteTransitionShell>{children}</RouteTransitionShell>
            </div>
        </I18nProvider>
    );
}