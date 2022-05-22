// DATA
import DataOverview from "data/DataOverview";
import { FooterLogoData, FooterPages } from "data/Footer/FooterData";
// COMPONENTS
import SiteFooter from "components/SectionComponents/SiteFooter";

const { heading, name, year } = DataOverview.footer_data;

const SiteFooterProps = {
  heading,
  logo_data: FooterLogoData,
  links_data: FooterPages,
  name,
  year
};

const Footer = <SiteFooter {...SiteFooterProps} />;

export default Footer;
