// PROPS
import { 
    CollapsibleContentProps,
    CollapsibleHeadingProps 
} from "../SiteCollapsibleProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

export const CollapsibleHeading = (props: CollapsibleHeadingProps) => {

    // PROPS
    const { background_color, click, direction, text_color, title } = props

    const collapsibleStyle = {
        "color": text_color,
        "backgroundColor": background_color
    }
    
    // Direction is detirmined by whether tab is open or not
    return (
        <div className={`site-collapsible cursor-pointer w-100`} 
            style={collapsibleStyle}
            onClick={click}
        >
            {title}
            <div className="collapsible-icon">
                <SiteIcon 
                    type={direction} 
                    size="1x"
                />
            </div>
        </div>
    )
}

export const CollapsibleContent = (props: CollapsibleContentProps) => {
    
    // PROPS
    const { content } = props

    return (
        <div className={`site-collapsible-content`}>
            {content}
        </div>
    )
}