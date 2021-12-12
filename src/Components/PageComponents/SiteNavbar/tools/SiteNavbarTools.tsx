// COMPONENTS
import { SiteNavLink, SiteNavDropdown } from "../components/SiteNavLink"
// PROPS
import { DisplayMenuListProps, DisplayMenuTypeProps } from "Props/Sections/HeaderProps"

export const DisplayMenuType = (props: DisplayMenuTypeProps) => {

    const { data, type, click } = props
    
    const dataProps = {
        click: click,
        key: data.title,
        link_type: type,
        title: data.title,
    }

    return data.external_link ?
        <SiteNavLink
            link={data.external_link}
            {...dataProps}
        />
        :
        <SiteNavLink
            {...dataProps}
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