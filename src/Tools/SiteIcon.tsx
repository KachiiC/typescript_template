// DATA
import Icons from "data/IconsData";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// TOOLS
import { SiteIconProps } from "props/Tools/ToolProps";

// Returns icon based on type, size and color
const SiteIcon = (props: SiteIconProps) => {
  const { type, size, color } = props;

  return <FontAwesomeIcon icon={Icons(type)} size={size} color={color} />;
};

export default SiteIcon;
