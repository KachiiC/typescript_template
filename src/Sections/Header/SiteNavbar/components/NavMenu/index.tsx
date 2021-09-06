import SiteNavLink from "./SiteNavLink"

const NavMenu = (props: any) => {

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

    })
}

export default NavMenu