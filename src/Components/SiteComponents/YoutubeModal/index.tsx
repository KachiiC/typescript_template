// COMPONENTS
import SiteModalComponent from "../SiteModal";
import YoutubeModalContent from "./components/YoutubeModalContent";
// CSS
import "./YoutubeModal.css";
// PROPS
import { YoutubeModalProps } from "./YoutubeModalProps";
// TOOLS
import { RenderLogic } from "Tools/FunctionTools";

const YoutubeModal = ({ component, current, data }: YoutubeModalProps) => {
  const { video_thumbnail, video_title } = current;
  // Thumbnail of current object
  const currentThumbnail = <img src={video_thumbnail} alt={video_title} />;

  // Content of the modal
  const modalContent = <YoutubeModalContent data={data} current={current} />;

  return (
    <SiteModalComponent
      // If no component is specificed, the thumbnail for current object is used instead
      component={RenderLogic(component, currentThumbnail)}
      content={modalContent}
      type="modal"
    />
  );
};

export default YoutubeModal;
