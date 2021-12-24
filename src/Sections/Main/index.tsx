// COMPONENTS
import PagesRouter from "Components/SectionComponents/PagesRouter"
// CSS
import { AntdBackToTop } from "CSS/Transitions/BackToTop"
import "./Main.css"

const SiteMain = (
    <main>
        {PagesRouter}
        {AntdBackToTop}
    </main>
)

export default SiteMain