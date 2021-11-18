// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faCss3,
    faFacebook, 
    faGithub,
    faHtml5, 
    faInstagram, 
    faJsSquare, 
    faLinkedinIn, 
    faPinterest, 
    faPython, 
    faReact, 
    faSass, 
    faShopify, 
    faSnapchat, 
    faTiktok, 
    faTwitter, 
    faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { 
    faAt,
    faBars, 
    faCaretDown, 
    faCaretLeft, 
    faCaretRight, 
    faCaretUp, 
    faCode, 
    faDatabase, 
    faFont, 
    faMobile, 
    faQuestion, 
    faScroll, 
    faTimes 
} from "@fortawesome/free-solid-svg-icons"
// PROPS
import { SiteIconProps } from "Props/Tools/ToolProps"
// TOOLS
import { RenderLogic } from "./FunctionTools"


// Returns icon based on type, size and color
const SiteIcon = (props: SiteIconProps) => {

    const { type, size, color } = props

    var icon

    switch(type) {
        case "api":
            icon = faFont
            break;
        case "bars":
            icon = faBars
            break;
        case "css":
            icon = faCss3
            break;
        case "down":
            icon = faCaretDown
            break;
        case "django":
            icon = faCode
            break;
        case "email":
            icon = faAt
            break;
        case "facebook":
            icon = faFacebook
            break;
        case "github":
            icon = faGithub
            break;
        case "instagram":
            icon = faInstagram
            break;
        case "javascript":
            icon = faJsSquare
            break;
        case "left":
            icon = faCaretLeft
            break;
        case "linkedIn":
            icon = faLinkedinIn
            break
        case "mobile":
            icon = faMobile
            break;
        case "pintrest":
            icon = faPinterest
            break;
        case "postgres":
            icon = faDatabase
            break;
        case "python":
            icon = faPython
            break;
        case "pytest":
            icon = faQuestion
            break;
        case "react":
            icon = faReact
            break;
        case "right":
            icon = faCaretRight
            break;
        case "sass":
            icon = faSass
            break;
        case "shopify":
            icon = faShopify
            break;
        case "snapchat":
            icon = faSnapchat
            break;
        case "tiktok":
            icon = faTiktok
            break;
        case "times":
            icon = faTimes
            break;
        case "twitter":
            icon = faTwitter
            break;
        case "typescript":
            icon = faScroll
            break;
        case "up":
            icon = faCaretUp
            break;
        case "youtube":
            icon = faYoutube
            break;
        default:
            icon = faHtml5
    }

    return ( 
        <FontAwesomeIcon
            icon={icon} 
            size={RenderLogic(size, "2x")} 
            color={color}
        />
    )
}

export default SiteIcon