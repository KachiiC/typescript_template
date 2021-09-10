// PROPS
import { SmallMenuBlockProps } from "Props/HeaderProps"
// COMPONENTS
import NavMenu from "./NavMenu"

const SmallllMenuBlock = (props: SmallMenuBlockProps) => (
    <div className="small-menu-block">
        <NavMenu 
            data={props.data} 
            menu_type="small" 
            click={props.click}
        />
    </div>
)

export default SmallllMenuBlock