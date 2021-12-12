export interface sortStringProps {
    [x: string]: string
}

export interface sortIntProps {
    [x: string]: number 
}

export interface defaultColumnProps { 
    [x: string]: string | number 
}

export interface AntdTableColumnProps {
    dataIndex: string
    title: string
    sorter?: any;
    defaultSortOrder?: "ascend" | "descend"
}


export interface AntdTableProps {
    pagination?: boolean
    title?: string;
    columns?: any;
    default_sort?: string
    data: {
        [x: string]: any
    }[];
}