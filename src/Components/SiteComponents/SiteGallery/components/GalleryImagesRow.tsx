// COMPONENTS
import { GalleryImage } from "./GalleryImage"
// PROPS
import { GalleryImageProps, GalleryImageRowProps } from "../SiteGalleryProps"
// TOOLS
import { GridStyle } from "Tools/GridTools"

const SingleRowImage = (props: GalleryImageProps) => {
    
    // PROPS
    const { title, click, image } = props
    
    return (
        <div className="site-col-1">
            <GalleryImage 
                title={title}
                image={image}
                click={click}
            />
        </div>
    )
}

const GalleryImagesRow = (props: GalleryImageRowProps) => {

    const { data, row_number, setFunction, width } = props

    const displayedRows = data.map((item) => (
            <SingleRowImage
                key={item.title}
                title={item.title}
                click={() => setFunction(data.indexOf(item))}
                image={item.image}
            />
        )
    ).slice(0, row_number)

    return (
        <div className={`w-${width} `}>
            <div className="site-grid" 
                style={GridStyle(row_number)}
            >
                {displayedRows}
            </div>
        </div>
    )
}

export default GalleryImagesRow