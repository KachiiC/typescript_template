import { Dispatch, MouseEventHandler, SetStateAction } from "react";
// PROPS
import { SiteSingleCardProps } from "../CardProps";

export interface SingleFilterButtonProps {
    title: string
    click: MouseEventHandler<HTMLImageElement> | undefined 
}

export interface FilterGalleryProps { 
    data: SiteSingleCardProps[]
    card_size?: 'xs'|'small'|'medium'|'large'|'xl'; 
    buttons?: JSX.Element
}

export interface FilterButtonProps {
    data: string[];
    setFunction: Dispatch<SetStateAction<string>>;
    setAll: MouseEventHandler<HTMLImageElement> | undefined;
}