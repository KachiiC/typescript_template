// PROPS
import { SiteNavMenuProps, SmallMenuProps } from "Props/HeaderProps"
// COMPONENTS
import { SmallMenuDropdownLink, SmallMenuIcon } from "./SiteNavLink"
// TOOLS
import { DisplayMenuList, DisplayMenuType } from "../tools/SiteNavbarTools"


export const SiteNavMenu = (props: SiteNavMenuProps) => {

    const { data, small_click } = props

    return (
        <>
            <div className="site-nav-menu">
                <DisplayMenuList 
                    data={data} 
                    type="nav"
                />
            </div>
            <SmallMenuIcon 
                click={small_click}
            />
        </>
    )
}

export const SmallNavMenu = (props: SmallMenuProps) => {

    const { data, click } = props

    const menu_block = data.map(obj => 
        obj.sub_menu ? 
            <SmallMenuDropdownLink 
                data={obj.sub_menu}
                click={click}
                title={obj.title}
            />
            : 
            <DisplayMenuType
                data={obj} 
                type="small" 
                click={click} 
            />

    )

    return (
        <div className="small-menu">
            {menu_block}
        </div>
    )
}