import { MouseEventHandler } from "react";
// PROPS
import { widthProps } from "Props/PropsTemplates";

export interface CollapsibleContentProps { 
    content: JSX.Element 
}

export interface CollapsibleHeadingProps {
    background_color?: string
    click: MouseEventHandler<HTMLDivElement>
    direction: string
    title: string
    text_color?: string
}

export interface CollapsibleTransitionProps { 
    children: JSX.Element
    DisplayContent: boolean
}

export interface CollapsibleProps {
    background_color?: string
    data: singleCollapsibleProps[]
    width?: typeof widthProps
    text_color?: string
}

export interface singleCollapsibleProps {
    background_color?: string
    content: JSX.Element
    title: string
    text_color?: string
}