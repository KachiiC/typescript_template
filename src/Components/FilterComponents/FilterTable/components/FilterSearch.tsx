// PROPS
import { FilterInputProps, FilterSelectProps } from "../FilterTableProps"
// TOOLS
import { StringJoin } from "tools/StringTools"

export const FilterInput = (props: FilterInputProps) => {
    
    // PROPS
    const { on_change, placeholder, value } = props

    return (
        // input component which takes value and placeholder.
        // onChange is detirmined on the level above.
        <input type="search"
            className="filter-input"
            onChange={on_change}
            placeholder={placeholder}
            value={value}
        />
    )
}

export const FilterSelect = (props: FilterSelectProps) => {

    // PROPS
    const { column_function, data, default_value } = props

    // Takes a array of strings and returns an option for each one
    const displayOptions = data.map(column => 
        <option value={column} 
            key={column}
        >
            {StringJoin(column, "_", " ")}
        </option>
    )

    return (
        // When column is selected, the level above sets the column for useState
        // default value is defined on level above
        <select name="columns"
            onChange={column_function} 
            defaultValue={default_value}
        >
            {displayOptions}
        </select>
    )
}