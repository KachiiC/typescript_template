// PROPS
import { DisplayMenuListProps, DisplayMenuTypeProps } from "Props/HeaderProps"
// COMPONENTS
import { SiteNavLink, SiteNavDropdown } from "../components/SiteNavLink"

export const DisplayMenuType = (props: DisplayMenuTypeProps) => {

    const { data, type, click } = props

    return data.external_link ?
        <SiteNavLink
            click={click}
            link={data.external_link}
            link_type={type}
            title={data.title}
            key={data.title}
        />
        :
        <SiteNavLink
            click={click}
            link_type={type}
            title={data.title}
            key={data.title}
        />
}

export const DisplayMenuList = (props: DisplayMenuListProps) => {

    const { data, type, click } = props

    const menu_list = data.map(sub => {

        const subLogic = sub.sub_menu?
            <SiteNavDropdown 
                data={sub.sub_menu}
                title={sub.title}
            />
            :
            <DisplayMenuType 
                data={sub} 
                type={type} 
                click={click}
            />

        return (
            <div key={sub.title}>
                {subLogic}
            </div>
        )
    })

    return <>{menu_list}</>
}