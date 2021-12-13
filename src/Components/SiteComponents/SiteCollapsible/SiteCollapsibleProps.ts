import { MouseEventHandler } from "react";
// PROPS
import { widthProps } from "Props/PropsTemplates";

export interface CollapsibleContentProps { 
    content: JSX.Element 
}

export interface CollapsibleHeadingProps { 
    click: MouseEventHandler<HTMLDivElement>
    direction: string
    title: string
}

export interface CollapsibleTransitionProps { 
    children: JSX.Element
    DisplayContent: boolean; 
}

export interface CollapsibleProps {
    data: singleCollapsibleProps[]
    width: typeof widthProps
}

export interface singleCollapsibleProps {
    content: JSX.Element
    title: string
}