// PROPS
import { AntdTabsProps} from 'Props/Components/AntdProps/AntdTabsProps'
// CSS
import 'antd/dist/antd.css';
import './AntdTabs.css'
// COMPONENTS
import { Tabs } from 'antd';
import SingleTab from './components/SingleTab';
// TOOLS
import { RenderLogic } from 'Tools/FunctionTools';

const AntdTabs = (props: AntdTabsProps) => {

    // PROPS
    const { data, position, size } = props
    const { TabPane } = Tabs;
    
    const renderTabs = data.map(tab => {

        const {title, description, content, link } = tab

        return (
            <TabPane 
                key={title}
                tab={title} 
            >
                <SingleTab
                    title={title}
                    description={description}
                    content={content}
                    link={link}
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