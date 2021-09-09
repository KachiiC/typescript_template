import SiteIcon from "Tools/SiteIcon"

const FooterLogos = (props: {data: any}) => {

    const displayLogos = props.data.map((data: { icon: any; link: any }) => (
        <div className="site-span-1 footer-site-logo">
            <a href={data.link} 
                target="_blank" 
                rel="noreferrer"
                >
                <SiteIcon 
                    type={data.icon} 
                    size="2x"
                />
            </a>
        </div>
    ))

    return (
        <div className="footer-logos w-80 m-auto">
            <div className="site-grid" 
                style={{"gridTemplateColumns": `repeat(${props.data.length}, 1fr)`}}
            >
                {displayLogos}
            </div>
        </div>
    )
}

export default FooterLogos