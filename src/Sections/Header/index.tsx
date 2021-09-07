// COMPONENTS
import SiteNavbar from "./SiteNavbar"
// CSS
import './Header.css'
// DATA
import DisplayedPagesData from "Data/Main/Displayed/ExampleDisplayedPages"

const SiteHeader = (
    <header>
        <SiteNavbar
            title="Example Title" 
            data={DisplayedPagesData}
        />
    </header>
)

export default SiteHeader