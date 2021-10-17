const FooterHeading = (props: {heading?: string}) => {
    // IF HEADING, display heading
    const headingLogic = () => {
        if (props.heading) return <h3>{props.heading}</h3>
    }

    return <>{headingLogic()}</>
    
}

export default FooterHeading