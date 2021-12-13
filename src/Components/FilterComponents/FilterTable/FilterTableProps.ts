import { ChangeEventHandler } from "react"

export interface FilterInputProps {
    on_change: ChangeEventHandler<HTMLInputElement>
    placeholder: string
    value: string
}

export interface FilterSelectProps { 
    column_function: ChangeEventHandler<HTMLSelectElement>
    data: string[]
    default_value: string
}

export interface FilterTableProps { 
    data: any[]; 
    default_column?: string
    overflow?: boolean 
    placeholder?: string
    width?: number | string 
}
