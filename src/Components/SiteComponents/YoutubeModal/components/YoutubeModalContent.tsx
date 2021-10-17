import { useState } from "react"
// PROPS
import { YoutubeModalProps } from "Props/Components/YoutubeModalProps"
// COMPONENTS
import ModalVideoPlayer from "./ModalVideoPlayer"
import YoutubeSuggestions from "./YoutubeSuggestion"

const YoutubeModalContent = (props: YoutubeModalProps) => {

    // Current displayed video, the default is the current
    const [displayedVideo, setDisplayedVideo] = useState(props.current)
    // PROPS
    const { video_title, video_id, video_description, upload_date } = displayedVideo
    
    return (
        <div className="site-grid-system youtube-modal-content">
            <ModalVideoPlayer
                video_id={video_id}
                video_thumbnail={""}
                video_title={video_title}
                video_description={video_description}
                upload_date={upload_date}
            />
            <YoutubeSuggestions
                data={props.data}
                // Clicking a suggestion changes the displayedVideo
                setFunction={setDisplayedVideo}
            />
        </div>
    )
}

export default YoutubeModalContent