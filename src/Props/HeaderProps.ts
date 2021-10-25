import { MouseEventHandler } from "react";
// PROPS
import { pageDataProps } from "./MainProps";

export interface SiteNavbarProps { 
    title: string; 
    data: pageDataProps[]
}

export interface SiteNavLinkProps { 
    title: string; 
    link_type: "small" | "nav"; 
    click?: MouseEventHandler<HTMLDivElement> 
    link?: string;
}

export interface DisplayMenuTypeProps  { 
    data: pageDataProps; 
    type: any; 
    click?: MouseEventHandler<HTMLDivElement> ;
}

export interface DisplayMenuListProps {
    data: pageDataProps[]; 
    type: string; 
    click?: MouseEventHandler<HTMLDivElement> ;
}

export interface SiteNavMenuProps { 
    data: pageDataProps[]; 
    small_click: MouseEventHandler<HTMLDivElement>
}

export interface NavLinkProps {
    link?: string | undefined; 
    title: string;
    external_link?: string;
}

export interface SiteNavDropdownProps { 
    data: {
        external_link?: string;
        title: string;
        content?: string | JSX.Element | undefined;
        link?: string;
    }[]; 
    title: string;
}

export interface SmallMenuProps { 
    data: pageDataProps[]; 
    click: MouseEventHandler<HTMLDivElement>
    title?: string
}


export interface SmallMenuIconProps {
    click: MouseEventHandler<HTMLDivElement>
}