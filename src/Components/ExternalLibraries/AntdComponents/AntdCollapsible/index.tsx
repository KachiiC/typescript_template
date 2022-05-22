// COMPONENTS
import { Collapse } from "antd";
// CSS
import "./AntdCollapsible.css";
// COMPONENTS
import AntdPanelTitle from "./components/AntdPanelTitle";
// INTERFACES
import { AntdCollapsibleProps } from "./AntdCollapsibleProps";

const AntdCollapsible = ({ data }: AntdCollapsibleProps) => {
  const { Panel } = Collapse;

  // For each object in props.data returns panel title and content inside panel on click
  const displayedTabs = data.map((panel, index) => (
    <Panel key={index} header={<AntdPanelTitle title={panel.title} />}>
      {panel.content}
    </Panel>
  ));

  return <Collapse>{displayedTabs}</Collapse>;
};

export default AntdCollapsible;
