// COMPONENTS
// import { TestComponent } from './TestComponent'
// CSS
import SiteArticles from 'Components/SiteComponents/SiteArticles'
import './Test.css'
// DATA
import { TestData } from './TestData'
// TOOLS

const Test = () => {

    return (
        <SiteArticles data={TestData} link_type="external"/>
    )
}

export default Test