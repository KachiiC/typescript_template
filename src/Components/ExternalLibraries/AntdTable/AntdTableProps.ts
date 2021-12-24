import { 
    intDataProps, 
    objectData, 
    stringDataProps 
} from "Props/PropsTemplates"


export interface AntdTableColumnProps {
    dataIndex: string
    defaultSortOrder?: "ascend" | "descend"
    sorter?: ((a: stringDataProps, b: stringDataProps) => number) | 
    ((a: intDataProps, b: intDataProps) => number)
    title: string
}

export interface AntdTableProps {
    columns?: objectData[]
    data: objectData[]
    default_sort?: string
    pagination?: boolean
    title?: string
    width?: string | number
}
