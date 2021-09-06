// COMPONENTS
import {Link} from 'react-router-dom'

const SiteNavLink = (props: { type: string; link: any; title: any; click?: any;}) => {

    const linkTypeLogic = props.type === "full" ? "site-nav-link" : "site-small-link"

    return (
        <div className={linkTypeLogic} onClick={props.click}>
            <Link to={`/${props.link}`}>
                {props.title}
            </Link>
        </div>
    )
}

export default SiteNavLink