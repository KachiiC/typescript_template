// COMPONENTS
import { Tabs } from "antd";
// CSS
import "./AntdTabs.css";
// PROPS
import { AntdTabsProps } from "./AntdTabsProps";
// TOOLS
import { TernaryLogic } from "tools/FunctionTools";

const AntdTabs = ({ data, position, size }: AntdTabsProps) => {
  // PROPS
  const { TabPane } = Tabs;

  const renderTabs = data.map((tab) => {
    // PROPS
    const { title, content } = tab;

    return (
      <TabPane key={title} tab={title}>
        {content}
      </TabPane>
    );
  });

  return (
    <Tabs
      centered
      defaultActiveKey="0"
      size={TernaryLogic(size, "small")}
      tabPosition={TernaryLogic(position, "top")}
      type="card"
    >
      {renderTabs}
    </Tabs>
  );
};

export default AntdTabs;
