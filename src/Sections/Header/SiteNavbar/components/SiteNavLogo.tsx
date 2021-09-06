import {Link} from 'react-router-dom'

const SiteNavLogo = (props: { title: string }) => (
    <div className="site-nav-logo">
        <Link to="/">
            {props.title}
        </Link>
    </div>
)

export default SiteNavLogo