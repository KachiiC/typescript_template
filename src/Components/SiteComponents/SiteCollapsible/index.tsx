// CSS
import './SiteCollapsible.css'
// PROPS
import { CollapsibleProps } from 'Props/Components/CollapsibleProps'
// TOOLS
import { RenderLogic } from 'Tools/FunctionTools'
// COMPONENTS
import SingleTabComponent from "./component/SingleCollapsible"

const SiteCollapsibleComponent = (props: CollapsibleProps) => {

    const { data, width } = props
    
    const displayedTabs = data.map(tab => 
        <SingleTabComponent
            key={tab.title}
            title={tab.title}
            content={tab.content}
        />
    )

    return (
        <div className={`site-collapsible-container w-${RenderLogic(width, 100)}`}>
            {displayedTabs}
        </div>
    )
}

export default SiteCollapsibleComponent