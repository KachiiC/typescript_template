// DATA
import DataOverview from "Data/DataOverview"
// TOOLS
import { FooterDataRender } from "./tools/FooterDataTools"

const {
    footer_pages,
    social_media
} = DataOverview

export const FooterLogoData = FooterDataRender(social_media, "social")

export const FooterPages = FooterDataRender(footer_pages, "footer")