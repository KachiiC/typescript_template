// PROPS
import { SiteIconProps } from "Props/ToolProps";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faFacebook, 
    faGithub, 
    faHtml5, 
    faInstagram, 
    faPinterest, 
    faSnapchat, 
    faTiktok, 
    faTwitter, 
    faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SiteIcon = (props: SiteIconProps) => {

    var icon

    switch(props.type) {
        case "bars":
            icon = faBars
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
        case "pintrest":
            icon = faPinterest
            break;
        case "snapchat":
            icon = faSnapchat
            break;
        case "tiktok":
            icon = faTiktok
            break;
        case "twitter":
            icon = faTwitter
            break;
        case "youtube":
            icon = faYoutube
            break;
        default:
            icon = faHtml5
    }

    const sizeLogic = props.size ? props.size : "2x" 

    return <FontAwesomeIcon icon={icon} size={sizeLogic} />
}

export default SiteIcon