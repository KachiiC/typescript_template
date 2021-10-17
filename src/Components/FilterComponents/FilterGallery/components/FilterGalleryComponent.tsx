// PROPS
import { FilterGalleryProps } from "Props/Components/FilterComponentProps/FilterGalleryProps"
// COMPONENTS
import SiteCards from "Components/SiteComponents/SiteCards"

const GalleryComponent = (props: FilterGalleryProps) => {
    
    // PROPS
    const {buttons, card_size, data } = props

    return (
        <>
            <div className="filter-buttons-container w-80 m-auto" >
                {buttons}
            </div>
            {/* Using site cards as the displayed data */} 
            {/* The cards will be filtered on click on the level above */}
            <SiteCards 
                data={data} 
                card_size={card_size}
            />
        </>
    )
}

export default GalleryComponent