// PROPS
import { ObjectDataProps } from "Props/Tools/ToolProps"
// TOOLS
import { ObjKeys, ObjValue } from "Tools/ObjectDataTools"

// Returns data for each item in footer data
export const FooterDataRender = (data: ObjectDataProps , type: string) => {

    const data_keys = ObjKeys(data)
  
    const data_links = data_keys.map(key => {

        const social_data = {
            title: key,
            icon: key,
            link: `https://www.${key}.com/${data[key]}`
        }

        const routerLogic = typeof data[key] === "string" ? 
            {
                title: key,
                external_link: ObjValue(data)[data_keys.indexOf(key)],
            }
            :
            {
                title: key,
                content: data[key]
            }

        return type === "social" ? social_data : routerLogic
    })

    return data_links
}

// Takes the Footer Pages from DataOverview and creates example pages.
export const FooterPagesExampleRender = (data: ObjectDataProps) => {
    
    const keys = ObjKeys(data).filter(value => value)
    
    keys.map(key => data[key] = <h1>Displayed page: {key}</h1>)
    
    return data

}