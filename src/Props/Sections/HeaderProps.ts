import { MouseEventHandler } from "react";
// PROPS
import { pageDataProps } from "./MainProps";

export interface SiteNavbarProps { 
    title: string; 
    click?: MouseEventHandler<HTMLDivElement>
    data: pageDataProps[]
}

export interface SiteNavLinkProps { 
    click?: MouseEventHandler<HTMLDivElement>
    link_type: "small" | "nav" | "dropdown" 
    link?: string;
    title: string;
}

export interface DisplayMenuTypeProps  { 
    data: pageDataProps; 
    type: "small" | "nav" | "dropdown" ; 
    click?: MouseEventHandler<HTMLDivElement>
}

export interface DisplayMenuListProps {
    data: pageDataProps[]; 
    type: "small" | "nav" | "dropdown"  
    click?: MouseEventHandler<HTMLDivElement>
}

export interface SmallMenuIconProps {
    click: any
}