// PROPS
import { SingleTabProps } from "Props/Components/AntdProps/AntdTabsProps"
// TOOLS
import { SiteLink } from "Tools/LinkTools"

const SingleTab = (props: SingleTabProps) => {

    const { title, description, content, link } = props

    const titleLogic = () => {
        if (title) {
            if (link) return (
                <h1 className="tabs-title">
                    <SiteLink 
                        placeholder={title}
                        link={link}
                        type="external"
                    />
                </h1>
            )
            
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