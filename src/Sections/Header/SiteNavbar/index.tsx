import { useState } from 'react'
// CSS
import './SiteNavBar.css'
// COMPONENTS
import SiteNavLogo from './components/SiteNavLogo'
import NavMenu from './components/NavMenu'
import SmallMenuBlock from './components/SmallMenu/SmallMenuBlock'
import SmallMenuIcon from './components/SmallMenu/SmallMenuIcon'

const SiteNavbar = (props: { title: string; data: {title: string}[] }) => {

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
                    menu_type="full"
                    menu_number="4"
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