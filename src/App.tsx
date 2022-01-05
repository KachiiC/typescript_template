import { BrowserRouter } from "react-router-dom"
import { StrictMode } from "react"
// CSS
import "CSS/App.css"
import "CSS/KachiiStrap.css"
import "CSS/Transitions/Animations.css"
import "CSS/Transitions/Transitions.css"
import { ScrollToTop } from "CSS/Transitions/components/BackToTop"
// SECTIONS
import SiteFooter from "Sections/Footer"
import SiteHeader from "Sections/Header"
import SiteMain from "Sections/Main"

const App = (
  <BrowserRouter>
    <StrictMode>
      <ScrollToTop 
        children={undefined} 
      />
        {SiteHeader}
        {SiteMain}
        {SiteFooter}
    </StrictMode>
  </BrowserRouter>
)

export default App