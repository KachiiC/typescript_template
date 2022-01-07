// PROPS
import { RenderLogic } from "Tools/FunctionTools"
import { 
    TabContentProps, 
    TabLinkProps, 
    TabLinkRowProps 
} from "../SiteTabsProps"


export const TabLink = (props: TabLinkProps) => {
    
    // PROPS
    const { click, title, background_color, text_color } = props

    const styleLogic = {
        "backgroundColor": RenderLogic(background_color, "black"),
        "color" : RenderLogic(text_color, "white")
    }

    return (
        <div className="site-tab-link cursor-pointer"
            onClick={click}
            style={styleLogic}
        >
            {title}
        </div>
    )
}

export const TabLinksRow = (props: TabLinkRowProps) => {
    
    // PROPS
    const { data, setFunction, background_color, text_color } = props

    // Returns a tab for each object in data array
    const displayedTabs = data.map(tab => 
        <TabLink
            background_color={background_color}
            text_color={text_color}
            key={tab.title}
            title={tab.title}
            // Index of tab clicked sets the displayed tab on level above
            click={() => setFunction(data.indexOf(tab))}
        />
    )
    

    return (
        <div className="site-tab-rows">
            {displayedTabs}
        </div>
    )
}

export const TabContent = (props: TabContentProps) => (
    <div className="site-tab-content site-border">
        {props.content}
    </div> 
)