// PROPS
import { ImageTextRowProps } from "Props/Components/ImageText"

const ImageTextRow = (props: ImageTextRowProps) => (
    <div className="site-flex">
        <div className="row-image">
            <a href={props.link} 
                target="_blank" 
                rel="noreferrer"
            >
                <img className="site-responsive-image" 
                    alt={props.title}
                    src={props.image}
                />
            </a>
        </div>
        <div className="row-description">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
)

export default ImageTextRow