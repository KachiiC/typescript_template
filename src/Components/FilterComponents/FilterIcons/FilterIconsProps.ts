import { MouseEventHandler } from "react"

export interface FilterIconButtonsProps { 
    data: string[]
    setFunction: (arg0: string) => void
    setAll: MouseEventHandler<HTMLButtonElement>
}

export interface FilterIconDataProps {
    type: string
    skill: string
}

export interface FilterIconsProps {
    data: FilterIconDataProps[]
    title?: string
}

export interface IconsListProps {
    data: FilterIconDataProps[]
}

