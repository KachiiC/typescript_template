import { Routes, Route } from "react-router-dom";
// DATA
import DisplayedData from "data/Main/Displayed/PagesData";
import { FooterPages } from "data/Footer/FooterData";
import HiddenData from "data/Main/Hidden/HiddenPages";
// PAGES
import Home from "pages/Hidden/Home";
import { LinkRenderer, RoutesRender } from "./tools/PageRouterTools";
// TOOLS

const routesData = [DisplayedData, FooterPages, HiddenData];

const RenderRoutes = routesData.map((route) => {
  // Creates a Route for each link
  LinkRenderer(route);

  return RoutesRender(route);
});

// Pushes home to last route
const HomeRoute = <Route key="home" path="/" element={Home} />;

const PagesRouter = (
  <Routes>
    {RenderRoutes}
    {HomeRoute}
  </Routes>
);

export default PagesRouter;
