import { useReducer } from "react"
// PROPS
import { 
    NavLinkProps, 
    SiteNavDropdownProps, 
    SiteNavLinkProps, 
    SmallMenuIconProps, 
    SmallMenuProps 
} from "Props/HeaderProps"
// TOOLS
import { DisplayMenuType } from "../tools/SiteNavbarTools"
import { RenderLogic } from "Tools/FunctionTools"
import SiteIcon from "Tools/SiteIcon"
import { SiteLink } from "Tools/LinkTools"
import { StringJoiner } from "Tools/StringTools"

export const SiteLogo = (props: NavLinkProps) => {

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

export const SiteNavLink = (props: SiteNavLinkProps) => {

    const { 
        click,
        link,
        link_type, 
        title,
    } = props

    const NavLinkLogic = () => link ?
        <SiteLink 
            placeholder={title} 
            type="external" 
            link={link} 
        />
        :
        <SiteLink
            placeholder={title}
            type="local"
            link={`/${StringJoiner(title)}`}
        />

    return (
        <div className={`site-${link_type}-link`} 
            onClick={click}
        >
            {NavLinkLogic()}
        </div>
    )
}


export const SiteNavDropdown = (props: SiteNavDropdownProps) => {

    const { data, title } = props
    
    const sub_menu_list = data.map(sub => (
            <DisplayMenuType 
                type="dropdown" 
                data={sub}
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

export const SmallMenuIcon = (props:SmallMenuIconProps) => (

    <div className="small-menu-icon" 
        onClick={props.click}
    >
        <SiteIcon 
            type="bars" 
            size="lg" 
        />
    </div>
    
)

export const SmallMenuDropdownLink = (props: SmallMenuProps) => {

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