import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
// CSS
import 'CSS/App.css'
import 'CSS/KachiiStrap.css'
import 'CSS/Transitions/Transitions.css'
import 'CSS/Transitions/PageTransitions.css'

// SECTIONS
import SiteMain from 'Sections/Main'
import SiteHeader from 'Sections/Header'
import SiteFooter from 'Sections/Footer'
import ScrollToTop from 'Tools/ScrollToTop'

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