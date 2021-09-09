// DATA
import { FooterLogoData, FooterPages } from 'Data/Footer/FooterData'
// CSS
import './Footer.css'
// COMPONENTS
import FooterLogos from './components/FooterLogos'
import FooterLinks from './components/FooterLinks'

const SiteFooter = (props: any) => {

    // IF HEADING, display heading
    const headingLogic = () => {
        if (props.heading) return <h3>{props.heading}</h3>
    }

    return (
        <footer>
            {headingLogic()}
            <FooterLogos data={FooterLogoData} />
            <FooterLinks data={FooterPages} />
            <div className="footer-copyright">
                &copy; <i>Designed by Kachi Cheong 2021</i>
            </div>
        </footer>
    )
}
export default SiteFooter