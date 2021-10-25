export interface pageDataProps {
    external_link?: string;
    title: string;
    content?: string | JSX.Element | undefined;
    link?: string;
    sub_menu?: {
        external_link?: string;
        title: string;
        content?: string | JSX.Element | undefined;
        link?: string;
    }[]
}

export interface pageTemplateProps {
    name: string | undefined
}
