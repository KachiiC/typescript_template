// PROPS
import { singleCollapsibleProps } from "@components/SiteCollapsible/SiteCollapsibleProps"
import { widthProps } from "Props/PropsTemplates"

export interface FilterCollapsibleProps {
    data: singleCollapsibleProps[]
    placeholder?: string
    width?: typeof widthProps
}