"use client";

import {useEffect} from "react";
import { useRouter} from "next/navigation";

import { useTitle } from "@/hook/useTitle";
import {useTranslation} from "react-i18next";

export default function RootPage() {
    const { i18n } = useTranslation();
    const router = useRouter();

    useTitle('Portfolio | Loïs Alirol');

    useEffect(() => {
        const storedLang = localStorage.getItem("language");
        if (storedLang) {
            router.push(`/${storedLang}`);
            return;
        }

        router.push(`/${i18n.language}`);
    }, [i18n.language, router]);

    return null;
}