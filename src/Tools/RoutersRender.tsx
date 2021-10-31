import { Route } from "react-router-dom";
// PROPS
import { LinkRendererProps } from "Props/ToolProps";
import { pageDataProps } from "Props/Sections/MainProps";
import { StringJoiner } from "./StringTools";

export const LinkRenderer = (data: LinkRendererProps[]) => {

    const link_create = (input: string) => {
        if (input.length > 1) {
            return StringJoiner(input)
        }
        return input
    }

    return data.map(menu => {

        menu.sub_menu ?

            menu.sub_menu.map(sub => sub.link = link_create(sub.title))
        : 
            menu.link = StringJoiner(menu.title)
            
        return menu
    })
}

export const Menu_Routes = (input: pageDataProps) => (
    <Route 
        path={`/${input.link}`} 
        key={input.title}
    >
        {input.content}
    </Route>
)

export const RoutesRender = (dataSet: pageDataProps[]) => {

    const Routes_list = dataSet.map(
        menu => menu.sub_menu ?
            menu.sub_menu.map(sub => Menu_Routes(sub))
        :
            Menu_Routes(menu)
    )

    return Routes_list
}
