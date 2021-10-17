import { MouseEventHandler } from "react";
import { pageDataProps } from "./MainProps";

export interface SiteNavbarProps { 
    title: string; 
    menu_number: number;
    data: pageDataProps[]
}

export interface NavMenuProps { 
    click?: MouseEventHandler<HTMLDivElement>
    data: pageDataProps[]; 
    menu_number?: number | undefined; 
    menu_type: string; 
    small_menu_click: MouseEventHandler<HTMLDivElement>
    title: string;
}

export interface NavLinkProps {
    link?: string | undefined; 
    title?: string | undefined; 
    external_link?: string;
}

export interface SiteNavLinkProps { 
    click?: MouseEventHandler<HTMLDivElement>;
    data: NavLinkProps
    type?: "small" | "full" 
}

export interface SmallMenuBlockProps { 
    menu_number?: number | undefined; 
    data: pageDataProps[]; 
    click: MouseEventHandler<HTMLDivElement>
}

export interface SmallMenuIconProps {
    click: MouseEventHandler<HTMLDivElement>
}