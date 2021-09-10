// PROPS
import { ObjectDataProps } from "Props/ToolProps"

export const ObjectDataRender = (data: ObjectDataProps , type: string) => {

    const data_keys = Object.keys(data).filter(key => data[key])
  
    const data_links = data_keys.map((key) => {

        const social_data = {
            icon: key,
            link: `https://www.${key}.com/${data[key]}`
        }
        
        const router_data = {
            title: key,
            content: data[key],
        }

        return type === "social" ? social_data : router_data
    })

    return data_links
}

