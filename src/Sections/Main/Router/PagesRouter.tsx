// DATA
import DisplayedData from "Data/Main/Pages/Displayed/ExampleDisplayedPages";
import HiddenData from "Data/Main/Pages/Hidden/ExampleHiddenPages";
// COMPONENTS
import { Switch, Route } from "react-router-dom";
import { RoutesRender } from "Tools/RoutersRender";

const PageRoutes = RoutesRender(DisplayedData)
const HiddenRoutes = RoutesRender(HiddenData)

HiddenRoutes.push(
    <Route>
        <h1>Home</h1>
    </Route>
)

const PagesRouter = ( 
    <Switch>
        {PageRoutes}
        {HiddenRoutes}
    </Switch>
)

export default PagesRouter