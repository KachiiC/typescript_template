// PROPS
import { CollapsibleContentProps, CollapsibleHeadingProps } from "Props/Components/CollapsibleProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

export const CollapsibleHeading = (props: CollapsibleHeadingProps) => {

    // PROPS
    const { click, direction, title } = props
    
    // Direction is detirmined by whether tab is open or not
    return (
        <div className={`site-collapsible m-auto cursor-pointer w-100`} 
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
        <div className={`site-collapsible-content m-auto site-border w-100`}>
            {content}
        </div>
    )
}