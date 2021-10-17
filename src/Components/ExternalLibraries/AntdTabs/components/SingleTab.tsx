// COMPONENTS
import { SingleTabProps } from "../AntdTabsProps"

const SingleTab = (props: SingleTabProps) => {

    const titleLogic = () => {
        if (props.title) {
            if (props.link) {
                return (
                    <h1 className="tabs-title">
                        <a href={props.link} target="_blank" rel="noreferrer">
                            {props.title}
                        </a>
                    </h1>
                )
            }
            return (
                <h1 className="tabs-title">
                    {props.title}
                </h1>
            )
        }
    }

    const descriptionLogic = () => {
        if (props.description) return (
            <p className="tabs-description">
                {props.description}
            </p>
        )
    }

    return (
        <>
            {titleLogic()}
            {descriptionLogic()}
            <div className="tabs-content">
                {props.content}
            </div>
        </>
    )
}

export default SingleTab