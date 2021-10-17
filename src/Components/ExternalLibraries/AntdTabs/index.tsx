// PROPS
import { AntdTabsProps} from './AntdTabsProps'
// CSS
import 'antd/dist/antd.css';
import './AntdTabs.css'
// COMPONENTS
import { Tabs } from 'antd';
import SingleTab from './components/SingleTab';
import { RenderLogic } from 'Tools/FunctionTools';

const AntdTabs = (props: AntdTabsProps) => {

    const { TabPane } = Tabs;

    const sizeLogic = RenderLogic(props.size, "small")
    const positionLogic = RenderLogic (props.position, "top")
    
    const renderTabs = props.data.map(tab =>
        <TabPane 
            key={tab.title}
            tab={tab.title} 
        >
            <SingleTab
                link={tab.link}
                title={tab.title}
                content={tab.content}
                description={tab.description}
            />
        </TabPane>
    )

    return (
        <Tabs 
            tabPosition={positionLogic}
            centered
            defaultActiveKey="0"
            size={sizeLogic}
            type="card"
        >
            {renderTabs}
        </Tabs>
    )
}

export default AntdTabs