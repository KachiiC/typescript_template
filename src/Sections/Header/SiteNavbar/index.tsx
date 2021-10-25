import { useReducer } from "react"
// CSS
import "./SiteNavbar.css"
// PROPS
import { SiteNavbarProps } from "Props/HeaderProps"
// COMPONENTS
import { SiteLogo } from "./components/SiteNavLink"
import { SiteNavMenu, SmallNavMenu } from "./components/SiteNavMenu"

const SiteNavbar = (props: SiteNavbarProps) => {

    const { data, title } = props

    const [smallMenu, toggleMenu] = useReducer(
        smallMenu => !smallMenu, false
    )

    const SmallScreenMenu = (
        <SmallNavMenu
            data={data} 
            click={toggleMenu}
        />
    )
    
    return (
        <header>
            <div className="site-navbar">
                <SiteLogo title={title}/>
                <SiteNavMenu 
                    data={data}
                    small_click={toggleMenu}
                />
            </div>
            {smallMenu && SmallScreenMenu}
        </header>
    )
}

export default SiteNavbar