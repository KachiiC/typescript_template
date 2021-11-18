// COMPONENTS
import { SiteLink } from "Tools/LinkTools"
// PROPS
import { SingleTabProps } from "../AntdTabsProps"

const SingleTab = (props: SingleTabProps) => {

    const { content, description, link, title } = props

    const titleLogic = () => {
        if (title) {
            if (link) {
                return (
                    <h1 className="tabs-title">
                        <SiteLink
                            link={link}
                            type="external"
                            placeholder={title}
                        />
                    </h1>

                )
            }
            return (
                <h1 className="tabs-title">
                    {title}
                </h1>
            )
        }
    }

    const descriptionLogic = () => {
        if (description) return (
            <p className="tabs-description">
                {description}
            </p>
        )
    }

    return (
        <>
            {titleLogic()}
            {descriptionLogic()}
            <div className="tabs-content">
                {content}
            </div>
        </>
    )
}

export default SingleTab