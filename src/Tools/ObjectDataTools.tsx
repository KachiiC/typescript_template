// PROPS
import { ObjectDataProps } from "Props/Tools/ToolProps"

// Returns keys of an object
export const ObjKeys = (input: Object) => Object.keys(input)

// Returns values of an object
export const ObjValue = (input: Object) => Object.values(input)

// Returns keys of first object
export const ArrrayObjectKeys = (data: Object[]) => ObjKeys(data[0])

// Checks if object is empty
export const EmptyObjectChecker = (obj: {}) => ObjKeys(obj).length === 0 ? true : false

// Checks if all objects in array of a particular value are unique
export const UnqiueValues = (data: any[], value: string) =>  {

    const allValues = data.map(obj => obj[value])

    const uniqueArray = allValues.filter(function(item, pos) {
        return allValues.indexOf(item) === pos;
    })

    return uniqueArray
}

export const ObjectDataRender = (data: ObjectDataProps , type: string) => {

    const data_keys = ObjKeys(data).filter(key => data[key])
  
    const data_links = data_keys.map(key => {

        const social_data = {
            title: key,
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