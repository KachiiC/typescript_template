import { YoutubeProps } from "Props/ComponentProps"

const YoutubePlayer = (props: YoutubeProps) => {

    const { height, width, id } = props

    const heightLogic = height ? height : "315" 
    const widthLogic = width ? width : "560"

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
            height={heightLogic}
            width={widthLogic}
            src={`https://www.youtube.com/embed/${id}?controls=0&rel=0`}
            title={`${id}`}
        />
    )
}

export default YoutubePlayer