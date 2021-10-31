// PROPS
import { pageDataProps } from "Props/Sections/MainProps"
import { ObjectDataProps } from "Props/ToolProps"
// TOOLS
import PageTemplate from "Tools/PageTemplate"

export const ExampleContentRender = (data: pageDataProps[]) => {
    return data.map(page => {

        page.content = <PageTemplate name={page.title} />
        
        return page
    })
}

export const FooterPagesExampleRender = (data: ObjectDataProps) => {
    
    const keys = Object.keys(data).filter(value => value)
    
    keys.map(key => data[key] = <PageTemplate name={`${key} Page`} />)
    
    return data

}