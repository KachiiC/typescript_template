//COMPONENTS
import { Table } from "antd"
// CSS
import "antd/dist/antd.css"
// PROPS
import { AntdTableProps } from "./AntdTableProps"
// TOOLS
import { defaultColumn } from "./tools/columnFunctions"
import { IfStatement, RenderLogic } from "Tools/FunctionTools"
import { TitleLogic } from "Tools/StringTools"
import { ObjKeys } from "Tools/ObjectDataTools"

const AntdTable = (props: AntdTableProps) => {

    const { 
        columns,
        data,
        default_sort,
        pagination,
        title,
        width
    } = props

    const columnsLogic = RenderLogic(
        columns, 
        defaultColumn(data, IfStatement(default_sort))
    )

    return (
        <div className={`w-${RenderLogic(width, 90)}`}>
            {TitleLogic(title, "h1")}
            <Table 
                columns={columnsLogic} 
                dataSource={data} 
                pagination={RenderLogic(pagination, false)}
                rowKey={ObjKeys(data[0])[0]}
            />
        </div>
    )
}

export default AntdTable;