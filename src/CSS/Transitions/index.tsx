// IMAGES
import LoadingError from 'Images/LoadingError.gif'
// CSS
import './SiteTransitions.css'

export const SiteLoading = () => {
    
    const LoadingCirles = () => {
        
        const displayCircles = []
        const total_circles = 12

        for (var i=0; i < total_circles; i++) {
            displayCircles.push(<div/>)
        }

        return displayCircles
    }

    return (
        <>
            <h3>Loading...</h3>
            <div className="lds-spinner">
                {LoadingCirles()}
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