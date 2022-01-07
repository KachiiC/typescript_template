import { Dispatch, MouseEventHandler, SetStateAction } from "react"

export interface SingleTab {
    title: string; 
    content: JSX.Element
}

export interface SiteTabsProps {
    data: SingleTab[]
    width?: number
    background_color?: string
    text_color?: string
}

export interface TabContentProps { 
    content: JSX.Element 
}

export interface TabLinkProps { 
    click: MouseEventHandler<HTMLDivElement>;
    title: string
    background_color?: string
    text_color?: string
} 

export interface TabLinkRowProps {
    data: SingleTab[]
    setFunction: Dispatch<SetStateAction<number>>
    background_color?: string
    text_color?: string
}
