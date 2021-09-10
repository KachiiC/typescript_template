import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
// CSS
import 'CSS/App.css'
import 'CSS/KachiiStrap.css'
// SECTIONS
import SiteMain from 'Sections/Main'
import SiteHeader from 'Sections/Header'
import SiteFooter from 'Sections/Footer'

const App = (
  <StrictMode>
    <BrowserRouter>
      {SiteHeader}
      {SiteMain}
      <SiteFooter heading="Example Footer Heading" />
    </BrowserRouter>
  </StrictMode>
)

export default App