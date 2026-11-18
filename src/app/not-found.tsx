"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import i18n from "i18next";

export default function RootNotFound() {
    const router = useRouter();

    useEffect(() => {
        const lang = i18n.language;
        router.replace(`/${lang}/404`);
    }, [router]);

    return null;
}