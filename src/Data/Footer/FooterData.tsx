// DATA
import DataOverview from 'Data/DataOverview'
// COMPONENTS
import {ObjectDataRender} from 'Tools/ObjectDataTools'
import { LinkRenderer } from "Tools/RoutersRender"

export const FooterLogoData = ObjectDataRender(DataOverview.social_media, "social")

export const FooterPages = ObjectDataRender(DataOverview.footer_pages, "footer")

LinkRenderer(FooterPages)