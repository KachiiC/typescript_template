// COMPONENT
import SingleTiltCard from "./components/SingleTiltCard"
// CSS
import "./TiltCards.css"
// PROPS
import { TiltCardsProps } from "./TiltCardProps"

const TiltCards = (props: TiltCardsProps) => {

    const displayTiltCards = props.data.map(card => {

        const {
            content,
            image,
            name,
            type
        } = card

        const cardProps = {
            content: content,
            image: image,
            name: name,
            type: type
        }

        return <SingleTiltCard {...cardProps} />
        
    })

    return (
        <div className="tilt-cards">
            {displayTiltCards}
        </div>
    )
}

export default TiltCards