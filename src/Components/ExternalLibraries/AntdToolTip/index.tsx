// COMPONENTS
import { Tooltip } from "antd"
// CSS
import "antd/dist/antd.css"
// PROPS
import { AntdToolTipProps } from "./AntdToolTip"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const AntdToolTip = (props: AntdToolTipProps) => {

    const {color, title, placeholder} = props

    return (
        <Tooltip
            color={RenderLogic(color, "black")}
            title={title}
            className="cursor-pointer"
        >
            {placeholder}
        </Tooltip>
    )
}

export default AntdToolTip