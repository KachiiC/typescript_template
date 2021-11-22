import { useState } from "react"
// COMPONENTS
import SiteCollapsible from "Components/SiteComponents/SiteCollapsible"
// CSS
import './FilterCollapsible.css'
// PROPS
import { FilterCollapsibleProps } from "Props/Components/FilterComponentProps/FilterCollapsibleProps"
import { TargetProps } from "Props/Tools/ToolProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const FilterCollapsible = (props: FilterCollapsibleProps) => {

    // PROPS
    const { data, placeholder, width } = props

    // The results which match the input, intial value is the entire data set
    const [foundResults, setFoundResults] = useState(data)

    // Filters the data and returns the titles which begin with the same letters as input 
    const filterFunction = (e: TargetProps) => {
        const keyword = e.target.value;

        // words that begin with input are returned
        const resultsLogic = data.filter(result => 
            result.title.toLowerCase().startsWith(keyword.toLowerCase())
        )

        // logic only kicks in when keyword is not empty string
        keyword !== '' ? 
            setFoundResults(resultsLogic) 
            : 
            setFoundResults(data)
        
    } 

    // Filters the collpasible component titles and returns "No results found!" foundResults is empty.
    const filterLogic = foundResults && foundResults.length > 0 ? 
        <SiteCollapsible 
            data={foundResults}
            width={100}
            // Width is 100% by default
        />
        : 
        <h2>No results found!</h2>

    return (
        <div className={`filter-collapsible w-${RenderLogic(width, 90)} m-auto`}>
            {/* Filter begins on change */}
            <input onChange={filterFunction}
                className="w-100"
                // If no placeholder is specified, "search" is used as the placeholder
                placeholder={RenderLogic(placeholder, "search")}
            />
            {filterLogic}
        </div>
    )
}

export default FilterCollapsible