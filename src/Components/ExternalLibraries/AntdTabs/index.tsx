// COMPONENTS
import SingleTab from "./components/SingleTab"
import { Tabs } from "antd"
// CSS
import "./AntdTabs.css"
import "antd/dist/antd.css"
// PROPS
import { AntdTabsProps } from "./AntdTabsProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const AntdTabs = (props: AntdTabsProps) => {

    // PROPS
    const { TabPane } = Tabs;
    const { 
        data,
        position,
        size,
        width
    } = props
    
    const renderTabs = data.map(tab => {
        // PROPS
        const { 
            content,
            title
        } = tab
        
        const tabProperties = {
            content: content,
            title: title,
        }

        return (
            <TabPane 
                key={title}
                tab={title} 
            >
                <SingleTab {...tabProperties} />
            </TabPane>
        )
    })

    return (
        <div className={`antd-tabs-container w-${RenderLogic(width, 90)}`}>
            <Tabs 
                centered
                defaultActiveKey="0"
                size={RenderLogic(size, "small")}
                tabPosition={RenderLogic (position, "top")}
                type="card"
            >
                {renderTabs}
            </Tabs>
        </div>
    )
}

export default AntdTabs