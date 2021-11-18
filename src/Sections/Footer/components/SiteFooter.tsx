// COMPONENTS
import FooterSection from './FooterSection'
import { FooterHeading, FooterCopyRight } from './FooterItems'
// PROPS
import { SiteFooterProps } from 'Props/Sections/FooterProps'

const SiteFooter = (props: SiteFooterProps) => {

    const {
        heading,
        logo_data,
        links_data,
        name,
        year
    } = props

    return (
        <>
            <FooterHeading heading={heading} />
            <FooterSection 
                data={logo_data} 
                type="logos"
            />
            <FooterSection 
                data={links_data} 
                type="links"
            />
            <FooterCopyRight 
                name={name}
                year={year}
            />
        </>
    )
}

export default SiteFooter