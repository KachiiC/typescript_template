import { useState } from 'react'
// PROPS
import { SiteNavbarProps } from 'Props/HeaderProps'
// CSS
import './SiteNavBar.css'
// COMPONENTS
import NavMenu from './components/NavMenu'
import SiteNavLogo from './components/SiteNavLogo'
import SmallMenuBlock from './components/SmallMenuBlock'
import SmallMenuIcon from './components/SmallMenuIcon'

const SiteNavbar = (props: SiteNavbarProps) => {

    const [smallMenu, setSmallMenu] = useState(false)
    const displayLogic = () => {
        !smallMenu ? setSmallMenu(true) : setSmallMenu(false)
    }
    
    return (
        <>
            <div className="site-topnav">
                <SiteNavLogo title={props.title} />
                <NavMenu 
                    data={props.data} 
                    menu_number={4}
                    menu_type="full"
                />
                <SmallMenuIcon click={displayLogic}/>
            </div>
            {smallMenu && (
                <SmallMenuBlock 
                    data={props.data} 
                    click={displayLogic} 
                />
            )}
        </>
    )
}

export default SiteNavbar