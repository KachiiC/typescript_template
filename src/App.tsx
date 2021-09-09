import { StrictMode } from 'react'
// DATA
import PagesData from "Data/Main/Displayed/ExampleDisplayedPages"
// CSS
import 'CSS/App.css'
import 'CSS/KachiiStrap.css'
// SECTIONS
import SiteMain from 'Sections/Main'
import SiteHeader from 'Sections/Header'
import SiteFooter from 'Sections/Footer'
import { BrowserRouter } from 'react-router-dom'

const App = (
  <StrictMode>
    <BrowserRouter>
      <SiteHeader data={PagesData} />
      {SiteMain}
      <SiteFooter />
    </BrowserRouter>
  </StrictMode>
)

export default App