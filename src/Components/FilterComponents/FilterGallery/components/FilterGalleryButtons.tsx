// PROPS
import { 
    FilterButtonProps, 
    SingleFilterButtonProps 
} from "Props/Components/FilterComponentProps/FilterGalleryProps"

const SingleFilterButton = (props: SingleFilterButtonProps) => {
    
    // PROPS
    const { click, title } = props
    
    return (
        // Takes title as a string and click as arguments and returns a button
        <div className="filter-button cursor-pointer" 
            id={title}
            key={title}
            onClick={click}
        >
            {title}
        </div>
    )
}

const FilterGalleryButtons = (props: FilterButtonProps) => {

    const { data, setAll, setFunction } = props

    // For each string in the array, returns a SingleFilterButton.
    // The setFunction is fed in and sets the current button to the state on the level above
    const filterButtons = data.map(type => 
        <SingleFilterButton
            key={type}
            title={type}
            click={() => setFunction(type)}
        />
    ) 
    
    // Add a button named "all" at front of list, 
    // setAll property will be defined on level above to return all objects in the array 
    filterButtons.unshift(
        <SingleFilterButton
            key="All"
            title="All"
            click={setAll}
        />
    )

    return <>{filterButtons}</>
}


export default FilterGalleryButtons