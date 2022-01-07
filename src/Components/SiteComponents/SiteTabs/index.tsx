import { useState } from "react"
// COMPONENTS
import { TabContent, TabLinksRow } from "./components/TabComponents"
// CSS
import "./SiteTabs.css"
// PROPS
import { SiteTabsProps } from "./SiteTabsProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const SiteTabs = (props: SiteTabsProps) => {

    // PROPS
    const { data, width, background_color, text_color } = props

    // displayTab detirmines which tabs is current displayed, default is first tab
    const [displayTab, setDisplayTab] = useState(0)

    return (
        // By default width of component is 90%
        <div className={`site-tabs-component  w-${RenderLogic(width, 90)}`}>
            <TabLinksRow
                data={data}
                setFunction={setDisplayTab}
                background_color={background_color}
                text_color={text_color}
            />
            <TabContent 
                content={data[displayTab].content} 
            />
        </div>
    )
} 

export default SiteTabs