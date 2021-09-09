// TOOLS
import { ExampleContentRender } from "Tools/ExampleTools"
import { LinkRenderer } from "Tools/RoutersRender"

const HiddenPagesData = [
    {
        title: "Hidden Page 1",
    },
    {
        title: "Hidden Page 2",
    },
]

ExampleContentRender(HiddenPagesData)

LinkRenderer(HiddenPagesData)

export default HiddenPagesData