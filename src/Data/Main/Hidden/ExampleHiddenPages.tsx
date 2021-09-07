// PAGES
import HiddenOne from "Sections/Main/Pages/Hidden/HiddenOne"
import HiddenTwo from "Sections/Main/Pages/Hidden/HiddenTwo"
// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"

const HiddenPagesData = [
    {
        title: "Hidden Page 1",
        content: HiddenOne
    },
    {
        title: "Hidden Page 2",
        content: HiddenTwo
    },
]

LinkRenderer(HiddenPagesData)

export default HiddenPagesData