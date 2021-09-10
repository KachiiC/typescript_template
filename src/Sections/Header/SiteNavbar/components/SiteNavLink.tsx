import { Link } from 'react-router-dom'
// PROPS
import { SiteNavLinkProps } from 'Props/HeaderProps'

const SiteNavLink = (props: SiteNavLinkProps) => {

    const linkTypeLogic = props.type === "full" ? "site-nav-link" : "site-small-link"

    return (
        <div className={linkTypeLogic} 
            onClick={props.click}
        >
            <Link to={`/${props.link}`}>
                {props.title}
            </Link>
        </div>
    )
}

export default SiteNavLink