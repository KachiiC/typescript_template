import { MouseEventHandler } from "react";
// PROPS
import { pageDataProps } from "Props/MainProps";

export interface DisplayMenuListProps {
    click?: MouseEventHandler<HTMLDivElement>
    data: pageDataProps[]; 
    type: "small" | "nav" | "dropdown"  
}

export interface DisplayMenuTypeProps  { 
    click?: MouseEventHandler<HTMLDivElement>
    data: pageDataProps; 
    type: "small" | "nav" | "dropdown" ; 
}

export interface SiteNavLinkProps { 
    click?: MouseEventHandler<HTMLDivElement>
    link_type: "small" | "nav" | "dropdown" 
    link?: string;
    title: string;
}

export interface SiteNavbarProps { 
    click?: MouseEventHandler<HTMLDivElement>
    data: pageDataProps[]
    title: string; 
}

export interface SmallMenuIconProps {
    click: MouseEventHandler<HTMLDivElement> | undefined
}