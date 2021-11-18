// DATA
import { FooterLogoData, FooterPages } from 'Data/Footer/FooterData'
// CSS
import './Footer.css'
// COMPONENTS
import SiteFooter from './components/SiteFooter'
import DataOverview from 'Data/DataOverview'

const footerData = DataOverview.footer_data

const SiteFooterProps = {
    heading: footerData.heading,
    logo_data: FooterLogoData,
    links_data: FooterPages,
    name: footerData.name,
    year: footerData.year
}

const Footer = (
    <footer>
        <SiteFooter 
            {...SiteFooterProps} 
        />
    </footer>
)

export default Footer