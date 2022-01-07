// DATA
import { TestData } from "./TestData"
// COMPONENTS

import SiteTabs from "@components/SiteTabs"

export const TestSingleComponent = () => {
    return (
        <>
        </>
    )
}

export const TestComponent = () => {

    return (
        <>
            <SiteTabs data={TestData} />
        </>
    )
}