// COMPONENTS
import { Tooltip } from "antd"
// CSS
import "antd/dist/antd.css"
// PROPS
import { AntdToolTipProps } from "./AntdToolTip"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"

const AntdToolTip = (props: AntdToolTipProps) => {

    const { 
        color,
        content,
        placeholder,
        placement
    } = props

    return (
        <Tooltip
            className="cursor-pointer"
            color={RenderLogic(color, "black")}
            title={content}
            placement={RenderLogic(placement, "left")}
        >
            {placeholder}
        </Tooltip>
    )
}

export default AntdToolTip