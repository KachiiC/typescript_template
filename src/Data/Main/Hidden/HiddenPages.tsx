// TOOLS
import { ExampleContentRender } from "Tools/ExampleTools"
import { LinkRenderer } from "Tools/RoutersRender"

// Pages are hidden from navbar
const HiddenPagesData = [
    {
        title: "Hidden Page 1",
    },
    {
        title: "Hidden Page 2",
    },
]

// Renders content for each object (for example use only)
ExampleContentRender(HiddenPagesData)
// Returns the data as links before export
LinkRenderer(HiddenPagesData)

export default HiddenPagesData