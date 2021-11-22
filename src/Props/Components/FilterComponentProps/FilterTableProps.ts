import { ChangeEventHandler } from "react";

export interface FilterTableProps { 
    data: any[]; 
    placeholder?: string;
    default_column?: string;
    width?: number | string 
    overflow?: boolean 
}

export interface FilterSelectProps { 
    column_function: ChangeEventHandler<HTMLSelectElement>
    data: string[]; 
    default_value: string;
}

export interface FilterInputProps {
    on_change: ChangeEventHandler<HTMLInputElement>
    placeholder: string;
    value: string;
}