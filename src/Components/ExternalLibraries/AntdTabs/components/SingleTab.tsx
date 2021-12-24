// PROPS
import { SingleTabProps } from "../AntdTabsProps"
// TOOLS
import { TitleLogic } from "Tools/StringTools"

const SingleTab = (props: SingleTabProps) => {

    const {
        content,
        title
    } = props

    return (
        <>
            {TitleLogic(title, "h1")}
            <div className={`tabs-content w-90`}>
                {content}
            </div>
        </>
    )
}

export default SingleTab