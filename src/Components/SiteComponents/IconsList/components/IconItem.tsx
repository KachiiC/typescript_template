// PROPS
import { IconDataProps } from "../IconsListProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

const IconItem = (props: IconDataProps) => (
    <div className="site-col-2 filter-icons-icon" 
        key={props.skill}
    >
        <SiteIcon type={props.skill} size="2x" />
        <h3>{props.skill.toUpperCase()}</h3>
    </div>
)

export default IconItem