// CSS
import './SiteTimeline.css'
// PROPS
import { SiteTimelineProps } from "Props/Components/TimlineProps"
// TOOLS
import { RenderLogic } from 'Tools/FunctionTools'
// COMPONENTS
import TimelineEvent from './components/TimelineEvent'

const SiteTimeline = (props: SiteTimelineProps) => {

    const { data, width } = props

    // A Timeline even is returned for each object in data
    const displayEvents = data.map(events => {

        // PROPS
        const { description, event, year } = events

        // Timeline Event Props
        const TimelineProps = {
            key: event,
            event: event,
            year: year,
            description: description
        }

        return (
            <TimelineEvent
                {...TimelineProps}
            />
        )
    })

    return (
        // Width of component is 100% by default
        <div className={`timeline w-${RenderLogic(width, 100)}`}>
            {displayEvents}
        </div>
    )
}

export default SiteTimeline