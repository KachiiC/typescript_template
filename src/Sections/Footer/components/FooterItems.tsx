// CSS
import MediaQuery from 'react-responsive'
// PROPS
import { footerCopyrightProps, footerSectionDataProps } from "Props/Sections/FooterProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import SiteIcon from "Tools/SiteIcon"
import { SiteLink } from "Tools/LinkTools"
import { StringJoin } from "Tools/StringTools"

export const FooterHeading = (props: {heading?: string}) => RenderLogic(<h3>{props.heading}</h3>, "")

export const FooterLogos = (props: footerSectionDataProps) => {

    const { icon, link } = props

    return (
        <div className="site-col-1">
            <SiteLink
                link={RenderLogic(link, "")}
                placeholder={
                    <SiteIcon 
                        type={icon} 
                        size="2x"
                    />
                }
                type="external"  
            />
        </div>
    )
}

export const FooterLinks = (props: footerSectionDataProps) => {

    const { external_link, link, title, span } = props

    const FooterLink = (props: any) => {
        return (
            <div className={`site-col-${props.input} footer-link`}
                key={title}
            >
                <SiteLink
                    link={`${RenderLogic(external_link, `/${link}`)}`}
                    type={external_link ? "external" : "local"}
                    placeholder={StringJoin(title, "_", "")} 
                />
            </div>
        )
    }

    return (
        <>
            <MediaQuery minWidth={1000}>
                <FooterLink input={1} />
            </MediaQuery>
            <MediaQuery maxWidth={1000}>
                <FooterLink input={span} />
            </MediaQuery>
        </>
    )
}

export const FooterCopyRight = (props: footerCopyrightProps) => (
    <div className="footer-copyright">
        &copy; <i>Designed by {props.name} {props.year}</i>
    </div>
)
