// PROPS
import { TimelineEventProps } from "Components/SiteComponents/SiteTimeline/SiteTimlineProps"

const TimelineEvent = (props: TimelineEventProps) => {

    // PROPS
    const { description, event, year } = props

    return (
        <div className="timeline-container">
            <div className="timeline-content site-border">
                <h3>{year}</h3>
                <h1>{event}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TimelineEvent