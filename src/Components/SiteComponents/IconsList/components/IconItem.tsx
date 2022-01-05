// PROPS
import { IconDataProps } from "../IconsListProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

const IconItem = (props: IconDataProps) => (
    <div className="site-col-2 filter-icons-icon" 
        key={props.name}
    >
        <SiteIcon type={props.name} size="2x" />
        <h3>{props.name.toUpperCase()}</h3>
    </div>
)

export default IconItem