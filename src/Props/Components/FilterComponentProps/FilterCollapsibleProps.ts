import { widthProps } from "Props/PropsTemplates";
import { singleCollapsibleProps } from "../CollapsibleProps";

export interface FilterCollapsibleProps {
    data: singleCollapsibleProps[]
    width: typeof widthProps
    placeholder?: string;
}