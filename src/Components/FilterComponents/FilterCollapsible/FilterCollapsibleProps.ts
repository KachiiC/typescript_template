// PROPS
import { singleCollapsibleProps } from "Components/SiteComponents/SiteCollapsible/SiteCollapsibleProps"
import { widthProps } from "Props/PropsTemplates"

export interface FilterCollapsibleProps {
    data: singleCollapsibleProps[]
    width?: typeof widthProps
    placeholder?: string
}