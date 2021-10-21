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

export const FooterLogos = (props: footerSectionDataProps) => {

    const { icon, link } = props
    
    return (
        <div className="site-span-1">
            <a href={link} 
                target="_blank" 
                rel="noreferrer"
            >
                <SiteIcon 
                    type={icon} 
                    size="2x"
                />
            </a>
        </div>
    )
}

export const FooterLinks = (props: footerSectionDataProps) => {

    const { title, link } = props

    return (
        <div className="site-span-1" 
            key={title}
        >
            <Link to={`/${link}`}>
                {title}
            </Link>
        </div>
    )
}

export const FooterCopyRight = (props: footerCopyrightProps) => {

    const { name, year } = props

    return (
        <div className="footer-copyright">
            &copy; <i>Designed by {name} {year}</i>
        </div>
    )
}
