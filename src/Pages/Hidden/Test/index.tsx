// COMPONENTS
// import { TestComponent } from "./TestComponent"
// CSS
import AntdToolTip from "@libraries/AntdToolTip"
import "./Test.css"
// DATA
// import { TestData } from "./TestData"
// TOOLS

const Test = () => {

    return (
        <div className="test-page">
            <h1>Title</h1>
            <AntdToolTip 
                placeholder={"placeholder"}
                title="title"
            />
        </div>
    )
}

export default Test