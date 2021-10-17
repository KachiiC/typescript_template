import { Switch, Route } from "react-router-dom";
// DATA
import DisplayedData from "Data/Main/Displayed/PagesData";
import { FooterPages } from "Data/Footer/FooterData";
import HiddenData from "Data/Main/Hidden/HiddenPages";
// TOOLS
import { RoutesRender } from "Tools/RoutersRender";
// PAGES
import Home from "../Pages/Home";

const PageRoutes = RoutesRender(DisplayedData)
const FooterRoutes = RoutesRender(FooterPages)
const HiddenRoutes = RoutesRender(HiddenData)

HiddenRoutes.push(
    <Route key="home">
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