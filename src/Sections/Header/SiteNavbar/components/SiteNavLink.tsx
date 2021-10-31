import { useReducer } from "react"
// PROPS
import { 
    SiteNavbarProps, 
    SiteNavLinkProps, 
    SmallMenuIconProps
} from "Props/Sections/HeaderProps"
import { subMenuProps } from "Props/Sections/MainProps"
// TOOLS
import { DisplayMenuType } from "../tools/SiteNavbarTools"
import { RenderLogic } from "Tools/FunctionTools"
import SiteIcon from "Tools/SiteIcon"
import { SiteLink } from "Tools/LinkTools"
import { StringJoiner } from "Tools/StringTools"

// NAV LINK
export const SiteNavLink = (props: SiteNavLinkProps) => {

    // PROPS
    const { 
        click,
        link,
        link_type, 
        title,
    } = props

    const NavLinkLogic = link ?
        <SiteLink 
            link={link}
            placeholder={title}
            type="external"
        />
        :
        <SiteLink
            link={`/${StringJoiner(title)}`}
            placeholder={title}
            type="local"
        />

    return (
        <div className={`site-${link_type}-link`} 
            onClick={click}
        >
            {NavLinkLogic}
        </div>
    )
}

// NAV DROPDOWN
export const SiteNavDropdown = (props: SiteNavbarProps) => {

    // PROPS
    const { data, title } = props
    
    const sub_menu_list = data.map(sub => (
            <DisplayMenuType 
                type="dropdown" 
                data={sub}
                key={sub.title}
            />
        )
    )

    return (
        <div className="site-dropdown">
            <div className="site-dropbtn">
                {title}
            </div>
            <div className="site-dropdown-content">
                {sub_menu_list}
            </div>
        </div>
    )
}

// LOGO
export const SiteLogo = (props: subMenuProps) => {

    // PROPS
    const { link, title } = props
    
    return (
        <div className="site-nav-logo">
            <SiteLink
                link={`/${RenderLogic(link, "")}`}
                placeholder={title}
                type="local"
            />
        </div>
    )
}

// SMALL MENU ICON
export const SmallMenuIcon = (props: SmallMenuIconProps) => {

    // PROPS
    const { click } = props

    return (
        <div className="small-menu-icon" 
            onClick={click}
        >
            <SiteIcon 
                type="bars" 
                size="lg" 
            />
        </div>
    )
}

// SMALL MENU DROPDOWN
export const SmallMenuDropdown = (props: SiteNavbarProps) => {

    // PROPS
    const { click, data, title } = props
    // STATES
    const [menu, toggleMenu] = useReducer(menu => !menu, false)

    const Submenu = () => {
        
        const display_subs = data.map(sub => (
            <DisplayMenuType 
                data={sub}
                type="small"
                click={click}
                key={sub.title}
            />
        ))
        
        return <>{display_subs}</>
    }

    return (
        <>
            <div className="site-small-link" 
                onClick={toggleMenu}
            >
                {title}
            </div>
            {menu && <Submenu />}
        </>
    )
}