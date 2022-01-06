import { MouseEventHandler } from "react"
// PROPS
import { IconDataProps } from "@components/IconsList/IconsListProps";

export interface FilterIconButtonsProps { 
    data: string[]
    setFunction: (arg0: string) => void
    setAll: MouseEventHandler<HTMLButtonElement>
}

export interface FilterIconsProps {
    data: IconDataProps[]
}

export interface IconsListProps {
    data: IconDataProps[]
}

