import { useReducer, useState } from "react"
// COMPONENTS
import { CollapsibleContent, CollapsibleHeading } from "./CollapsibleParts"
import CollapsibleTransition from "./CollapsibleTransition"
// PROPS
import { singleCollapsibleProps } from "Props/Components/CollapsibleProps"

const SingleCollapsible = (props: singleCollapsibleProps) => {

    // PROPS
    const { content, title } = props

    // Each tabs content is open or closed depending on this reducder
    const [displayContent, toggleContent] = useReducer(
        displayContent => !displayContent,
        false
    )
    // if tab is open, direction will point down, if closed will point left (default)
    const [direction, setDirection] = useState("left")

    const clickLogic = () => {
        // Each tabs content is open or closed depending on stateToggle
        toggleContent()
        
        direction === "left" ? 
            setDirection("down") 
            : 
            setDirection("left")
    }

    return (
        <>
            <CollapsibleHeading
                // on click will change direction and show or closes content
                title={title}
                click={() => clickLogic()}
                direction={direction}
            />
            <CollapsibleTransition 
                DisplayContent={displayContent}
            >
                <CollapsibleContent 
                    content={content}
                />
            </CollapsibleTransition>
        </>
    )
}

export default SingleCollapsible