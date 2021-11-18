import { useState } from "react"
// COMPONENTS
import { GalleryModalImage, GallerySelectedImage } from "./components/GalleryImage"
import GalleryImagesRow from "./components/GalleryImagesRow"
import SiteModalComponent from "../SiteModal"
// CSS
import './SiteGallery.css'
// PROPS
import { GalleryProps } from "Props/Components/GalleryProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import { TitleLogic } from "Tools/StringTools"


const SiteGallery = (props: GalleryProps) => {

    const { data, title, width, number } = props

    // WIDTH LOGIC
    const widthLogic = RenderLogic(width, 80)

    // IMAGE LOGIC
    const [displayedImage, setDisplayedImage] = useState(0)

    // The displayed selected image which opens the modal
    const gallerySelectedImage = (
        <GallerySelectedImage 
            image={data[displayedImage].image}
            width={widthLogic}
        />
    )
    
    // The image displayed in the modal when clicked
    const galleryModalImage = (
        <GalleryModalImage 
            title={data[displayedImage].title}
            image={data[displayedImage].image}
            width={50}
        />
    )

    return (
        <div className="site-gallery-component">
            {TitleLogic(title, "h2")}
            <SiteModalComponent
                component={gallerySelectedImage}
                content={galleryModalImage}
                type="blank"
            />
            <GalleryImagesRow 
                data={data}
                row_number={RenderLogic(number, 4)}
                setFunction={setDisplayedImage}
                width={widthLogic}
            />
        </div>
    )
}

export default SiteGallery