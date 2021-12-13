// PROPS
import { AntdTableColumnProps } from "../AntdTableProps"
import { intDataProps, objectData, stringDataProps } from "Props/PropsTemplates"
// TOOLS
import { ObjKeys } from "Tools/ObjectDataTools"
import { StringJoin } from "Tools/StringTools"

export const antdColumns = (data: objectData[]) => {

    const singleObj = data[0]

    return ObjKeys(singleObj).map(key => {

        const sortLogic = typeof singleObj[key] === "string" ? 
            (a: stringDataProps, b: stringDataProps) => a[key].localeCompare(b[key])
            : 
            (a: intDataProps, b: intDataProps) => a[key] - b[key]

        return {
            title: StringJoin(key, "_", " "),
            dataIndex: key,
            sorter: sortLogic
        } 
    })
}

export const defaultColumn = (data: objectData[], default_sort?: string) => {

    const columns: AntdTableColumnProps[] = antdColumns(data)

    if (default_sort) {
        const correct_column = columns.find(column => column.dataIndex === default_sort)
        if (correct_column) {
            correct_column.defaultSortOrder = "descend"
        }
    }

    return columns
}