import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const SmallMenuBlock = (props:{click: any}) => {
    return (
        <div className="small-menu-icon" onClick={props.click}>
            <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
    )
}

export default SmallMenuBlock