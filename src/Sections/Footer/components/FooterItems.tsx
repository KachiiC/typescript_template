import { Link } from "react-router-dom";
// PROPS
import { footerCopyrightProps, footerSectionDataProps } from "Props/FooterProps";
// TOOLS
import SiteIcon from "Tools/SiteIcon";

export const FooterHeading = (props: {heading?: string}) => {
    // IF HEADING, display heading
    const headingLogic = () => {
        if (props.heading) return props.heading
    }

    return <h3>{headingLogic()}</h3>
    
}

export const FooterLogos = (props: footerSectionDataProps) => (
    <div className="site-span-1">
        <a href={props.link} 
            target="_blank" 
            rel="noreferrer"
        >
            <SiteIcon 
                type={props.icon} 
                size="2x"
            />
        </a>
    </div>
)

export const FooterLinks = (props: footerSectionDataProps) => (
    <div className="site-span-1" 
        key={props.title}
    >
        <Link to={`/${props.link}`}>
            {props.title}
        </Link>
    </div>
)

export const FooterCopyRight = (props: footerCopyrightProps) => (
    <div className="footer-copyright">
        &copy; <i>Designed by {props.name} {props.year}</i>
    </div>
)
