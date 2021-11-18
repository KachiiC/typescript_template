// DATA
import DataOverview from 'Data/DataOverview'
// TOOLS
import { ObjectDataRender } from 'Tools/ObjectDataTools'

export const FooterLogoData = ObjectDataRender(DataOverview.social_media, "social")

export const FooterPages = ObjectDataRender(DataOverview.footer_pages, "footer")