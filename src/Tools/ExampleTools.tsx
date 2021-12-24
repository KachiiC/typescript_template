// PROPS
import { pageDataProps } from "Props/MainProps"
// TOOLS

// If page has a title but no content use this to render an example
export const ExampleContentRender = (data: pageDataProps[]) => {
    return data.map(page => {

        page.content = <h1>Displayed page: {page.title}</h1>
        
        return page
    })
}