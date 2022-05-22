// COMPONENTS
import PagesRouter from "components/SectionComponents/PagesRouter";
// CSS
import { AntdBackToTop } from "css/Transitions/components/BackToTop";
import "./Main.css";

const SiteMain = (
  <main>
    {PagesRouter}
    {AntdBackToTop}
  </main>
);

export default SiteMain;
