import { useEffect, useReducer, useState } from "react"
// PROPS
import { SiteRenderProps } from "Props/Tools/ToolProps"
import { SiteError, SiteLoading } from "CSS/Transitions"

// Fetchs data from api
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

// Site Render while fetching
export const SiteRender = (props: SiteRenderProps) => {

    const {component, fetch } = props
    const { error, loading } = fetch

    const displayLogic = loading ? 
        <SiteLoading />
        : 
        error ?
            SiteError
            :
            component

    return <>{displayLogic}</>
    
}