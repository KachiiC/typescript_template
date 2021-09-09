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

const SiteIcon = (props: { type: any; size: any; }) => {

    var icon

    switch(props.type) {
        case "twitter":
            icon = faTwitter
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