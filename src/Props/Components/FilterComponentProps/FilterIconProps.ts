import { MouseEventHandler } from "react";

export interface FilterIconDataProps {
    type: string;
    skill: string;
}

export interface IconsListProps {
    data: FilterIconDataProps[]
}

export interface FilterIconProps {
    data: FilterIconDataProps[]
    title?: string;
}

export interface FilterIconButtonsProps { 
    data: string[]; 
    setFunction: (arg0: string) => void; 
    setAll: MouseEventHandler<HTMLButtonElement>
}