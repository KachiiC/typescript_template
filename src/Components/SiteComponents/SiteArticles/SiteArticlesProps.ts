export interface SingleArticleProps {
    date?: string;
    description?: string;
    image: string;
    link: string;
    link_type?: "local" | "external" | string| undefined
    title: string;
}

export interface SiteArticleProps {
    data: SingleArticleProps[]
    link_type: "local" | "external" | string| undefined
}