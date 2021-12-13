// COMPONENTS
import { RenderLogic } from "Tools/FunctionTools"
import SingleTab from "./components/SingleTab"
import { Tabs } from "antd"
// CSS
import "./AntdTabs.css"
import "antd/dist/antd.css"
// PROPS
import { AntdTabsProps } from "./AntdTabsProps"

const AntdTabs = (props: AntdTabsProps) => {

    // PROPS
    const { TabPane } = Tabs;
    const { data, position, size } = props
    
    const renderTabs = data.map(tab => {
        // PROPS
        const { content, description, link, title } = tab
        
        const tabProperties = {
            content: content,
            description: description,
            link: link,
            title: title,
        }

        return (
            <TabPane 
                key={title}
                tab={title} 
            >
                <SingleTab 
                    {...tabProperties} 
                />
            </TabPane>
        )
    })

    return (
        <Tabs 
            centered
            defaultActiveKey="0"
            size={RenderLogic(size, "small")}
            tabPosition={RenderLogic (position, "top")}
            type="card"
        >
            {renderTabs}
        </Tabs>
    )
}

export default AntdTabs