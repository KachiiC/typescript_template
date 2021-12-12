import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface SingleTab {
    title: string; 
    content: JSX.Element
}

export interface SiteTabsProps {
    data: SingleTab[]
    width?: number
}

export interface TabLinkProps { 
    click: MouseEventHandler<HTMLDivElement>;
    title: string;
} 

export interface TabLinkRowProps {
    data: SingleTab[];
    setFunction: Dispatch<SetStateAction<number>>;
}

export interface TabContentProps { 
    content: JSX.Element 
}