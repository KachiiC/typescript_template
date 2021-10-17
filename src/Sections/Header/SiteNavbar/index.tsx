import { useReducer } from 'react'
// PROPS
import { SiteNavbarProps } from 'Props/HeaderProps'
// CSS
import './SiteNavBar.css'
// COMPONENTS
import NavMenu from './components/NavMenu'
import SmallMenuBlock from './components/SmallMenuBlock'

const SiteNavbar = (props: SiteNavbarProps) => {

    // PROPS
    const {title, data, menu_number } = props

    const [smallMenu, toggleMenu] = useReducer(
        smallMenu => !smallMenu, false
    )

    // Menu which is displayed on click for small screen
    const SmallScreenMenu = (
        <SmallMenuBlock 
            data={data} 
            click={toggleMenu} 
        />
    )
    
    return (
        <header>
            <NavMenu
                title={title}
                data={data} 
                menu_number={menu_number}
                menu_type="full"
                small_menu_click={toggleMenu}
            />
            {smallMenu && SmallScreenMenu}
        </header>
    )
}

export default SiteNavbar