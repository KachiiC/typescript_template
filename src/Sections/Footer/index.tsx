// CSS
import FooterLogoData from 'Data/Footer/FooterData'
import React from 'react'
import './Footer.css'
// COMPONENTS
import SiteFooterLogos from './SiteFooterLogos'

const SiteFooter = (
    <footer>
        <SiteFooterLogos 
            data={FooterLogoData}
            heading="Logo Heading"
        />
        <p>&copy; <i>Designed by Kachi Cheong 2021</i></p>
    </footer>
)

export default SiteFooter