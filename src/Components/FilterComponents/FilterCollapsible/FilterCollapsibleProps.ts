import { widthProps } from "Props/PropsTemplates";
import { singleCollapsibleProps } from "../../SiteComponents/SiteCollapsible/SiteCollapsibleProps";

export interface FilterCollapsibleProps {
    data: singleCollapsibleProps[]
    width?: typeof widthProps
    placeholder?: string;
}