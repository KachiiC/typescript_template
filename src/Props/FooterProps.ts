import { ReactChild, ReactFragment, ReactPortal } from "react";

export interface SiteFooterProps { 
    heading: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined 
}

export interface footerSectionDataProps { 
    icon?: string; 
    link?: string; 
    title?: string;
}

export interface footerCopyrightProps {
    name: string; 
    year: string | number 
}

export interface footerSectionProps { 
    data: footerSectionDataProps[]
    type?: string | undefined
}