// PROPS
import {
    GalleryImageProps, 
    GalleryModalImageProps, 
    GallerySelectedImageProps 
} from "Props/Components/GalleryProps"
// TOOLS
import { IfStatement } from "Tools/FunctionTools"

export const GalleryImage = (props:GalleryImageProps) => {

    // PROPS
    const { click, image, title } = props

    return (
        <img src={image} 
            alt={title}
            className="site-responsive-image cursor-pointer site-border-white"
            onClick={IfStatement(click)} 
        />
    )
}

export const GallerySelectedImage = (props: GallerySelectedImageProps) => {

    // PROPS
    const { image, width } = props

    return (
        <div className={`w-${width} m-auto`}>
            <GalleryImage 
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