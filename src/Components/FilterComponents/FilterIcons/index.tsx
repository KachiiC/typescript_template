import { useState, useEffect } from "react"
// COMPONENTS
import FilterButtons from "./components/FilterButtons"
import IconsList from "@components/IconsList"
// CSS 
import "./FilterIcons.css"
// PROPS
import { FilterIconsProps } from "./FilterIconsProps"
// TOOLS
import { UnqiueValues } from "Tools/ObjectDataTools"

const FilterIcons = (props: FilterIconsProps) => {

    // PROPS
    const { data } = props

    // The filter type's initial state is empty
    const [filterType, setFilterType] = useState("")
    // The results is set when filtered, inital state is the input data.
    const [resultsData, setResultsData] = useState(data)

    useEffect(() => {
        // Logic is only set when filter type is set.
        if (filterType !== "") {
            // The results is set when filtered, inital state is the input data.
            setResultsData(data.filter(obj=> obj.type === filterType))
        }
    },[filterType, data])
    
    return (
        <div className="filter-icons">
            {/* Only returns a title is passed as an argument */}
            <FilterButtons 
                data={UnqiueValues(data, "type")} 
                setFunction={setFilterType}
                setAll={() => setResultsData(data)}
            />
            <IconsList 
                data={resultsData} 
            />
        </div>
    )
}

export default FilterIcons