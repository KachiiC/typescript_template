export interface AntdTableColumnProps {
    dataIndex: string
    defaultSortOrder?: "ascend" | "descend"
    sorter?: any;
    title: string
}

export interface AntdTableProps {
    columns?: any;
    data: {
        [x: string]: any
    }[]
    default_sort?: string
    pagination?: boolean
    title?: string;
}

export interface defaultColumnProps { 
    [x: string]: string | number 
}

export interface sortStringProps {
    [x: string]: string
}

export interface sortIntProps {
    [x: string]: number 
}
