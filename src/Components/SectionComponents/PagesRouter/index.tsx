import { Switch, Route } from "react-router-dom"
// DATA
import DisplayedData from "Data/Main/Displayed/PagesData"
import { FooterPages } from "Data/Footer/FooterData"
import HiddenData from "Data/Main/Hidden/HiddenPages"
// PAGES
import Home from "Pages/Hidden/Home"
import { LinkRenderer, RoutesRender } from "./tools/PageRouterTools"
// TOOLS

const Routes = [
    DisplayedData,
    FooterPages,
    HiddenData,
]

const RenderRoutes = Routes.map(route => {

    // Creates a Route for each link
    LinkRenderer(route)

    return RoutesRender(route)
})

// Pushes home to last route
const HomeRoute = (
    <Route key="home" 
        path="/"
    >
        {Home}
    </Route>
)

const PagesRouter = ( 
    <Switch>
        {RenderRoutes}
        {HomeRoute}
    </Switch>
)

export default PagesRouter