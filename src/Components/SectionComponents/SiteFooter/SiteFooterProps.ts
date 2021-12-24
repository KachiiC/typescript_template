export interface footerHeadingProps {
    heading?: string
}

export interface footerCopyrightProps {
    name: string
    year: string | number 
}

export interface footerSectionDataProps { 
    external_link?: string
    icon?: string
    link?: string
    span?: number
    title: string
}

export interface footerSectionProps { 
    data: footerSectionDataProps[]
    type?: string | undefined
}

export interface SiteFooterProps {
    heading: string | undefined
    links_data: footerSectionDataProps[]
    logo_data: footerSectionDataProps[]
    name: string ;
    year: string | number
}