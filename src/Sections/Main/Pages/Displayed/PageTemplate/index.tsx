import { ReactElement, JSXElementConstructor, ReactNodeArray, ReactPortal } from "react"

const PageTemplate = (props: { name: string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray | ReactPortal | null | undefined }) => (
    <h1>Displayed page: {props.name}</h1>
)

export default PageTemplate