// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"
// PAGES

const PagesData = [
    {
        title: "Code",
        external_link: "https://github.com/KachiiC/"
    }
]

// Returns the data as links before export
LinkRenderer(PagesData)

export default PagesData