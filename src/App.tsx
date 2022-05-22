import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
// CSS
import { ScrollToTop } from "css/Transitions/components/BackToTop";
// SECTIONS
import SiteFooter from "sections/Footer";
import SiteHeader from "sections/Header";
import SiteMain from "sections/Main";

const App = (
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      {SiteHeader}
      {SiteMain}
      {SiteFooter}
    </BrowserRouter>
  </StrictMode>
);

export default App;
