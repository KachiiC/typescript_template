// PROPS
import { NavLinkProps, SiteNavLinkProps, SmallMenuIconProps } from 'Props/HeaderProps'
// TOOLS
import { SiteLink } from 'Tools/LinkTools'
import { RenderLogic } from 'Tools/FunctionTools'
import SiteIcon from 'Tools/SiteIcon'

export const SiteNavLogo = (props: NavLinkProps ) => {

    // PROPS 
    const {title, link} = props

    const linkLogic = RenderLogic(link, "")

    return (
        <div className="site-nav-logo">
            <SiteLink
                link={`/${linkLogic}`}
                placeholder={title}
                type="local"
            />
        </div>
    )
}

export const SmallMenuIcon = (props:SmallMenuIconProps) => (

    <div className="small-menu-icon" onClick={props.click}>
        <SiteIcon type="bars" size="lg" />
    </div>
    
)

export const SiteNavLink = (props: SiteNavLinkProps) => {

    // PROPS
    const {data, type, click } = props

    // Logic dealing with size of the link 
    const linkSizeLogic = type === "small" ? 
        "site-small-link"
        : 
        "site-nav-link"

    // Logic dealing with link type
    const linkType = data.external_link ? 
        <SiteLink
            link={data.external_link}
            placeholder={data.title}
            type="external"
        />
        :
        <SiteLink
            link={`/${data.link}`}
            placeholder={data.title}
            type="local"
        />

    return (
        <div className={linkSizeLogic} 
            onClick={click}
        >
            {linkType}
        </div>
    )
}
