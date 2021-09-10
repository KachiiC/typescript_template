// TOOLS
import { ExampleContentRender } from "Tools/ExampleTools"
import { LinkRenderer } from "Tools/RoutersRender"

const PagesData = [
    {
        title: "Page 1",
    },
    {
        title: "Page 2",
    },
    {
        title: "Page 3",
    },
    {
        title: "Page 4",
    }
]

// Renders content for each object (for example use only)
ExampleContentRender(PagesData)

// Returns the data as links before export
LinkRenderer(PagesData)

export default PagesData