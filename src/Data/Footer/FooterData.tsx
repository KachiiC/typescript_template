// DATA
import DataOverview from "data/DataOverview";
// TOOLS
import { FooterDataRender } from "./tools/FooterDataTools";

const { footer_pages, social_media } = DataOverview;

export const FooterLogoData = FooterDataRender(social_media, "social");

export const FooterPages = FooterDataRender(footer_pages, "footer");
