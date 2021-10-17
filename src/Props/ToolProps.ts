import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { ChangeEventHandler } from "react";

// EXAMPLE TOOLS
export interface ObjectDataProps { 
    [x: string]: string | JSX.Element | undefined
}


export interface TargetProps {
    preventDefault: ChangeEventHandler<HTMLInputElement>
    target: { 
        value: string 
    }
}

// SITE ICON
export interface SiteIconProps {
    type: string | undefined; 
    size: SizeProp | undefined; 
    color?: string;
}

export interface LinkRendererProps {
    title?: string | undefined; 
    link?: string | undefined;
    icon?: string;
    content?: string | JSX.Element;
    external_link?: string 
}

// Site Link Props
export interface SiteLinkProps {
    link: string;
    type: "local" | "external" | undefined | string
    placeholder: string | number | undefined | JSX.Element
}

export interface SiteRenderProps { 
    fetch: { 
        loading: boolean; 
        error: boolean; 
        response: Object | never[]
    }; 
    component: JSX.IntrinsicAttributes; 
}