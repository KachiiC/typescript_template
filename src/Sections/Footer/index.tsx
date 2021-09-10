// DATA
import { FooterLogoData, FooterPages } from 'Data/Footer/FooterData'
// CSS
import './Footer.css'
// COMPONENTS
import FooterSection from './components/FooterSection'
import { FooterCopyRight } from './components/FooterSection/FooterItems'

const SiteFooter = (props: any) => {

    // IF HEADING, display heading
    const headingLogic = () => {
        if (props.heading) return <h3>{props.heading}</h3>
    }

    return (
        <footer>
            {headingLogic()}
            <FooterSection data={FooterLogoData} type="logos"/>
            <FooterSection data={FooterPages} type="links"/>
            <FooterCopyRight name="Kachi Cheong" year="2021" />
        </footer>
    )
}
export default SiteFooter