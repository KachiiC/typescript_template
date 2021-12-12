// PROPS
import { TiltCardProps } from "../TiltCardProps"

const SingleTiltCard = (props: TiltCardProps) => {
    
    const { content, image, name, type } = props

    return (
        <figure className="tilt-cards-container site-shadow">
            <div className="card__image-container">
                <img src={image}
                    alt={name}
                />   
            </div>
            <figcaption className="card__caption">
                <h1 className="card__name">
                    {name}
                </h1>
                <h3 className="card__type">
                    {type}
                </h3>
                <div className="card-content">
                    {content}
                </div>
            </figcaption>
        </figure>
    )
}

export default SingleTiltCard