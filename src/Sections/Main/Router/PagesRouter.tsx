import { Switch, Route } from "react-router-dom";
// DATA
import DisplayedData from "Data/Main/Displayed/ExampleDisplayedPages";
import { FooterPages } from "Data/Footer/FooterData";
import HiddenData from "Data/Main/Hidden/ExampleHiddenPages";
// TOOLS
import { RoutesRender } from "Tools/RoutersRender";
// PAGES
import Home from "../Pages/Home";

const PageRoutes = RoutesRender(DisplayedData)
const FooterRoutes = RoutesRender(FooterPages)
const HiddenRoutes = RoutesRender(HiddenData)

HiddenRoutes.push(
    <Route>
        {Home}
    </Route>
)

const PagesRouter = ( 
    <Switch>
        {PageRoutes}
        {FooterRoutes}
        {HiddenRoutes}
    </Switch>
)

export default PagesRouter