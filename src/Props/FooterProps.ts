export interface SiteFooterProps { 
    heading?: string | undefined;
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