// TOOLS
import { ExampleContentRender } from "Tools/ExampleTools"
import { LinkRenderer } from "Tools/RoutersRender"

const DisplayedPagesData = [
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
ExampleContentRender(DisplayedPagesData)

// Returns the data as links before export
LinkRenderer(DisplayedPagesData)

export default DisplayedPagesData