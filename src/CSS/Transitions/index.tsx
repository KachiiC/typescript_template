// IMAGES
import LoadingError from 'Images/LoadingError.gif'
import './SiteTransitions.css'

export const SiteLoading = (
    <>
        <h3>Loading...</h3>
        <div className="lds-spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </>
)

export const SiteError = (
    <div className="error-container">
        <h1>Uh oh, there was a loading error...</h1>
        <img src={LoadingError}
            className="site-responsive-image"
            alt="error-display"
        />
    </div>

)