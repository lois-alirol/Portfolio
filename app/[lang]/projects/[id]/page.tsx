import { LANGUAGES } from "@/lib/languages";
import { PROJECTS } from "@/lib/projects";
import ProjectDetails from "./page.client";

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