import { useState, useEffect } from "react"
// COMPONENTS
import FilterButtons from "./components/FilterButtons"
import IconsList from "./components/IconList"
// CSS 
import './FilterIcons.css'
// PROPS
import { FilterIconProps } from "Props/Components/FilterComponentProps/FilterIconProps"
// TOOLS
import { TitleLogic } from "Tools/StringTools"
import { UnqiueValues } from "Tools/ObjectDataTools"

const FilterIcons = (props: FilterIconProps) => {

    // PROPS
    const { data, title } = props

    // The filter type's initial state is empty
    const [filterType, setFilterType] = useState('')
    // The results is set when filtered, inital state is the input data.
    const [resultsData, setResultsData] = useState(data)

    useEffect(() => {
        // Logic is only set when filter type is set.
        if (filterType !== '') {
            // The results is set when filtered, inital state is the input data.
            setResultsData(data.filter(obj=> obj.type === filterType))
        }
    },[filterType, data])
    
    return (
        <div className="filter-icons">
            {/* Only returns a title is passed as an argument */}
            {TitleLogic(title, "h1")}
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