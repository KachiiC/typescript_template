// PROPS
import { SmallMenuIconProps } from "Props/HeaderProps"
// COMPONENTS
import SiteIcon from "Tools/SiteIcon"

const SmallMenuIcon = (props:SmallMenuIconProps) => (

    <div className="small-menu-icon" onClick={props.click}>
        <SiteIcon type="bars" size="lg" />
    </div>
    
)

export default SmallMenuIcon