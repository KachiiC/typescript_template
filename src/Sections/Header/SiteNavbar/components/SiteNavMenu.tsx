// PROPS
import { SiteNavbarProps } from "Props/Sections/HeaderProps"
// COMPONENTS
import { SiteLogo, SmallMenuDropdown, SmallMenuIcon } from "./SiteNavLink"
// TOOLS
import { DisplayMenuList, DisplayMenuType } from "../tools/SiteNavbarTools"

// NAV MENU
export const SiteNavMenu = (props: SiteNavbarProps) => {

    const { click, data, title } = props

    const SiteNav = (
        <div className="site-nav-menu">
            <DisplayMenuList 
                data={data} 
                type="nav"
            />
        </div>
    )

    return (
        <div className="site-navbar">
            <SiteLogo title={title} />
            {SiteNav}
            <SmallMenuIcon click={click} />
        </div>
    )
}

// SMALL  MENU
export const SmallNavMenu = (props: SiteNavbarProps) => {

    const { click, data } = props

    const menu_block = data.map(obj => 
        obj.sub_menu ? 
            <SmallMenuDropdown
                click={click}
                data={obj.sub_menu}
                title={obj.title}
                key={obj.title}
            />
            : 
            <DisplayMenuType
                click={click} 
                data={obj} 
                type="small" 
                key={obj.title}
            />
    )

    return (
        <div className="small-menu">
            {menu_block}
        </div>
    )
}