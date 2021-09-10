import { Link } from "react-router-dom";
import SiteIcon from "Tools/SiteIcon";

export const FooterLogos = (props: any) => (
    <a href={props.link} 
        target="_blank" 
        rel="noreferrer"
    >
        <SiteIcon 
            type={props.icon} 
            size="2x"
        />
    </a>
)

export const FooterLinks = (props: any) => (
    <div className="site-span-1" 
        key={props.title}
    >
        <Link to={`/${props.link}`}>
            {props.title}
        </Link>
    </div>
)

export const FooterCopyRight = (props: any) => (
    <div className="footer-copyright">
        &copy; <i>Designed by {props.name} {props.year}</i>
    </div>
)
