import { YoutubeProps } from "Props/Components/ComponentProps"
import { RenderLogic } from "Tools/FunctionTools"

const YoutubePlayer = (props: YoutubeProps) => {

    const { height, width, id } = props

    return (
        <iframe 
            allow="accelerometer;
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
            allowFullScreen 
            frameBorder="0"
            height={RenderLogic(height, "315")}
            width={RenderLogic(width, "560")}
            src={`https://www.youtube.com/embed/${id}?controls=0&rel=0`}
            title={`${id}`}
        />
    )
}

export default YoutubePlayer