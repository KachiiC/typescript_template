// CSS
import { CSSTransition} from 'react-transition-group'
// PROPS
import { CollapsibleTransitionProps } from 'Components/SiteComponents/SiteCollapsible/SiteCollapsibleProps'

const CollapsibleTransition = (props: CollapsibleTransitionProps) => {

    const { DisplayContent,  children} = props

    return (
        <CSSTransition
            classNames="collapsible-transition"
            in={DisplayContent}
            timeout={500}
            unmountOnExit
            appear
        >
            {children}
        </CSSTransition>

    )
}

export default CollapsibleTransition