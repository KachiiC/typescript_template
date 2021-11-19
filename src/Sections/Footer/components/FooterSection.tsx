// PROPS
import { footerSectionProps } from 'Props/Sections/FooterProps'
// COMPONENTS
import { FooterLogos, FooterLinks } from './FooterItems'

const FooterSection = (props: footerSectionProps) => {

    const { data } = props

    const displayFooterItems = data.map(logo => {

        // PROPS
        const { external_link, link, title } = logo

        const logoProps = {
            external_link: external_link,
            icon: title,
            link: link,
            key: title,
            title: title,
            span: data.length
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