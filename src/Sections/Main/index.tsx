// COMPONENTS
import PagesRouter from "Components/SectionComponents/PagesRouter"
import { AntdBackToTop } from "CSS/Transitions/BackToTop"
// CSS
import "./Main.css"

const SiteMain = (
    <main>
        {PagesRouter}
        {AntdBackToTop}
    </main>
)

export default SiteMain