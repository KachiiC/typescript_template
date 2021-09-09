// COMPONENTS
import SiteNavbar from "./SiteNavbar"
// CSS
import './Header.css'

const SiteHeader = (props: any) => (
    <header>
        <SiteNavbar
            title="Example Title" 
            data={props.data}
        />
    </header>
)

export default SiteHeader