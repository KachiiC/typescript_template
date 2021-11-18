// PROPS
import { SiteTableHeaderProps } from "Props/Components/TableProps"
// TOOLS
import { StringJoin } from "Tools/StringTools"

const SiteTableHeaders = (props: SiteTableHeaderProps) => {

    // PROPS
    const { keys } = props

    // returns table heading in uppercase for each key.
    const displayHeaders = keys.map(data => 
        <th key={data}>
            {StringJoin(data, "_", " ")}
        </th>
    )

    return (
        <thead>
            <tr>
                {displayHeaders}
            </tr>
        </thead>
    )
}

export default SiteTableHeaders