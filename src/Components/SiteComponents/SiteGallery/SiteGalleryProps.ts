import { MouseEventHandler } from "react"
// PROPS
import { widthProps } from "Props/PropsTemplates"

export interface GalleryImageProps {
    click?: MouseEventHandler<HTMLDivElement>
    image: string
    title: string
}

export interface GalleryImageRowProps { 
    data: GalleryImageProps[]
    row_number: number
    setFunction: Function
    width: typeof widthProps
}

export interface GalleryModalImageProps {
    image: string
    title: string
    width: typeof widthProps
}

export interface GalleryProps {
    data: GalleryImageProps[]
    number?: number
    title?: string| undefined
    width: typeof widthProps
}

export interface GallerySelectedImageProps {
    width: typeof widthProps
    image: string;
}