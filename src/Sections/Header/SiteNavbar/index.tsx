import { useReducer } from "react"
// COMPONENTS
import { SiteNavMenu, SmallNavMenu } from "./components/SiteNavMenu"
// CSS
import "./SiteNavbar.css"
// PROPS
import { SiteNavbarProps } from "Props/Sections/HeaderProps"

const SiteNavbar = (props: SiteNavbarProps) => {

    const { data, title } = props

    const [smallMenu, toggleMenu] = useReducer(
        smallMenu => !smallMenu, false
    )

    const MenuProps = {
        click: toggleMenu,
        data: data,
    }

    const SmallScreenMenu = (
        <SmallNavMenu
            title="Small Menu"
            {...MenuProps}
        />
    )
    
    return (
        <header>     
            <SiteNavMenu
                title={title}
                {...MenuProps}
            />
            { smallMenu && SmallScreenMenu }
        </header>
    )
}

export default SiteNavbar