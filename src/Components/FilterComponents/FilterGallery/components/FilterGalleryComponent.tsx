// COMPONENTS
import SiteCards from "Components/SiteComponents/SiteCards"
// PROPS
import { FilterGalleryProps } from "Components/FilterComponents/FilterGallery/FilterGalleryProps"

const GalleryComponent = (props: FilterGalleryProps) => {
    
    // PROPS
    const { buttons, card_size, data } = props

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