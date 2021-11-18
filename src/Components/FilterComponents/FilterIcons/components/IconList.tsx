// PROPS
import { IconsListProps } from "Props/Components/FilterComponentProps/FilterIconProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

const IconsList = (props: IconsListProps) => {

    // PROPS
    const { data } = props

    const displayedIcons = data.map(obj => 
        <div className="site-col-2 filter-icons-icon" 
            key={obj.skill}
        >
            <SiteIcon type={obj.skill} size="2x" />
            <h3>{obj.skill.toUpperCase()}</h3>
        </div>
    )

    return (
        <div className="site-grid-system w-80 m-auto">
            {displayedIcons}
        </div>
    )
} 

export default IconsList


