// DATA
import DataOverview from "Data/DataOverview";
import { FooterLogoData, FooterPages } from "Data/Footer/FooterData";
// COMPONENTS
import SiteFooter from "Components/SectionComponents/SiteFooter";

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
