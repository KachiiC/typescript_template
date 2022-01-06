// DATA
import SiteTable from "@components/SiteTable"
import { TestData } from "./TestData"
// COMPONENTS

export const TestSingleComponent = () => {
    return (
        <>
        </>
    )
}

export const TestComponent = () => {

    return (
        <>
            <SiteTable
                data={TestData}
                width={90}
                overflow={true}
            />
        </>
    )
}