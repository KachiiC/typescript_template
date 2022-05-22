// PROPS
import {
  GalleryImageProps,
  GalleryModalImageProps,
  GallerySelectedImageProps
} from "../SiteGalleryProps";
// TOOLS
import { IfStatement } from "tools/FunctionTools";

export const GalleryImage = (props: GalleryImageProps) => {
  // PROPS
  const { click, image, title, type } = props;

  const typeLogic =
    type === "row" ? "site-gallery-image-row" : "site-gallery-image";

  return (
    <img
      src={image}
      alt={title}
      className={`${typeLogic} cursor-pointer site-border-white`}
      onClick={IfStatement(click)}
    />
  );
};

export const GallerySelectedImage = ({
  image,
  width
}: GallerySelectedImageProps) => (
  <div className={`w-${width}`}>
    <GalleryImage type="selected" image={image} title="selected_image" />
  </div>
);

export const GalleryModalImage = ({
  image,
  title,
  width
}: GalleryModalImageProps) => (
  <>
    <h2 className="gallery-modal-title">{title}</h2>
    <GallerySelectedImage image={image} width={width} />
  </>
);
