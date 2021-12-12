// PROPS
import { SinglePhotoProps } from "../SitePhotosProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const SinglePhoto = (props: SinglePhotoProps) => {

    const { description, image, text_color, title } = props

    const colorLogic = {
        "color": RenderLogic(text_color, "white")
    }
    
    return (
        <figure className="photo-figure">
            <div className="photo-figure-container">
                <img src={image} alt={title} />
                <div className="figure-container-text" 
                    style={colorLogic}
                >
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </figure>
    )
}

export default SinglePhoto