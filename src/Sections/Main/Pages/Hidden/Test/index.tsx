// CSS
// import { SiteLoading } from 'CSS/Transitions'
import './Test.css'
// TOOLS
// DATA
// COMPONENTS
import AntdTable from 'Components/ExternalLibraries/AntdTable'


const TestData = [
     {
        name: 'Strawweight',
        weight: 115,
        natural_weight: "120 - 135",
        gender: 'Female',
     },
     {
        name: 'Flyweight',
        weight: 125,
        natural_weight: "135-150",
        gender: 'Both',
     },
     {
        name: 'Atomweight',
        weight: 105,
        natural_weight: "115 - 120",
        gender: 'Female',
    },
     {
        name: 'Bantamweight',
        weight: 135,
        natural_weight: "150-160",
        gender: 'Both',
     },
     {
        name: 'Lightweight',
        weight: 155,
        natural_weight: "170-185",
        gender: 'Both'
     },
     {
        name: 'Welterweight',
        weight: 170,
        natural_weight: "185-200",
        gender: 'Male',
     },
     {
        name: 'Featherweight',
        weight: 145,
        natural_weight: "160-170",
        gender: 'Both',
     },
     {
        name: 'Light Heavyweight',
        weight: 205,
        natural_weight: "215-235",
        gender: 'Male',
     },
     {
        name: 'Heavyweight',
        weight: 265,
        natural_weight: "235-250",
        gender: 'Male',
     },
     {
        name: 'Middleweight',
        weight: 185,
        natural_weight: "200-215",
        gender: 'Male',
     },
     {
        name: 'Strawweight',
        weight: 115,
        natural_weight: "120 - 135",
        gender: 'Female',
     },
     {
        name: 'Flyweight',
        weight: 125,
        natural_weight: "135-150",
        gender: 'Both',
     },
     {
        name: 'Atomweight',
        weight: 105,
        natural_weight: "115 - 120",
        gender: 'Female',
    },
     {
        name: 'Bantamweight',
        weight: 135,
        natural_weight: "150-160",
        gender: 'Both',
     },
     {
        name: 'Lightweight',
        weight: 155,
        natural_weight: "170-185",
        gender: 'Both'
     },
     {
        name: 'Welterweight',
        weight: 170,
        natural_weight: "185-200",
        gender: 'Male',
     },
     {
        name: 'Featherweight',
        weight: 145,
        natural_weight: "160-170",
        gender: 'Both',
     },
     {
        name: 'Light Heavyweight',
        weight: 205,
        natural_weight: "215-235",
        gender: 'Male',
     },
     {
        name: 'Heavyweight',
        weight: 265,
        natural_weight: "235-250",
        gender: 'Male',
     },
     {
        name: 'Middleweight',
        weight: 185,
        natural_weight: "200-215",
        gender: 'Male',
     },

]

const Test = () => {

    return (
        <>
            <h1>Test</h1>
            <AntdTable 
                data={TestData} 
                pagination
                // default_sort="weight"
            />
        </>
    )
}

export default Test