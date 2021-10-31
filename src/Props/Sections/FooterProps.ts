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

export interface SiteFooterProps {
    links_data: footerSectionDataProps[];
    logo_data: footerSectionDataProps[];
    heading: string | undefined;
    name: string ;
    year: string | number ;
}