import { SizeProp } from "@fortawesome/fontawesome-svg-core";

// EXAMPLE TOOLS
export interface ObjectDataProps { 
    [x: string]: string | JSX.Element | undefined
}

// SITE ICON
export interface SiteIconProps {
    type: string | undefined; 
    size: SizeProp | undefined; 
}