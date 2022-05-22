// Sizes for grid system out of 12
import { spanLogicProps } from "props/Tools/ToolProps";

export const GridSpanSwitcher = (
  input_size: "xs" | "small" | "medium" | "large" | "xl" | undefined
) => {
  const spanlogic: spanLogicProps = {
    xs: 2,
    small: 3,
    medium: 4,
    large: 6,
    xl: 12
  };

  return input_size ? spanlogic[input_size] : 3;
};

// grid template based on input number
export const GridStyle = (number: number) => {
  return {
    gridTemplateColumns: `repeat(${number}, 1fr)`
  };
};
