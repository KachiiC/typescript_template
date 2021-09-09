import PageTemplate from "Sections/Main/Pages/Displayed/PageTemplate"


export const ExampleContentRender = (data: any) => {
    return data.map((page: any) => {

        page.content = <PageTemplate name={page.title} />
        
        return page
    })

}