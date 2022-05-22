// Components
import { List } from "antd";
import { AntListProps } from "./AntdListProps";
import SingleListLine from "./components/SingleListLine";

const AntList = ({ data }: AntListProps) => {
  const renderList = data.map(({ icon, description }, index) => {
    const listArgs = {
      icon,
      description,
      key: index
    };
    return <SingleListLine {...listArgs} />;
  });

  return <List>{renderList}</List>;
};

export default AntList;
