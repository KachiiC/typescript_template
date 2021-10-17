// CSS
import './SiteCard.css'
// PROPS
import { SiteCardProps } from 'Props/Components/CardProps'
// TOOLS
import { GridSpanSwitcher } from 'Tools/GridTools'
// COMPONENTS
import SingleCard from "./components/SingleCard"

const SiteCards = (props: SiteCardProps) => {

    // PROPS
    const { card_size , data } = props
    
    const displayCards = data.map(card => (
        // returns a card for each object in the array
        <SingleCard
            key={card.title}
            title= {card.title}
            description={card.description}
            image={card.image}
            link={card.link}
            link_type={card.link_type}
            // Size of card can be passed through, default is "small" (4 cards a row)
            span={GridSpanSwitcher(card_size)}
        />
    ))

    return (
        <div className="site-grid-system">
            {displayCards}
        </div>
    )
}

export default SiteCards