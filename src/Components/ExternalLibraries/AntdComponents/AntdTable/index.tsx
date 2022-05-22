//COMPONENTS
import { Table } from "antd";
// CSS
import './AntdTable.css'
// PROPS
import { AntdTableProps } from "./AntdTableProps";
// TOOLS
import { defaultColumn } from "./tools/columnFunctions";
import { IfStatement, TernaryLogic } from "tools/FunctionTools";

const AntdTable = (props: AntdTableProps) => {

  const { columns, data, pagination, title, default_sort } = props;

  const columnsLogic = TernaryLogic(
    columns,
    defaultColumn(data, IfStatement(default_sort))
  );

  return (
    <div className="w-90 m-auto">
      {IfStatement(<h1>{title}</h1>)}
      <Table
        columns={columnsLogic}
        dataSource={data}
        pagination={TernaryLogic(pagination, false)}
      />
    </div>
  );
};

export default AntdTable;
