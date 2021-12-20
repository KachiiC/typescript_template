// COMPONENTS
import SingleTabComponent from "./component/SingleCollapsible"
// CSS
import "./SiteCollapsible.css"
// PROPS
import { CollapsibleProps } from "./SiteCollapsibleProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const SiteCollapsible = (props: CollapsibleProps) => {

    const { data, width } = props
    
    const displayedTabs = data.map(tab => {
        
        const { title, content } = tab

        return (
            <SingleTabComponent
                content={content}
                title={title}
                key={title}
            />
        )
    })

    return (
        <div className={`site-collapsible-container w-${RenderLogic(width, 100)}`}>
            {displayedTabs}
        </div>
    )
}

export default SiteCollapsible