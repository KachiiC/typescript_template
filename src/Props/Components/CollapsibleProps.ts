import { MouseEventHandler } from "react";
import { widthProps } from "Props/PropsTemplates";

// SIZES
export interface singleCollapsibleProps {
    title: string; 
    content: JSX.Element
}

export interface CollapsibleProps {
    width: typeof widthProps
    data: singleCollapsibleProps[]
}

export interface CollapsibleHeadingProps { 
    click: MouseEventHandler<HTMLDivElement>
    direction: string; 
    title: string; 
}

export interface CollapsibleTransitionProps { 
    DisplayContent: boolean; 
    children: JSX.Element
}

export interface CollapsibleContentProps { 
    content: JSX.Element 
}