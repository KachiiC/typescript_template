// CSS
import "./Transitions.css"

export const SiteLoading = () => {

    const displayCircles = []

    for (var i=0; i < 12; i++) {
        displayCircles.push(<div key={i} />)
    }

    return (
        <>
            <h3>Loading...</h3>
            <div className="lds-spinner">
                {displayCircles}
            </div>
        </>
    )
}