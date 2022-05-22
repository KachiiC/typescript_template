import { List } from "antd";

interface Props {
  icon: string;
  description: string;
}

const { Item } = List;
const { Meta } = Item;

const SingleListLine = ({ icon, description }: Props) => (
  <Item>
    <Meta avatar={icon} description={description} />
  </Item>
);

export default SingleListLine;
