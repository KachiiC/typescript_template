import { Link } from "react-router-dom"
// PROPS
import { SiteLinkProps } from "Props/Tools/ToolProps"

// A site Link for local and external
export const SiteLink = (props: SiteLinkProps) => {

    // PROPS
    const { link, placeholder, type } = props

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