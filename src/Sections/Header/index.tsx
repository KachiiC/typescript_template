// DATA
import DataOverview from "Data/DataOverview"
import PagesData from "Data/Main/Displayed/PagesData"
// COMPONENTS
import SiteNavbar from "./SiteNavbar"

const headerData = DataOverview.navbar_data

const SiteHeader = (
    <SiteNavbar
        title={headerData.title}
        data={PagesData}
        menu_number={headerData.menu_number}
    />
)

export default SiteHeader