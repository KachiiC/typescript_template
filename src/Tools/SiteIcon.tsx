import { faFacebook, faHtml5, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SiteIcon = (props: { type: any; size: any; }) => {

    var icon

    switch(props.type) {
        case "twitter":
            icon = faTwitter
            break;
        case "facebook":
            icon = faFacebook
            break;
        case "instagram":
            icon = faInstagram
            break;
        default:
            icon = faHtml5

    }

    const sizeLogic = props.size ? props.size : "2x" 

    return <FontAwesomeIcon icon={icon} size={sizeLogic} />
}

export default SiteIcon