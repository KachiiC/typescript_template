// PROPS
import { IconsListProps } from "./IconsListProps"
// TOOLS
import IconItem from "./components/IconItem"

const IconsList = (props: IconsListProps) => {

    // PROPS
    const { data } = props

    const displayedIcons = data.map(obj => 
        <IconItem
            key={obj.name} 
            name={obj.name} 
            type={obj.type} 
        />
    )

    return (
        <div className="site-grid-system w-80">
            {displayedIcons}
        </div>
    )
} 

export default IconsList


