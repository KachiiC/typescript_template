import { Route } from "react-router-dom";
// PROPS
import { pageDataProps } from "Props/Sections/MainProps"
// TOOLS
import { StringJoin } from "./StringTools"

// Creates links for each object in pages data
export const LinkRenderer = (data: pageDataProps[]) => {

    const link_create = (input: string) => {
        if (input.length > 1) {
            return StringJoin(input, " ", "-")
        }
        return input
    }

    return data.map(menu => {

        menu.sub_menu ?
            menu.sub_menu.map(sub => sub.link = link_create(sub.title))
            : 
            menu.link = StringJoin(menu.title, " ", "-")
            
        return menu
    })
}

// create route for single object in pages data
export const Menu_Routes = (input: pageDataProps) => {

    const { content, link, title} = input

    return (
        <Route 
            path={`/${link}`} 
            key={title}
        >
            {content}
        </Route>
    )
}

// creates routes for objects in pages data
export const RoutesRender = (dataSet: pageDataProps[]) => {

    const Routes_list = dataSet.map(menu => 
        menu.sub_menu ?
            menu.sub_menu.map(sub => Menu_Routes(sub))
            :
            Menu_Routes(menu)
    )

    return Routes_list
}

