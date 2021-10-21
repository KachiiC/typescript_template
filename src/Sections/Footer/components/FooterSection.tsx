// PROPS
import { footerSectionProps } from 'Props/FooterProps'
// COMPONENTS
import { FooterLogos, FooterLinks } from './FooterItems'

const FooterSection = (props: footerSectionProps) => {

    const { data, type } = props

    const displayFooterItems = type === "logos" ? 
        data.map(data => 
            <FooterLogos
                link={data.link}
                icon={data.icon}
                key={data.icon}
            />
        )
        :
        data.map(data => 
            <FooterLinks
                link={data.link}
                title={data.title} 
                key={data.title}
            />
        )

    const gridTemplateLogic = {
        "gridTemplateColumns": `repeat(${data.length}, 1fr)`
    }

    return (
        <div className="footer-section w-80 m-auto">
            <div className="site-grid" 
                style={gridTemplateLogic}
            >
                {displayFooterItems}
            </div>
        </div>
    )
}

export default FooterSection