import { BrowserRouter } from "react-router-dom"
import { StrictMode } from "react"
// CSS
import "CSS/App.css"
import "CSS/KachiiStrap.css"
import "CSS/Transitions/Transitions.css"
import "CSS/Transitions/PageTransitions.css"
import ScrollToTop from "CSS/Transitions/ScrollToTop"
// SECTIONS
import SiteMain from "Sections/Main"
import SiteHeader from "Sections/Header"
import SiteFooter from "Sections/Footer"

const App = (
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop children={undefined} />
      {SiteHeader}
      {SiteMain}
      {SiteFooter}
    </BrowserRouter>
  </StrictMode>
)

export default App