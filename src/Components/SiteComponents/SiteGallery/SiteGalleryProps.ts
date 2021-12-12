import { MouseEventHandler } from "react";
import { widthProps } from "Props/PropsTemplates";

export interface GalleryProps {
    number?: number
    title?: string| undefined;
    width: typeof widthProps
    data: GalleryImageProps[]
}

export interface GalleryImageProps {
    image: string
    title: string
    click?: MouseEventHandler<HTMLDivElement>
}

export interface GalleryImageRowProps { 
    data: GalleryImageProps[]; 
    setFunction: Function;
    row_number: number; 
    width: typeof widthProps
}

export interface GallerySelectedImageProps {
    width: typeof widthProps
    image: string;
}

export interface GalleryModalImageProps {
    title: string; 
    image: string; 
    width: typeof widthProps
}