import { Dispatch, MouseEventHandler, SetStateAction } from "react"
// PROPS
import { SiteSingleCardProps } from "@components/SiteCards/SiteCardProps"

export interface FilterGalleryProps { 
    buttons?: JSX.Element
    card_size?: "xs"| "small" | "medium" | "large" |"xl"
    data: SiteSingleCardProps[]
}

export interface FilterButtonProps {
    data: string[]
    setAll: MouseEventHandler<HTMLImageElement> | undefined
    setFunction: Dispatch<SetStateAction<string>>
}

export interface SingleFilterButtonProps {
    click: MouseEventHandler<HTMLImageElement> | undefined 
    title: string
}