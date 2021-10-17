// CSS
import './ImageText.css'
// PROPS
import { ImageTextComponentProps } from "Props/Components/ImageText"
// COMPONENTS
import ImageTextRow from "./components/ImageTextRow"

const ImageTextComponent = (props: ImageTextComponentProps) => {

    const displayRows = props.data.map(project => (
        <ImageTextRow
            key={project.title}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
        />
    ))

    return (
        <div className="image-text-container">
            {displayRows}
        </div>
    )
}

export default ImageTextComponent