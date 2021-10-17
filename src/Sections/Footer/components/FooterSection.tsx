// PROPS
import { footerSectionProps } from 'Props/FooterProps'
// COMPONENTS
import { FooterLogos, FooterLinks } from './FooterItems'

const FooterSection = (props: footerSectionProps) => {

    const displayFooterItems = props.type === "logos" ? 
        props.data.map(data => 
            <FooterLogos
                link={data.link}
                icon={data.icon}
                key={data.icon}
            />
        )
        :
        props.data.map(data => 
            <FooterLinks
                link={data.link}
                title={data.title} 
                key={data.title}
            />
        )

    const gridTemplateLogic = {
        "gridTemplateColumns": `repeat(${props.data.length}, 1fr)`
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