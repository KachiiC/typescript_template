// PROPS
import { TimelineEventProps } from "Props/Components/TimlineProps"

const TimelineEvent = (props: TimelineEventProps) => {

    // PROPS
    const {event, year, description } = props

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