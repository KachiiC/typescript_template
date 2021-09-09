import SiteNavLink from "./SiteNavLink"

const NavMenu = (props: any) => {

    const sliceLogic  = props.menu_number ? props.menu_number : 5

    return props.data.map((page: { link: any; title: any }) => {

        return props.menu_type === "full" ? 
            <SiteNavLink
                link={page.link}
                title={page.title}
                type="full"
            /> 
            : 
            <SiteNavLink
                link={page.link}
                title={page.title}
                type="small"
                click={props.click}
            />

    }).slice(0, sliceLogic)
}

export default NavMenu