import { objectData, widthProps } from "Props/PropsTemplates";

export interface SiteTableProps {
    data: objectData[]; 
    keys?: string[]
    width?: typeof widthProps
    overflow?: boolean
}

export interface SiteTableHeaderProps {
    keys: string[]
}

export interface SiteTableRowProps {
    data: objectData[] | Object[]
}

export interface SiteTableSingleRowProps { 
    data: objectData[] | Object
}