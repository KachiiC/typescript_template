import SiteIcon from "Tools/SiteIcon"

const SiteFooter = (props: {data: any; heading?: any}) => {

    // IF HEADING, display heading
    const headingLogic = () => {
        if (props.heading) return <h2>{props.heading}</h2>
    }

    // returns Logos
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
        <div className="w-60 m-auto">
            {headingLogic()}
            <div className="site-grid" 
                style={{"gridTemplateColumns": `repeat(${props.data.length}, 1fr)`}}
            >
                {displayLogos}
            </div>
        </div>
    )
}

export default SiteFooter