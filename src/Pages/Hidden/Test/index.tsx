// COMPONENTS
// import { TestComponent } from './TestComponent'
// CSS
import AntdTable from 'Components/ExternalLibraries/AntdTable'
import './Test.css'
// DATA
import { TestData } from './TestData'
// TOOLS

const Test = () => {

    return (
        <>
            <h1>Test</h1>
            <AntdTable data={TestData} />
        </>
    )
}

export default Test