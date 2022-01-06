// PROPS
import {
    GalleryImageProps, 
    GalleryModalImageProps, 
    GallerySelectedImageProps 
} from "../SiteGalleryProps"
// TOOLS
import { IfStatement } from "Tools/FunctionTools"

export const GalleryImage = (props: GalleryImageProps) => {

    // PROPS
    const { click, image, title, type } = props

    const typeLogic = type === "row" ? 
        "site-gallery-image-row" 
        : 
        "site-gallery-image"

    return (
        <img src={image} 
            alt={title}
            className={`${typeLogic} cursor-pointer site-border-white`}
            onClick={IfStatement(click)} 
        />
    )
}

export const GallerySelectedImage = (props: GallerySelectedImageProps) => {

    // PROPS
    const { image, width } = props

    return (
        <div className={`w-${width}`}>
            <GalleryImage
                type="selected"
                image={image}
                title="selected_image"
            />
        </div>
    )
}

export const GalleryModalImage = (props: GalleryModalImageProps) => {

    // PROPS
    const { image, title, width } = props

    return (
        <>
            <h2 className="gallery-modal-title">
                {title}
            </h2>
            <GallerySelectedImage
                image={image}
                width={width}
            />
        </>
    )
}