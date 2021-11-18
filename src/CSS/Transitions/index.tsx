// IMAGES
import LoadingError from 'Images/LoadingError.gif'
// CSS
import './SiteTransitions.css'

export const SiteLoading = () => {

    const displayCircles = []

    for (var i=0; i < 12; i++) {
        displayCircles.push(<div/>)
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

export const SiteError = (
    <div className="error-container">
        <h1>Uh oh, there was a loading error...</h1>
        <img src={LoadingError}
            className="site-responsive-image"
            alt="error-display"
        />
    </div>

)