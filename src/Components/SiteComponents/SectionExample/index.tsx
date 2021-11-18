// CSS
import './SiteExample.css'
// PROPS
import { SectionExampleProps } from "Props/Data/SectionExampleProps"

const SectionExample = (props: SectionExampleProps) => {

    const { description, example, image, title } = props

    const displayLogic = image ? 
        <img className="site-responsive-image" 
            alt={title} 
            src={image} 
        />
        :
        <pre>
            {`${example}`}
        </pre>
    
    return (
        <div className="section-example-container">
            <h3>{title}</h3>
            <p className="m-auto">
                {description}
            </p>
            {displayLogic}
        </div>
    )
}
export default SectionExample