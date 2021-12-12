export interface footerSectionDataProps { 
    title: string;
    link?: string; 
    icon?: string; 
    external_link?: string;
    span?: number
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