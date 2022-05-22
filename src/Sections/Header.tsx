// COMPONENTS
import SiteNavbar from "components/SectionComponents/SiteNavbar";
// DATA
import DataOverview from "data/DataOverview";
import PagesData from "data/Main/Displayed/PagesData";

const SiteHeader = (
  <SiteNavbar data={PagesData} title={DataOverview.navbar_data.title} />
);

export default SiteHeader;
