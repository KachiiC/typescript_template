// PAGES
import PageOne from "Sections/Main/Pages/Displayed/PageOne"
import PageTwo from "Sections/Main/Pages/Displayed/PageTwo"
// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"

const DisplayedPagesData = [
    {
        title: "Displayed page 1",
        content: PageOne 
    },
    {
        title: "Displayed page 2",
        content: PageTwo
    }
]

LinkRenderer(DisplayedPagesData)

export default DisplayedPagesData