//COMPONENTS
import { SiteLink } from "Tools/LinkTools"
// PROPS
import { SiteSingleCardProps } from "Props/Components/CardProps"

const SingleCard = (props: SiteSingleCardProps) => {

    // PROPS
    const { 
        description,
        image,
        link,
        link_type,
        span,
        title,
    } = props

    const cardImage = (
        <img className="site-responsive-image" 
            src={image} 
            alt={title} 
        />
    )

    const LinkLogic = () => {
        // If object has a link key...
        if (link_type && link) {
            // if link type is external, returns a href tag
            return (
                <SiteLink 
                    link={link}
                    type={link_type}
                    placeholder={cardImage}
                />
            )
        }
        
        return <>{cardImage}</>
    }

    return (
        <div className={`site-single-card w-90 site-col-${span}`} >
            {/* If link is passed, returns a link based on type, else it will just return the image */}
            {LinkLogic()}
            <div className="site-text-container">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SingleCard