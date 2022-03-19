import { 
    faCss3,
    faFacebook, 
    faGithub, 
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
    faYoutube, 
} from "@fortawesome/free-brands-svg-icons"
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
import { IconList } from "Props/Tools/ToolProps";

const Icons = (input: string) => {

    const Icons: IconList = {
        "api" :faFont,
        "bars" :faBars,
        "css" :faCss3,
        "down" :faCaretDown,
        "django" :faCode,
        "email" :faAt,
        "facebook" :faFacebook,
        "github" :faGithub,
        "instagram" :faInstagram,
        "javascript" :faJsSquare,
        "left" :faCaretLeft,
        "linkedIn" :faLinkedinIn,
        "mobile" :faMobile,
        "pintrest" :faPinterest,
        "postgres" :faDatabase,
        "python" :faPython,
        "pytest" :faQuestion,
        "react" :faReact,
        "right" :faCaretRight,
        "sass" :faSass,
        "shopify" :faShopify,
        "snapchat" :faSnapchat,
        "tiktok" :faTiktok,
        "times" :faTimes,
        "twitter" :faTwitter,
        "typescript" :faScroll,
        "up" :faCaretUp,
        "youtube" :faYoutube,
    }

    return Icons[input];
}

export default Icons