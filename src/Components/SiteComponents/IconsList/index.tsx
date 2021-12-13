// PROPS
import { IconsListProps } from "./IconsListProps"
// TOOLS
import IconItem from "./components/IconItem"

const IconsList = (props: IconsListProps) => {

    // PROPS
    const { data } = props

    const displayedIcons = data.map(obj => 
        <IconItem type={obj.type} skill={obj.skill} />
    )

    return (
        <div className="site-grid-system w-80">
            {displayedIcons}
        </div>
    )
} 

export default IconsList


