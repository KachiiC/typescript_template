// PROPS
import { widthProps } from "Props/PropsTemplates";
import { singleCollapsibleProps } from "Components/SiteComponents/SiteCollapsible/SiteCollapsibleProps";

export interface FilterCollapsibleProps {
    data: singleCollapsibleProps[]
    width?: typeof widthProps
    placeholder?: string;
}