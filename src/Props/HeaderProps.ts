import { pageDataProps } from "./MainProps";

export interface SiteNavbarProps { 
    title: string; 
    data: pageDataProps[]
}

export interface NavMenuProps { 
    click?: any
    data: pageDataProps[]; 
    menu_number?: number | undefined; 
    menu_type: string; 
}

export interface SiteNavLinkProps { 
    click?: any;
    link?: string | undefined; 
    title: string | undefined; 
    type?: string; 
}

export interface SmallMenuBlockProps { 
    data: pageDataProps[]; 
    click: any 
}

export interface SmallMenuIconProps {
    click: any
}