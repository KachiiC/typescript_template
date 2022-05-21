// TOOLS
import { displayTitleProps } from "Props/Tools/ToolProps";
import { RenderLogic } from "./FunctionTools";

// Returns String in uppercase depending on split and join
export const StringJoin = (string: string, split?: string, join?: string) => {
  return string.split(RenderLogic(split, "")).join(join).toUpperCase();
};

// Returns title and size default is h2
export const TitleLogic = (title: string | undefined, size?: string) => {
  const titleLogic: displayTitleProps = {
    h1: <h1>{title}</h1>,
    h2: <h2>{title}</h2>,
    h3: <h3>{title}</h3>,
    h4: <h4>{title}</h4>,
    h5: <h5>{title}</h5>,
    h6: <h6>{title}</h6>
  };

  if (title) return titleLogic[size ? size : "h2"];
};

// If string is over length trim it and add ... to the end
export const TitleTrimmer = (word: string, length: number) => {
  return word.length < length ? word : word.slice(0, length) + "...";
};
