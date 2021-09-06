// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"

const HiddenPagesData = [
    {
        title: "Hidden Page 1",
        content: <h1>Hidden Page 1</h1>
    },
    {
        title: "Hidden Page 2",
        content: <h1>Hidden Page 2</h1>
    },
    {
        title: "Hidden Page 3",
        content: <h1>Hidden Page 3</h1>
    }
]

LinkRenderer(HiddenPagesData)

export default HiddenPagesData