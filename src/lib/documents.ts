const CDN_URL: string = process.env.NEXT_PUBLIC_CDN_URL ?? "";
const DOCUMENTS = {
    Cv: "CV.pdf"
} as const;

type CdnDocument = typeof DOCUMENTS[keyof typeof DOCUMENTS];

export const openDocument = async (document: CdnDocument) => {
    try {
        const response = await fetch(`${CDN_URL}/${document}`);
        console.log("CDN_URL:", process.env.NEXT_PUBLIC_CDN_URL);

        if (!response.ok) {
            throw new Error('Failed to fetch document');
        }

        const blob = await response.blob();
        const fileURL = URL.createObjectURL(blob);

        window.open(fileURL, '_blank');
    } catch (error) {
        console.error(error);
    }
};