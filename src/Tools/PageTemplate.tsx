// PROPS
import { pageTemplateProps } from "Props/MainProps"

const PageTemplate = (props: pageTemplateProps) => (
    <h1>Displayed page: {props.name}</h1>
)

export default PageTemplate