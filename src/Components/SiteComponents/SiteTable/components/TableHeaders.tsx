// PROPS
import { SiteTableHeaderProps } from "Props/Components/TableProps"
// TOOLS
import { StringUppercase } from "Tools/StringTools"

const SiteTableHeaders = (props: SiteTableHeaderProps) => {

    // PROPS
    const { keys } = props

    // returns table heading in uppercase for each key.
    const displayHeaders = keys.map(data => (
        <th key={data}>
            {StringUppercase(data)}
        </th>
    ))

    return (
        <thead>
            <tr>
                {displayHeaders}
            </tr>
        </thead>
    )
}

export default SiteTableHeaders