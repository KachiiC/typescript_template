import { useEffect, useState } from "react"
// COMPONENTS
import FilterGalleryButtons from "./components/FilterCardsButtons"
import FilterGalleryComponent from "./components/FilterCardsComponent"
// CSS 
import "./FilterCards.css"
// PROPS
import { SiteCardProps } from "@components/SiteCards/SiteCardProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import { UnqiueValues } from "Tools/ObjectDataTools"

const FilterCardsGallery = (props: SiteCardProps) => {

    // PROPS
    const { card_size, data } = props

    // The filter type's initial state is empty
    const [filterType, setFilterType] = useState("")
    // The results is set when filtered, inital state is the input data.
    const [resultsData, setResultsData] = useState(data)

    useEffect(() => {
        // Logic is only set when filter type is set.
        if (filterType !== "") {
            // filters array for objects whose "type" key matches fitlerType 
            setResultsData(data.filter(obj => obj.type === filterType))
        }
    },[data, filterType])

    // Returns a filter button for each unique value in from all the "types" in objects   
    const filterButtons = (
        <FilterGalleryButtons
            data={UnqiueValues(data, "type")}
            setFunction={setFilterType}
            setAll={() => setResultsData(data)}
        />
    )
    
    return (
        <FilterGalleryComponent 
            buttons={filterButtons}
            // If card size is not defined, it is set to medium as a default.
            card_size={RenderLogic(card_size, "medium")}
            data={resultsData}
        />
    )
}

export default FilterCardsGallery