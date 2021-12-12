// PROPS
import { widthProps } from "Props/PropsTemplates"

export interface SiteTimelineProps { 
    data: TimelineEventProps[]
    width?: typeof widthProps
}

export interface TimelineEventProps {
    description: string
    event: string
    year: number
}
