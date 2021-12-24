// COMPONENTS
import { RenderLogic } from "Tools/FunctionTools"
// PROPS
import { YoutubeProps } from "./YoutubeProps"

const YoutubePlayer = (props: YoutubeProps) => {

    const { height, id, width } = props

    return (
        <iframe 
            allow="
                accelerometer;
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture
            " 
            allowFullScreen 
            frameBorder="0"
            height={RenderLogic(height, "315")}
            src={`https://www.youtube.com/embed/${id}?controls=0&rel=0`}
            title={`${id}`}
            width={RenderLogic(width, "560")}
        />
    )
}

export default YoutubePlayer