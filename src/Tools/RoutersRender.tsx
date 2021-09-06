import { Route } from "react-router-dom";

export const LinkRenderer = (data: any[]) => {

    return data.map((page) => {
    
        if (page.title.length > 1) {
            page.link = page.title.split(" ").join("-")
        } else {
            page.link = page.title
        }

        return page
    })
}

export const RoutesRender = (dataSet: any[]) => {

    return dataSet.map((pages) => (
        <Route path={`/${pages.link}`} key={pages.title}>
            {pages.content}
        </Route>
    ))
}
