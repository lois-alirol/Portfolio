import "@/styles/App.css";
import {Metadata, Viewport} from "next";
import { ReactNode } from "react";
import {TransitionContextProvider} from "@/components/context/TransitionContext";
import CustomCursor from "@/components/common/CustomCursor";
import StarsCanvas from "@/components/common/StarCanvas";

export const viewport: Viewport = {
    themeColor: '#3B82F6',
}

export const metadata: Metadata = {
    title: "Loïs Alirol | Portfolio",
    description: "Learn more about me, check out my projects and don't hesitate to contact me.",
    keywords: ["portfolio", "lois", "alirol", "loïs", "projets", "contact", "experiences", "multilingue"],
    robots: "index, follow",
    openGraph: {
        title: "Loïs Alirol | Portfolio",
        description: "Learn more about me, check out my projects and don't hesitate to contact me.",
        url: "https://www.loisalirol.com",
        images: ["https://www.loisalirol.com/web-app-manifest-512x512.png"],
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Loïs Alirol | Portfolio",
        description: "Learn more about me, check out my projects and don't hesitate to contact me.",
        images: ["https://www.loisalirol.com/web-app-manifest-512x512.png"],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr">
            <body>
                <TransitionContextProvider>
                   {children}
                </TransitionContextProvider>
            </body>
        </html>
    );
}