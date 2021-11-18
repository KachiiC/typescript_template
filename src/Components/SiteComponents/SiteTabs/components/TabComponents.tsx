// PROPS
import { 
    TabContentProps, 
    TabLinkProps, 
    TabLinkRowProps 
} from "Props/Components/TabProps"


export const TabLink = (props: TabLinkProps) => {
    
    // PROPS
    const { click, title } = props

    return (
        <div className="site-tab-link cursor-pointer"
            onClick={click}
        >
            {title}
        </div>
    )
}

export const TabLinksRow = (props: TabLinkRowProps) => {
    
    // PROPS
    const { data, setFunction } = props

    // Returns a tab for each object in data array
    const displayedTabs = data.map(tab => 
        <TabLink
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