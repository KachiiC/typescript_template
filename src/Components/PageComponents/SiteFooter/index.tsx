// COMPONENTS
import FooterSection from './components/FooterSection'
import { FooterHeading, FooterCopyRight } from './components/FooterItems'
// CSS 
import './SiteFooter.css'
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
        <footer>
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
        </footer>
    )
}

export default SiteFooter