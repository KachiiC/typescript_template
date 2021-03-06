// COMPONENTS
import { TernaryLogic } from "tools/FunctionTools";
// PROPS
import { YoutubeProps } from "./YoutubeProps";

const YoutubePlayer = ({ height, id, width }: YoutubeProps) => (
  <iframe
    allow="
      accelerometer;
      autoplay; 
      clipboard-write; 
      encrypted-media; 
      gyroscope;
      picture-in-picture
      "
    allowFullScreen
    frameBorder="0"
    height={TernaryLogic(height, "315")}
    src={`https://www.youtube.com/embed/${id}?controls=0&rel=0`}
    title={`${id}`}
    width={TernaryLogic(width, "560")}
  />
);

export default YoutubePlayer;
