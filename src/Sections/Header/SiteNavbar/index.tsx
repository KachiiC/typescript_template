import { useReducer } from "react"
// CSS
import "./SiteNavbar.css"
// PROPS
import { SiteNavbarProps } from "Props/HeaderProps"
// COMPONENTS
import { SiteNavMenu, SmallNavMenu } from "./components/SiteNavMenu"

const SiteNavbar = (props: SiteNavbarProps) => {

    const { data, title } = props

    const [smallMenu, toggleMenu] = useReducer(
        smallMenu => !smallMenu, false
    )

    const SmallScreenMenu = (
        <SmallNavMenu
            click={toggleMenu}
            data={data} 
            title="Small Menu"
        />
    )
    
    return (
        <header>     
            <SiteNavMenu 
                data={data}
                click={toggleMenu}
                title={title}
            />
            { smallMenu && SmallScreenMenu }
        </header>
    )
}

export default SiteNavbar