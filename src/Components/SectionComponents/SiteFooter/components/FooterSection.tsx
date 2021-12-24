// COMPONENTS
import { FooterLogos, FooterLinks } from "./FooterItems"
// PROPS
import { footerSectionProps } from "../SiteFooterProps"

const FooterSection = (props: footerSectionProps) => {

    const { data } = props

    const displayFooterItems = data.map(logo => {

        // PROPS
        const { external_link, link, title } = logo

        const logoProps = {
            external_link: external_link,
            icon: title,
            key: title,
            link: link,
            span: data.length,
            title: title
        }
        
        return props.type === "logos" ?
            <FooterLogos
                {...logoProps} 
            />
            :
            <FooterLinks
                {...logoProps}
            />
    })


    const gridTemplateLogic = {
        "gridTemplateColumns": `repeat(${data.length}, 1fr)`
    }

    return (
        <div className="footer-section">
            <div className="site-grid" 
                style={gridTemplateLogic}
            >
                {displayFooterItems}
            </div>
        </div>
    )
}

export default FooterSection