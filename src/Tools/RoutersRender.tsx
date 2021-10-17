import { Route } from "react-router-dom";
// PROPS
import { LinkRendererProps } from "Props/ToolProps";
import { pageDataProps } from "Props/MainProps";

export const LinkRenderer = (data: LinkRendererProps[]) => {

    return data.map(page => {

        if (page.title) { 
            page.title.length > 1 ?
                page.link = page.title.split(" ").join("-")
                :
                page.link = page.title
        }
            
        return page
    })
}

export const RoutesRender = (dataSet: pageDataProps[]) => {

    return dataSet.map(page => (
        <Route 
            path={`/${page.link}`} 
            key={page.title}
        >
            {page.content}
        </Route>
    ))
}
