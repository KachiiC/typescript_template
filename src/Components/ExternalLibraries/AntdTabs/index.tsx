// COMPONENTS
import { RenderLogic } from 'Tools/FunctionTools'
import SingleTab from './components/SingleTab'
import { Tabs } from 'antd'
// CSS
import 'antd/dist/antd.css'
import './AntdTabs.css'
// PROPS
import { AntdTabsProps } from './AntdTabsProps'

const AntdTabs = (props: AntdTabsProps) => {

    // PROPS
    const { TabPane } = Tabs;
    const { data, position, size } = props
    
    const renderTabs = data.map(tab => {
        // PROPS
        const { content, description, link, title } = tab
        
        const tabProperties = {
            link: link,
            title: title,
            content: content,
            description: description,
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