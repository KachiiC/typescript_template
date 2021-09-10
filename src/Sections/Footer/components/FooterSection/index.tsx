import {FooterLogos, FooterLinks} from './FooterItems'

interface footerInterface { 
    data: { 
        icon?: any; 
        link?: any 
        title?: any;
    }[]
    type?: string 
}

const FooterSection = (props: footerInterface) => {

    const displayFooterItems = props.type === "logos" ? 
        props.data.map((data) => (
            <FooterLogos
                link={data.link}
                icon={data.icon} 
            />
        ))
        :
        props.data.map((data) => (
            <FooterLinks
                link={data.link}
                title={data.title} 
            />
        ))

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