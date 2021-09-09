import { Link } from "react-router-dom"

const FooterLinks = (props: { data: any[]; title?: string }) => {
    
    // IF HEADING, display heading
    const titleLogic = () => {
        if (props.title) return <h3>{props.title}</h3>
    }

    const displayLinks = props.data.map((menu) => (
            <div className="site-span-1" key={menu.title}>
                <Link to={`/${menu.link}`}>
                    {menu.title}
                </Link>
            </div>
        )
    )

    const gridLogic = {
        "gridTemplateColumns" : `repeat(${props.data.length}, 1fr)`
    }

    return (
        <div className="footer-links w-50">
            {titleLogic()}
            <div className="site-grid" 
                style={gridLogic}
            >
                {displayLinks}
            </div>
        </div>
    )

}

export default FooterLinks