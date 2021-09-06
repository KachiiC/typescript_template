import { StrictMode } from 'react';
// CSS
import 'CSS/App.css';
import 'CSS/KachiiStrap.css'
// SECTIONS
import SiteMain from 'Sections/Main';
import SiteHeader from 'Sections/Header';
import SiteFooter from 'Sections/Footer';
import { BrowserRouter } from 'react-router-dom';
// DATA

const App = (
  <StrictMode>
    <BrowserRouter>
      {SiteHeader}
      {SiteMain}
      {SiteFooter}
    </BrowserRouter>
  </StrictMode>
)


export default App;
