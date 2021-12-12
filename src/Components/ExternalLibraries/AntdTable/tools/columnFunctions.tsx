// PROPS
import { 
    AntdTableColumnProps, 
    defaultColumnProps, 
    sortStringProps, 
    sortIntProps 
} from "../AntdTableProps"
// TOOLS
import { ObjKeys } from "Tools/ObjectDataTools"
import { StringJoin } from "Tools/StringTools"

export const antdColumns = (data: defaultColumnProps[]) => {

    return ObjKeys(data[0]).map(key => {

        const sortLogic = typeof data[0][key] === "string" ? 
            (a: sortStringProps, b: sortStringProps) => a[key].localeCompare(b[key])
            : 
            (a: sortIntProps, b: sortIntProps) => a[key] - b[key]

        return {
            title: StringJoin(key, "_", " "),
            dataIndex: key,
            sorter: sortLogic
        } 
    })
}

export const defaultColumn = (data: defaultColumnProps[], default_sort?: string) => {

    const columns: AntdTableColumnProps[] = antdColumns(data)

    if (default_sort) {
        const correct_column = columns.find(column => column.dataIndex === default_sort)
        if (correct_column) {
            correct_column.defaultSortOrder = 'descend'
        }
    }

    return columns
}