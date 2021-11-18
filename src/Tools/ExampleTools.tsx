// PROPS
import { pageDataProps } from "Props/Sections/MainProps"
import { ObjectDataProps } from "Props/Tools/ToolProps"
// TOOLS
import { ObjKeys } from "./ObjectDataTools"

// If page has a title but no content use this to render an example
export const ExampleContentRender = (data: pageDataProps[]) => {
    return data.map(page => {

        page.content = <h1>Displayed page: {page.title}</h1>
        
        return page
    })
}

// Takes the Footer Pages from DataOverview and creates example pages.
export const FooterPagesExampleRender = (data: ObjectDataProps) => {
    
    const keys = ObjKeys(data).filter(value => value)
    
    keys.map(key => data[key] = <h1>Displayed page: {key}</h1>)
    
    return data

}