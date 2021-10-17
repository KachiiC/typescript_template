// PROPS
import { NavMenuProps } from "Props/HeaderProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
// COMPONENTS
import { SiteNavLink, SiteNavLogo, SmallMenuIcon } from "./SiteNavLink"


const NavMenu = (props: NavMenuProps) => {

    // PROPS
    const { title, data, menu_number, small_menu_click } = props

    // Detirmines how many menus shown, default is 5
    const sliceLogic  = RenderLogic(menu_number, 5)

    // Returns a menu for each object in data array
    const displayedNavLinks = data.map(page => (
        <SiteNavLink 
            data={page}
            key={page.title}
        /> 
    )).slice(0, sliceLogic)

    return (
        <div className="site-topnav">
            <SiteNavLogo 
                title={title} 
            />
            {displayedNavLinks} 
            <SmallMenuIcon 
                click={small_menu_click}
            />
        </div>
    )
}

export default NavMenu