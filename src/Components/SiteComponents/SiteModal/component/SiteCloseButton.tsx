// PROPS
import { closeButtonProps } from "Components/SiteComponents/SiteModal/SiteModalProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

const SiteCloseButton = (props: closeButtonProps) => {

    // PROPS
    const { click, type } = props

    return (
        <div className={`${type}-close cursor-pointer`}
            onClick={click}
        >
            <SiteIcon 
                type="times" 
                size="2x" 
            />
        </div>
    )
}

export default SiteCloseButton