// COMPONENTS
import SiteNavbar from "./SiteNavbar"
// DATA
import DataOverview from "Data/DataOverview"
import PagesData from "Data/Main/Displayed/PagesData"

const SiteHeader = (
    <SiteNavbar 
        data={PagesData} 
        title={DataOverview.navbar_data.title}
    />
)

export default SiteHeader