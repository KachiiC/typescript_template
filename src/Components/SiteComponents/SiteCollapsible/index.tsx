// CSS
import './SiteCollapsible.css'
// PROPS
import { CollapsibleProps } from 'Props/Components/CollapsibleProps'
// TOOLS
import { RenderLogic } from 'Tools/FunctionTools'
// COMPONENTS
import SingleTabComponent from "./component/SingleCollapsible"

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