import { PROJECTS } from "@/lib/projects";
import ProjectDetails from "./page.client";
import {LANGUAGES} from "@/lib/i18n";

export function generateStaticParams() {
    return LANGUAGES.flatMap((lang) =>
        PROJECTS.map((id) => ({
            lang,
            id,
        }))
    );
}

export default function Page() {
    return <ProjectDetails />;
}