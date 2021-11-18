// COMPONENTS
import SingleCard from "./components/SingleCard"
// CSS
import './SiteCard.css'
// PROPS
import { SiteCardProps } from 'Props/Components/CardProps'
// TOOLS
import { GridSpanSwitcher } from 'Tools/GridTools'

const SiteCards = (props: SiteCardProps) => {

    // PROPS
    const { card_size , data } = props
    
    const displayCards = data.map(card => {

        // PROPS
        const {
            description,
            image,
            link,
            link_type,
            title
        } = card

        // CARD PROPS
        const CardProps = {
            title:  title,
            description: description,
            image: image,
            link: link,
            link_type: link_type,
            // Size of card can be passed through, default is "small" (4 cards a row)
        }

        return (
        // returns a card for each object in the array
        <SingleCard
            {...CardProps}
            key={card.title}
            // Size of card can be passed through, default is "small" (4 cards a row)
            span={GridSpanSwitcher(card_size)}
        />
    )})

    return (
        <div className="site-grid-system">
            {displayCards}
        </div>
    )
}

export default SiteCards