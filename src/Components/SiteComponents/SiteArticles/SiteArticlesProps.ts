export interface SingleArticleProps {
    date?: string;
    image: string;
    title: string;
    description?: string;
    link: string;
    link_type?: "local" | "external" | string | undefined;
}

export interface SiteArticleProps {
    data: SingleArticleProps[]
    link_type: "local" | "external" | string | undefined;
}