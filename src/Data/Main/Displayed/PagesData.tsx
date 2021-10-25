// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"
// PAGES

const PagesData = [
    {
        title: "Basic",
        sub_menu: [
            {
                title: "menu 1",
                content: <h1>Menu 1</h1>
            },
            {
                title: "menu 2",
                content: <h1>Menu 2</h1>
            },
            {
                title: "Code",
                external_link: "https://github.com/KachiiC/typescript_template"
            },
        ]
    },
    {
        title: "Example Page",
        content: <h1>Example Content</h1>
    },
    {
        title: "Code",
        external_link: "https://github.com/KachiiC/"
    },
]

// Returns the data as links before export
LinkRenderer(PagesData)

export default PagesData