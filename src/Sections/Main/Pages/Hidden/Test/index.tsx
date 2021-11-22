// CSS
// import { SiteLoading } from 'CSS/Transitions'
import './Test.css'
// TOOLS
// DATA
// COMPONENTS
import FilterCollapsible from 'Components/FilterComponents/FilterCollapsible'

const TestData = [
    {
        title: "first",
        content: <h1>First Content</h1>
    },
    {
        title: "second",
        content: <h1>Second Content</h1>
    },
]

const Test = () => {

    return (
        <>
            <h1>Test</h1>
            <FilterCollapsible data={TestData}/>
        </>
    )
}

export default Test