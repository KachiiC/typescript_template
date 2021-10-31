import { useEffect, useReducer, useState } from "react"
// PROPS
import { SiteRenderProps } from "Props/ToolProps"
import { SiteError, SiteLoading } from "CSS/Transitions"

export const SiteFetcher = (url: string, argument?: string ) => {
    
    const [response, setResponse] = useState([])
    const [loading, toggleLoading] = useReducer(
        loading => !loading, true
    )
    const [error, setError] = useReducer(
        error => !error, false
    )
  
    useEffect(() => {
        if (response.length === 0) {
            fetch(url)
            .then(responseData => responseData.json())
            .then((responseJson) => {
                setResponse(argument ? responseJson[`${argument}`] : responseJson);
                toggleLoading()
            })
            .catch((error) => {
                setError()
                toggleLoading()
                console.log(error)
            })
        }
    }, [url, argument, response])
  
    return {
      response,
      loading,
      error
    }
}


export const SiteRender = (props: SiteRenderProps) => {

    const { error, loading } = props.fetch

    const displayLogic = loading ? 
        <SiteLoading />
        : 
        error ?
            SiteError
            :
            props.component

    return <>{displayLogic}</>
    
}