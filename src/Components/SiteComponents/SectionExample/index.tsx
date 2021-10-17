// CSS
import './SiteExample.css'
// PROPS
import { SectionExampleProps } from "Props/DataProps"

const SectionExample = (props: SectionExampleProps) => {

    const displayLogic = props.image ? 
        <img className="site-responsive-image" 
            alt={props.title} 
            src={props.image} 
        />
        :
        <pre>
            {`${props.example}`}
        </pre>
    
    return (
        <div className="section-example-container">
            <h3>{props.title}</h3>
            <p className="m-auto">{props.description}</p>
            {displayLogic}
        </div>
    )
}
export default SectionExample