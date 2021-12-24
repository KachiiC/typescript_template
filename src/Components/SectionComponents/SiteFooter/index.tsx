// COMPONENTS
import FooterSection from "./components/FooterSection"
import { FooterHeading, FooterCopyRight } from "./components/FooterItems"
// CSS 
import "./SiteFooter.css"
// PROPS
import { SiteFooterProps } from "./SiteFooterProps"

const SiteFooter = (props: SiteFooterProps) => {

    const {
        heading,
        links_data,
        logo_data,
        name,
        year
    } = props

    return (
        <footer>
            <FooterHeading 
                heading={heading} 
            />
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