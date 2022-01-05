import MediaQuery from "react-responsive"
// COMPONENTS
import { Timeline } from "antd"
// CSS
import "antd/dist/antd.css"
import "./AntdTimeline.css"
// PROPS
import { AntdTimelineProps } from "./AntdTimelineProps"
import AntdToolTip from "@libraries/AntdToolTip"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const AntdTimeline = (props: AntdTimelineProps) => {

    const { data, title } = props

    const displayData = data.map(item => {

        const { Item } = Timeline
        
        const { color, content, event, year } = item 

        const AntdEventProps = {
            content: content,
            placeholder: <h3>{event} ({year})</h3>
        }

        const AntdEvent = (
            <>
                <MediaQuery minWidth={1080}>
                    <AntdToolTip
                        {...AntdEventProps}
                        placement="left"
                    />
                </MediaQuery>
                <MediaQuery maxWidth={1079}>
                    <AntdToolTip
                        {...AntdEventProps}
                        placement="top"
                    />
                </MediaQuery>
            </>
        )

        return (
            <Item className="timeline-item"
                color={RenderLogic(color, "black")} 
                key={event}
            >
                {AntdEvent}
            </Item>
        )
    })

    const TimelineLogic = (
        <div className="antd-timeline-container">
            <MediaQuery minWidth={1080}>
                <Timeline mode="alternate">
                    {displayData}
                </Timeline>
            </MediaQuery>
            <MediaQuery maxWidth={1079}>
                <Timeline mode="left">
                    {displayData}
                </Timeline>
            </MediaQuery>
        </div>
    )

    return (
        <div className="antd-timeline">
            <h2>{title}</h2>
            {TimelineLogic}
            <hr />
        </div>
    )
}

export default AntdTimeline