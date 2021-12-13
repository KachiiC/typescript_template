// PROPS
import { singleCollapsibleProps } from "@components/SiteCollapsible/SiteCollapsibleProps"
import { widthProps } from "Props/PropsTemplates"

export interface FilterCollapsibleProps {
    data: singleCollapsibleProps[]
    width?: typeof widthProps
    placeholder?: string
}