// PROPS
import { SiteTableRowProps, SiteTableSingleRowProps } from "Props/Components/TableProps"

const SiteSingleRow = (props: SiteTableSingleRowProps) => {

    // returns array for every object value
    const values_list = Object.values(props.data)

    // creates a table row column for each value
    const displayed_value = values_list.map(val => (
        <td key={val}>
            {val}
        </td>
    ))

    return (
        // returns row of columns for each value in object
        <tr>
            {displayed_value}
        </tr>
    )
}

const SiteTableRows = (props: SiteTableRowProps) => {

    // PROPS
    const { data } = props
    
    const table_rows = data.map((obj, index) => {

        return (
            // returns row of columns for each value in object
            <SiteSingleRow
                key={index}
                data={obj}
            />
        )
    })

    return (
        <tbody>
            {table_rows}
        </tbody>
    )
}

export default SiteTableRows