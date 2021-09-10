import { pageDataProps } from "Props/MainProps";
import { Route } from "react-router-dom";

interface LinkRendererProps {
    title?: string | undefined; 
    link?: string | undefined;
    icon?: string;
    content?: string | JSX.Element;
}

export const LinkRenderer = (data: LinkRendererProps[]) => {

    return data.map(page => {

        if (page.title) { 
            if (page.title.length > 1) {
                page.link = page.title.split(" ").join("-")
            } else {
                page.link = page.title
            }
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
