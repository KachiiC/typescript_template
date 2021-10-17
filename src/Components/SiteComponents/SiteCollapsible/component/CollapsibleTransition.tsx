// CSS
import { CSSTransition} from 'react-transition-group'
// PROPS
import { CollapsibleTransitionProps } from 'Props/Components/CollapsibleProps'

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