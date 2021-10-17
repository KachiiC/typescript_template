import { objectData } from "../PropsTemplates";

export interface SiteTableProps {
    data: objectData[]; 
    keys?: string[]
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