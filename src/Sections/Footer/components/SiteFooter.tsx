// COMPONENTS
import FooterSection from './FooterSection'
import { FooterHeading, FooterCopyRight } from './FooterItems'
// PROPS
import { SiteFooterProps } from 'Props/FooterProps'

const SiteFooter = (props: SiteFooterProps) => (
    <>
        <FooterHeading 
            heading={props.heading}
        />
        <FooterSection 
            data={props.logo_data} 
            type="logos"
        />
        <FooterSection 
            data={props.links_data} 
            type="links"
        />
        <FooterCopyRight 
            name={props.name}
            year={props.year}
        />
    </>
)

export default SiteFooter