//COMPONENTS
import { Table } from 'antd';
// CSS
import 'antd/dist/antd.css'
// PROPS
import { AntdTableProps } from 'Props/Components/AntdProps/AntdTableProps';
// TOOLS
import { defaultColumn } from './tools/columnFunctions';
import { IfStatement, RenderLogic } from "Tools/FunctionTools";

const AntdTable = (props: AntdTableProps) => {

    const { columns, data, pagination, title, default_sort } = props

    const columnsLogic = RenderLogic(
        columns, 
        defaultColumn(
            data, IfStatement(default_sort)
        )
    )

    return (
        <div className="w-90 m-auto">
            <h1>{IfStatement(title)}</h1>
            <Table 
                columns={columnsLogic} 
                dataSource={data} 
                pagination={RenderLogic(pagination, false)}
            />
        </div>
    )
}

export default AntdTable;