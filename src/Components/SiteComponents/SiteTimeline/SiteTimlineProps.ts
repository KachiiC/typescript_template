import { widthProps } from "Props/PropsTemplates";

export interface TimelineEventProps {
    event: string;
    year: number;
    description: string;
}

export interface SiteTimelineProps { 
    data: TimelineEventProps[]
    width?: typeof widthProps
}