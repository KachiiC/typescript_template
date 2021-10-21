// CSS
import './YoutubeModal.css'
// PROPS
import { YoutubeModalProps } from "Props/Components/YoutubeModalProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
// COMPONENTS
import SiteModalComponent from "../SiteModal"
import YoutubeModalContent from "./components/YoutubeModalContent"

const YoutubeModal = (props: YoutubeModalProps) => {

    const { current, component, data } = props

    // Thumbnail of current object
    const currentThumbnail = (
        <img src={current.video_thumbnail} 
            alt={current.video_title} 
        />
    )
    
    // Content of the modal
    const modalContent = (
        <YoutubeModalContent 
            data={data}
            current={current}
        />
    )

    return (
        <SiteModalComponent
            // If no component is specificed, the thumbnail for current object is used instead 
            component={RenderLogic(component, currentThumbnail)}
            content={modalContent}
            type="modal"
        />
    )
} 

export default YoutubeModal