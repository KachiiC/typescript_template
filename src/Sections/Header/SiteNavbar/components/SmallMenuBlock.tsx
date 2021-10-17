// PROPS
import { SmallMenuBlockProps } from "Props/HeaderProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
// COMPONENTS
import { SiteNavLink } from "./SiteNavLink"

const SmallllMenuBlock = (props: SmallMenuBlockProps) => {

    // PROPS
    const { click, data, menu_number } = props

    const sliceLogic  = RenderLogic(menu_number, 5)

    const displayedNavLinks = data.map(page => (
        <SiteNavLink
            click={click}
            data={page}
            type="small"
            key={page.title}
        />
    )).slice(0, sliceLogic)

    return (
        <div className="small-menu-block">
            {displayedNavLinks}
        </div>
    )
}

export default SmallllMenuBlock