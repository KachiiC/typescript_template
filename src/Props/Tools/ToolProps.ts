import { ChangeEventHandler } from "react"
import { SizeProp, IconDefinition } from "@fortawesome/fontawesome-svg-core"
// PROPS
import { pageDataProps } from "Props/MainProps"

// EXAMPLE TOOLS
export interface ObjectDataProps {
    [x: string]: string | JSX.Element
}

// GRID TOOLS
export interface spanLogicProps {
    [x: string]: number | undefined
}

export interface displayTitleProps {
    [x: string]: JSX.Element;
}

export interface TargetProps {
    preventDefault: ChangeEventHandler<HTMLInputElement>
    target: {
        value: string
    }
}

// SITE ICON
export interface SiteIconProps {
    type: string;
    size: SizeProp;
    color?: string;
}

export interface IconList {
    [k: string]: IconDefinition
}

// SITE LINK PROPS
export interface LinkRendererProps {
    content?: string | JSX.Element
    external_link?: string
    icon?: string
    link?: string | undefined
    sub_menu?: pageDataProps[]
    title: string
}

export interface SiteLinkProps {
    link: string;
    placeholder: string | number | undefined | JSX.Element
    type: "local" | "external" | undefined | string
}

export interface SiteRenderProps {
    component: JSX.IntrinsicAttributes
    fetch: {
        loading: boolean
        error: boolean
        response: Object | never[]
    }
}