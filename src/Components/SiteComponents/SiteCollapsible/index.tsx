// COMPONENTS
import SingleTabComponent from "./component/SingleCollapsible"
// CSS
import "./SiteCollapsible.css"
// PROPS
import { CollapsibleProps } from "./SiteCollapsibleProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const SiteCollapsible = (props: CollapsibleProps) => {

    const { data, width, background_color, text_color } = props
    
    const displayedTabs = data.map(tab => {
        
        const { content, title } = tab

        const backgroundLogic = RenderLogic(
            RenderLogic(tab.background_color, background_color), "black"
        )

        const textLogic = RenderLogic(
            RenderLogic(tab.text_color,text_color), "white"
        )

        return (
            <SingleTabComponent
                background_color={backgroundLogic}
                content={content}
                title={title}
                key={title}
                text_color={textLogic}
            />
        )
    })

    return (
        <div className={`site-collapsible-container w-${RenderLogic(width, 90)}`}>
            {displayedTabs}
        </div>
    )
}

export default SiteCollapsible