// COMPONENTS
import YoutubePlayer from "components/ExternalLibraries/YoutubePlayer"
// PROPS
import { YoutubeItemProps } from "../YoutubeModalProps"
// TOOLS
import { TitleTrimmer } from "tools/StringTools"

const ModalVideoPlayer = (props: YoutubeItemProps) => {

    const { 
        upload_date,
        video_description,
        video_id,
        video_title
    } = props

    return (
    
        <div className="site-col-6">
            <div className="modal-video-player">
                <h2>{video_title}</h2>
                <YoutubePlayer 
                    id={video_id} 
                    width="90%"
                />
                <div className="modal-description-container">
                    <h4>Upload Date: {upload_date}</h4>
                    <p>{TitleTrimmer(video_description, 250)}</p>
                </div>
            </div>
        </div>
    )
}

export default ModalVideoPlayer