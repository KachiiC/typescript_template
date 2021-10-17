import { Link } from "react-router-dom"
// PROPS
import { SiteLinkProps } from "Props/ToolProps"

export const SiteLink = (props: SiteLinkProps) => {

    // PROPS
    const {link, type, placeholder} = props

    const LinkLogic = type === "external" ?
        <a href={link} 
            target="_blank" 
            rel="noreferrer"
        >
            {placeholder}
        </a>
    :
        <Link to={link}>
            {placeholder}
        </Link>

    return LinkLogic

}