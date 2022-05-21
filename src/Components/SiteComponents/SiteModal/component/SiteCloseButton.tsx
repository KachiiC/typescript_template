// PROPS
import { closeButtonProps } from "../SiteModalProps";
// TOOLS
import SiteIcon from "Tools/SiteIcon";

const SiteCloseButton = ({ click, type }: closeButtonProps) => (
  <div className={`${type}-close cursor-pointer`} onClick={click}>
    <SiteIcon type="times" size="2x" />
  </div>
);

export default SiteCloseButton;
